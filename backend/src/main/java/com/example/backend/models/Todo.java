package com.example.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Boolean isCompleted;

    public Todo(){}

    public Todo(Long id, String title, Boolean isCompleted){
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }

    public Todo(String title, Boolean isCompleted){
        this.title = title;
        this.isCompleted = isCompleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id){ this.id = id;}

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){this.title = title;}

    public Boolean getIsCompleted(){return isCompleted;}

    public void setIsCompleted(Boolean isCompleted){this.isCompleted = isCompleted;}


    @Override
    public String toString(){
        return "api.Todo{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", isCompleted=" + isCompleted +
                '}';
    }



}
