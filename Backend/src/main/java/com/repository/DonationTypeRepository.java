package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Donation_Types;

public interface DonationTypeRepository extends JpaRepository<Donation_Types,Integer>{

}
