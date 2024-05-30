package com.dto;

import org.springframework.stereotype.Component;

import com.entity.User_Roles;

@Component
public class RoleDTO {
	public User_Roles roleModelToEntity(User_Roles roles){

		User_Roles ur = new User_Roles();

        ur.setId(roles.getId());
        ur.setRole_name(roles.getRole_name());
        //ur.setUsers(roles.getUsers());

        return ur;
    }
}
