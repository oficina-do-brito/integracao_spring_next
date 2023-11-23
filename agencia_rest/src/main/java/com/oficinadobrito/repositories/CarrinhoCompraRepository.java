package com.oficinadobrito.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.oficinadobrito.entities.CarrinhoCompra;

public interface CarrinhoCompraRepository extends JpaRepository<CarrinhoCompra,Integer>{

    @Query("SELECT car FROM CarrinhoCompra as car JOIN car.cliente as c where c.id = :id")
    Optional<CarrinhoCompra> findCarrinhoCompraFetchCliente(@Param("id") Integer id);
}
