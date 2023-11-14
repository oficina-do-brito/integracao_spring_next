package com.oficinadobrito.entities;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_fornecedor")
public class Fornecedor extends Usuario {

	private static final long serialVersionUID = 1L;

	private String CNPJ;
	@Column(name = "tipo_servico")
	private int tipoServico;

	@OneToMany(mappedBy = "fornecedor")
	private ArrayList<Passagem> passagem;

	@OneToMany(mappedBy = "fornecedor")
	private ArrayList<Hospedagem> hospedagem;

	public Fornecedor() {
		super();
	}

	public Fornecedor(String cNPJ, int tipoServico, ArrayList<Passagem> passagem, ArrayList<Hospedagem> hospedagem) {
		super();
		CNPJ = cNPJ;
		this.tipoServico = tipoServico;
		this.passagem = passagem;
		this.hospedagem = hospedagem;
	}

	public ArrayList<Passagem> getPassagem() {
		return passagem;
	}

	public void setPassagem(ArrayList<Passagem> passagem) {
		this.passagem = passagem;
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

	public ArrayList<Hospedagem> getHospedagem() {
		return hospedagem;
	}

	public void setHospedagem(ArrayList<Hospedagem> hospedagem) {
		this.hospedagem = hospedagem;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
