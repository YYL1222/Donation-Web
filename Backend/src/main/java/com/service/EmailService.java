package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	// The email service should be called when a new donation is created

	@Autowired
	private JavaMailSender mailSender;

	/*
	 * to = "John.doe@example.com"; subject = "password reset request, ${}"; body =
	 * "http://localhost:8080/leave/passwordReset";
	 */
	public void sendEmail(String to, String subject, String body) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setSubject(subject);
		message.setText(body);
		message.setFrom("pwhite.testsmtpserver@gmail.com");
		mailSender.send(message);
	}
}
