package com.oficinadobrito.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.oficinadobrito.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	UserDetails findByEmail(String email);

	// @Query("select u from Usuario u where u.email= :e and u.password= :p")
	// Usuario findUsuarioByEmailAndPassword(@Param("e") String email, @Param("p")
	// String password);

	Usuario findUsuarioByEmail(String email);

}
