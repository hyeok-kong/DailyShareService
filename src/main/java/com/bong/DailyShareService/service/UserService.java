package com.bong.DailyShareService.service;

import com.bong.DailyShareService.domain.posts.Posts;
import com.bong.DailyShareService.domain.user.User;
import com.bong.DailyShareService.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() ->
                new IllegalArgumentException("해당 유저가 없습니다. email : " + email));

        return user;
    }
}