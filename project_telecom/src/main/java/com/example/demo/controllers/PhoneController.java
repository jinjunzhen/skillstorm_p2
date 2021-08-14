package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.Account;
import com.example.demo.beans.Phone;
import com.example.demo.services.TeleService;

@RestController
@RequestMapping("/phones")
@CrossOrigin(origins = "*")      //@CrossOrigin(origins = {"http://localhost:4200", "https://prod-server.com"})
public class PhoneController {
	
	@Autowired
	private TeleService service;
	
	
	@PostMapping(value = "/phone")
	public Phone save(@RequestBody Phone phone) { // get the employee JSON from the HTTP request body
		return service.savePhone(phone);
	}
	
	@GetMapping("/all_phones")
	public List<Phone> findAll() {
		return service.findAllPhones();
	}

}
