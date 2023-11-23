package com.oficinadobrito.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oficinadobrito.entities.CarrinhoCompra;
import com.oficinadobrito.repositories.CarrinhoCompraRepository;

@Service
public class CarrinhoCompraService {
    @Autowired
    private CarrinhoCompraRepository  carrinhoCompraRepository;

    public CarrinhoCompra finOne(Integer id){
        return this.carrinhoCompraRepository.getReferenceById(id);
    }

    public List<CarrinhoCompra> getAll(){
        return  this.carrinhoCompraRepository.findAll();
    }

    public CarrinhoCompra create(CarrinhoCompra carrinho){
        return this.carrinhoCompraRepository.save(carrinho);
    }

    public void delete (Integer id){
        this.carrinhoCompraRepository.deleteById(id);
    }

    public Optional<CarrinhoCompra> findByUser (Integer id){
        return this.carrinhoCompraRepository.findCarrinhoCompraFetchCliente(id);
        }
    

}