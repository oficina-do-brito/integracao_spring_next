package com.oficinadobrito.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oficinadobrito.entities.Administrador;
import com.oficinadobrito.entities.CarrinhoCompra;
import com.oficinadobrito.entities.Cliente;
import com.oficinadobrito.entities.Fornecedor;
import com.oficinadobrito.entities.Usuario;
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
		if(u.getTipoUser()==1) {
			Administrador a = new Administrador();
			a.setNome(u.getNome());
			a.setEmail(u.getEmail());
			a.setPassword(u.getPassword());
			a.setTelefone(u.getTelefone());
			a.setTipoUser(u.getTipoUser());
			a.setImagem(u.getImagem());
			a.setnViagensRevisadas(0);
			administradorRepository.save(a);
		}
		else if(u.getTipoUser()==2) {
			Fornecedor f = new Fornecedor();
			f.setNome(u.getNome());
			f.setEmail(u.getEmail());
			f.setPassword(u.getPassword());
			f.setTelefone(u.getTelefone());
			f.setTipoUser(u.getTipoUser());
			f.setImagem(u.getImagem());
			f.setCNPJ("");
			f.setTipoServico(0);
			fornecedorRepository.save(f);
		}
		else {
			Cliente c = new Cliente();
			c.setEmail(u.getEmail());
			c.setPassword(u.getPassword());
			c.setTelefone(u.getTelefone());
			c.setTipoUser(u.getTipoUser());
			c.setImagem(u.getImagem());
			c.setRG("");
			c.setNumeroViagens(0);
			c.setCartaoCredito("");

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
