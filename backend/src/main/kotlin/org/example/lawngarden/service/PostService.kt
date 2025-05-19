package org.example.lawngarden.service

import org.example.lawngarden.dto.PostDetailResponseDto
import org.example.lawngarden.dto.PostRequestDto
import org.example.lawngarden.dto.PostResponseDto
import org.example.lawngarden.entity.Post
import org.example.lawngarden.entity.User
import org.example.lawngarden.mapper.toPostDetailResponseDto
import org.example.lawngarden.mapper.toPostResponseDto
import org.example.lawngarden.repository.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.util.*

@Service
class PostService(
    private val postRepository: PostRepository,
) {

    fun findAllPost(pageData : Pageable): Page<PostResponseDto> {
        val findAll : Page<Post> = postRepository.findAllByOrderByCreatedDateDescIdDesc(pageData)
        return findAll.map { x -> x?.toPostResponseDto() }
    }

    fun findPostDetail(postId: Long) : PostDetailResponseDto? {
        val findById : Post? = postRepository.findByIdOrNull(postId)
        val postDetailResponseDto : PostDetailResponseDto? = findById?.toPostDetailResponseDto()
        return postDetailResponseDto
    }

    fun savePost(post: PostRequestDto, user: User) {

    }
}