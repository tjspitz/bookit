import { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import surprise from '../assets/secret.gif';

const theSecret =
  'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightBA';

const SearchBar = ({
  pnr,
  setPnr,
}: {
  pnr: string;
  setPnr: Dispatch<SetStateAction<string>>;
}) => {
  const [secret, setSecret] = useState<string>('');
  const navigate = useNavigate();

  const handleSecret = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      (secret === theSecret.slice(0, -2) && e.key === 'B') ||
      (secret === theSecret.slice(0, -1) && e.key === 'A')
    ) {
      setSecret(secret + e.key);
    }
  };

  return (
    <>
      <Form.Control
        required
        className="me-auto bg-white-semi"
        placeholder="Passenger/Ticket No."
        value={pnr}
        onChange={(e) => setPnr(e.target.value.toUpperCase())}
        onKeyDown={handleSecret}
      />
      <Button
        type="button"
        variant="dark"
        onClick={() => {
          if (secret === theSecret) {
            window.open(surprise, '_blank');
          }
          navigate(`/tickets/${pnr}`);
        }}
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
