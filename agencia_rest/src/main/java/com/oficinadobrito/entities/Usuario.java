package com.oficinadobrito.entities;

import java.io.Serial;
import java.sql.Date;
import java.util.Collection;
import java.util.List;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.oficinadobrito.enums.UsuarioRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name = "tb_users", uniqueConstraints = { @UniqueConstraint(name = "un_email", columnNames = { "email" }) })
public class Usuario implements UserDetails {
	@Serial
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String nome;

	private String email;
	
	@Column(length=255)
	private String password;

	private String telefone;

	private String imagem;

	@Column(name = "data_login")
	private Date dataLogin;
	
	@Enumerated(EnumType.STRING)
	private UsuarioRole role;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "fk_endereco")
	private Endereco endereco;


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		//admin
		if(this.role == UsuarioRole.ADMINISTRADOR) {
			return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"),new SimpleGrantedAuthority("ROLE_USER"));
		}
		//fornecedor
		else if(this.role == UsuarioRole.FORNECEDOR) {
			return List.of(new SimpleGrantedAuthority("ROLE_USER"));
		}
		//cliente
		else {
			return List.of(new SimpleGrantedAuthority("ROLE_USER"));
		}
	}
	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
