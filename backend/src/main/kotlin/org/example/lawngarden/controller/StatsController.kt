package org.example.lawngarden.controller

import org.example.lawngarden.service.StatsService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/stats")
class StatsController(
    private val statsService : StatsService,
) {



    @GetMapping("/weekly")
    fun getWeeklyStats() : ResponseEntity<Any> {
        val weeklyStats = statsService.getWeeklyStats()
        return ResponseEntity.ok(weeklyStats)
    }
}