package com.oficinadobrito.entities;

import java.io.Serial;
import java.io.Serializable;
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
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="tb_pacote_viagem")
public class PacoteViagem implements Serializable {
	@Serial
	private static final long serialVersionUID = 1L;

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
	
	@JsonIgnore
	@ManyToMany(mappedBy="pacotes")
	private List<Administrador> administrador= new ArrayList<>();

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
