package org.example.lawngarden.entity

import jakarta.persistence.*
import org.example.lawngarden.auth.Role

@Entity
@Table(name = "users")
class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(nullable = false, unique = true)
    var username: String,

    @Column(nullable = false)
    private var password: String,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private var role: Role
) {
    fun getPassword(): String = password
    fun getRole(): Role = role
}