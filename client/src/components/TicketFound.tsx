import { Button, Card, ListGroup } from 'react-bootstrap';
import { TicketInfo } from '../lib/types';
import { deleteTicket, putTicketConfirmedByPnr } from '../lib/api';

const niceDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US');
};

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
      className="w-50 bg-light"
      border="success"
    >
      <Card.Header>Ticket No. {pnr}</Card.Header>
      <Card.Body>
        <Card.Title className="m-2">
          {firstName}&nbsp;{lastName}
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>From:</b> {fromStation}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>To:</b> {toStation}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Train No.</b> {trainNo}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Booked On:</b> {niceDate(bookedOn)}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Departing On:</b> {niceDate(travelDate)}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Updated On:</b> {niceDate(lastUpdated)}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Ticket Status:</b>{' '}
            <span className={status === 'pending' ? 'pending' : 'confirmed'}>
              {status}
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Ticket Fare:</b> ${fare.toPrecision(4)}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <Button
          className="me-2"
          type="button"
          variant="outline-success"
          onClick={() => putTicketConfirmedByPnr(pnr)}
        >
          Confirm Ticket
        </Button>
        <Button
          type="button"
          variant="outline-danger"
          onClick={() => deleteTicket(pnr)}
        >
          Cancel Ticket
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TicketFound;
