package br.com.surittec.cliente.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.surittec.cliente.modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Optional<Usuario> findByEmail(String email);

}
