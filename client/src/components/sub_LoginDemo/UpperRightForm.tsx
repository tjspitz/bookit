import { useState } from 'react';
import { Button, Form, OverlayTrigger, Row } from 'react-bootstrap';
import { validators } from '../../lib/validators';
import { EmailTip, PasswordTip } from '../Tooltips';

const UpperRightForm = () => {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [formIsValidated, setFormIsValidated] = useState<{
    email: boolean;
    password: boolean;
  }>({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validated = Object.values(formIsValidated).every(
    (validator) => validator
  );

  const tipDelay = { show: 250, hide: 250 };

  /**
   * @description
   * validates a form input - pass the validator needed as first arg,
   * followed by the form value being validated as second arg
   * @param validatorKey
   * @param formKey
   * @returns nothing, although it sets validation states accordingly
   */
  const handleValidations = (
    validatorKey: keyof typeof validators,
    formKey: keyof typeof form,
    value = form[formKey]
  ): void => {
    setFormIsValidated((s) => {
      return {
        ...s,
        [formKey]: validators[validatorKey](value),
      };
    });
  };

  const handleFormSubmit = () => {
    if (
      form.email === 'example@pathfinder.mars.com' &&
      form.password === 'potato'
    ) {
      alert('Congratulations, you have signed in correctly!');
    } else {
      alert('Beep boop, invalid login. Self-destruct imminent.');
      window.location.assign('https://c.tenor.com/0B9-lEwbYTYAAAAC/tenor.gif');
    }
    setForm({
      email: '',
      password: '',
    });
    setFormIsValidated({
      email: false,
      password: false,
    });
  };

  return (
    <>
      <Form>
        <Form.Group
          className="ps-5 mb-5"
          controlId="email"
        >
          <OverlayTrigger
            placement="top"
            delay={tipDelay}
            overlay={EmailTip}
          >
            <Form.Control
              type="email"
              className={`${!formIsValidated.email && 'border border-danger'} bg-white-semi`}
              placeholder="your_email@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((s) => ({ ...s, email: e.target.value }))
              }
              onBlur={() => handleValidations('email', 'email')}
            />
          </OverlayTrigger>
        </Form.Group>
        <Form.Group
          className="ps-5 mb-5"
          controlId="password"
        >
          <OverlayTrigger
            placement="top"
            delay={tipDelay}
            overlay={PasswordTip}
          >
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              className={`${!formIsValidated.password && 'border border-danger'} bg-white-semi`}
              placeholder="enter your password"
              value={form.password}
              onChange={(e) =>
                setForm((s) => ({ ...s, password: e.target.value }))
              }
              onBlur={() => handleValidations('password', 'password')}
            />
          </OverlayTrigger>
          <Row className="mt-1 ps-5 d-flex flex-row-reverse">
            <Button
              variant="outline-light"
              style={{ width: '10%', marginRight: '1rem' }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '🪬'}
            </Button>
          </Row>
          <Row className="mt-2 ps-5 d-flex flex-row-reverse">
            <a
              href="https://c.tenor.com/0B9-lEwbYTYAAAAC/tenor.gif"
              style={{
                width: 'max-content',
                marginRight: '1rem',
                color: '#272459',
                textDecoration: 'none',
                fontStyle: 'italic',
              }}
            >
              Forgot Password
            </a>
          </Row>
        </Form.Group>
      </Form>
      <div className="ps-5 mb-5 w-100 d-flex justify-content-center">
        <Button
          type="button"
          className="w-50"
          disabled={validated ? false : true}
          variant={validated ? 'danger' : 'outline-secondary'}
          onClick={handleFormSubmit}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default UpperRightForm;