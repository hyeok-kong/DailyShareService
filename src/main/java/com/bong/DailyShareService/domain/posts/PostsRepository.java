package com.bong.DailyShareService.domain.posts;

import com.bong.DailyShareService.web.dto.posts.PostsListResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PostsRepository extends JpaRepository<Posts, Long> {
    @Query("SELECT p FROM Posts p ORDER BY p.id DESC")
    List<Posts> findAllDesc();


    @Modifying
    @Query("update Posts p set p.viewCount = p.viewCount + 1 where p.id = :id")
    int increaseViewCount(Long id);
}
