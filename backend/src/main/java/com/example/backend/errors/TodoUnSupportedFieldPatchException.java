package com.example.backend.errors;

import java.util.Set;

public class TodoUnSupportedFieldPatchException extends RuntimeException {

    public TodoUnSupportedFieldPatchException(Set<String> keys){
        super("Field " + keys.toString() + " update is not allowed.");
    }
}