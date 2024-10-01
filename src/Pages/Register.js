import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
 
} from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import { navigate } from '@reach/router';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState([
    { code: 'in', name: 'India', states: ['Maharashtra', 'Karnataka', 'Gujarat'] },
    { code: 'us', name: 'United States', states: ['California', 'New York', 'Texas'] },
  ]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const selectedCountry = countries.find((country) => country.code === countryCode);
    setSelectedCountry(selectedCountry);
    setStates(selectedCountry.states);
    setSelectedState('');
    setCities([]);
  };

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    // Simulating fetching cities based on selected state
    const fetchedCities = ['Mumbai', 'Pune', 'Nagpur']; 
    setCities(fetchedCities);
    setSelectedCity('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const address = form.address.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    const firstname = form.firstName.value;
    const lastname = form.lastName.value;
    const email = form.email.value;
    const pincode = form.pincode.value;

    const errors = {};
    if (!address) {
      errors.address = 'Please enter valid address.';
    }
    if (!password || password.length < 8) {
      errors.password =
        'Must contain at least one number and one uppercase and lowercase letter, and be at least 8 characters.';
    }
    if (password !== confirmpassword) {
      errors.confirmpassword = 'Confirm passwords should be same as password.';
    }
    if (!firstname) {
      errors.firstname = 'Please enter valid first name.';
    }
    if (!email) {
      errors.email = 'Please enter valid email.';
    }
    if (!number) {
      errors.number = 'Please enter valid number.';
    }
    if (!selectedCountry) {
      errors.country = 'Please select your country.';
    }
    if (!selectedState) {
      errors.state = 'Please select your state.';
    }
    if (!selectedCity) {
      errors.city = 'Please select your city.';
    }
    if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
        errors.pincode = 'Please enter  valid  pincode.';
      }




    if (Object.keys(errors).length === 0) {

        const userData = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password:password,
            confirmpassword:confirmpassword,
            address: address,
            number: number,
            selectedCountry: selectedCountry,
            selectedState: selectedState,
            selectedCity: selectedCity,
            pincode: pincode,
          };
    
          // Storing data in localStorage
          localStorage.setItem('userData', JSON.stringify(userData));
    
          setLoading(true);
          console.log(userData); 
    
          // Clear form fields
          form.reset();

      setTimeout(() => {
        setLoading(false);
        navigate('/login');
      }, 2000);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={11} sm={10} md={8} lg={8} className="p-4 rounded text-black">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>
                  First Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className={errors.firstname ? 'border border-danger' : ''}
                />
                {errors.firstname && (
                  <div className="text-danger">{errors.firstname}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className={errors.lastname ? 'border border-danger' : ''}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                className={errors.email ? 'border border-danger' : ''}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Address"
                className={errors.address ? 'border border-danger' : ''}
              />
              {errors.address && (
                <div className="text-danger">{errors.address}</div>
              )}
            </Form.Group>
           
            <Row>
          <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Country <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="country"
                onChange={handleCountryChange}
                className={errors.country ? 'border border-danger' : ''}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </Form.Select>
              {errors.country && (
                <div className="text-danger">{errors.country}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>State <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="state"
                onChange={handleStateChange}
                className={errors.state ? 'border border-danger' : ''}
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </Form.Select>
              {errors.state && (
                <div className="text-danger">{errors.state}</div>
              )}
            </Form.Group>
          </Row>

          <Row>
          <Form.Group className="mb-3 col-lg-6">
              <Form.Label>City <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="city"
                onChange={(e) => setSelectedCity(e.target.value)}
                className={errors.city ? 'border border-danger' : ''}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
              {errors.city && (
                <div className="text-danger">{errors.city}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Label>Pincode <span className="text-danger">*</span></Form.Label>
              <Form.Control
                name="pincode"
                type="text"
                placeholder="ex110042"
                className={errors.pincode ? 'border border-danger' : ''}
              />
              {errors.pincode && (
                <div className="text-danger">{errors.pincode}</div>
              )}
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
              <Form.Label>Mobile number <span className="text-danger">*</span></Form.Label>
              <PhoneInput
                country={selectedCountry.code}
                value={number}
                placeholder='011-55541234'
                onChange={(phone) => setNumber(phone)}
                className={errors.number ? 'border border-danger' : ''}
              />
              {errors.number && (
                <div className="text-danger">{errors.number}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password </Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLength={8}
              
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Confirm Password
              </Form.Label>
              <Form.Control
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                minLength={8}
               
              />
              {errors.confirmpassword && (
                <div className="text-danger">{errors.confirmpassword}</div>
              )}
            </Form.Group>

       

            <Button
              type="submit"
              className="bg-success border-success text-white rounded-pill py-2 w-100"
              disabled={loading}
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
                'Sign up'
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
