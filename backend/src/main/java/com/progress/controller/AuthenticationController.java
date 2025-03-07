package com.progress.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.progress.config.JWTUtil;
import com.progress.entities.Person;
import com.progress.exception.PersonException;
import com.progress.repositories.PersonRepository;
import com.progress.services.AuthenticationServices;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

	private final AuthenticationServices authenticationServices;
	private final PersonRepository personRepository;
	private final JWTUtil jwtUtil;

	public AuthenticationController(AuthenticationServices authenticationServices, PersonRepository personRepository,
			JWTUtil jwtUtil) {
		this.authenticationServices = authenticationServices;
		this.personRepository = personRepository;
		this.jwtUtil = jwtUtil;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest request) {
		try {
			boolean authenticated = authenticationServices.authenticate(request.getUsername(), request.getPassword());

			if (!authenticated) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
						.body(Map.of("error", "Incorrect username or password"));
			}

			Optional<Person> optionalUser = personRepository.findByUsername(request.getUsername());
			if (optionalUser.isEmpty()) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "User not found"));
			}

			Person user = optionalUser.get();

			Map<String, Object> payload = new HashMap<>();
			payload.put("id", user.getId());
			long expirationMillis = 7 * 24 * 60 * 60 * 1000;
			String token = jwtUtil.generateToken(payload, expirationMillis);

			user.setToken(token);
			personRepository.save(user);

			Map<String, Object> response = new HashMap<>();
			response.put("person", user);

			return ResponseEntity.ok(response);

		} catch (PersonException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(Map.of("error", "Internal Server Error", "details", e.getMessage()));
		}
	}

	public static class LoginRequest {
		private String username;
		private String password;

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
	}
}