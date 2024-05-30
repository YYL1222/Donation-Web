package com.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="donation_types")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Donation_Types {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private int id;
	@Column
	private String type_name;
	@Column
    @OneToMany(mappedBy = "donation_types")
	@JsonIgnore
    private Set<Donations> donations;
}
