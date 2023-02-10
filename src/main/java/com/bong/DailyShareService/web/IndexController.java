package com.bong.DailyShareService.web;

import com.bong.DailyShareService.config.auth.LoginUser;
import com.bong.DailyShareService.config.auth.dto.SessionUser;
import com.bong.DailyShareService.service.PostsService;
import com.bong.DailyShareService.web.dto.posts.PostsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final PostsService postsService;

    @GetMapping("/")
    public String index(Model model, @LoginUser SessionUser user) {
        model.addAttribute("posts", postsService.findAllDesc());
        if (user != null) {
            model.addAttribute("userName", user.getName());
        }
        return "index";
    }

    @GetMapping("/posts/save")
    public String postsSave() {
        return "posts-save";
    }

    @GetMapping("/posts/update/{id}")
    public String postsUpdate(@PathVariable Long id, Model model) {
        PostsResponseDto dto = postsService.findById(id);
        postsService.increaseViewCount(id);
        model.addAttribute("post", dto);

        return "posts-update";
    }
}