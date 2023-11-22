package com.oficinadobrito.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.oficinadobrito.entities.Administrador;
import com.oficinadobrito.entities.CarrinhoCompra;
import com.oficinadobrito.entities.Cliente;
import com.oficinadobrito.entities.Fornecedor;
import com.oficinadobrito.entities.Usuario;
import com.oficinadobrito.enums.UsuarioRole;
import com.oficinadobrito.repositories.AdministradorRepository;
import com.oficinadobrito.repositories.CarrinhoCompraRepository;
import com.oficinadobrito.repositories.ClienteRepository;
import com.oficinadobrito.repositories.FornecedorRepository;
import com.oficinadobrito.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private ClienteRepository  clienteRepository;
	
	@Autowired
	private AdministradorRepository  administradorRepository;
	
	@Autowired
	private FornecedorRepository  fornecedorRepository;
	
	@Autowired
	private CarrinhoCompraRepository  carrinhoRepository;

	public Usuario saveUsuario(Usuario u) {
		if(u.getRole() == UsuarioRole.ADMINISTRADOR) {
			Administrador a = new Administrador();
			a.setNome(u.getNome());
			a.setEmail(u.getEmail());
			a.setPassword(new BCryptPasswordEncoder().encode(u.getPassword()));
			a.setTelefone(u.getTelefone());
			a.setImagem(u.getImagem());
			a.setNViagensRevisadas(0);
			a.setRole(u.getRole());
			administradorRepository.save(a);
		}
		else if(u.getRole() == UsuarioRole.FORNECEDOR) {
			Fornecedor f = new Fornecedor();
			f.setNome(u.getNome());
			f.setEmail(u.getEmail());
			f.setPassword(new BCryptPasswordEncoder().encode(u.getPassword()));
			f.setTelefone(u.getTelefone());
			f.setImagem(u.getImagem());
			f.setCNPJ("");
			f.setTipoServico(0);
			f.setRole(u.getRole());
			fornecedorRepository.save(f);
		}
		else {
			Cliente c = new Cliente();
			c.setEmail(u.getEmail());
			c.setPassword(new BCryptPasswordEncoder().encode(u.getPassword()));
			c.setTelefone(u.getTelefone());
			c.setImagem(u.getImagem());
			c.setRG("");
			c.setNumeroViagens(0);
			c.setCartaoCredito("");
			c.setRole(u.getRole());

			clienteRepository.save(c);
			initCarrinho(c);
		}
		return u ;
	}

	public Usuario findById(Integer id) {
		//findById(id) retorna um optional com usuario, so que pegamos o usurio a partir do get do optional
		Optional<Usuario> usr = usuarioRepository.findById(id);
		return usr.get();
	}
	
	public List<Usuario> findall(){
		return usuarioRepository.findAll();
	}
	
	public void initCarrinho(Cliente c) {
		CarrinhoCompra carrinho = new CarrinhoCompra();
		carrinho.setValorTotal(0);
		carrinho.setQuantItems(0);
		carrinho.setCliente(c);
		this.carrinhoRepository.save(carrinho);
	}
}
