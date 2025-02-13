package com.progress.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Table(name = "measures")
@Entity
public class Measures implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "person_id", nullable = false)
	private Long personId;

	private Double relaxedArm;

	private Double contractedArm;

	private Double forearm;

	private Double haunch;

	private Double calf;

	private Double relaxedChest;

	private Double contractedChest;

	private Double wait;

	private Double abdomen;

	private Double hip;

	private Double shoulder;

	private Double currentWeight;

	private LocalDateTime createdAt;

	public Measures() {
	}

	public Measures(Long id, Long personId, Double relaxedArm, Double contractedArm, Double forearm, Double haunch,
			Double calf, Double relaxedChest, Double contractedChest, Double wait, Double abdomen, Double hip,
			Double shoulder, Double currentWeight) {
		this.id = id;
		this.personId = personId;
		this.relaxedArm = relaxedArm;
		this.contractedArm = contractedArm;
		this.forearm = forearm;
		this.haunch = haunch;
		this.calf = calf;
		this.relaxedChest = relaxedChest;
		this.contractedChest = contractedChest;
		this.wait = wait;
		this.abdomen = abdomen;
		this.hip = hip;
		this.shoulder = shoulder;
		this.currentWeight = currentWeight;
	}

	@PrePersist
	protected void onCreate() {
		createdAt = LocalDateTime.now();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getPersonId() {
		return personId;
	}

	public void setPersonId(Long personId) {
		this.personId = personId;
	}

	public Double getRelaxedArm() {
		return relaxedArm;
	}

	public void setRelaxedArm(Double relaxedArm) {
		this.relaxedArm = relaxedArm;
	}

	public Double getContractedArm() {
		return contractedArm;
	}

	public void setContractedArm(Double contractedArm) {
		this.contractedArm = contractedArm;
	}

	public Double getForearm() {
		return forearm;
	}

	public void setForearm(Double forearm) {
		this.forearm = forearm;
	}

	public Double getHaunch() {
		return haunch;
	}

	public void setHaunch(Double haunch) {
		this.haunch = haunch;
	}

	public Double getCalf() {
		return calf;
	}

	public void setCalf(Double calf) {
		this.calf = calf;
	}

	public Double getRelaxedChest() {
		return relaxedChest;
	}

	public void setRelaxedChest(Double relaxedChest) {
		this.relaxedChest = relaxedChest;
	}

	public Double getContractedChest() {
		return contractedChest;
	}

	public void setContractedChest(Double contractedChest) {
		this.contractedChest = contractedChest;
	}

	public Double getWait() {
		return wait;
	}

	public void setWait(Double wait) {
		this.wait = wait;
	}

	public Double getAbdomen() {
		return abdomen;
	}

	public void setAbdomen(Double abdomen) {
		this.abdomen = abdomen;
	}

	public Double getHip() {
		return hip;
	}

	public void setHip(Double hip) {
		this.hip = hip;
	}

	public Double getShoulder() {
		return shoulder;
	}

	public void setShoulder(Double shoulder) {
		this.shoulder = shoulder;
	}

	public Double getCurrentWeight() {
		return currentWeight;
	}

	public void setCurrentWeight(Double currentWeight) {
		this.currentWeight = currentWeight;
	}
	
	public LocalDateTime getCreatedAt() {
		return createdAt;
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
		Measures other = (Measures) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
