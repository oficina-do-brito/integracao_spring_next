package com.oficinadobrito.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository usuarioRepository;

	public Usuario saveUsuario(Usuario u) {
		Usuario usuarioSalvo = usuarioRepository.save(u);
		if(usuarioSalvo.getId()==1) {}
		else if(usuarioSalvo.getId()==2) {
			
		}
		else {
			
		}
		return usuarioSalvo ;
	}

	public Usuario findById(Integer id) {
		//findById(id) retorna umoptional com usuario, so que pegamos o usurio a partir do get do optional
		Optional<Usuario> usr = usuarioRepository.findById(id);
		return usr.get();
	}
	public ArrayList<Usuario> findall(){
		return (ArrayList<Usuario>) usuarioRepository.findAll();
	}
}
