import { Card, ListGroup } from 'react-bootstrap';
import { TicketInfo } from '../lib/types';

const TicketFound = ({ ticket }: { ticket: TicketInfo }) => {
  const {
    pnr,
    firstName,
    lastName,
    fromStation,
    toStation,
    trainNo,
    bookedOn,
    travelDate,
    lastUpdated,
    status,
    fare,
  } = ticket;

  return (
    <Card
      className="w-50"
      border="success"
    >
      <Card.Header>Ticket No. {pnr}</Card.Header>
      <Card.Body>
        <Card.Title className="m-2">
          {firstName}&nbsp;{lastName}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>From: {fromStation}</ListGroup.Item>
          <ListGroup.Item>To: {toStation}</ListGroup.Item>
          <ListGroup.Item>Train No.: {trainNo}</ListGroup.Item>
          <ListGroup.Item>Booked On: {bookedOn.toString()}</ListGroup.Item>
          <ListGroup.Item>Departing On: {travelDate.toString()}</ListGroup.Item>
          <ListGroup.Item>Updated On: {lastUpdated.toString()}</ListGroup.Item>
          <ListGroup.Item>Ticket Status: {status}</ListGroup.Item>
          <ListGroup.Item>Ticket Fare: {fare}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TicketFound;
