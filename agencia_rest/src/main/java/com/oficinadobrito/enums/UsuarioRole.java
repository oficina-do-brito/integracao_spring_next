package com.oficinadobrito.enums;

public enum UsuarioRole {
	ADMINISTRADOR("admin"), FORNECEDOR("fornecedor"), CLIENTE("cliente");

	private String role;

	UsuarioRole(String role) {
		this.role = role;
	}

	public String getRole() {
		return this.role;
	}

}
