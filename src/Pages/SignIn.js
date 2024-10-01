import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup, FormLabel, FormControl, Alert } from 'react-bootstrap';
import { Link, navigate } from '@reach/router'; // Import navigate from @reach/router

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    }
    if (!password || password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const storedUserData = localStorage.getItem('userData');

      if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        if (userData.email === email && userData.password === password) {
          // Successful login
          setLoading(false);
          setLoginError('');
          alert("Login Successfully")
          navigate('/home'); // Use navigate to redirect
        } else {
          // Invalid credentials
          setLoading(false);
          setLoginError('Invalid email or password.');
        }
      } else {
        // No user data found in localStorage
        setLoading(false);
        setLoginError('User not found. Please sign up first.');
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={11} sm={10} md={8} lg={8} className="p-4 rounded text-light">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4 mt-5">
              <FormLabel className="text-black">Email</FormLabel>
              <InputGroup>
                <FormControl
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`rounded-pill ${errors.email ? 'border border-danger' : ''}`}

                />
              </InputGroup>
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            <Form.Group className="mb-4">
              <FormLabel className="text-black">Password</FormLabel>
              <InputGroup>
                <FormControl
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  minLength={8}
                  className={`rounded-pill ${errors.password ? 'border border-danger' : ''}`}

                />
              </InputGroup>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </Form.Group>

            {loginError && <Alert variant="danger">{loginError}</Alert>}

            <div className="d-flex justify-content-end mb-3">
              <Link to="/reset_password" className="btn text-primary">
                Forgot Password
              </Link>
            </div>

            <Button
              type="submit"
              className="bg-success text-white rounded-pill py-2 m-auto d-block w-100"
              disabled={loading}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;Loading...
                </>
              ) : (
                "LOGIN ME IN"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
