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

	public Email(String recipient, String subject) {
		super();
		this.recipient = recipient;
		this.subject = subject;
	}
}
