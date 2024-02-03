import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const TicketNotFound = ({ pnr }: { pnr: string }) => {
  const navigate = useNavigate();
  
  return (
    <Card
      className="w-50"
      border="danger"
    >
      <Card.Header>Ticket No. {pnr}</Card.Header>
      <Card.Body>
        <Card.Title>Error</Card.Title>
        <Card.Text>No matching ticket was found.</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          type="button"
          variant="outline-danger"
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TicketNotFound;
