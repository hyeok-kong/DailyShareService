package com.bong.DailyShareService.domain.comments;

import com.bong.DailyShareService.domain.BaseTimeEntity;
import com.bong.DailyShareService.domain.posts.Posts;
import com.bong.DailyShareService.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Comments extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500, nullable = false)
    private String comment;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "posts_id")
    private Posts posts;


    @Builder
    public Comments(String comment, User user, Posts posts) {
        this.comment = comment;
        this.user = user;
        this.posts = posts;
    }
}
