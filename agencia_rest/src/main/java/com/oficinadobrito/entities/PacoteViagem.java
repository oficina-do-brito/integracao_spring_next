package com.oficinadobrito.entities;

import java.sql.Date;
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
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_pacote_viagem")
public class PacoteViagem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String titulo;
	
	@Column(name="valor_desconto")
	private int valorDesconto;
	
	@Column(name="preco_total")
	private double precoTotal;
	
	@Column(name="possui_hospedagem")
	private String possuiHospedagem;
	
	private String status;
	
	@Column(name="meio_transporte")
	private String meioTransporte;
	
	private String imagem;
	
	@Column(name="prazo_cancelamento")
	private Date prazoCancelamento;
	
	@Column(name="data_viagem")
	private Date dataViagem;
	
	@JsonIgnore
	@OneToMany(mappedBy="pacote")
	private List<Passagem> passagem;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="fk_origem")
	private OrigemDestino origem;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="fk_hospedagem")
	private Hospedagem hospedagem;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="fk_Carrinho")
	private CarrinhoCompra  carrinho;
	
	
	@ManyToMany(mappedBy="pacotes")
	private List<Administrador> administrador= new ArrayList<>();

	public PacoteViagem() {
		super();
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

	public int getValorDesconto() {
		return valorDesconto;
	}

	public void setValorDesconto(int valorDesconto) {
		this.valorDesconto = valorDesconto;
	}

	public double getPrecoTotal() {
		return precoTotal;
	}

	public void setPrecoTotal(double precoTotal) {
		this.precoTotal = precoTotal;
	}

	public String getPossuiHospedagem() {
		return possuiHospedagem;
	}

	public void setPossuiHospedagem(String possuiHospedagem) {
		this.possuiHospedagem = possuiHospedagem;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMeioTransporte() {
		return meioTransporte;
	}

	public void setMeioTransporte(String meioTransporte) {
		this.meioTransporte = meioTransporte;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public Date getPrazoCancelamento() {
		return prazoCancelamento;
	}

	public void setPrazoCancelamento(Date prazoCancelamento) {
		this.prazoCancelamento = prazoCancelamento;
	}

	public Date getDataViagem() {
		return dataViagem;
	}

	public void setDataViagem(Date dataViagem) {
		this.dataViagem = dataViagem;
	}

	public List<Passagem> getPassagem() {
		return passagem;
	}

	public void setPassagem(List<Passagem> passagem) {
		this.passagem = passagem;
	}

	public OrigemDestino getOrigem() {
		return origem;
	}

	public void setOrigem(OrigemDestino origem) {
		this.origem = origem;
	}

	public Hospedagem getHospedagem() {
		return hospedagem;
	}

	public void setHospedagem(Hospedagem hospedagem) {
		this.hospedagem = hospedagem;
	}

	public CarrinhoCompra getCarrinho() {
		return carrinho;
	}

	public void setCarrinho(CarrinhoCompra carrinho) {
		this.carrinho = carrinho;
	}

	public List<Administrador> getAdministrador() {
		return administrador;
	}

	public void setAdministrador(List<Administrador> administrador) {
		this.administrador = administrador;
	}

	
	
}
