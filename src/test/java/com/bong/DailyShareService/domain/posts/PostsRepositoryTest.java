package com.bong.DailyShareService.domain.posts;


import com.bong.DailyShareService.domain.user.Role;
import com.bong.DailyShareService.domain.user.User;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
@RunWith(SpringRunner.class)
@SpringBootTest
public class PostsRepositoryTest {

    @Autowired
    PostsRepository postsRepository;

    @After
    public void clear() {
        postsRepository.deleteAll();
    }

    @Test
    public void load_posts() {
        //given
        String title = "테스트 제목";
        String content = "테스트 내용";

        User user = User.builder()
                .nickname("테스트 유저")
                .email("테스트 이메일")
                .role(Role.USER)
                .picture("테스트 사진")
                .build();

        Posts posts = Posts.builder()
                .title(title)
                .content(content)
                .user(user)
                .build();

        postsRepository.save(posts);

        //when
        List<Posts> postsList = postsRepository.findAll();

        //then
        Posts testPost = postsList.get(0);
        assertThat(testPost.getTitle()).isEqualTo(title);
        assertThat(testPost.getContent()).isEqualTo(content);
        assertThat(testPost.getWriter()).isEqualTo("테스트 유저");
        assertThat(testPost.getUser().getPicture()).isEqualTo("테스트 사진");
        assertThat(testPost.getViewCount()).isEqualTo(0);
    }
}
