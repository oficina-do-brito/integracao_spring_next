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
import com.oficinadobrito.dtos.ResponseAuthDTO;
import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.services.AuthenticationService;
import com.oficinadobrito.services.UsuarioService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private AuthenticationService authenticationService;

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/login")
	public ResponseEntity<ResponseAuthDTO> login(@RequestBody AuthenticationDTO data) {
		var emailPassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());

		// cria um token baseado no email+senha
		var auth = this.authenticationManager.authenticate(emailPassword);
		var token = authenticationService.generateToken((Usuario) auth.getPrincipal());
		
		// @Enumerated(EnumType.STRING) private UsuarioRole role;
		Usuario u = this.usuarioService.findAuth(data.email(), data.password());
		ResponseAuthDTO userAutenticado = new ResponseAuthDTO(u.getId(),u.getNome(),u.getEmail(),u.getTelefone(),u.getImagem(),"ADMIN",token);
		
		return ResponseEntity.ok().body(userAutenticado);
	}

}