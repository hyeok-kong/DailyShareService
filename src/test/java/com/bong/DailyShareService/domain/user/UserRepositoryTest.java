package com.bong.DailyShareService.domain.user;


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
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @After
    public void clear() {
        userRepository.deleteAll();
    }

    @Test
    public void load_user() {
        //given
        String nickname = "테스트 닉네임";
        String email = "테스트 이메일";

        User user = User.builder()
                .name(nickname)
                .email(email)
                .role(Role.USER)
                .picture("테스트 사진")
                .build();

        userRepository.save(user);

        //when
        List<User> userList = userRepository.findAll();

        //then
        User testUser = userList.get(0);

        assertThat(testUser.getNickname()).isEqualTo(nickname);
        assertThat(testUser.getEmail()).isEqualTo(email);
        assertThat(testUser.getPicture()).isEqualTo("테스트 사진");

    }

}
