package com.mars.bookit.springboot.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author tjspitz
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Ticket {

    @Id
    private String pnr;

    private String email;
    private String firstName;
    private String lastName;
    private String fromStation;
    private String toStation;
    private String trainNo;
    private LocalDateTime bookedOn;

    private LocalDate travelDate;
    private LocalDateTime lastUpdated;
    private String status;
    private double fare;
}
