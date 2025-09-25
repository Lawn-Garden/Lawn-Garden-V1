package org.example.lawngarden.dto

import jakarta.persistence.*
import org.example.lawngarden.entity.User
import org.springframework.web.multipart.MultipartFile
import java.time.LocalDate

data class PostRequestDto(
    var link: String? = null,
    var contents: String? = null,
    var imageFile: MultipartFile? = null
)