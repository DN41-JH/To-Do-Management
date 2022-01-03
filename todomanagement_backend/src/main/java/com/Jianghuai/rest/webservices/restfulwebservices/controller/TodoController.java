package com.Jianghuai.rest.webservices.restfulwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Jianghuai.rest.webservices.restfulwebservices.entity.Todo;
import com.Jianghuai.rest.webservices.restfulwebservices.service.TodoService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {
	@Autowired
	private TodoService service;
	
	@PostMapping("/users/{username}/todos")
	public Todo addTodo(@PathVariable String username, @RequestBody Todo todo) {
		todo.setUsername(username);
		return service.createTodo(todo);
	}
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getTodos(@PathVariable String username) {
		return service.getTodosByUsername(username);
	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable int id) {
		return service.getTodoById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
		todo.setUsername(username);
		service.updateTodo(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}

	@DeleteMapping("users/{username}/todos/{id}")
	public String deleteTodo(@PathVariable String username, @PathVariable int id) {		
		return service.deleteTodo(id);
	}
}