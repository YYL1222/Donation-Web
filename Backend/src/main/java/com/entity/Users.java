package com.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private int id;
	@NonNull
	private String firstname;
	@NonNull
	private String lastname;
	@NonNull
	private String password;
	@NonNull
	private String email;
	@ManyToOne
    @JoinColumn(name = "role_id" , referencedColumnName = "id")
	@JsonIgnoreProperties(value = {"users"})
    private User_Roles roles;
	
}
