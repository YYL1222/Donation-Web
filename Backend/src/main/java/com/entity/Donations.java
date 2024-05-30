package com.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="donations")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Donations {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private int id;
	@Column
	private double amount;
	@Column
	private boolean recurring;
	@Column
	private Date date;
	@ManyToOne
    @JoinColumn(name = "donationType_id" , referencedColumnName = "id")
	@JsonIgnoreProperties(value = {"donations"})
    private Donation_Types donation_types;
	@ManyToOne(cascade= {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinColumn(name = "donor_id" , referencedColumnName = "id")
	@JsonIgnoreProperties(value = {"donations"})
    private Donors donor;
	
	
}
