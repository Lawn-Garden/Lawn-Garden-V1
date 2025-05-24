package org.example.lawngarden.repository

import org.example.lawngarden.entity.Post
import org.example.lawngarden.entity.User
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import java.time.LocalDate

interface PostRepository : JpaRepository<Post?, Long?> {
    fun findByCreatedDate(date: LocalDate?): List<Post?>?
    fun findByCreatedDateBetween(start: LocalDate?, end: LocalDate?): List<Post?>?
    fun findAllByOrderByCreatedDateDescIdDesc(pageable: Pageable): Page<Post>
    fun existsPostByUserAndCreatedDate(user: User, date: LocalDate?): Boolean
    fun findPostById(id: Long): Post?
}

