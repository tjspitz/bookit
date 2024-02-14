package com.mars.bookit.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mars.bookit.springboot.entity.Ticket;
import com.mars.bookit.springboot.model.Passenger;
import com.mars.bookit.springboot.service.TicketService;

/**
 * @author tjspitz
 */
@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService service;
    
    /**
     * @param service
     */
    @Autowired
    public TicketController(TicketService service) {
        super();
        this.service = service;
    }

    /**
     * @return ResponseEntity<List><Ticket>
     */
    @GetMapping("")
    public ResponseEntity<List<Ticket>> getAllTickets() {
        return new ResponseEntity<>(service.getAllTickets(), HttpStatus.OK);
    }

    /**
     * @param pnr
     * @return ResponseEntity<Ticket>
     */
    @GetMapping("/{pnr}")
    public ResponseEntity<Ticket> getOneTicket(@PathVariable String pnr) {
        return new ResponseEntity<>(service.getTicketByPnr(pnr), HttpStatus.OK);
    }

    /**
     * @param passenger
     * @return ResponseEntity<Ticket>
     */
    @PostMapping("/new")
    public ResponseEntity<Ticket> postTicket(@RequestBody Passenger passenger) {
        return new ResponseEntity<>(service.postTicket(passenger), HttpStatus.CREATED);
    }

    /**
     * @param ticket
     * @param pnr
     * @return ResponseEntity<Ticket>
     */
    @PutMapping("/update/{pnr}")
    public ResponseEntity<Ticket> putTicketByPnr(
            @RequestBody Ticket ticket, @PathVariable String pnr)
    {
        Ticket updatedTicket = service.putTicketByPnr(ticket, pnr);
        return new ResponseEntity<>(updatedTicket, HttpStatus.OK);
    }

    /**
     * @param ticket
     * @param pnr
     * @return ResponseEntity<Ticket>
     */
    @PutMapping("/confirm/{pnr}")
    public ResponseEntity<Ticket> putTicketConfirmedByPnr(@PathVariable String pnr) {
        Ticket updatedTicket = service.putTicketConfirmedByPnr(pnr);
        return new ResponseEntity<>(updatedTicket, HttpStatus.OK);
    }

    /**
     * @param pnr
     * @return ResponseEntity<HttpStatus>
     */
    @DeleteMapping("/cancel/{pnr}")
    public ResponseEntity<HttpStatus> deleteTicketByPnr(@PathVariable String pnr) {
        service.deleteTicketByPnr(pnr);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
