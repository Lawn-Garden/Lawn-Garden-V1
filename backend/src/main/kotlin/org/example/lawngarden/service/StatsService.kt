package org.example.lawngarden.service

import jakarta.persistence.Tuple
import org.example.lawngarden.dto.UserDetailResponseDto
import org.example.lawngarden.dto.UserStatsResponseDto
import org.example.lawngarden.entity.Post
import org.example.lawngarden.entity.User
import org.example.lawngarden.mapper.toUserDetailResponseDto
import org.example.lawngarden.mapper.toUserStatsResponseDto
import org.example.lawngarden.repository.PostRepository
import org.springframework.cglib.core.Local
import org.springframework.stereotype.Service
import java.time.DayOfWeek
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.temporal.TemporalAdjusters

@Service
class StatsService(
    private val postRepository: PostRepository
) {


    fun getWeeklyStats() : List<UserStatsResponseDto> {

        val today : LocalDate = LocalDate.now()

        val monday : LocalDate = today.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
        val sunday : LocalDate = today.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY))

        val postList : List<Tuple> = postRepository.findAllByCreatedDateBetween(monday, sunday)
        val pairs = postList.map { tuple -> tuple["user"] as User to tuple["postCount"] as Long }
        val toList : List<UserStatsResponseDto> = pairs.stream().map { x -> x.first.toUserStatsResponseDto(x.second) }.toList()
        return toList;
    }
}