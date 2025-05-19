package org.example.lawngarden.entity

import jakarta.persistence.*
import org.springframework.web.multipart.MultipartFile
import java.time.LocalDate

@Entity
@Table(name = "posts")
class Post(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = true)
    var link: String? = null,

    @Column(nullable = true)
    var createdDate: LocalDate? = null,

    @Column(nullable = true)
    var contents: String? = null,

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    var image: ByteArray,

    @Transient
    var imageFile: MultipartFile? = null,

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User
)
