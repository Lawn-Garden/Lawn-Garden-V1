package org.example.lawngarden.entity

import jakarta.persistence.*
import org.example.lawngarden.auth.enums.Role

@Entity
@Table(name = "users")
class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false, unique = true)
    var username: String,

    @Column(nullable = false)
    var email: String,

    @Column(nullable = false)
    private var password: String,

    @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL], orphanRemoval = true, fetch = FetchType.LAZY)
    var post: MutableList<Post>,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private var role: Role
) {
    fun getPassword(): String = password
    fun getRole(): Role = role
}