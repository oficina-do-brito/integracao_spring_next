package com.oficinadobrito.entities;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

	private Cliente cliente;
	// fk_cliente INTEGER,

	@OneToMany(mappedBy = "carrinho")
	private ArrayList<PacoteViagem> pacotes;

	public CarrinhoCompra() {
		super();
	}

	public CarrinhoCompra(Integer id, double valorTotal, int formaPagamento, int quantItems, Cliente cliente,
			ArrayList<PacoteViagem> pacotes) {
		super();
		this.id = id;
		this.valorTotal = valorTotal;
		this.formaPagamento = formaPagamento;
		this.quantItems = quantItems;
		this.cliente = cliente;
		this.pacotes = pacotes;
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

	public ArrayList<PacoteViagem> getPacotes() {
		return pacotes;
	}

	public void setPacotes(ArrayList<PacoteViagem> pacotes) {
		this.pacotes = pacotes;
	}

}
