import axios from 'axios';
import { Confirmation, Passenger, TicketInfo } from './types';

const baseUrl = 'http://localhost:8080/api/tickets';

export const getTicketByPnr = async (pnr: string): Promise<TicketInfo> => {
  const url = baseUrl + '/' + pnr;
  const ticket = await axios.get(url);
  return ticket.data;
};

export const postTicket = async (
  passenger: Passenger
): Promise<Confirmation> => {
  const url = baseUrl + '/new';
  const ticket = await axios.post(url, passenger);
  return ticket.data;
};
