package org.example.lawngarden.controller;

import org.example.lawngarden.entity.Post;
import org.example.lawngarden.entity.User;
import org.example.lawngarden.service.PostService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.example.lawngarden.auth.UserDetailsImpl;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/posts")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public String listPosts(Model model) {
        model.addAttribute("posts", postService.getAllPosts());
        return "post_list";
    }

    @GetMapping("/new")
    public String showPostForm(Model model) {
        model.addAttribute("post", new Post());
        return "post_form";
    }

    @PostMapping
    public String createPost(@ModelAttribute Post post,
                             @RequestParam(value = "imageFile", required = false) MultipartFile imageFile,
                             @AuthenticationPrincipal UserDetailsImpl userDetails,
                             Model model) {
        try {
            post.setUser(userDetails.getUser());

            // ✅ 파일이 존재하면 byte[]로 변환 후 저장
            if (imageFile != null && !imageFile.isEmpty()) {
                post.setImage(imageFile.getBytes());
            }

            postService.createPost(post);
            return "redirect:/posts";
        } catch (IOException e) {
            model.addAttribute("error", "파일 업로드 중 오류가 발생했습니다.");
            return "post_form";
        }
    }

    @GetMapping("/{id}")
    public String viewPost(@PathVariable Long id, Model model) {
        Post post = postService.getPostById(id);
        if (post.getImage() != null) {
            String base64Image = Base64.getEncoder().encodeToString(post.getImage());
            String dataUri = "data:image/png;base64," + base64Image;
            model.addAttribute("dataUri", dataUri);
        }
        model.addAttribute("post", post);
        return "post_detail";
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/penalties")
    public String getPenaltyUsers(Model model) {
        List<User> penaltyUsers = postService.getPenaltyUsers();
        model.addAttribute("penaltyUsers", penaltyUsers);
        return "penalty_list"; // ✅ penalty_list.html로 연결
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/weekly-submissions")
    public String showWeeklySubmissions(Model model) {
        Map<User, Long> submissionData = postService.getWeeklySubmissions();
        model.addAttribute("submissionData", submissionData);
        return "weekly_submissions";
    }
}
