package com.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name="donor")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Donors {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private int id;
	@Nullable
	private String firstName;
	@Nullable
	private String lastName;
	@Nullable
	private String CMA;
	@Nullable
	private String phone;
	@Nullable
	private String email;
	@Nullable
	private String address1;
	@Nullable
	private String address2;
	@Nullable
	private String city;
	@Nullable
	private String zip;
	@Nullable
	private String country;
	@Nullable
	private String urbanization;
	@Column
	@OneToMany(mappedBy = "donor")
    private Set<Donations> donations;
	
}