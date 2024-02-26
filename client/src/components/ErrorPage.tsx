import { Button, Card } from 'react-bootstrap';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

const centered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <main style={centered}>
      <Card
        className="text-center w-50 bg-white-semi"
        border="warning"
        text="dark"
      >
        <Card.Header>Oops!</Card.Header>
        <Card.Body>
          <Card.Title>Sorry, an error has occurred.</Card.Title>
          <Card.Text>
            {isRouteErrorResponse(error) && (
              <div>
                <p>
                  <b>Status:&nbsp;</b>
                  {error.status}&nbsp;&#45;&nbsp;{error.statusText}
                </p>
                {error.data?.message && (
                  <p>
                    <b>Additional Info:&nbsp;</b>
                    {error.data.message}
                  </p>
                )}
              </div>
            )}
          </Card.Text>
          <Button
            variant="dark"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">How embarassing...</Card.Footer>
      </Card>
    </main>
  );
}
