package com.mars.bookit.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Email {

	@Id
	private int id;
	private String recipient;
	private String subject;
	private String body;

	public Email(String recipient, String subject, String body) {
		super();
		this.recipient = recipient;
		this.subject = subject;
		this.body = body;
	}
}
