package org.example.lawngarden.controller

import org.example.lawngarden.auth.details.UserDetailsImpl
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class GithubController {
    @GetMapping("/github")
    fun showGithubContributions(@AuthenticationPrincipal userDetails: UserDetailsImpl, model: Model): String {
        model.addAttribute("username", userDetails.username) // GitHub ID
        return "github_contributions"
    }
}
