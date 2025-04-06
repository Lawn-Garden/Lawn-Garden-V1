package org.example.lawngarden.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String link;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private LocalDate createdDate; // 작성 날짜

    @Lob  // ✅ 이미지 데이터를 BLOB 타입으로 저장
    @Column(columnDefinition = "LONGBLOB")  // MySQL에서 큰 바이너리 데이터를 저장하는 타입
    private byte[] image;

    @Transient
    private transient MultipartFile imageFile; // ✅ Spring에서 바인딩되지 않도록 처리
}