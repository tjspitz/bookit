package com.mars.bookit.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mars.bookit.springboot.entity.Email;

public interface EmailRepository extends JpaRepository<Email, Integer> {

}
