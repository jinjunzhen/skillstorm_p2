package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.Account;
import com.example.demo.data.AccountRepository;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = {"http://localhost:4200", "https://prod-server.com"})
public class AccountController {
	
	@Autowired
	private AccountRepository repository;
	
	//@RequestMapping(method = RequestMethod.POST, value = "/employee") // HandlerMapping: knows all of the potential "routes" for Dispatcher to refer
	//@ResponseBody // whatever is returned is written directly to the HTTP response body
	// by default: DispatcherServlet is going to expect a String to give to a ViewResolver to send the user to another HTML/JSP/page
	@PostMapping(value = "/account")
	public Account save(@RequestBody Account account) { // get the employee JSON from the HTTP request body
		return repository.save(account);
	}
	
	@GetMapping("/account/{id}")
	public ResponseEntity<Account> findById(@PathVariable Integer id) {
		Optional<Account> optional = repository.findById(id);
		return optional.isPresent() ? ResponseEntity.ok(optional.get()) : ResponseEntity.badRequest().build();
	}

	

}
