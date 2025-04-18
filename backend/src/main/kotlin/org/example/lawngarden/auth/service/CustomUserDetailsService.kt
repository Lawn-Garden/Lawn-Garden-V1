package org.example.lawngarden.auth.service

import org.example.lawngarden.auth.details.UserDetailsImpl
import org.example.lawngarden.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import java.util.function.Supplier


@Service
class CustomUserDetailsService(private val userRepository: UserRepository) : UserDetailsService {
    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository.findByUsername(username)
            ?.orElseThrow(Supplier { UsernameNotFoundException("사용자를 찾을 수 없습니다.") })!!
        return UserDetailsImpl(user)
    }
}
