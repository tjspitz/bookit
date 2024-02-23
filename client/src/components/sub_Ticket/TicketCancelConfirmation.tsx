import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const TicketCancelConfirmation = ({ pnr }: { pnr: string }) => {
  const navigate = useNavigate();

  return (
    <Modal
      show={true}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>Ticket No. {pnr}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You have successfully canceled your booking. Come back anytime!
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="dark"
          onClick={() => navigate('/booking')}
        >
          Book New Ticket
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketCancelConfirmation;
