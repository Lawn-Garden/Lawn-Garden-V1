package org.example.lawngarden.controller

import org.example.lawngarden.auth.details.UserDetailsImpl
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/users")
class UserController(

) {
    @PostMapping("/register")
    fun register(@AuthenticationPrincipal userDetails: UserDetailsImpl) {

    }
}
