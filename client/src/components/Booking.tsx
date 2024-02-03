import { useState } from 'react';
import { Container, Figure } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import { postTicket } from '../lib/api';
import {
  Confirmation,
  Passenger,
  initialConfirmationState,
  initialPassengerState,
} from '../lib/types';
import BookingConfirmation from './BookingConfirmation';
import BookingForm from './BookingForm';

const Booking = () => {
  const [confirmation, setConfirmation] = useState<Confirmation>({
    ...initialConfirmationState,
  });
  const [form, setForm] = useState<Passenger>({ ...initialPassengerState });
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const handleFormSubmit = async () => {
    console.log('form is: ', form);

    const { pnr, status, fare } = await postTicket(form);

    console.log('confirmation has: ', pnr, status, fare);

    setConfirmation({ pnr, status, fare });
    setShowConfirmation(!showConfirmation);
    setForm({ ...initialPassengerState });
  };

  return (
    <>
      <Figure.Image
        className="ms-2"
        width={150}
        src={logo}
        alt="train ticket logo"
      />
      <Container className="border border-dark rounded p-4 bg-light">
        <BookingForm
          form={form}
          setForm={setForm}
          handleFormSubmit={handleFormSubmit}
        />
      </Container>
      <BookingConfirmation
        confirmation={confirmation}
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
      />
    </>
  );
};

export default Booking;
