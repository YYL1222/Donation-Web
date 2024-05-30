package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.DonorDTO;
import com.entity.Donors;
import com.repository.DonorRepository;

@Service
public class DonorService {
	@Autowired
	DonorRepository dr;
	@Autowired
	DonorDTO donorDTO;
	
	public Donors addDonor(Donors donor) {
		Donors currDonor = donorDTO.donorModelToEntity(donor);
		if(currDonor==null) return null;
		dr.save(currDonor);
		return currDonor;
	}
}
