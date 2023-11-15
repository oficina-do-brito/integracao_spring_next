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
@Table(name = "tb_origem_destino")
public class OrigemDestino {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String imagem;
	private String descricao;
	private int tipo;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_endereco")
	private Endereco endereco;
	
	@JsonIgnore
	@OneToMany(mappedBy = "origem")
	private List<PacoteViagem> pacotes= new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "origem")
	private List<Hospedagem> hospedagem= new ArrayList<>();

	public OrigemDestino() {
		super();
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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public List<PacoteViagem> getPacotes() {
		return pacotes;
	}

	public void setPacotes(List<PacoteViagem> pacotes) {
		this.pacotes = pacotes;
	}

	public List<Hospedagem> getHospedagem() {
		return hospedagem;
	}

	public void setHospedagem(List<Hospedagem> hospedagem) {
		this.hospedagem = hospedagem;
	}

	

}
