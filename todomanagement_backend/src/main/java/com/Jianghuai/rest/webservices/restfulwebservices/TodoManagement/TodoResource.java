package com.Jianghuai.rest.webservices.restfulwebservices.TodoManagement;

import java.net.URI;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResource {
	
	@Autowired
	private TodoHardcodedService todoService;
	
    // Method: GET
    // URL: /users/{username}/todos
	// Return All the Tasks from the User
	@GetMapping("/users/{username}/todos")
	public List<Todo> getTodos(@PathVariable String username) {
		return todoService.findAll();
	}
	
	// Method: GET
	// URL: /users/{username}/todos/{id}
	// Return the Single Task Object with {id} from the User
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);
	}
	
	// Method: PUT
	// URL: /users/{username}/todos/{id}
	// Return the Single Task Object with {id} after being updated
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
		Todo todoUpdated = todoService.saveTodo(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	// Method: POST
	// URL: /users/{username}/todos/
	// Return the URI of the Newly Created Task Object
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo todoCreated = todoService.saveTodo(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
    // Method: DELETE
    // URL: /users/{username}/todos/{id}
	// Delete the Single Task Object with {id} from the User
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {		
		return (todoService.deleteById(id) == null) ? (ResponseEntity<Void>) ResponseEntity.notFound() : ResponseEntity.noContent().build();
	}
}