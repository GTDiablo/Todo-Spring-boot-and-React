package com.example.backend.errors;

public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException(Long id) { super("Todo id not found: " + id);}
}
