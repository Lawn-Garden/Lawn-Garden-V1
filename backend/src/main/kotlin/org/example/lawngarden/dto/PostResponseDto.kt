package org.example.lawngarden.dto

import jakarta.persistence.Column
import java.time.LocalDate

data class PostResponseDto (
    val id: Long?,
    var createdDate: LocalDate?,
    var user: UserDetailResponseDto
)