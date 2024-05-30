package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Donors;

public interface DonorRepository extends JpaRepository<Donors,Integer>{

}
