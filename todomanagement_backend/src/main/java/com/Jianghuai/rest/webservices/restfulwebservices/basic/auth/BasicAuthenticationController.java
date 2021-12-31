package com.Jianghuai.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	@GetMapping(path = "/basic_auth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You Are Authorized!");
	}
}