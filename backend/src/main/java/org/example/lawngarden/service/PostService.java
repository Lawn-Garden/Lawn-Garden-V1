package org.example.lawngarden.service;

import org.example.lawngarden.entity.Post;
import org.example.lawngarden.entity.User;
import org.example.lawngarden.repository.PostRepository;
import org.example.lawngarden.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.temporal.WeekFields;
import java.util.*;
import java.util.stream.Collectors;
import java.io.File;
import java.io.IOException;
import java.time.LocalDate;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    private static final List<String> ALLOWED_EXTENSIONS = Arrays.asList("jpg", "jpeg", "png");
    private static final long MAX_FILE_SIZE = 5 * 1024 * 1024;

    public PostService(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
    }

    public void createPost(Post post) {
        post.setCreatedDate(LocalDate.now());
        postRepository.save(post);
    }

    // 특정 날짜에 글을 작성한 사용자 목록 조회
    public List<Post> getPostsByDate(LocalDate date) {
        return postRepository.findByCreatedDate(date);
    }

    private void validateImage(MultipartFile imageFile) {
        // 파일 크기 체크
        if (imageFile.getSize() > MAX_FILE_SIZE) {
            throw new IllegalArgumentException("파일 크기가 너무 큽니다! (최대 5MB)");
        }

        // 파일 확장자 체크
        String originalFilename = imageFile.getOriginalFilename();
        if (originalFilename != null) {
            String fileExtension = originalFilename.substring(originalFilename.lastIndexOf(".") + 1).toLowerCase();
            if (!ALLOWED_EXTENSIONS.contains(fileExtension)) {
                throw new IllegalArgumentException("지원되지 않는 파일 형식입니다! (허용: JPG, JPEG, PNG)");
            }
        }
    }

    // 벌칙 대상자 찾기 (오늘 글을 작성하지 않은 사용자 목록 조회)
    public List<User> getPenaltyUsers() {
        LocalDate today = LocalDate.now();
        List<User> allUsers = userRepository.findAll();
        Collectors Collectors;
        List<User> usersWhoPostedToday = postRepository.findByCreatedDate(today)
                .stream()
                .map(Post::getUser) // Post 객체에서 User 객체 추출
                .distinct() // 중복 제거
                .collect(java.util.stream.Collectors.toList()); // 리스트로 변환

        return allUsers.stream()
                .filter(user -> !usersWhoPostedToday.contains(user))
                .collect(java.util.stream.Collectors.toList());
    }

    private LocalDate getStartOfWeek() {
        return LocalDate.now().with(WeekFields.of(Locale.getDefault()).dayOfWeek(), 1);
    }

    // 이번 주 제출 횟수 계산
    public Map<User, Long> getWeeklySubmissions() {
        LocalDate startOfWeek = getStartOfWeek();
        LocalDate endOfWeek = startOfWeek.plusDays(6);

        List<Post> weeklyPosts = postRepository.findByCreatedDateBetween(startOfWeek, endOfWeek);
        Map<User, Long> submissionCount = new HashMap<>();

        // 유저별 제출 횟수 계산
        for (Post post : weeklyPosts) {
            submissionCount.put(post.getUser(),
                    submissionCount.getOrDefault(post.getUser(), 0L) + 1);
        }

        // 모든 유저 추가 (제출 기록이 없는 유저도 0으로 표시)
        for (User user : userRepository.findAll()) {
            submissionCount.putIfAbsent(user, 0L);
        }

        return submissionCount;
    }

}
