package org.example.lawngarden.auth.token

import io.jsonwebtoken.JwtException
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.security.Keys
import org.example.lawngarden.auth.prop.JwtProperties
import org.example.lawngarden.entity.User
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import java.util.*
import javax.crypto.SecretKey

@Component
class TokenProvider(
    private val jwtProperties : JwtProperties,
    private val tokenBlacklist: TokenBlacklist,
) {
    fun getSigningKey(secret: String): SecretKey {
        val key = Keys.hmacShaKeyFor(secret.toByteArray())
        return key
    }

    fun createAccessToken(user: User): String =
        Jwts.builder()
            .subject(user.username)
            .issuedAt(Date())
            .expiration(Date(System.currentTimeMillis() + jwtProperties.accessTokenExpiration))
            .signWith(getSigningKey(jwtProperties.secret), SignatureAlgorithm.HS256)
            .compact()

    fun createRefreshToken(user: User): String =
        Jwts.builder()
            .subject(user.username)
            .issuedAt(Date())
            .expiration(Date(System.currentTimeMillis() + jwtProperties.refreshTokenExpiration))
            .signWith(getSigningKey(jwtProperties.secret), SignatureAlgorithm.HS256)
            .compact()

    fun validateToken(token: String): Boolean =
        try {
        Jwts.parser()
            .verifyWith(getSigningKey(jwtProperties.secret))
            .build()
            .parseSignedClaims(token)
        true
    } catch (ex: JwtException) {
        false
    }

    fun getUsernameFromToken(token: String): String {
        return Jwts.parser()
            .verifyWith(getSigningKey(jwtProperties.secret))
            .build()
            .parseSignedClaims(token)
            .payload
            .subject
    }
    
    fun clearToken(user: User,token:String) {
        tokenBlacklist.add(user,token)
        SecurityContextHolder.clearContext()
    }

}