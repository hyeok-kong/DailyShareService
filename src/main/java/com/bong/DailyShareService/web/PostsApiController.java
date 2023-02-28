package com.bong.DailyShareService.web;

import com.bong.DailyShareService.service.PostsService;
import com.bong.DailyShareService.web.dto.posts.PostsListResponseDto;
import com.bong.DailyShareService.web.dto.posts.PostsResponseDto;
import com.bong.DailyShareService.web.dto.posts.PostsSaveRequestDto;
import com.bong.DailyShareService.web.dto.posts.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.IntStream;

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

//    @GetMapping("/api/v1/posts")
//    public List<PostsListResponseDto> findAllDesc() {
//        return postsService.findAllDesc();
//    }

    @GetMapping("/api/v1/posts")
    public Page<PostsListResponseDto> pageList( @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        System.out.println("----------- called -------------");
        return postsService.pageList(pageable).map(PostsListResponseDto::new);
    }

    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findById(@PathVariable Long id) {
        return postsService.findById(id);
    }

    // api 테스트 위해 초기값 설정
    @PostConstruct
    public void init() {
        IntStream.range(1, 100).forEach(i -> postsService.save(new PostsSaveRequestDto("테스트", "테스트", "테스트")));
    }
}