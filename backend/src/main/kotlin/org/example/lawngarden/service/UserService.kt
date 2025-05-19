package org.example.lawngarden.service

import org.example.lawngarden.dto.RegisterRequestDto
import org.example.lawngarden.dto.UserDetailResponseDto
import org.example.lawngarden.entity.User
import org.example.lawngarden.mapper.toUser
import org.example.lawngarden.mapper.toUserDetailResponseDto
import org.example.lawngarden.repository.UserRepository
import org.slf4j.LoggerFactory
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {
    val logger = LoggerFactory.getLogger(UserService::class.java)

    fun saveUser(registerRequestDto: RegisterRequestDto) {
        registerRequestDto.password = passwordEncoder.encode(registerRequestDto.password)
        val save : User = userRepository.save(registerRequestDto.toUser())
        logger.info("회원가입 요청 성공!, name: {}, email: {}" , save.username, save.email)
    }

    fun findUser(userId: Long): UserDetailResponseDto {
        val user: User = userRepository.findByIdOrNull(userId) ?: throw RuntimeException("User with ID $userId not found");
        return user.toUserDetailResponseDto()
    }

    fun findAllUser() : List<UserDetailResponseDto> = userRepository.findAll().map{
        it?.toUserDetailResponseDto() ?: throw RuntimeException("User with ID ${it?.id} not found")
    }
}