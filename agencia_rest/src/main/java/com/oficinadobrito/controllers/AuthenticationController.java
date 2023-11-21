package com.oficinadobrito.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.oficinadobrito.dtos.AuthenticationDTO;
import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.services.AuthenticationService;

//@CrossOrigin(origins = { "http://localhost:3000","https://app.example.com" }, methods = { RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.PUT,
//				RequestMethod.DELETE, RequestMethod.POST })
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private AuthenticationService authenticationService;

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody AuthenticationDTO data) {
		var emailPassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());

		// cria um token baseado no email+senha
		var auth = this.authenticationManager.authenticate(emailPassword);
		var token = authenticationService.generateToken((Usuario) auth.getPrincipal());
		return ResponseEntity.ok(token);
	}

}