package com.progress.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.progress.entities.Measures;
import com.progress.repositories.MeasuresRepository;

@Component
@Service
public class MeasuresServices {

	@Autowired
	private MeasuresRepository measuresRepository;

	public List<Measures> getMeasuresByPersonId(Long personId) {
		return measuresRepository.findByPersonId(personId);
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

	public void deleteMeasures(Long id) {
		Measures measures = getMeasuresById(id);
		measuresRepository.delete(measures);
	}
}
