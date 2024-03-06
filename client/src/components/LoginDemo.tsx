import { Container } from 'react-bootstrap';
import '../styles/LoginDemo.css';

const LoginDemo = () => {

  return (
    <main className="background">
      <Container className=" border border-dark rounded p-5 parent-container">
        <Container className="border border-secondary rounded p-4 child-container">
          <p>This is the child container</p>
        </Container>
      </Container>
    </main>
  );
};

export default LoginDemo;
