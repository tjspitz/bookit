import { Dispatch, SetStateAction } from 'react';
import { Button, Col, Form, OverlayTrigger, Row, Stack } from 'react-bootstrap';
import { stations } from '../../lib/stations';
import {
  FormValidators,
  Passenger,
  ValidationHandler,
  initialPassengerState,
} from '../../lib/types';
import { validators } from '../../lib/validators';
import { DateTip, EmailTip, NameTip, StationTip, TrainNoTip } from '../Tooltips';
import SearchableDropdown from './SearchableDropdown';

const BookingForm = ({
  form,
  setForm,
  formIsValidated,
  setFormIsValidated,
  handleFormSubmit,
}: {
  form: Passenger;
  setForm: Dispatch<SetStateAction<Passenger>>;
  formIsValidated: FormValidators;
  setFormIsValidated: Dispatch<SetStateAction<FormValidators>>;
  handleFormSubmit: () => Promise<void>;
}) => {
  /**
   * @description
   * validates a form input - pass the validator needed as first arg,
   * followed by the form value being validated as second arg
   * @param validatorKey
   * @param formKey
   * @returns nothing, although it sets validation states accordingly
   */
  const handleValidations: ValidationHandler = (
    validatorKey,
    formKey,
    value = form[formKey]
  ): void => {
    console.log('validating something...');
    console.log('validator key: ', validatorKey, 'form key: ', formKey);
    console.log('arg passed into validator is: ', value);
    setFormIsValidated((s) => {
      return {
        ...s,
        [formKey]: validators[validatorKey](value),
      };
    });
  };

  return (
    <Form>
      <Row md={2}>
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={EmailTip}
          >
            <Form.Group
              className="mb-3"
              controlId="email"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                className={`${!formIsValidated.email && 'border border-danger'} bg-white-semi`}
                placeholder="your_email@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm((s) => ({ ...s, email: e.target.value }))
                }
                onBlur={() => handleValidations('email', 'email')}
              />
            </Form.Group>
          </OverlayTrigger>
        </Col>
      </Row>
      <Row
        md={2}
        sm={1}
        xs={1}
      >
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={NameTip}
          >
            <Form.Group
              className="mb-3"
              controlId="firstName"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className={`${!formIsValidated.firstName && 'border border-danger'} bg-white-semi`}
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) =>
                  setForm((s) => ({ ...s, firstName: e.target.value }))
                }
                onBlur={() => handleValidations('name', 'firstName')}
              />
            </Form.Group>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={NameTip}
          >
            <Form.Group
              className="mb-3"
              controlId="lastName"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className={`${!formIsValidated.lastName && 'border border-danger'} bg-white-semi`}
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) =>
                  setForm((s) => ({ ...s, lastName: e.target.value }))
                }
                onBlur={() => handleValidations('name', 'lastName')}
              />
            </Form.Group>
          </OverlayTrigger>
        </Col>
      </Row>
      <Row
        md={2}
        sm={1}
        xs={1}
      >
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={StationTip}
          >
            <Form.Group
              className="mb-3"
              controlId="fromStation"
            >
              <Form.Label>
                Traveling <b>FROM</b> station
              </Form.Label>
              <SearchableDropdown
                collection={stations}
                formKey="fromStation"
                setForm={setForm}
                formIsValidated={formIsValidated}
                validatorKey="station"
                handleValidations={handleValidations}
              />

            </Form.Group>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={StationTip}
          >
            <Form.Group
              className="mb-3"
              controlId="toStation"
            >
              <Form.Label>
                Traveling <b>TO</b> station
              </Form.Label>
              <SearchableDropdown
                collection={stations}
                formKey="toStation"
                setForm={setForm}
                formIsValidated={formIsValidated}
                validatorKey="station"
                handleValidations={handleValidations}
              />
            </Form.Group>
          </OverlayTrigger>
        </Col>
      </Row>
      <Row
        md={2}
        sm={1}
        xs={1}
      >
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={DateTip}
          >
            <Form.Group
              className="mb-3"
              controlId="travelDate"
            >
              <Form.Label>
                Traveling <b>ON</b> date
              </Form.Label>
              <Form.Control
                className={`${!formIsValidated.travelDate && 'border border-danger'} bg-white-semi`}
                type="date"
                value={form.travelDate}
                onChange={(e) =>
                  setForm((s) => ({ ...s, travelDate: e.target.value }))
                }
                onBlur={() => handleValidations('date', 'travelDate')}
              />
            </Form.Group>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={TrainNoTip}
          >
            <Form.Group
              className="mb-3"
              controlId="trainNo"
            >
              <Form.Label>Train Number</Form.Label>
              <Form.Control
                className={`${!formIsValidated.trainNo && 'border border-danger'} bg-white-semi`}
                placeholder="Train Number"
                value={form.trainNo}
                onChange={(e) =>
                  setForm((s) => ({
                    ...s,
                    trainNo: e.target.value.toUpperCase(),
                  }))
                }
                onBlur={() => handleValidations('train', 'trainNo')}
              />
            </Form.Group>
          </OverlayTrigger>
        </Col>
      </Row>
      <Stack
        direction="horizontal"
        className="m-4"
        gap={4}
      >
        <Button
          type="button"
          disabled={
            !Object.values(formIsValidated).every((validator) => validator)
          }
          variant="dark"
          onClick={handleFormSubmit}
        >
          BookIt!
        </Button>
        <Button
          type="button"
          variant="outline-dark"
          onClick={() => setForm({ ...initialPassengerState })}
        >
          Reset
        </Button>
      </Stack>
    </Form>
  );
};

export default BookingForm;
