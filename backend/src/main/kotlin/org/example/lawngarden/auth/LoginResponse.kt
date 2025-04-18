package org.example.lawngarden.auth

data class LoginResponse(
    val accessToken: String,
    val refreshToken: String,
)
