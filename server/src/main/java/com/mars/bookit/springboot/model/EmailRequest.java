package com.mars.bookit.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author tjspitz
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmailRequest {

	private String recipient;
	private String subject;
	private String body;
	
}
