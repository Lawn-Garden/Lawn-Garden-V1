package org.example.lawngarden.controller

import org.example.lawngarden.auth.UserDetailsImpl
import org.example.lawngarden.entity.User
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/users")
class UserController(

) {
    @PostMapping("/register")
    fun register(@AuthenticationPrincipal userDetails: UserDetailsImpl) {

    }

    @GetMapping()
    fun getUserList(@AuthenticationPrincipal userDetails: UserDetailsImpl) {

    }

    @GetMapping()
    fun getUser(@AuthenticationPrincipal userDetails: UserDetailsImpl) {

    }
}
