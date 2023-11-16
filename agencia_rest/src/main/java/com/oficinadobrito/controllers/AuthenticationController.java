package com.oficinadobrito.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oficinadobrito.dtos.AuthenticationDTO;
import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.services.AuthenticationService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager ;
	
	@Autowired
	private AuthenticationService authenticationService;
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody @Validated AuthenticationDTO data) {
		
		var emailPassword = new UsernamePasswordAuthenticationToken(data.email(),data.senha());
		
		//cria um token baseado no email esenha
		var auth = this.authenticationManager.authenticate(emailPassword);
		
		var token = authenticationService.generateToken((Usuario) auth.getPrincipal());
		
		return ResponseEntity.ok().body(token);
	}
	
}
