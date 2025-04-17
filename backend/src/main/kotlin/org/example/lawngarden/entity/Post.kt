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

    @Column(nullable = false)
    var contents: LocalDate,

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    var image: ByteArray,

    @Transient // JPA 저장 대상 제외
    var imageFile: MultipartFile? = null, // 업로드용 임시 필드

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User
)
