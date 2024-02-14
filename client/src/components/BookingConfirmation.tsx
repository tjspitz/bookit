import { Dispatch, SetStateAction } from 'react';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { Confirmation } from '../lib/types';

const BookingConfirmation = ({
  confirmation,
  showConfirmation,
  setShowConfirmation,
}: {
  confirmation: Confirmation;
  showConfirmation: boolean;
  setShowConfirmation: Dispatch<SetStateAction<boolean>>;
}) => {
  const { email, pnr, status, fare } = confirmation;

  return (
    <Modal
      show={showConfirmation}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Ticket Booked!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item
            action
            variant="light"
          >
            <b>PNR:</b> {pnr}
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="light"
          >
            <b>Status:</b> {status}
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="light"
          >
            <b>Fare:</b> ${fare.toPrecision(4)}
          </ListGroup.Item>
        </ListGroup>
        <p><em>A confirmation has been sent to {email}.</em></p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowConfirmation(!showConfirmation)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingConfirmation;
