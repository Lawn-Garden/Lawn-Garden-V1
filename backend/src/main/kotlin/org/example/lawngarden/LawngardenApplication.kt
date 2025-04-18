package org.example.lawngarden

import org.example.lawngarden.auth.JwtProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableConfigurationProperties(JwtProperties::class)
class LawngardenApplication
fun main(args: Array<String>) {
    runApplication<LawngardenApplication>(*args)
}
