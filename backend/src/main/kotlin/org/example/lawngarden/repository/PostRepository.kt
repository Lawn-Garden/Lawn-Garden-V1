package org.example.lawngarden.repository

import jakarta.persistence.Tuple
import org.example.lawngarden.entity.Post
import org.example.lawngarden.entity.User
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.EntityGraph
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.time.LocalDate

interface PostRepository : JpaRepository<Post, Long> {
    fun findByCreatedDate(date: LocalDate): List<Post>
    fun findAllByOrderByCreatedDateDescIdDesc(pageable: Pageable): Page<Post>
    fun findAllByUserUsernameContainingOrderByCreatedDateDescIdDesc(keyword: String, pageable: Pageable): Page<Post>
    fun existsPostByUserAndCreatedDate(user: User, date: LocalDate?): Boolean
    fun findPostById(id: Long): Post?


    @Query("SELECT p.user as user, COUNT(p) as postCount FROM Post p WHERE p.createdDate BETWEEN :start AND :end GROUP BY p.user")
    fun findAllByCreatedDateBetween(
        @Param("start") start: LocalDate,
        @Param("end") end: LocalDate
    ): List<Tuple>
}

