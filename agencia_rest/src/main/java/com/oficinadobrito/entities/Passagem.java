package com.oficinadobrito.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_passagem")
public class Passagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String titulo;
	
	private double preco;
	
	private int tipo;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_fornecedor")
	private Fornecedor fornecedor;
	
	@ManyToOne()
	@JoinColumn(name="fk_pacote")
	private PacoteViagem pacote;
	
	public Passagem() {
		super();
	}

	public Passagem(Integer id, String titulo, double preco, int tipo, Fornecedor fornecedor, PacoteViagem pacote) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.preco = preco;
		this.tipo = tipo;
		this.fornecedor = fornecedor;
		this.pacote = pacote;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	public PacoteViagem getPacote() {
		return pacote;
	}

	public void setPacote(PacoteViagem pacote) {
		this.pacote = pacote;
	}
	
}
