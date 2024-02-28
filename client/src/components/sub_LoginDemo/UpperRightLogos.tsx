import { Col, Image, Stack } from 'react-bootstrap';
import marsLogo from '../../assets/marsLogo.png';
import pathfinderLogo from '../../assets/pathfinderLogo.png';

const UpperRightLogos = () => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="my-4"
    >
      <Col
        xs={3}
        className="ms-5"
      >
        <Image
          src={marsLogo}
          fluid
        />
      </Col>
      <Col
        xs={3}
        className="ms-auto"
      >
        <Image
          src={pathfinderLogo}
          roundedCircle
          fluid
        />
      </Col>
    </Stack>
  );
};

export default UpperRightLogos;
