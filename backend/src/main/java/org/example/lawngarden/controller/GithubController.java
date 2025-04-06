package org.example.lawngarden.controller;

import org.example.lawngarden.service.GithubService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.example.lawngarden.auth.UserDetailsImpl;

@Controller
public class GithubController {

    @GetMapping("/github")
    public String showGithubContributions(@AuthenticationPrincipal UserDetailsImpl userDetails, Model model) {
        model.addAttribute("username", userDetails.getUsername()); // GitHub ID
        return "github_contributions";
    }
}
