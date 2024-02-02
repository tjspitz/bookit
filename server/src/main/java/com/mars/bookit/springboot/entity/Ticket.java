package com.mars.bookit.springboot.entity;

import java.util.Date;

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
    private String firstName;
    private String lastName;
    private String fromStation;
    private String toStation;
    private String trainNo;
    private double fare;
    
    private Date bookedOn;
    private Date lastUpdated;
    private Date travelDate;
    
    private String status;
}

// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")

