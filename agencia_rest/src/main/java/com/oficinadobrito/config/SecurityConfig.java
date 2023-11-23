package com.oficinadobrito.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	@Autowired
	private SecurityFilter securityFilter;
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

		try {
			return httpSecurity
					.cors(Customizer.withDefaults()) // by default uses a Bean by the name of corsConfigurationSource
					.csrf(AbstractHttpConfigurer::disable)
					.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
					.authorizeHttpRequests(autorize -> autorize.requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
							.requestMatchers(HttpMethod.GET, "/pacotes").permitAll()
							.requestMatchers(HttpMethod.GET, "/carrinhos").permitAll()
							.requestMatchers(HttpMethod.GET, "/carrinhos/{id}/clientes").permitAll()
							.requestMatchers(HttpMethod.GET, "/usuarios").permitAll()
							.requestMatchers(HttpMethod.POST, "/usuarios").permitAll()
							.requestMatchers(HttpMethod.POST, "/usuarios").hasRole("ADMIN").anyRequest()
							.authenticated()
					)
					.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
					.build();
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

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
				"Accept", "Authorization","Requestor-Type", "X-Requested-With", "Access-Control-Request-Method",
				"Access-Control-Request-Headers", "Access-Control-Allow-Headers"));
		corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept",
				"Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Access-Control-Allow-Credentials"));
		corsConfiguration.setAllowedMethods(
				Arrays.asList("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE", "OPTIONS"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfiguration);

		return source;
	}
}
