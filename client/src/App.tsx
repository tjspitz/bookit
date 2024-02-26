import { useState } from 'react';
import {
  Container,
  Figure,
  OverlayTrigger,
  Row,
  Stack,
} from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import SearchBar from './components/SearchBar';
import { BookingTip } from './components/Tooltips';

const App = () => {
  const [pnr, setPnr] = useState<string>('');
  const navigate = useNavigate();

  return (
    <main>
      <Container className="p-2" fluid>
        <Row className="text-center m-4">
          <h1>Welcome to BookIt</h1>
        </Row>
        <Row className="text-center text-muted m-4 fst-italic">
          <h3>What would you like to do today?</h3>
        </Row>
        <Stack
          direction="horizontal"
          className="p-3 m-5 bg-light-semi border border-dark rounded"
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
          <div className="vr" />
          <SearchBar
            pnr={pnr}
            setPnr={setPnr}
          />
        </Stack>
      </Container>
      <Container className="mt-4 ms-5">
        <Outlet />
      </Container>
    </main>
  );
};

export default App;
