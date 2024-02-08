package com.mars.bookit.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mars.bookit.springboot.model.EmailRequest;
import com.mars.bookit.springboot.service.EmailService;

@RestController
@RequestMapping("/api/email")
public class EmailController {

	private final EmailService service;

	@Autowired
	public EmailController(EmailService service) {
		this.service = service;
	}

	@PostMapping("/send")
	public String sendEmail(@RequestBody EmailRequest email) {
		service.sendEmail(email);
		return "Success!";
	}
}
