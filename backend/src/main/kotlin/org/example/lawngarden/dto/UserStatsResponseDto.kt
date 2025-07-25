package org.example.lawngarden.dto

data class UserStatsResponseDto(
    val id: Long?,
    val username: String,
    val email: String,
    val commitCount: String
)

