package com.oficinadobrito.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_fornecedor")
public class Fornecedor extends Usuario{
	private static final long serialVersionUID = 1L;

	private String CNPJ;
	
	@Column(name = "tipo_servico")
	private int tipoServico;
	
	@JsonIgnore
	@OneToMany(mappedBy = "fornecedor")
	private List<Passagem> passagem= new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "fornecedor")
	private List<Hospedagem> hospedagem= new ArrayList<>();


	public Fornecedor() {
		super();
	}


	public String getCNPJ() {
		return CNPJ;
	}


	public void setCNPJ(String cNPJ) {
		CNPJ = cNPJ;
	}


	public int getTipoServico() {
		return tipoServico;
	}


	public void setTipoServico(int tipoServico) {
		this.tipoServico = tipoServico;
	}


	public List<Passagem> getPassagem() {
		return passagem;
	}


	public void setPassagem(List<Passagem> passagem) {
		this.passagem = passagem;
	}


	public List<Hospedagem> getHospedagem() {
		return hospedagem;
	}


	public void setHospedagem(List<Hospedagem> hospedagem) {
		this.hospedagem = hospedagem;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
