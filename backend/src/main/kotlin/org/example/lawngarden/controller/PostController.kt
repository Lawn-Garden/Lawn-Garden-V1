package org.example.lawngarden.controller

import org.example.lawngarden.auth.details.UserDetailsImpl
import org.example.lawngarden.dto.PostDetailResponseDto
import org.example.lawngarden.dto.PostRequestDto
import org.example.lawngarden.dto.PostResponseDto
import org.example.lawngarden.service.PostService
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/posts")
class PostController(
    private val postService: PostService
) {
    //모든 포스트를 조회
    @GetMapping("")
    fun getAllPosts(
        @RequestParam("page", defaultValue = "0") page: Int,
        @RequestParam("size", defaultValue = "10") size: Int
    ): ResponseEntity<Page<PostResponseDto>> {
        val pageData: Pageable = PageRequest.of(page, size)
        val findAllPost: Page<PostResponseDto> = postService.findAllPost(pageData)
        return ResponseEntity.ok(findAllPost)
    }

    //특정 포스트 상세 조회
    @GetMapping("/{postId}")
    fun getPostDetail(@PathVariable postId: Long): ResponseEntity<PostDetailResponseDto> {
        val findPostDetail: PostDetailResponseDto = postService.findPostDetail(postId)
        return ResponseEntity.ok(findPostDetail)
    }

    //포스트 등록
    @PostMapping
    fun postPost(
        @AuthenticationPrincipal userDetailsImpl: UserDetailsImpl,
        @ModelAttribute postRequestDto: PostRequestDto,
    ) {
        val user = userDetailsImpl.user
        postService.savePost(postRequestDto, user)
    }

    //포스트 수정
    @PatchMapping("/{postId}")
    fun patchPost(
        @PathVariable postId: Long,
        @AuthenticationPrincipal userDetailsImpl: UserDetailsImpl,
        @ModelAttribute postRequestDto: PostRequestDto
    ) {
        val user = userDetailsImpl.user
        postService.updatePost(postRequestDto, postId, user)

    }

    //포스트 삭제
    @DeleteMapping("/{postId}")
    fun deletePost(
        @PathVariable postId: Long,
        @AuthenticationPrincipal userDetailsImpl: UserDetailsImpl,
    ): ResponseEntity<PostDetailResponseDto> {
        val user = userDetailsImpl.user
        postService.deletePost(postId, user)
        return ResponseEntity.noContent().build()
    }
}