package com.bong.DailyShareService.web.dto.posts;

import com.bong.DailyShareService.domain.posts.Posts;
import com.bong.DailyShareService.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {

    private String title;
    private String content;
    private String writer;
    private User user;

    @Builder
    public PostsSaveRequestDto(String title, String content, String writer) {
        this.title = title;
        this.content = content;
        this.writer = writer;
    }

    public Posts toEntity() {
        return Posts.builder()
                .title(title)
                .content(content)
                .writer(writer)
                .user(user)
                .build();
    }

    public void setUser(User user) {
        this.user = user;
    }

}
