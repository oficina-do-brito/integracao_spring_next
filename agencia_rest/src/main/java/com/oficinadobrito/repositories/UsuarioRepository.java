package com.oficinadobrito.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.oficinadobrito.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer>{
	UserDetails findByEmail(String email);

}
