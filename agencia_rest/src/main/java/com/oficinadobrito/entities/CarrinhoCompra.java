package com.oficinadobrito.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_carrinho_compra")
public class CarrinhoCompra {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "valor_total")
	private double valorTotal;

	@Column(name = "forma_pagamento")
	private int formaPagamento;

	@Column(name = "quant_items")
	private int quantItems;
	
	@JsonIgnore
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="fk_cliente")
	private Cliente cliente;
	
	@JsonIgnore
	@OneToMany(mappedBy = "carrinho")
	private List<PacoteViagem> pacotes= new ArrayList<>();

	public CarrinhoCompra() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public int getFormaPagamento() {
		return formaPagamento;
	}

	public void setFormaPagamento(int formaPagamento) {
		this.formaPagamento = formaPagamento;
	}

	public int getQuantItems() {
		return quantItems;
	}

	public void setQuantItems(int quantItems) {
		this.quantItems = quantItems;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<PacoteViagem> getPacotes() {
		return pacotes;
	}

	public void setPacotes(List<PacoteViagem> pacotes) {
		this.pacotes = pacotes;
	}

}
