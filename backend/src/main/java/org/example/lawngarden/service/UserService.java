package org.example.lawngarden.service;

import jakarta.annotation.PostConstruct;
import org.example.lawngarden.auth.Role;
import org.example.lawngarden.entity.User;
import org.example.lawngarden.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void createDefaultUser() {
        if (userRepository.findByUsername("qwe").isEmpty()) {
            User user = new User();
            user.setUsername("qwe");
            user.setPassword(passwordEncoder.encode("qwe"));
            user.setRole(Role.USER);
            userRepository.save(user);
            System.out.println("✅ 기본 계정 생성 완료: id=qwe, pw=qwe");
        }
    }

    public void register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
    }

    // ✅ 모든 유저 목록 가져오기
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

