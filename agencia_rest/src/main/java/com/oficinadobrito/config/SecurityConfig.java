package com.oficinadobrito.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	@Autowired
	private SecurityFilter securityFilter;

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
		try {
			return httpSecurity.csrf(csrf -> csrf.disable())
					.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
					.authorizeHttpRequests(autorize -> autorize
							.requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
							.requestMatchers(HttpMethod.GET, "/pacotes").permitAll()
							.requestMatchers(HttpMethod.GET, "/usuarios").permitAll()
							.requestMatchers(HttpMethod.POST, "/usuarios").permitAll()
//							.requestMatchers(HttpMethod.POST, "/usuarios").hasRole("ADMIN").anyRequest()
//							.authenticated()
							)
					.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class).build();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
