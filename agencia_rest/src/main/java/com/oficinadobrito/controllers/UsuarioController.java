package com.oficinadobrito.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	
	@PostMapping
	public ResponseEntity<Usuario> create(@RequestBody Usuario u) {
		Usuario usr = usuarioService.saveUsuario(u);
		
		return ResponseEntity.status(201).body(usr);
	}
	
	@GetMapping
	public ResponseEntity<ArrayList<Usuario>> readAll() {
		ArrayList<Usuario> usrs = usuarioService.findall();
		return ResponseEntity.ok().body(usrs);
	};
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> readOne(@PathVariable Integer id) {
		Usuario usr = usuarioService.findById(id);
		
		return ResponseEntity.ok().body(usr);
	};
	
}
