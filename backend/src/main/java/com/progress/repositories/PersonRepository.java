package com.progress.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.progress.entities.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

	@Query("SELECT u FROM Person u LEFT JOIN FETCH u.measures WHERE u.id = :id")
	Optional<Person> findByIdWithMeasures(@Param("id") Long id);

	Optional<Person> findById(Long id);

	Optional<Person> findByUsername(String username);

}
