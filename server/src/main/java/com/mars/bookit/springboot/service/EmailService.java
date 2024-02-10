package com.mars.bookit.springboot.service;

import org.thymeleaf.context.Context;

import com.mars.bookit.springboot.model.HtmlEmailRequest;
import com.mars.bookit.springboot.model.SimpleEmailRequest;

/**
 * @author tjspitz
 */
public interface EmailService {

	/**
	 * @param details
	 */
	public void sendSimpleEmail(SimpleEmailRequest details);
	
	/**
	 * @param details
	 * @param templateName
	 * @param context
	 */
	public void sendHtmlEmail(HtmlEmailRequest details, String templateName, Context context);
	
	/**
	 * not in use right now, but available if we want it
	 * @param details
	 */
	public void saveEmailRecord(SimpleEmailRequest details);
}
