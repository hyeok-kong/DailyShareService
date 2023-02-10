package com.bong.DailyShareService.service;

import com.bong.DailyShareService.domain.posts.Posts;
import com.bong.DailyShareService.domain.posts.PostsRepository;
import com.bong.DailyShareService.web.dto.posts.PostsListResponseDto;
import com.bong.DailyShareService.web.dto.posts.PostsResponseDto;
import com.bong.DailyShareService.web.dto.posts.PostsSaveRequestDto;
import com.bong.DailyShareService.web.dto.posts.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostsService {

    private final PostsRepository postsRepository;

    @Transactional
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        Posts posts = postsRepository.findById(id).orElseThrow(() ->
            new IllegalArgumentException("해당 게시글이 없습니다. id : " + id));

        posts.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    @Transactional
    public void delete(Long id) {
        Posts posts = postsRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 게시글이 없습니다. id : " + id));

        postsRepository.delete(posts);
    }

    public PostsResponseDto findById(Long id) {
        Posts posts = postsRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 게시글이 없습니다. id : " + id));

        return new PostsResponseDto(posts);
    }

    @Transactional
    public int increaseViewCount(Long id) {
        return postsRepository.increaseViewCount(id);
    }


    @Transactional(readOnly = true)
    public List<PostsListResponseDto> findAllDesc() {
        return postsRepository.findAllDesc().stream()
                .map(PostsListResponseDto::new)
                .collect(Collectors.toList());
    }
}
