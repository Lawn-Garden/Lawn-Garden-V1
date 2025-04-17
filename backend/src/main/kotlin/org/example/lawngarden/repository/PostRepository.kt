package org.example.lawngarden.repository

import org.example.lawngarden.entity.Post
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDate

interface PostRepository : JpaRepository<Post?, Long?> {
    fun findByCreatedDate(date: LocalDate?): List<Post?>?
    fun findByCreatedDateBetween(start: LocalDate?, end: LocalDate?): List<Post?>?
}

