package org.example.lawngarden.mapper

import org.example.lawngarden.auth.enums.Role
import org.example.lawngarden.dto.*
import org.example.lawngarden.entity.Post
import org.example.lawngarden.entity.User
import java.time.LocalDate
import java.util.*


fun RegisterRequestDto.toUser(): User = User(
    username = this.username,
    password = this.password,
    email = this.email,
    id = null,
    role = Role.USER,
    post = mutableListOf()
)

fun User.toUserDetailResponseDto(): UserDetailResponseDto = UserDetailResponseDto(
    id = this.id,
    username = this.username,
    email = this.email,
)

fun Post.toPostResponseDto() : PostResponseDto = PostResponseDto(
        id = this.id,
        createdDate = this.createdDate,
        user = this.user.toUserDetailResponseDto()
)

fun Post.toPostDetailResponseDto() : PostDetailResponseDto = PostDetailResponseDto(
    id = this.id,
    createdDate = this.createdDate,
    user = this.user.toUserDetailResponseDto(),
    link = this.link,
    contents = this.contents,
    base64Image  = this.image?.takeIf { it.isNotEmpty() }
        ?.let { Base64.getEncoder().encodeToString(it) }
)


fun PostRequestDto.toPost(user: User): Post {
    return Post(
        id = null,
        link = this.link,
        createdDate = LocalDate.now(),
        contents = this.contents,
        image = imageFile!!.bytes, // 변환 핵심!
        imageFile = this.imageFile, // Transient 필드, 실제 DB 저장 X
        user = user
    )
}

fun Post.updatePost(postRequestDto: PostRequestDto) : Post {
    return Post(
        id = this.id,
        user = this.user,
        link = postRequestDto.link,
        createdDate = this.createdDate,
        updateDate = LocalDate.now(),
        contents = postRequestDto.contents,
        imageFile = postRequestDto.imageFile,
        image = imageFile!!.bytes,
    )
}

