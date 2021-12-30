package com.Jianghuai.rest.webservices.restfulwebservices.TodoManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResource {
	
	@Autowired
	private TodoHardcodedService todoService;
	
//	Method: GET
//	URL: /users/{username}/todos
	@GetMapping("/users/{username}/todos")
	public List<Todo> getTodos(@PathVariable String username) {
		return todoService.findAll();
	}
	
//	Method: DELETE
//	URL: /users/{username}/todos/{id}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo_deleted = todoService.deleteById(id);
		
		return (todo_deleted == null) ? (ResponseEntity<Void>) ResponseEntity.notFound() : ResponseEntity.noContent().build();
	}

}