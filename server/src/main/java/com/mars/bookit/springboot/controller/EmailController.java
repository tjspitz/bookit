package com.mars.bookit.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

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

	@PostMapping("/send-simple")
	public String sendSimpleEmail(@RequestBody EmailRequest email) {
		service.sendSimpleEmail(email);
		return "Success: simple email sent!";
	}
	
	@PostMapping("/send-html")
	public String sendHtmlEmail(@RequestBody EmailRequest email) {
		Context context = new Context();
		context.setVariable("message", email.getBody());
		service.sendHtmlEmail(email, "email", context);
		return "Success: HTML email sent!";
	}
}
