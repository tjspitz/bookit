import { useLoaderData } from 'react-router-dom';
import { TicketInfo } from '../lib/types';
import TicketFound from './sub_Ticket/TicketFound';
import TicketNotFound from './sub_Ticket/TicketNotFound';

const Ticket = () => {
  const ticket: TicketInfo | string = useLoaderData() as TicketInfo;

  if (typeof ticket === 'string') {
    return <TicketNotFound pnr={ticket} />;
  } else {
    return <TicketFound ticket={ticket} />;
  }
};

export default Ticket;
