package com.example.backend.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
}
