package com.mars.bookit.springboot.service;

import com.mars.bookit.springboot.model.EmailRequest;

/**
 * @author tjspitz
 */
public interface EmailService {

	/**
	 * @param details
	 */
	public void sendEmail(EmailRequest details);
}
