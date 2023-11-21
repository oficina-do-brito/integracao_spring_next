package com.oficinadobrito.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{
	
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")//qualquer requisição que vinher de fora iremos habilitar apartir do /** tudo depois da porta8080
		.allowedOrigins("http://localhost:3000")
		.allowCredentials(false)
        .allowedHeaders("*")
        .exposedHeaders("*")
        .maxAge(60 *30)
        .allowedMethods("*");
	}
}
