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
    base64Image  = image.takeIf { it.isNotEmpty() }
        ?.let { Base64.getEncoder().encodeToString(it) }
)

//fun PostRequestDto.toPost(postRequestDto: PostRequestDto, user :User): Post = Post(
//    id = null,
//    link = postRequestDto.link,
//    createdDate = LocalDate.now(),
//    contents = this.contents,
//    image = this.imageFile., //TODO : 이미지 파일로 변환 필요
//    imageFile = TODO(),
//    user = TODO(),
//)

