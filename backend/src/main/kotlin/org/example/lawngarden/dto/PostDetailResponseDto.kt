package org.example.lawngarden.dto

import java.time.LocalDate

data class PostDetailResponseDto (
    val id: Long?,
    var link: String?,
    var createdDate: LocalDate?,
    var user: UserDetailResponseDto?,
    var contents : String?,
    var base64Image: String?
)