package com.mars.bookit.springboot.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author tjspitz
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Passenger {

    private String email;
    private String firstName;
    private String lastName;
    private String fromStation;
    private String toStation;
    private String trainNo;
    private LocalDate travelDate;
}
