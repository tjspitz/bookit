import axios from 'axios';
import { Confirmation, Passenger, TicketInfo } from './types';

const baseTicketUrl = 'http://localhost:8080/api/tickets';
const baseEmailUrl = 'http://localhost:8080/api/email';

export const getTicketByPnr = async (pnr: string): Promise<TicketInfo> => {
  const url = baseTicketUrl + '/' + pnr;
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
  const url = baseTicketUrl + '/new';
  try {
    const { data } = await axios.post(url, passenger);
    await postEmailConfirmation(data);
    return data;
  } catch (e) {
    console.error(e);
    return {} as Confirmation;
  }
};

export const putTicketByPnr = async (
  ticket: TicketInfo,
  pnr: string
): Promise<TicketInfo> => {
  const url = baseTicketUrl + '/update/' + pnr;
  try {
    const { data } = await axios.put(url, ticket);
    return data;
  } catch (e) {
    console.error(e);
    return {} as TicketInfo;
  }
};

export const putTicketConfirmedByPnr = async (
  pnr: string
): Promise<TicketInfo> => {
  const url = baseTicketUrl + '/confirm/' + pnr;
  try {
    const { data } = await axios.put(url);
    return data;
  } catch (e) {
    console.error(e);
    return {} as TicketInfo;
  }
};

export const deleteTicket = async (pnr: string): Promise<void> => {
  const url = baseTicketUrl + '/cancel/' + pnr;
  try {
    await axios.delete(url);
  } catch (e) {
    console.error(e);
  }
};

/**
 * @description takes Confirmation-shaped arg,
 * converts to the type expected by the backend
 * @param confirmation
 */
const postEmailConfirmation = async (
  confirmation: Confirmation
): Promise<void> => {
  console.log('confirmation: ', confirmation);

  const url = baseEmailUrl + '/send-html';
  const details = {
    recipient: confirmation.email,
    subject: 'Your BookIt Booking',
    pnr: confirmation.pnr,
    travelDate: confirmation.travelDate,
    fare: confirmation.fare,
  };

  console.log('details: ', details);
  try {
    await axios.post(url, details);
    console.log('Email sent to: ', details.recipient, ' successfully!');
  } catch (e) {
    console.log('Email to ', details.recipient, ' failed to send!');
    console.error(e);
  }
};
