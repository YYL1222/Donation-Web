package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.entity.Users;
@Repository
public interface UserRepository extends JpaRepository<Users,Integer>{
	@Transactional
	@Query(value="select * from users where email=:email",nativeQuery=true)
	Users findByEmail(@Param(value="email") String email);
	
	@Transactional
	@Query(value="select * from users where email=:email and password=:password",nativeQuery=true)
	Users findByEmailPassword(@Param(value="email") String email,@Param(value="password") String password);

	@Transactional
	@Query(value="update users set firstname=:firstname,lastname=:lastname, password=:password, email=:email, role_id=:role_id where id=:id",nativeQuery=true)
	@Modifying
	void updateById(@Param(value="id")int id,@Param(value="firstname")String firstname,@Param(value="lastname")String lastname, @Param(value="email")String email, @Param(value="password")String password, @Param(value="role_id")int role_id);
	
}
