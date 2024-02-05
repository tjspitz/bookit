import { Dispatch, SetStateAction } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SearchBar = ({
  pnr,
  setPnr,
}: {
  pnr: string;
  setPnr: Dispatch<SetStateAction<string>>;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Form.Control
        required
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
    </>
  );
};

export default SearchBar;
