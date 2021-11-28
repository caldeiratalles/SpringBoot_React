package br.com.surittec.cliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.surittec.cliente.modelo.Cliente;



@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
