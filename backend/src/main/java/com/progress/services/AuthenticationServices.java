package com.progress.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.progress.repositories.PersonRepository;

@Service
public class AuthenticationServices {

    private final PersonRepository personRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthenticationServices(PersonRepository personRepository, BCryptPasswordEncoder passwordEncoder) {
        this.personRepository = personRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean authenticate(String username, String password) {
        return personRepository.findByUsername(username)
                .map(person -> passwordEncoder.matches(password, person.getPasswordHash()))
                .orElse(false);
    }

	public boolean userExists(String username) {
		return false;
	}
}