package com.oficinadobrito.entities;

import java.io.Serial;
import java.io.Serializable;
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
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_carrinho_compra")
public class CarrinhoCompra implements Serializable {
	@Serial
	private static final long serialVersionUID = 1L;

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
