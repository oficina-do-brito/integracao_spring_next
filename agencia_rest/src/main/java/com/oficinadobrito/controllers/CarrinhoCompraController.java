package com.oficinadobrito.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oficinadobrito.entities.CarrinhoCompra;
import com.oficinadobrito.services.CarrinhoCompraService;


@RestController
@RequestMapping("/carrinhos")
public class CarrinhoCompraController {

    @Autowired
    private CarrinhoCompraService carrinhoCompraService;

    @GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<CarrinhoCompra>> list(){
       List<CarrinhoCompra> carrinhos  = this.carrinhoCompraService.getAll();
        return ResponseEntity.ok().body(carrinhos);
    }

    @PostMapping
    ResponseEntity<CarrinhoCompra> create(@RequestBody CarrinhoCompra c){
        CarrinhoCompra novo = this.carrinhoCompraService.create(c);
        return ResponseEntity.status(201).body(novo);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable("id") Integer id){
        this.carrinhoCompraService.delete(id);

    }

    @GetMapping(value = "/{id}/clientes",produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<CarrinhoCompra> verCarrinhoDoCliente(@PathVariable("id") Integer id){
        Optional<CarrinhoCompra> carrinhoCliente = this.carrinhoCompraService.findByUser(id);
        if (carrinhoCliente.isPresent()) {
            return ResponseEntity.ok().body(carrinhoCliente.get());
        }
        return ResponseEntity.notFound().build();
    }
}