package com.oficinadobrito.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oficinadobrito.entities.PacoteViagem;
import com.oficinadobrito.services.PacoteViagemService;

@RestController
@RequestMapping("/pacotes")
public class PacotesController {
	
	@Autowired
	private PacoteViagemService pacoteViagemService;
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PacoteViagem>> allPacotes(){
		List<PacoteViagem> pacotes = pacoteViagemService.findAll();
		return ResponseEntity.ok().body(pacotes);
	}
	
	@PostMapping
	public ResponseEntity<PacoteViagem> create(@RequestBody PacoteViagem p){
		PacoteViagem pacote = pacoteViagemService.savePacoteViagem(p);
		return ResponseEntity.status(201).body(pacote);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<PacoteViagem> update(@PathVariable Integer id,@RequestBody PacoteViagem p){
		PacoteViagem atualizado = this.pacoteViagemService.updatePacoteViagem(id,p);
		return ResponseEntity.ok().body(atualizado);
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<PacoteViagem> delete(@PathVariable Integer id){
		this.pacoteViagemService.deletePacoteViagem(id);
		return ResponseEntity.ok().body(null);
	}

}