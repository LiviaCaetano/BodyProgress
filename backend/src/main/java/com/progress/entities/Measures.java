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

	private Double relaxedArmL;

	private Double relaxedArmR;

	private Double contractedArmL;

	private Double contractedArmR;

	private Double forearmL;

	private Double forearmR;

	private Double haunchL;

	private Double haunchR;

	private Double calfL;

	private Double calfR;

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

	public Measures(Long id, Long personId, Double relaxedArmL, Double relaxedArmR, Double contractedArmL,
			Double contractedArmR, Double forearmL, Double forearmR, Double haunchL, Double haunchR, Double calfL,
			Double calfR, Double relaxedChest, Double contractedChest, Double wait, Double abdomen, Double hip,
			Double shoulder, Double currentWeight, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.personId = personId;
		this.relaxedArmL = relaxedArmL;
		this.relaxedArmR = relaxedArmR;
		this.contractedArmL = contractedArmL;
		this.contractedArmR = contractedArmR;
		this.forearmL = forearmL;
		this.forearmR = forearmR;
		this.haunchL = haunchL;
		this.haunchR = haunchR;
		this.calfL = calfL;
		this.calfR = calfR;
		this.relaxedChest = relaxedChest;
		this.contractedChest = contractedChest;
		this.wait = wait;
		this.abdomen = abdomen;
		this.hip = hip;
		this.shoulder = shoulder;
		this.currentWeight = currentWeight;
		this.createdAt = createdAt;
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

	public Double getRelaxedArmL() {
		return relaxedArmL;
	}

	public void setRelaxedArmL(Double relaxedArmL) {
		this.relaxedArmL = relaxedArmL;
	}

	public Double getRelaxedArmR() {
		return relaxedArmR;
	}

	public void setRelaxedArmR(Double relaxedArmR) {
		this.relaxedArmR = relaxedArmR;
	}

	public Double getContractedArmL() {
		return contractedArmL;
	}

	public void setContractedArmL(Double contractedArmL) {
		this.contractedArmL = contractedArmL;
	}

	public Double getContractedArmR() {
		return contractedArmR;
	}

	public void setContractedArmR(Double contractedArmR) {
		this.contractedArmR = contractedArmR;
	}

	public Double getForearmL() {
		return forearmL;
	}

	public void setForearmL(Double forearmL) {
		this.forearmL = forearmL;
	}

	public Double getForearmR() {
		return forearmR;
	}

	public void setForearmR(Double forearmR) {
		this.forearmR = forearmR;
	}

	public Double getHaunchL() {
		return haunchL;
	}

	public void setHaunchL(Double haunchL) {
		this.haunchL = haunchL;
	}

	public Double getHaunchR() {
		return haunchR;
	}

	public void setHaunchR(Double haunchR) {
		this.haunchR = haunchR;
	}

	public Double getCalfL() {
		return calfL;
	}

	public void setCalfL(Double calfL) {
		this.calfL = calfL;
	}

	public Double getCalfR() {
		return calfR;
	}

	public void setCalfR(Double calfR) {
		this.calfR = calfR;
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

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
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
