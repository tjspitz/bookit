package com.mars.bookit.springboot.service;

import org.thymeleaf.context.Context;

import com.mars.bookit.springboot.model.EmailRequest;

/**
 * @author tjspitz
 */
public interface EmailService {

	/**
	 * @param details
	 */
	public void sendSimpleEmail(EmailRequest details);
	
	/**
	 * @param details
	 */
	public void sendHtmlEmail(EmailRequest details, String templateName, Context context);
	
	/**
	 * @param email
	 */
	public void saveEmailRecord(EmailRequest details);
}
