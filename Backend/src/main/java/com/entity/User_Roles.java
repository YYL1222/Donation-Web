package com.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="roles")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User_Roles {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private int id;
	@Column
	private String role_name;
	
	@Column
    @OneToMany(mappedBy = "roles")
    private Set<Users> users;
}
