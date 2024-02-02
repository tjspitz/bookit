package com.mars.bookit.springboot.service;

import java.util.List;

import com.mars.bookit.springboot.entity.Ticket;
import com.mars.bookit.springboot.model.Passenger;

/**
 * @author tjspitz
 */
public interface TicketService {

    /**
     * @return List<Ticket>
     */
    public List<Ticket> getAllTickets();
    
    /**
     * @param pnr
     * @return Ticket
     */
    public Ticket getTicketByPnr(String pnr);
    
    /**
     * @param passenger
     * @return Ticket
     */
    public Ticket postTicket(Passenger passenger);
    
    /**
     * @param ticket
     * @param pnr
     * @return Ticket
     */
    public Ticket putTicketByPnr(Ticket ticket, String pnr);
    
    /**
     * @param pnr
     */
    public void deleteTicketByPnr(String pnr);
}
