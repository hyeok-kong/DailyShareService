package com.bong.DailyShareService.domain.user;

import com.bong.DailyShareService.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false)
    private String nickname;

    @Column(length = 200, nullable = false)
    private String email;

    @Column(nullable = false)
    private Role role;

    private String picture;

    @Builder
    public User(String nickname, String email, Role role, String picture) {
        this.nickname = nickname;
        this.email = email;
        this.role = role;
        this.picture = picture;
    }



}
