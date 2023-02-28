package com.bong.DailyShareService.config.auth.filter;

import com.bong.DailyShareService.domain.user.User;
import com.bong.DailyShareService.service.TokenService;
import com.bong.DailyShareService.service.UserService;
import com.bong.DailyShareService.web.dto.user.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {
    private final TokenService tokenService;
    private final UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)  throws ServletException, IOException {
        String token = ((HttpServletRequest)request).getHeader("Auth");

        if(token != null && tokenService.verifyToken(token)) {
            String email = tokenService.getUid(token);

            User user = userService.findByEmail(email);
            UserDto userDto = UserDto.builder()
                    .email(user.getEmail())
                    .name(user.getName())
                    .build();

//            UserDto userDto = UserDto.builder()
//                    .email(email)
//                    .name("이름")
//                    .picture("사진")
//                    .build();

            Authentication auth = getAuthentication(userDto);
            SecurityContextHolder.getContext().setAuthentication(auth);

            filterChain.doFilter(request, response);
        }
    }

    public Authentication getAuthentication(UserDto member) {
        return new UsernamePasswordAuthenticationToken(member, "",
                Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
    }
}
