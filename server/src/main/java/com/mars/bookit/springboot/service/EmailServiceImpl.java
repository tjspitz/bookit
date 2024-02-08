package com.mars.bookit.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.mars.bookit.springboot.model.EmailRequest;

/**
 * @author tjspitz
 */
@Service
public class EmailServiceImpl implements EmailService {

	private final JavaMailSender mailSender;
	
	/**
	 * @param repository
	 */
	@Autowired
	public EmailServiceImpl(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
	
	@Override
	public void sendEmail(EmailRequest details) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(details.getRecipient());
		message.setSubject(details.getSubject());
		message.setText(details.getBody());
		mailSender.send(message);
	}
}
