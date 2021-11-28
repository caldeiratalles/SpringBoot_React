package br.com.surittec.cliente;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
@EnableSpringDataWebSupport
@EnableCaching
//@EnableSwagger2
public class ClientesApplication {	
	public static void main(String[] args) {
		SpringApplication.run(ClientesApplication.class, args);
	}
}
