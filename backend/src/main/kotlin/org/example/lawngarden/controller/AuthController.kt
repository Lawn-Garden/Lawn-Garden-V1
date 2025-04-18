package org.example.lawngarden.controller

import org.example.lawngarden.auth.LoginRequest
import org.example.lawngarden.auth.LoginResponse
import org.example.lawngarden.auth.TokenProvider
import org.example.lawngarden.auth.details.UserDetailsImpl
import org.example.lawngarden.auth.service.CustomUserDetailsService
import org.example.lawngarden.entity.User
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
class AuthController(
    private val tokenProvider: TokenProvider,
    private val userDetailsService: CustomUserDetailsService,
    private val authenticationManager: AuthenticationManager,
) {
    @PostMapping("/login")
    fun login(@RequestBody loginRequest : LoginRequest): ResponseEntity<LoginResponse> {
        val authentication = this.authentication(loginRequest.username, loginRequest.password)
        val userDetails = authentication.principal as UserDetailsImpl
        val accessToken : String = tokenProvider.createAccessToken(userDetails.user)
        val refreshToken : String = tokenProvider.createRefreshToken(userDetails.user)
        val loginResponse = LoginResponse(accessToken, refreshToken)
        return ResponseEntity(loginResponse, HttpStatus.OK)
    }


    private fun authentication(username:String, password:String): Authentication {
        val token = UsernamePasswordAuthenticationToken(username, password);
        return authenticationManager.authenticate(token);
    }
}