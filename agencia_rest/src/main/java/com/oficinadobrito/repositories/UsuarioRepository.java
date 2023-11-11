package com.oficinadobrito.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinadobrito.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer>{

}
