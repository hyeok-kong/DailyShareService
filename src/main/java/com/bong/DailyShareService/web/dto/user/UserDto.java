package com.bong.DailyShareService.web.dto.user;

import com.bong.DailyShareService.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UserDto {
    private String email;
    private String name;

    @Builder
    public UserDto(String email, String name) {
        this.email = email;
        this.name = name;
    }

}
