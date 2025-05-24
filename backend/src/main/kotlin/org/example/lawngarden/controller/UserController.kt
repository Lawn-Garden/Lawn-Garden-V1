package org.example.lawngarden.controller

import org.example.lawngarden.auth.service.CustomUserDetailsService
import org.example.lawngarden.dto.RegisterRequestDto
import org.example.lawngarden.dto.UserDetailResponseDto
import org.example.lawngarden.entity.User
import org.example.lawngarden.mapper.toUser
import org.example.lawngarden.mapper.toUserDetailResponseDto
import org.example.lawngarden.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.net.http.HttpResponse

@RestController
@RequestMapping("/api/v1/users")
class UserController(
    private val userService: UserService
) {
    @PostMapping("/register")
    fun register(@RequestBody registerRequestDto : RegisterRequestDto) : ResponseEntity<UserDetailResponseDto> {
        val saveUser = userService.saveUser(registerRequestDto)
        return ResponseEntity.ok().body(saveUser)
    }

    @GetMapping("/{userId}")
    fun getUser(@PathVariable userId: Long): ResponseEntity<UserDetailResponseDto> {
        val findUser : UserDetailResponseDto = userService.findUser(userId)
        return ResponseEntity.ok(findUser)
    }

    @GetMapping()
    fun getUserList():  ResponseEntity<List<UserDetailResponseDto>> {
        val findAllUser : List<UserDetailResponseDto> = userService.findAllUser()
        return ResponseEntity.ok(findAllUser)
    }

    @GetMapping("today")
    fun getTodayUser(@RequestParam commit: String): ResponseEntity<List<UserDetailResponseDto>> {
        val findTodayCommitUser = userService.findTodayCommitUser(commit)
        return ResponseEntity.ok(findTodayCommitUser);
    }
}
