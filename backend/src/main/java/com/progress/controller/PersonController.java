package com.progress.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.progress.config.JWTUtil;
import com.progress.entities.Person;
import com.progress.services.PersonServices;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/person")
public class PersonController {

	@Autowired
	private PersonServices personServices;

	@Autowired
	private JWTUtil jwtUtil;

	private boolean isValidToken(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		return token != null && token.startsWith("Bearer ") && jwtUtil.validateToken(token.substring(7));
	}

	@PostMapping
	public ResponseEntity<?> createPerson(@RequestBody Person person, HttpServletRequest request) {
		Person savedPerson = personServices.savePerson(person);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedPerson);
	}

	@GetMapping
	public ResponseEntity<?> getAllPerson(HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		List<Person> person = personServices.getAllPerson();
		return ResponseEntity.ok(person);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getPersonById(@PathVariable Long id, HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		try {

			Person person = personServices.getPersonById(id);
			return ResponseEntity.ok(person);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updatedPerson(@PathVariable Long id, @RequestBody Person updatedPerson,
			HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		Person person = personServices.updatedPerson(id, updatedPerson);
		return ResponseEntity.ok(person);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletePerson(@PathVariable Long id, HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		personServices.deletePerson(id);
		return ResponseEntity.noContent().build();
	}
}