package com.example.backend;

import com.example.backend.models.Todo;
import com.example.backend.repositories.TodoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(TodoRepository repository) {
		return args -> {
			repository.save(new Todo("Make dinner", false));
			repository.save(new Todo("Do homework", false));
			repository.save(new Todo("Game all night", true));
		};
	}

}
