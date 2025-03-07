package com.progress.entities;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Table(name = "person")
@Entity
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Name is required")
	private String name;

	@NotBlank(message = "Username is required")
	@Pattern(regexp = "^[a-z0-9]+$", message = "Username must be all lowercase containing only letters and numbers")
	private String username;

	@NotBlank(message = "Password is required")
	@Size(min = 6, message = "Password must be at least 6 characters long")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String passwordHash;

	@Column(name = "date_of_birth")
	private LocalDate dateOfBirth;

	private String gender;

	private Double height;

	private String token;

	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "person_id", referencedColumnName = "id", insertable = false, updatable = false)
	private List<Measures> measures;

	public Person() {
	}

	public Person(Long id, @NotBlank(message = "Name is required") String name,
			@NotBlank(message = "Username is required") @Pattern(regexp = "^[a-z0-9]+$", message = "Username must be all lowercase containing only letters and numbers") String username,
			@NotBlank(message = "Password is required") @Size(min = 6, message = "Password must be at least 6 characters long") String passwordHash,
			LocalDate dateOfBirth, String gender, Double height, String token, List<Measures> measures) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.passwordHash = passwordHash;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.height = height;
		this.token = token;
		this.measures = measures;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@JsonProperty("username")
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public List<Measures> getMeasures() {
		return measures;
	}

	public void setMeasures(List<Measures> measures) {
		this.measures = measures;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Person other = (Person) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
