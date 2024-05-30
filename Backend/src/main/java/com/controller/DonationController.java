package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.entity.Donation_Types;
import com.entity.Donations;
import com.entity.Donors;
import com.service.DonationService;
import com.service.DonorService;
@CrossOrigin
@RestController
@RequestMapping("/dono/")
public class DonationController {
	@Autowired
	DonationService donationService;
	@Autowired
	DonorService donorService;
	
	@RequestMapping(value="/addDonation",method=RequestMethod.POST)
	public ResponseEntity<String> adddonation(@RequestBody Donations donation) {
		donationService.addDonation(donation);
		return new ResponseEntity<>("Donation and donor added", HttpStatus.OK);
	}

	
	@RequestMapping(value="/addDonor",method=RequestMethod.POST)
	public ResponseEntity<String> adddonor(@RequestBody Donors donor) {
		donorService.addDonor(donor);
		return new ResponseEntity<>("Donor added", HttpStatus.OK);
	}
	
	@RequestMapping(value="/display",method=RequestMethod.GET)
	public List<?> display(){
		List<Donations> li=donationService.getAllDonation();
		return li;
	}
	
	@RequestMapping(value="/addDonationType",method=RequestMethod.POST)
	public ResponseEntity<String> addType(@RequestBody Donation_Types type){
		donationService.addType(type);
		return new ResponseEntity<>("Donor Type added", HttpStatus.OK);
	}
	
	@RequestMapping(value="/displayDonationType",method=RequestMethod.GET)
	public List<?> displayType(){
		List<Donation_Types> li=donationService.getAllDonationType();
		return li;
	}
}
