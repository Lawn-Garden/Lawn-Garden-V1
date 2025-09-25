package org.example.lawngarden.service

import org.example.lawngarden.dto.RegisterRequestDto
import org.example.lawngarden.dto.UserDetailResponseDto
import org.example.lawngarden.entity.User
import org.example.lawngarden.exception.EmailExistException
import org.example.lawngarden.exception.UserExistException
import org.example.lawngarden.mapper.toUser
import org.example.lawngarden.mapper.toUserDetailResponseDto
import org.example.lawngarden.repository.UserRepository
import org.slf4j.LoggerFactory
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class UserService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {

    fun saveUser(registerRequestDto: RegisterRequestDto) : UserDetailResponseDto{

        verifyEmail(registerRequestDto.email)
        verifyUserName(registerRequestDto.username)

        registerRequestDto.password = passwordEncoder.encode(registerRequestDto.password)
        val save : User = userRepository.save(registerRequestDto.toUser())
        return save.toUserDetailResponseDto()
    }

    fun findUser(userId: Long): UserDetailResponseDto {
        val user: User = userRepository.findByIdOrNull(userId) ?: throw RuntimeException("User with ID $userId not found");
        return user.toUserDetailResponseDto()
    }

    fun findAllUser() : List<UserDetailResponseDto> = userRepository.findAll().map{
        it.toUserDetailResponseDto()
    }

    fun findTodayCommitUser(commit: String): List<UserDetailResponseDto> {
        val userList : List<User> = when (commit) {
            "y" -> userRepository.findAllByPostCreatedDate(LocalDate.now())
            "n" -> userRepository.findUsersWithoutPostToday(LocalDate.now())
            "a" -> userRepository.findAll()
            else -> return emptyList()
        }

        return userList.map { it.toUserDetailResponseDto() }
    }

    fun verifyEmail(email: String) {
        val isExist : Boolean = userRepository.existsUserByEmail(email)
        if(isExist){
            throw EmailExistException()
        }
        else return
    }

    fun verifyUserName(userName : String){
        val existsByUsername :Boolean  = userRepository.existsByUsername(userName)
        if(existsByUsername){
            throw UserExistException()
        }
        else return
    }

}