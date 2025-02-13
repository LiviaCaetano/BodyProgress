package com.progress.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.progress.entities.Person;
import com.progress.repositories.PersonRepository;

@Service
public class PersonServices {

	@Autowired
	private PersonRepository personRepository;

	// salva e atualiza
	public Person savePerson(Person person) {
		return personRepository.save(person);
	}

	// busca de todos
	public List<Person> getAllPerson() {
		return personRepository.findAll();
	}

	// Busca pelo id
	public Person getPersonById(Long id) {
		return personRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Person with ID " + id + " not found"));
	}

	// deleta
	public void deletePerson(Long id) {
		Person person = getPersonById(id);
		personRepository.delete(person);
	}
}
