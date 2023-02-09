package com.bong.DailyShareService.web;

import com.bong.DailyShareService.domain.posts.Posts;
import com.bong.DailyShareService.domain.user.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, world!";
    }


}
