package com.oficinadobrito.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oficinadobrito.entities.Cliente;


public interface ClienteRepository extends JpaRepository<Cliente,Integer>{

}
