package com.Jianghuai.rest.webservices.restfulwebservices.TodoManagement;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28Minutes", "Dance", new SimpleDateFormat("yyyy-MM-dd").format(new Date()), false));
		todos.add(new Todo(++idCounter, "in28Minutes", "Eat", new SimpleDateFormat("yyyy-MM-dd").format(new Date()), false));
		todos.add(new Todo(++idCounter, "in28Minutes", "Learn", new SimpleDateFormat("yyyy-MM-dd").format(new Date()), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) return todo;
		}
		
		return null;
	}
	
	public Todo updateTodo(Todo todo) {
		deleteById(todo.getId());
		todos.add(todo);
		return todo;
	}
	
	public Todo createTodo(Todo todo) {
		todo.setId(++idCounter);
		todos.add(todo);
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null) return null;
		
		todos.remove(todo);
		return todo;
	}
}
