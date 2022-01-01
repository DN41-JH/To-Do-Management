package com.Jianghuai.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	@GetMapping(path = "/jpa/basic_auth")
	public AuthenticationBean authenticationBean() {
		return new AuthenticationBean("You Are Authorized!");
	}
}