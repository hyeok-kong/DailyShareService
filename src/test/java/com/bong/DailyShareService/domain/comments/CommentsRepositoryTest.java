package com.bong.DailyShareService.domain.comments;


import com.bong.DailyShareService.domain.posts.Posts;
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
public class CommentsRepositoryTest {

//    @Autowired
//    CommentsRepository commentsRepository;
//
//    @After
//    public void clear() {
//        commentsRepository.deleteAll();
//    }
//
//    @Test
//    public void load_comment() {
//
//        //given
//        String comment = "테스트 댓글";
//
//        User user = User.builder()
//                .nickname("테스트 유저")
//                .email("테스트 이메일")
//                .role(Role.USER)
//                .picture("테스트 사진")
//                .build();
//
//        Posts posts = Posts.builder()
//                .title("테스트 게시글")
//                .content("테스트")
//                .user(user)
//                .build();
//
//        Comments comments = Comments.builder()
//                .comment(comment)
//                .posts(posts)
//                .user(user)
//                .build();
//
//        commentsRepository.save(comments);
//
//        //when
//        List<Comments> commentsList = commentsRepository.findAll();
//
//        //then
//        Comments testComments = commentsList.get(0);
//
//        assertThat(testComments.getComment()).isEqualTo(comment);
//        assertThat(testComments.getPosts().getTitle()).isEqualTo("테스트 게시글");
//        assertThat(testComments.getPosts().getContent()).isEqualTo("테스트");
//        assertThat(testComments.getUser().getNickname()).isEqualTo("테스트 유저");
//        assertThat(testComments.getUser().getEmail()).isEqualTo("테스트 이메일");
//
//    }
}
