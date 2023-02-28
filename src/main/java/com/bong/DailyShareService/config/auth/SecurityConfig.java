package com.bong.DailyShareService.config.auth;

import com.bong.DailyShareService.domain.user.Role;
import com.bong.DailyShareService.web.dto.user.OAuth2SuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig {
    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler successHandler;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .headers().frameOptions().disable()
                .and()
                    .authorizeRequests()
                    .mvcMatchers("/", "/css/**", "/images/**", "/js/**", "/h2-console/**").permitAll()
                    .mvcMatchers("/api/v1/posts").permitAll()
                    .mvcMatchers("/api/v1/**").authenticated()
//                    .mvcMatchers("/api/v1/**").hasRole(Role.USER.name())
                    .anyRequest().permitAll()
                .and()
                    .logout().logoutSuccessUrl("/")
                .and()
                    .oauth2Login()
                    .successHandler(successHandler)
                    .userInfoEndpoint()
                    .userService(oAuth2UserService);

        return http.build();
    }

}
