package com.Jianghuai.rest.webservices.restfulwebservices.TodoManagement;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Long> {
	List<Todo> findByUsername(String username);
	
}
