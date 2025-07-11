package org.example.lawngarden.auth.dto

import org.example.lawngarden.dto.UserDetailResponseDto

data class LoginResponse(
    val accessToken: String,
    val refreshToken: String,
    val user: UserDetailResponseDto
)
