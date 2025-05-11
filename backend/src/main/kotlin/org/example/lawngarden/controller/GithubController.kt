package org.example.lawngarden.controller

import org.example.lawngarden.auth.details.UserDetailsImpl
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class GithubController {

    //TODO : 모든 포스트를 조회(페이지네이션)
    @GetMapping("/")
    fun getPost(@AuthenticationPrincipal userDetails: UserDetails): ResponseEntity<String> {


        return ResponseEntity.ok("")
    }

    //TODO : 포스트 등록

    //TODO : 포스트 수정

    //TODO : 포스트 삭제


    @GetMapping("/api/v1/github")
    fun showGithubContributions(@AuthenticationPrincipal userDetails: UserDetailsImpl, model: Model): String {
        model.addAttribute("username", userDetails.username) // GitHub ID
        return "github_contributions"
    }
}
