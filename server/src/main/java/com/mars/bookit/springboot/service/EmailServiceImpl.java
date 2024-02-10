package com.mars.bookit.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.mars.bookit.springboot.entity.Email;
import com.mars.bookit.springboot.model.HtmlEmailRequest;
import com.mars.bookit.springboot.model.SimpleEmailRequest;
import com.mars.bookit.springboot.repository.EmailRepository;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

/**
 * @author tjspitz
 */
@Service
public class EmailServiceImpl implements EmailService {

	private final JavaMailSender mailSender;
	private final TemplateEngine templateEngine;
	private final EmailRepository repository;

	/**
	 * @param mailSender
	 * @param templateEngine
	 * @param repository
	 */
	@Autowired
	public EmailServiceImpl(JavaMailSender mailSender, TemplateEngine templateEngine, EmailRepository repository) {
		this.mailSender = mailSender;
		this.templateEngine = templateEngine;
		this.repository = repository;
	}

	@Override
	public void sendSimpleEmail(SimpleEmailRequest details) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(details.getRecipient());
		message.setSubject(details.getSubject());
		message.setText(details.getBody());
		mailSender.send(message);
	}

	@Override
	public void sendHtmlEmail(HtmlEmailRequest details, String templateName, Context context) {
		MimeMessage mimeMessage = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

		try {
			helper.setTo(details.getRecipient());
			helper.setSubject(details.getSubject());
			String htmlContent = templateEngine.process(templateName, context);
			helper.setText(htmlContent, true);
			mailSender.send(mimeMessage);
		} catch (MessagingException e) {
			System.out.println("Error sending HTML email...");
			e.printStackTrace();
		}
	}

	@Override
	public void saveEmailRecord(SimpleEmailRequest details) {
		Email record = new Email();
		record.setRecipient(details.getRecipient());
		record.setSubject(details.getSubject());
		repository.save(record);
	}
}
