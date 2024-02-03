import { Dispatch, SetStateAction } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Passenger, initialPassengerState } from '../lib/types';

const BookingForm = ({
  form,
  setForm,
  handleFormSubmit,
}: {
  form: Passenger;
  setForm: Dispatch<SetStateAction<Passenger>>;
  handleFormSubmit: () => Promise<void>;
}) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="firstName"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) =>
                setForm((s) => ({ ...s, firstName: e.target.value }))
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="lastName"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) =>
                setForm((s) => ({ ...s, lastName: e.target.value }))
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="fromStation"
          >
            <Form.Label>
              Traveling <b>FROM</b> station
            </Form.Label>
            <Form.Control
              placeholder="Station Name..."
              value={form.fromStation}
              onChange={(e) =>
                setForm((s) => ({ ...s, fromStation: e.target.value }))
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="toStation"
          >
            <Form.Label>
              Traveling <b>TO</b> station
            </Form.Label>
            <Form.Control
              placeholder="Station Name..."
              value={form.toStation}
              onChange={(e) =>
                setForm((s) => ({ ...s, toStation: e.target.value }))
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="travelDate"
          >
            <Form.Label>
              Traveling <b>ON</b> date
            </Form.Label>
            <Form.Control
              type="date"
              value={form.travelDate}
              onChange={(e) =>
                setForm((s) => ({ ...s, travelDate: e.target.value }))
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            className="mb-3"
            controlId="trainNo"
          >
            <Form.Label>Train Number</Form.Label>
            <Form.Control
              placeholder="Train Number"
              value={form.trainNo}
              onChange={(e) =>
                setForm((s) => ({ ...s, trainNo: e.target.value.toUpperCase() }))
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Stack
        direction="horizontal"
        className="m-4"
        gap={4}
      >
        <Button
          type="button"
          variant="outline-success"
          onClick={handleFormSubmit}
        >
          BookIt!
        </Button>
        <Button
          type="button"
          variant="outline-danger"
          onClick={() => setForm({ ...initialPassengerState })}
        >
          Reset
        </Button>
      </Stack>
    </Form>
  );
};

export default BookingForm;
