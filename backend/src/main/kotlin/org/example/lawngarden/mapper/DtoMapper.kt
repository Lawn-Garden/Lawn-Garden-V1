package org.example.lawngarden.mapper

import org.example.lawngarden.auth.enums.Role
import org.example.lawngarden.dto.RegisterRequestDto
import org.example.lawngarden.dto.UserDetailResponseDto
import org.example.lawngarden.entity.User


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
