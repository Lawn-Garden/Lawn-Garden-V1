package org.example.lawngarden.repository

import org.example.lawngarden.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.time.LocalDate
import java.util.*

@Repository
interface UserRepository : JpaRepository<User?, Long?> {
    fun findByUsername(username: String?): Optional<User?>?
    fun existsByUsername(username: String?): Boolean
    fun existsUserByEmail(email: String?): Boolean

    override fun findAll() : List<User>

    fun findAllByPostCreatedDate(createdDate: LocalDate): List<User>

    @Query("""
    SELECT u FROM User u
    WHERE u.id NOT IN (
        SELECT p.user.id FROM Post p
        WHERE p.createdDate = :today
    )
""")
    fun findUsersWithoutPostToday(@Param("today") today: LocalDate): List<User>
}

