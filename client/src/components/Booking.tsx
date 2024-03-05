import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { postTicket } from '../lib/api';
import {
  Confirmation,
  FormValidators,
  Passenger,
  initialConfirmationState,
  initialPassengerState,
  initialValidatorsState,
} from '../lib/types';
import BookingConfirmation from './sub_Booking/BookingConfirmation';
import BookingForm from './sub_Booking/BookingForm';

const Booking = () => {
  const [form, setForm] = useState<Passenger>({ ...initialPassengerState });
  const [formIsValidated, setFormIsValidated] = useState<FormValidators>({
    ...initialValidatorsState,
  });
  const [confirmation, setConfirmation] = useState<Confirmation>({
    ...initialConfirmationState,
  });
  const [waiting, setWaiting] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const handleFormSubmit = async (): Promise<void> => {
    setWaiting(!waiting);
    const confirmationData = await postTicket(form);
    setConfirmation(confirmationData);
    setShowConfirmation(!showConfirmation);
    setForm({ ...initialPassengerState });
    setWaiting(!waiting);
  };

  const handleFormReset = () => {
    setForm({ ...initialPassengerState });
    setFormIsValidated({ ...initialValidatorsState });
  };

  return (
    <>
      <Container className="border border-dark rounded p-4 bg-light-semi">
        <BookingForm
          waiting={waiting}
          form={form}
          setForm={setForm}
          formIsValidated={formIsValidated}
          setFormIsValidated={setFormIsValidated}
          handleFormSubmit={handleFormSubmit}
          handleFormReset={handleFormReset}
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
