package br.com.surittec.cliente.controller;

import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.*;

import br.com.surittec.cliente.controller.dto.PessoaRs;
import br.com.surittec.cliente.modelo.Cliente;
import br.com.surittec.cliente.repository.ClienteRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cliente")
@Profile(value = { "prod" })
@CrossOrigin(origins = "http://localhost:3000")
public class ClienteController {

	private ClienteRepository pessoaRepository;

	public ClienteController(ClienteRepository pessoaRepository) {
		this.pessoaRepository = pessoaRepository;
	}

	@GetMapping
	public List<PessoaRs> findAll() {
		List<Cliente> pessoas = pessoaRepository.findAll();

		return pessoas.stream().map(PessoaRs::converter).collect(Collectors.toList());
	}

	@GetMapping("{id}")
	public PessoaRs findByid(@PathVariable("id") Long id) {
		Optional<Cliente> pessoa = pessoaRepository.findById(id);

		if (pessoa.isPresent()) {
			return PessoaRs.converter(pessoa.get());
		}

		return null;
	}

	@PostMapping
	public void savePerson(@RequestBody PessoaRs pessoa) {
		Cliente p = new Cliente();

		p.setNome(pessoa.getNome());
		p.setSobrenome(pessoa.getSobrenome());
		p.setCpf(pessoa.getCpf());
		p.setEndereco(pessoa.getEndereco());
		p.setEmail(pessoa.getEmail());
		p.setTelefone(pessoa.getTelefone());

		pessoaRepository.save(p);
	}

	@PutMapping
	public void updatePerson(@RequestBody PessoaRs pessoa) throws Exception {
		Optional<Cliente> p = pessoaRepository.findById(pessoa.getId());

		if (p.isPresent()) {
			Cliente pessoaSave = p.get();
			
			pessoaSave.setNome(pessoa.getNome());
			pessoaSave.setSobrenome(pessoa.getSobrenome());
			pessoaSave.setCpf(pessoa.getCpf());
			pessoaSave.setEndereco(pessoa.getEndereco());
			pessoaSave.setEmail(pessoa.getEmail());
			pessoaSave.setTelefone(pessoa.getTelefone());

			pessoaRepository.save(pessoaSave);
		} else {
			throw new Exception("Pessoa nao encontrada");
		}
	}

	@DeleteMapping
	public void delete(@RequestBody PessoaRs pessoa) throws Exception {
		Optional<Cliente> p = pessoaRepository.findById(pessoa.getId());

		if (p.isPresent()) {
			pessoaRepository.deleteById(pessoa.getId());
		} else {
			throw new Exception("Pessoa nao encontrada");
		}
	}
}
