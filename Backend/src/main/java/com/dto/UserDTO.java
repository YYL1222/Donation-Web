package com.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.entity.Users;


@Component
public class UserDTO {
	@Autowired
	private RoleDTO roleDTO;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    public Users userModelToEntity(Users users){

        Users u = new Users();
        u.setFirstname(users.getFirstname());
        u.setLastname(users.getLastname());
        u.setPassword(this.bCryptPasswordEncoder.encode(users.getPassword()));
        System.out.println("In DTO: "+u.getPassword());
        System.out.println("In DTO: "+users.getRoles());
        u.setEmail(users.getEmail());
        u.setRoles(roleDTO.roleModelToEntity(users.getRoles()));
        
        return u;

    }
}
