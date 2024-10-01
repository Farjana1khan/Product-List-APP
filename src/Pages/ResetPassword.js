import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "@reach/router";


const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    setLoading(true);

    // Simulating reset password logic with a setTimeout
    setTimeout(() => {
      setLoading(false);
      // Redirect to login page after resetting password
      navigate('/login');
    }, 2000); // 2 seconds timeout for demonstration
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={5}
          className="p-4 rounded text-light bg-white shadow-lg "
        >
        
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-black">Please Provide  Your  Registered  Email id  to Reset  Password</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email id"  className={errors.email ? 'border border-danger' : ''} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>

            <Form.Group className="mt-3 d-flex justify-content-between align-items-center">
              <Button
                type="submit"
                className="bg-primary text-white  d-block"
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
                  "Reset Password"
                )}
              </Button>
              <Button
                variant="primary"
                className=" d-block"
                onClick={() => navigate("/")}
                style={{ border: 0 }}
              >
                Login/Signup
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
