package com.progress.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.progress.entities.Person;
import com.progress.repositories.PersonRepository;

@Service
public class PersonServices {

	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	public Person register(Person person) {
		String encodedPassword = passwordEncoder.encode(person.getPasswordHash());
		person.setPasswordHash(encodedPassword);
		return personRepository.save(person);
	}

	public Person savePerson(Person person) {
		if (person.getId() == null) {
			String encodedPassword = passwordEncoder.encode(person.getPasswordHash());
			person.setPasswordHash(encodedPassword);
		} else {
			Person existingPerson = personRepository.findById(person.getId()).orElse(null);
			if (existingPerson != null && !existingPerson.getPasswordHash().equals(person.getPasswordHash())) {
				String encodedPassword = passwordEncoder.encode(person.getPasswordHash());
				person.setPasswordHash(encodedPassword);
			}
		}
		return personRepository.save(person);
	}

	public boolean checkPassword(String rawPassword, String encodedPassword) {
		return passwordEncoder.matches(rawPassword, encodedPassword);
	}

	public List<Person> getAllPerson() {
		return personRepository.findAll();
	}

	public Person getPersonById(Long id) {
		return personRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Person with ID " + id + " not found"));
	}

	public Person updatedPerson(Long id, Person updatedPerson) {
		Person existingPerson = personRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Pessoa não encontrada com ID: " + id));
		return personRepository.save(existingPerson);
	}

	public void deletePerson(Long id) {
		Person person = getPersonById(id);
		personRepository.delete(person);
	}

	@Transactional
	public Person getPersonWithMeasures(Long personId) {
		return personRepository.findByIdWithMeasures(personId)
				.orElseThrow(() -> new RuntimeException("Person not found"));

	}
}
