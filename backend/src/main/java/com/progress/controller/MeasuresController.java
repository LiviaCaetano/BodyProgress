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

import com.progress.entities.Measures;
import com.progress.services.MeasuresServices;

@RestController
@RequestMapping("/api/measures")
public class MeasuresController {

	@Autowired
	private MeasuresServices measuresServices;

	@PostMapping
	public ResponseEntity<Measures> createMeasures(@RequestBody Measures measures) {
		Measures savedMeasures = measuresServices.saveMeasures(measures); 
		return ResponseEntity.status(HttpStatus.CREATED).body(savedMeasures);
	}

	@GetMapping
	public ResponseEntity<List<Measures>> getAllMeasures() {
		List<Measures> measures = measuresServices.getAllMeasures();
		return ResponseEntity.ok(measures);
	}

	@GetMapping("/person/{personId}")
	public ResponseEntity<List<Measures>> getMeasuresByPersonId(@PathVariable Long personId) {
		List <Measures> measures = measuresServices.getMeasuresByPersonId(personId);
		return ResponseEntity.ok(measures);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteMeasures(@PathVariable Long id) {
		measuresServices.deleteMeasures(id);
		return ResponseEntity.noContent().build();
	}
}
