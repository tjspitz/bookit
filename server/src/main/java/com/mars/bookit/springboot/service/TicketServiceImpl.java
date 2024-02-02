package com.mars.bookit.springboot.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.mars.bookit.springboot.entity.Ticket;
import com.mars.bookit.springboot.model.Passenger;
import com.mars.bookit.springboot.repository.TicketRepository;

/**
 * @author tjspitz
 */
public class TicketServiceImpl implements TicketService {

    /**
     * @param repository
     */
    public TicketServiceImpl(TicketRepository repository) {
        super();
        this.repository = repository;
    }
    
    private TicketRepository repository;

    @Override
    public List<Ticket> getAllTickets() {
        return repository.findAll();
    }

    @Override
    public Ticket getTicketByPnr(String pnr) {
        Optional<Ticket> ticket = repository.findById(pnr);
        return ticket.isPresent() ? ticket.get() : null;
    }

    @Override
    public Ticket postTicket(Passenger passenger) {
        String pnr = makeNewPnr();
        String firstName = passenger.getFirstName();
        String lastName = passenger.getLastName();
        String fromStation = passenger.getFromStation();
        String toStation = passenger.getToStation();
        String trainNo = passenger.getTrainNo();
        LocalDate travelDate = passenger.getTravelDate();

        LocalDateTime bookedOn = java.time.LocalDateTime.now();
        LocalDateTime lastUpdated = bookedOn;
        String status = "pending";
        double fare = Math.floor(Math.random() * 31) + 50;

        Ticket ticket = new Ticket(pnr, firstName, lastName, fromStation, toStation, trainNo,
                bookedOn, travelDate, lastUpdated, status, fare);

        return repository.save(ticket);
    }

    @Override
    public Ticket putTicketByPnr(Ticket ticket, String pnr) {
        Optional<Ticket> preUpdateTicket = repository.findById(pnr);
        
        if (preUpdateTicket.isPresent()) {
            Ticket postUpdateTicket = preUpdateTicket.get();

            postUpdateTicket.setFirstName(ticket.getFirstName());
            postUpdateTicket.setLastName(ticket.getLastName());
            postUpdateTicket.setToStation(ticket.getToStation());
            postUpdateTicket.setFromStation(ticket.getFromStation());
            postUpdateTicket.setTravelDate(ticket.getTravelDate());
            postUpdateTicket.setLastUpdated(ticket.getLastUpdated());
            postUpdateTicket.setTrainNo(ticket.getTrainNo());
            postUpdateTicket.setFare(postUpdateTicket.getFare() * 1.5);
            
            return repository.save(postUpdateTicket);
        }
        return null;
    }

    @Override
    public void deleteTicketByPnr(String pnr) {
        repository.deleteById(pnr);
    }

    /**
     * utility method to generate the 'PNR' aka ID
     * @return String
     */
    private String makeNewPnr() {
        return UUID
            .randomUUID()
            .toString()
            .replace("-", "")
            .toUpperCase()
            .substring(0, 7);
    }
}
