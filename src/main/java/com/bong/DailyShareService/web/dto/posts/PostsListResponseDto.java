package com.bong.DailyShareService.web.dto.posts;

import com.bong.DailyShareService.domain.posts.Posts;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class PostsListResponseDto {

    private Long id;
    private String title;
    private String writer;
    private int viewCount;
    private LocalDateTime modifiedDate;

    public PostsListResponseDto(Posts entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.writer = entity.getWriter();
        this.viewCount = entity.getViewCount();
        this.modifiedDate = entity.getModifiedDate();
    }

}
