package org.example.lawngarden.service

import org.example.lawngarden.dto.PostDetailResponseDto
import org.example.lawngarden.dto.PostRequestDto
import org.example.lawngarden.dto.PostResponseDto
import org.example.lawngarden.entity.Post
import org.example.lawngarden.entity.User
import org.example.lawngarden.mapper.toPost
import org.example.lawngarden.mapper.toPostDetailResponseDto
import org.example.lawngarden.mapper.toPostResponseDto
import org.example.lawngarden.mapper.updatePost
import org.example.lawngarden.repository.PostRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.nio.file.AccessDeniedException
import java.time.LocalDate
import java.util.*

@Service
class PostService(
    private val postRepository: PostRepository,
) {

    fun findAllPost(pageData: Pageable): Page<PostResponseDto> {
        val findAll: Page<Post> = postRepository.findAllByOrderByCreatedDateDescIdDesc(pageData)
        return findAll.map { x -> x?.toPostResponseDto() }
    }

    fun findPostDetail(postId: Long): PostDetailResponseDto {
        val findById: Post = postRepository.findByIdOrNull(postId) ?: throw RuntimeException("post가 없습니다.")
        val postDetailResponseDto: PostDetailResponseDto = findById.toPostDetailResponseDto()
        return postDetailResponseDto
    }

    fun savePost(post: PostRequestDto, user: User) {
        if (post.link == null || post.imageFile!!.isEmpty) {
            throw IllegalArgumentException("이미지는 필수입니다.")
        }

        if (postRepository.existsPostByUserAndCreatedDate(user, LocalDate.now())) {
            throw RuntimeException("이미 등록된 Post가 있습니다.")
        }

        if (post.imageFile!!.contentType != "image/png") throw IllegalArgumentException("PNG 형식의 이미지만 업로드할 수 있습니다.")
        postRepository.save(post.toPost(user))
    }

    @Transactional
    fun updatePost(post: PostRequestDto, postId:Long, user: User) {
        val findPostById = postRepository.findPostById(postId) ?: throw NoSuchElementException("해당 ID의 게시글이 존재하지 않습니다. id=$postId")
        if (findPostById.user != user) {
            throw AccessDeniedException("유저가 없습니다.")
        }
        postRepository.save(findPostById.updatePost(post))
    }

    fun deletePost(postId: Long, user: User) {
        val findById: Post = postRepository.findPostById(postId)?: throw NoSuchElementException("해당 ID의 게시글이 존재하지 않습니다. id=$postId")

        if (findById.user != user) {
            throw AccessDeniedException("유저가 일치하지 않습니다.")
        }
        postRepository.delete(findById)
    }
}