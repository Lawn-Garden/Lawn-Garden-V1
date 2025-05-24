package org.example.lawngarden

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import java.lang.Error

@RestControllerAdvice
class GlobalAdvice {
    @ExceptionHandler(Exception::class)
    fun handle(e: Exception): ResponseEntity<Map<String, String>> {
        return ResponseEntity.status(400).body(mapOf("error" to e.message.orEmpty()))
    }

    @ExceptionHandler(RuntimeException::class)
    fun handle(e: RuntimeException): ResponseEntity<Map<String, String>> {
        return ResponseEntity.status(400).body(mapOf("error" to e.message.orEmpty()))
    }
}
