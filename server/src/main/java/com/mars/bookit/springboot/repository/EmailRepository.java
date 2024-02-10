package com.mars.bookit.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mars.bookit.springboot.entity.Email;

/**
 * currently not in use, but available
 * @author tjspitz
 */
public interface EmailRepository extends JpaRepository<Email, Integer> {

}
