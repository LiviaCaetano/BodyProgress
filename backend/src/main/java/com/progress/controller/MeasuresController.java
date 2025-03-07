package com.progress.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.progress.config.JWTUtil;
import com.progress.entities.Measures;
import com.progress.services.MeasuresServices;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/measures")
public class MeasuresController {

	@Autowired
	private MeasuresServices measuresServices;

	@Autowired
	private JWTUtil jwtUtil;

	private boolean isValidToken(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		return token != null && token.startsWith("Bearer ") && jwtUtil.validateToken(token.substring(7));
	}

	@PostMapping
	public ResponseEntity<?> createMeasures(@RequestBody Measures measures, HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		Measures savedMeasures = measuresServices.saveMeasures(measures);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedMeasures);
	}

	@GetMapping
	public ResponseEntity<?> getAllMeasures(HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		List<Measures> measures = measuresServices.getAllMeasures();
		return ResponseEntity.ok(measures);
	}

	@GetMapping("/person/{personId}")
	public ResponseEntity<?> getMeasuresByPersonId(@PathVariable Long personId, HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		try {
			List<Measures> measures = measuresServices.getMeasuresByPersonId(personId);
			return ResponseEntity.ok(measures);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMeasures(@PathVariable Long id, HttpServletRequest request) {
		if (!isValidToken(request)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Access denied: Invalid Token.");
		}

		measuresServices.deleteMeasures(id);
		return ResponseEntity.noContent().build();
	}
}
