import { Col, Image, Row } from 'react-bootstrap';
import marsLogo from '../../assets/marsLogo.png';
import pathfinderLogo from '../../assets/pathfinderLogo.jpg';

const Header = () => {
  return (
    <Row className="mx-2 align-items-center justify-content-around">
      <Col xs={3}>
        <Image
          src={marsLogo}
          alt="The MARS Solutions Group logo"
          fluid
        />
      </Col>
      <Col
        xs={6}
        className="text-center heading"
      >
        <h1>Welcome to Pathfinder</h1>
      </Col>
      <Col xs={3}>
        <Image
          src={pathfinderLogo}
          alt="The MARS Pathfinder logo"
          fluid
        />
      </Col>
    </Row>
  );
};

export default Header;
