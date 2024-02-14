import { useState } from 'react';
import { Container } from 'react-bootstrap';
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
    const confirmationData = await postTicket(form);
    setConfirmation(confirmationData);
    setShowConfirmation(!showConfirmation);
    setForm({ ...initialPassengerState });
  };

  return (
    <>
      <Container className="border border-dark rounded p-4 bg-light-semi">
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
