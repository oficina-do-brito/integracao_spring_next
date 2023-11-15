package com.oficinadobrito.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_origem_destino")
public class Hospedagem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nome;
	
	private String imagem;
	
	private int diaria;
	
	private double preco;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_origem")
	private OrigemDestino origem;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_fornecedor")
	private Fornecedor fornecedor;
	
	@JsonIgnore
	@OneToMany(mappedBy = "hospedagem")
	private List<PacoteViagem>  pacotes= new ArrayList<>();

	public Hospedagem() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public int getDiaria() {
		return diaria;
	}

	public void setDiaria(int diaria) {
		this.diaria = diaria;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public OrigemDestino getOrigem() {
		return origem;
	}

	public void setOrigem(OrigemDestino origem) {
		this.origem = origem;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	public List<PacoteViagem> getPacotes() {
		return pacotes;
	}

	public void setPacotes(List<PacoteViagem> pacotes) {
		this.pacotes = pacotes;
	}
	
	
}
