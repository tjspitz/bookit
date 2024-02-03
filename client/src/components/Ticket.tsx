import { TicketInfo } from '../lib/types';
import { useLoaderData } from 'react-router-dom';
import TicketNotFound from './TicketNotFound';
import TicketFound from './TicketFound';

const Ticket = () => {
  const ticket: TicketInfo | string = useLoaderData() as TicketInfo;

  if (typeof ticket === 'string') {
    return <TicketNotFound pnr={ticket} />;
  } else {
    return <TicketFound ticket={ticket} />;
  }
};

export default Ticket;
