import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Registration.css';

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
    age: '',
    status: '',
    gender: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({
      ...registrationData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration form submitted with:', registrationData);
  };

  return (
    <div className='card'>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formRegistrationName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={registrationData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formRegistrationEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={registrationData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="formRegistrationPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={registrationData.password}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formRegistrationBirthdate">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              type="date"
              name="birthdate"
              value={registrationData.birthdate}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formRegistrationAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={registrationData.age}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formRegistrationStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              name="status"
              value={registrationData.status}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formRegistrationGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" name="gender" value={registrationData.gender} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  );
};

export default Registration;