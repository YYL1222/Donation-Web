package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Donation_Types;
import com.entity.Donations;
import com.repository.DonationRepository;
import com.repository.DonationTypeRepository;

@Service
public class DonationService {
	@Autowired
	DonationRepository dr;
	@Autowired
	DonationTypeRepository dtr;
	@Autowired
	EmailService es;
	public Donations addDonation(Donations donation) {
		es.sendEmail(donation.getDonor().getEmail(), 
				"Recent Donation Confirmation To: "+donation.getDonation_types().getType_name(),
				"Thank you for your recent contribution to "+donation.getDonation_types().getType_name()+ " of the amount: " +donation.getAmount());
		dr.save(donation);
		return donation;
	}

	public List<Donations> getAllDonation() {
		// TODO Auto-generated method stub
		return dr.findAll();
	}
	
	public List<Donation_Types> getAllDonationType(){
		return dtr.findAll();
	}
	
	public Donation_Types addType(Donation_Types type) {
		return dtr.save(type);
	}
}
