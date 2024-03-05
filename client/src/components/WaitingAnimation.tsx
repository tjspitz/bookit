import { Image } from 'react-bootstrap';
import waiting from '../assets/waiting.svg';

const WaitingAnimation = ({ size }: { size: number }) => (
  <Image
    height={size || 50}
    src={waiting}
  />
);

export default WaitingAnimation;
