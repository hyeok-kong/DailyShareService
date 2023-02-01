package com.bong.DailyShareService.domain.posts;


import com.bong.DailyShareService.domain.BaseTimeEntity;
import com.bong.DailyShareService.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@DynamicInsert
@Entity
public class Posts extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private String writer;

    @ColumnDefault("0")
    private Long viewCount;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Posts(String title, String content, User user) {
        this.title = title;
        this.content = content;
        this.writer = user.getNickname();
        this.user = user;
    }
}
