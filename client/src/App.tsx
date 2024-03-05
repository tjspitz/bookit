import { useState } from 'react';
import { Col, Container, Figure, OverlayTrigger, Row } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import SearchBar from './components/SearchBar';
import { BookingTip } from './components/Tooltips';

const App = () => {
  const [pnr, setPnr] = useState<string>('');
  const navigate = useNavigate();

  return (
    <main>
      <Container className="p-2">
        <Row className="text-center m-4">
          <h1>Welcome to BookIt</h1>
        </Row>
        <Row className="text-center text-muted m-4 fst-italic">
          <h3>What would you like to do today?</h3>
        </Row>
        <Row className="p-2 m-5 bg-light-semi border border-dark rounded align-items-center">
          <Col
            xs={3}
            md={2}
          >
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={BookingTip}
            >
              <Figure.Image
                className="p-1 m-2 img-btn"
                src={logo}
                alt="train ticket logo"
                onClick={() => navigate('/booking')}
              />
            </OverlayTrigger>
          </Col>
          <Col
            xs={9}
            md={10}
          >
            <SearchBar
              pnr={pnr}
              setPnr={setPnr}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 ms-5">
        <Outlet />
      </Container>
    </main>
  );
};

export default App;
