package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Donations;

public interface DonationRepository  extends JpaRepository<Donations,Integer>{

}
