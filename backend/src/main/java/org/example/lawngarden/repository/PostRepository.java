package org.example.lawngarden.repository;

import org.example.lawngarden.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCreatedDate(LocalDate date);
    List<Post> findByCreatedDateBetween(LocalDate start, LocalDate end);

}

