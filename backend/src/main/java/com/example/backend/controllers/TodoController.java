package com.example.backend.controllers;


import com.example.backend.errors.TodoNotFoundException;
import com.example.backend.errors.TodoUnSupportedFieldPatchException;
import com.example.backend.models.Todo;
import com.example.backend.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class TodoController {

    @Autowired
    private TodoRepository repository;

    // List all
    @GetMapping("/todos")
    List<Todo> findAll(){return repository.findAll();}

    // Save
    @PostMapping("/todos")
    @ResponseStatus(HttpStatus.CREATED)
    Todo newTodo(@RequestBody(required = false) Todo newTodo){
        return repository.save(newTodo);
    }

    // Find
    @GetMapping("/todos/{id}")
    Todo findOne(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id));
    }

    @PutMapping("/todos/{id}")
    Todo saveOrUpdate(@RequestBody(required = false) Todo newTodo, @PathVariable Long id) {

        return repository.findById(id)
                .map(x -> {
                    x.setTitle(newTodo.getTitle());
                    x.setIsCompleted(newTodo.getIsCompleted());
                    return repository.save(x);
                })
                .orElseGet(() -> {
                    newTodo.setId(id);
                    return repository.save(newTodo);
                });
    }

    @DeleteMapping("/todos/{id}")
    void deleteTodo(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
