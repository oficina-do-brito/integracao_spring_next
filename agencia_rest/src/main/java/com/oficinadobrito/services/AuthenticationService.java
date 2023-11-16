package com.oficinadobrito.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.repositories.UsuarioRepository;

@Service
public class AuthenticationService implements UserDetailsService {
	@Value("${api.security.token.secret}")
	private String secret;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		return this.usuarioRepository.findByEmail(email);
	}

	public String generateToken(Usuario usuario) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(this.secret);
			String token = JWT.create().withIssuer("auth-api").withSubject(usuario.getEmail())
					.withExpiresAt(generateExpiration()).sign(algorithm);
			return token;
		} catch (JWTCreationException e) {
			throw new RuntimeException("Erro while generate token Jwt", e);
		}
	}

	private Instant generateExpiration() {
		return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
	}

	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(this.secret);
			return JWT.require(algorithm).withIssuer("auth-api").build().verify(token).getSubject();
		} catch (JWTVerificationException e) {
			return "";
		}
	}

}
