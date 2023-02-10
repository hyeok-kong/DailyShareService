package com.bong.DailyShareService.web;


import com.bong.DailyShareService.domain.posts.Posts;
import com.bong.DailyShareService.service.PostsService;
import com.bong.DailyShareService.web.dto.posts.PostsListResponseDto;
import com.bong.DailyShareService.web.dto.posts.PostsResponseDto;
import com.bong.DailyShareService.web.dto.posts.PostsSaveRequestDto;
import com.bong.DailyShareService.web.dto.posts.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    @PostMapping("/api/v1/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    @PutMapping("/api/v1/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(id, requestDto);
    }

    @DeleteMapping("/api/v1/posts/{id}")
    public Long delete(@PathVariable Long id) {
        postsService.delete(id);

        return id;
    }

    @GetMapping("/api/v1/posts")
    public List<PostsListResponseDto> findAllDesc() {
        return postsService.findAllDesc();
    }

    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findById(@PathVariable Long id) {

        return postsService.findById(id);
    }
}