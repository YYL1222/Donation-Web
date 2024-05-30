package com.dto;

import org.springframework.stereotype.Component;

import com.entity.Donors;
import com.entity.Users;

@Component
public class DonorDTO {
	public Donors donorModelToEntity(Donors donors){

		Donors d = new Donors();
        d.setAddress1(donors.getAddress1());
        d.setAddress2(donors.getAddress2());
        d.setCity(donors.getCity());
        d.setCMA(donors.getCMA());
        d.setCountry(donors.getCountry());
        d.setEmail(donors.getEmail());
        d.setFirstName(donors.getFirstName());
        d.setLastName(donors.getLastName());
        d.setPhone(donors.getPhone());
        d.setUrbanization(donors.getUrbanization());
        d.setZip(donors.getZip());
        return d;

    }
}
