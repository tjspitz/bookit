import { Col, Image } from 'react-bootstrap';
import emp1 from '../../assets/emp1.png';
import emp2 from '../../assets/emp2.png';
import emp3 from '../../assets/emp3.gif';

const UpperLeftPics = () => {
  const picBorder = 'pic border border-2 border-secondary h-100 w-100';

  return (
    <>
      <Col xs={4}>
        <Image
          className={picBorder}
          src={emp1}
          roundedCircle
          fluid
        />
      </Col>
      <Col xs={4}>
        <Image
          className={picBorder}
          src={emp3}
          roundedCircle
          fluid
        />
      </Col>
      <Col xs={4}>
        <Image
          className={picBorder}
          src={emp2}
          roundedCircle
          fluid
        />
      </Col>
    </>
  );
};

export default UpperLeftPics;
