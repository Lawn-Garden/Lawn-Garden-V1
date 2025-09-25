package org.example.lawngarden.controller

import org.example.lawngarden.auth.dto.LoginRequest
import org.example.lawngarden.auth.dto.LoginResponse
import org.example.lawngarden.auth.token.TokenProvider
import org.example.lawngarden.auth.details.UserDetailsImpl
import org.example.lawngarden.dto.UserDetailResponseDto
import org.example.lawngarden.entity.User
import org.example.lawngarden.mapper.toUserDetailResponseDto
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
class AuthController(
    private val tokenProvider: TokenProvider,
    private val authenticationManager: AuthenticationManager,
) {
    @PostMapping("/login")
    fun login(@RequestBody loginRequest : LoginRequest): ResponseEntity<LoginResponse> {
        val prefix : String = "Bearer "

        val authentication = this.authentication(loginRequest.username, loginRequest.password)
        val userDetails = authentication.principal as UserDetailsImpl
        val user : User = userDetails.user

        val accessToken : String = tokenProvider.createAccessToken(user)
        val refreshToken : String = tokenProvider.createRefreshToken(user)

        val loginResponse = LoginResponse(prefix + accessToken, prefix + refreshToken,user.toUserDetailResponseDto())
        return ResponseEntity(loginResponse, HttpStatus.OK)
    }


    @PostMapping("/logout")
    fun logout(@AuthenticationPrincipal userDetailsImpl: UserDetailsImpl,
               @RequestHeader("Authorization") token : String): ResponseEntity<Void> {
        val user: User = userDetailsImpl.user
        val accessToken = token.removePrefix("Bearer ").trim()
        tokenProvider.clearToken(user,accessToken)

        return ResponseEntity.noContent().build()
    }



    private fun authentication(username:String, password:String): Authentication {
        val token = UsernamePasswordAuthenticationToken(username, password);
        return authenticationManager.authenticate(token);
    }
}