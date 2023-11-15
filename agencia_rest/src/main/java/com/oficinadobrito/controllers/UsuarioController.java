package com.oficinadobrito.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.services.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;
	
	
	@PostMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Usuario> create(@RequestBody Usuario u) {
		Usuario usr = usuarioService.saveUsuario(u);
		
		return ResponseEntity.status(201).body(usr);
	}
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Usuario>> readAll() {
		List<Usuario> usrs = usuarioService.findall();
		return ResponseEntity.ok().body(usrs);
	};
	
	@GetMapping(value= "/{id}",produces="aplication/json")
	public ResponseEntity<Usuario> readOne(@PathVariable Integer id) {
		Usuario usr = usuarioService.findById(id);
		
		return ResponseEntity.ok().body(usr);
	};
	
}
