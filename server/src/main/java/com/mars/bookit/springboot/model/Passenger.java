package com.mars.bookit.springboot.model;

import java.util.Date;

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

    private String name;
    private String fromStation;
    private String toStation;
    private String trainNo;
    private Date travelDate;
}
