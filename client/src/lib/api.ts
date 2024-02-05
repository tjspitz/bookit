import axios from 'axios';
import { Confirmation, Passenger, TicketInfo } from './types';

const baseUrl = 'http://localhost:8080/api/tickets';

export const getTicketByPnr = async (pnr: string): Promise<TicketInfo> => {
  const url = baseUrl + '/' + pnr;
  try {
    const ticket = await axios.get(url);
    return ticket.data;
  } catch (e) {
    console.error(e);
    return {} as TicketInfo;
  }
};

export const postTicket = async (
  passenger: Passenger
): Promise<Confirmation> => {
  const url = baseUrl + '/new';
  try {
    const ticket = await axios.post(url, passenger);
    return ticket.data;
  } catch (e) {
    console.error(e);
    return {} as Confirmation;
  }
};

export const putTicketByPnr = async (
  ticket: TicketInfo,
  pnr: string
): Promise<TicketInfo> => {
  const url = baseUrl + '/update/' + pnr;
  try {
    const updatedTicket = await axios.put(url, ticket);
    return updatedTicket.data;
  } catch (e) {
    console.error(e);
    return {} as TicketInfo;
  }
};

export const putTicketConfirmedByPnr = async (
  pnr: string
): Promise<TicketInfo> => {
  const url = baseUrl + '/confirm/' + pnr;
  try {
    const updatedTicket = await axios.put(url);
    return updatedTicket.data;
  } catch (e) {
    console.error(e);
    return {} as TicketInfo;
  }
};

export const deleteTicket = async (pnr: string): Promise<void> => {
  const url = baseUrl + '/cancel/' + pnr;
  try {
    await axios.delete(url);
  } catch (e) {
    console.error(e);
  }
};
