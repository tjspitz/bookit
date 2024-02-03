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
  const { pnr, status, fare } = confirmation;

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
            variant="info"
          >
            <b>PNR:</b> {pnr}
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="info"
          >
            <b>Status:</b> {status}
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="info"
          >
            <br>Fare:</br> ${fare.toPrecision(2)}
          </ListGroup.Item>
        </ListGroup>
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
