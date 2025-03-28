package com.progress.services;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.progress.entities.Measures;
import com.progress.entities.Person;
import com.progress.repositories.MeasuresRepository;

@Component
@Service
public class MeasuresServices {

	@Autowired
	private MeasuresRepository measuresRepository;

	public List<Measures> getMeasuresByPersonId(Long personId) {
	    List<Measures> measures = measuresRepository.findByPersonId(personId);

	    if (measures.isEmpty()) {
	        throw new NoSuchElementException("No measurements found for ID: " + personId);
	    }

	    return measures;
	}

	public Measures saveMeasures(Measures measures) {
		return measuresRepository.save(measures);
	}

	public List<Measures> getAllMeasures() {
		return measuresRepository.findAll();
	}

	public Measures getMeasuresById(Long id) {
		return measuresRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Measure with ID " + "not found"));
	}
	
	public Measures updatedMeasures(Long id, Person updatedMeasures) {
		Measures existingMeasures = measuresRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Person not found with ID: " + id));
		return measuresRepository.save(existingMeasures);
	}


	public void deleteMeasures(Long id) {
		Measures measures = getMeasuresById(id);
		measuresRepository.delete(measures);
	}
}
