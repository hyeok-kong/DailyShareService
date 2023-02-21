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
    private String name;

    @Column(length = 200)
    private String nickname;

    @Column(length = 200, nullable = false)
    private String email;

    @Column(nullable = false)
    private Role role;

    private String picture;

    @Builder
    public User(String name, String email, Role role, String picture) {
        this.name = name;
        this.nickname = name;
        this.email = email;
        this.role = role;
        this.picture = picture;
    }

    public User update(String name, String picture) {
        this.name = name;
        this.picture = picture;

        return this;
    }



}
