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

import com.progress.entities.Person;
import com.progress.services.PersonServices;

@RestController
@RequestMapping("/api/person")
public class PersonController {

	@Autowired
	private PersonServices personServices;

	@PostMapping
	public ResponseEntity<Person> createPerson(@RequestBody Person person) {
		Person savedPerson = personServices.savePerson(person);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedPerson);
	}

	@GetMapping
	public ResponseEntity<List<Person>> getAllPerson() {
		List<Person> person = personServices.getAllPerson();
		return ResponseEntity.ok(person);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
		Person person = personServices.getPersonById(id);
		return ResponseEntity.ok(person);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Person> updatedPerson(@PathVariable Long id, @RequestBody Person updatedPerson) {
		Person person = personServices.updatedPerson(id, updatedPerson);
		return ResponseEntity.ok(person);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
		personServices.deletePerson(id);
		return ResponseEntity.noContent().build();
	}
}
