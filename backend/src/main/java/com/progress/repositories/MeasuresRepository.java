package com.progress.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.progress.entities.Measures;

@Repository
public interface MeasuresRepository extends JpaRepository<Measures, Long> {
	List<Measures> findByPersonId(Long personId);

	Optional<Measures> findById(Long id);
}
