package com.mars.bookit.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mars.bookit.springboot.entity.Ticket;

/**
 * @author tjspitz
 */
public interface TicketRepository extends JpaRepository<Ticket, String> {

    /**
     * @param pnr
     * @return Ticket
     */
    public Ticket findTicketByPnr(String pnr);
    
    /**
     * @param pnr
     */
    public void deleteTicketByPnr(String pnr);
}
