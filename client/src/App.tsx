import { useState } from 'react';
import {
  Button,
  Container,
  Figure,
  Form,
  OverlayTrigger,
  Row,
  Stack,
  Tooltip,
  TooltipProps,
} from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

const App = () => {
  const [pnr, setPnr] = useState<string>('');
  const navigate = useNavigate();

  return (
    <main>
      <Container className="m-4 p-2">
        <Row className="text-center m-4">
          <h1>Welcome to BookIt</h1>
        </Row>
        <Row className="text-center text-muted m-4 fst-italic">
          <h3>What would you like to do today?</h3>
        </Row>
        <Stack
          direction="horizontal"
          className="p-3 m-4 bg-light-semi border border-dark rounded"
          gap={4}
        >
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={BookingTip}
          >
            <Figure.Image
              className="p-2 ms-4 img-btn"
              width={150}
              src={logo}
              alt="train ticket logo"
              onClick={() => navigate('/booking')}
            />
          </OverlayTrigger>
          <div className="vr ms-4" />
          <Form.Control
            className="me-auto w-50 bg-white-semi"
            placeholder="Passenger/Ticket No."
            value={pnr}
            onChange={(e) => setPnr(e.target.value.toUpperCase())}
          />
          <Button
            type="button"
            variant="dark"
            onClick={() => navigate(`/tickets/${pnr}`)}
          >
            Search
          </Button>
          <div className="vr" />
          <Button
            type="button"
            variant="outline-dark"
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

const BookingTip: React.FC<TooltipProps> = (props) => (
  <Tooltip {...props}>Book a new ticket!</Tooltip>
);

export default App;
