import { useState } from 'react';
import { Button, Container, Form, Row, Stack } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const [pnr, setPnr] = useState<string>('');
  const navigate = useNavigate();

  return (
    <main>
      <Container className="m-4 p-2">
        <Row className="text-center m-4">
          <h1>Welcome to BookIt</h1>
        </Row>
        <Row className="text-center m-4 fst-italic">
          <h4>What would you like to do today?</h4>
        </Row>
        <Stack
          direction="horizontal"
          className="m-4"
          gap={4}
        >
          <Button
            className="w-25"
            type="button"
            onClick={() => navigate('/booking')}
          >
            Book a Ticket
          </Button>
          <div className="vr" />
          <Form.Control
            className="me-auto w-50"
            placeholder="Passenger/Ticket No."
            value={pnr}
            onChange={(e) => setPnr(e.target.value.toUpperCase())}
          />
          <Button
            type="button"
            variant="outline-success"
            onClick={() => navigate(`/tickets/${pnr}`)}
          >
            Search
          </Button>
          <div className="vr" />
          <Button
            type="button"
            variant="outline-danger"
            onClick={() => setPnr('')}
          >
            Reset
          </Button>
        </Stack>
      </Container>
      <Container className="m-4">
        <Outlet />
      </Container>
    </main>
  );
};

export default App;
