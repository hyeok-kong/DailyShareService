package com.bong.DailyShareService.config.auth;

import com.bong.DailyShareService.config.auth.filter.JwtAuthFilter;
import com.bong.DailyShareService.domain.user.Role;
import com.bong.DailyShareService.service.TokenService;
import com.bong.DailyShareService.service.UserService;
import com.bong.DailyShareService.web.dto.user.OAuth2SuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig {
    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler successHandler;
    private final TokenService tokenService;
    private final UserService userService;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .headers().frameOptions().disable()
                .and()
                    .authorizeRequests()
                    .antMatchers("/", "/css/**", "/images/**", "/js/**", "/h2-console/**").permitAll()
                    .antMatchers("/api/v1/posts").permitAll()
//                    .mvcMatchers("/api/v1/**").authenticated()
                    .antMatchers("/token/**").permitAll()
//                    .mvcMatchers("/api/v1/**").hasRole(Role.USER.name())
                    .anyRequest().permitAll()
                .and()
                    .logout().logoutSuccessUrl("/")
                .and()
                    .oauth2Login()
                    .successHandler(successHandler)
                    .userInfoEndpoint()
                    .userService(oAuth2UserService);

//        http.addFilterBefore(new JwtAuthFilter(tokenService, userService), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

}
