package org.example.lawngarden.auth.dto

data class LoginResponse(
    val accessToken: String,
    val refreshToken: String,
)
