package com.Jianghuai.rest.webservices.restfulwebservices.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Jianghuai.rest.webservices.restfulwebservices.entity.Todo;
import com.Jianghuai.rest.webservices.restfulwebservices.repository.TodoRepository;

@Service
public class TodoService {
	@Autowired
	private TodoRepository repository;
	
	public Todo createTodo(Todo todo) {
		return repository.save(todo);
	}
	public List<Todo> createTodos(List<Todo> todos) {
		return repository.saveAll(todos);
	}
	
	public Todo getTodoById(int id) {
		return repository.getById(id);
	}
	public List<Todo> getTodosByUsername(String username) {
		return repository.findByUsername(username);
	}
	public List<Todo> getAllTodos() {
		return repository.findAll();
	}
	
	public String deleteTodo(int id) {
		repository.deleteById(id);
		return "Todo successfully removed!";
	}
	
	public Todo updateTodo(Todo todo) {
		Todo targetTodo = repository.getById(todo.getId());
		
		targetTodo.setDescription(todo.getDescription());
		targetTodo.setTargetDate(todo.getTargetDate());
		targetTodo.setDone(todo.isDone());
		
		return repository.save(targetTodo);
	}
}