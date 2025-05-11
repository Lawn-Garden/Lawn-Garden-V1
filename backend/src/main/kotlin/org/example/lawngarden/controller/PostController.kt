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
    private val postService : PostService
) {
    //TODO : 모든 포스트를 조회
    @GetMapping("")
    fun getAllPosts(@RequestParam("page") page :Int,
                    @RequestParam("size") size :Int
    ): ResponseEntity<Page<PostResponseDto>> {
        val pageData : Pageable = PageRequest.of(page, size)
        val findAllPost: Page<PostResponseDto> = postService.findAllPost(pageData)
        return ResponseEntity.ok(findAllPost)
    }

    //TODO : 특정 포스트 상세 조회
    @GetMapping("/{postId}")
    fun getPostDetail(@PathVariable postId: Long) : ResponseEntity<PostDetailResponseDto> {
        val findPostDetail : PostDetailResponseDto? = postService.findPostDetail(postId)
        return ResponseEntity.ok(findPostDetail)
    }

    //TODO : 포스트 등록
    // 1일 1개 등록 유저를 검사 해야함
    @PostMapping
    fun postPost(@AuthenticationPrincipal userDetailsImpl: UserDetailsImpl,
                 @RequestBody postRequestDto: PostRequestDto,
                 ) {
        val user = userDetailsImpl.user
        postService.savePost(PostRequestDto, user)


    }

    //TODO : 포스트 수정

    //TODO : 포스트 삭제
}