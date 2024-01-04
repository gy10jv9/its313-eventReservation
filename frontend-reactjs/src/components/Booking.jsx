import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Booking.css';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    id: '',
    name: '',
    date: '',
    time: '',
    dateBorrowed: '',
    dateReturned: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API calls, validation)
    console.log('Booking form submitted with:', bookingData);
  };

  return (
    <div className="card">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formID">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={bookingData.id}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBookingName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={bookingData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBookingDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBookingTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={bookingData.time}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDateBorrowed">
          <Form.Label>Date Borrowed</Form.Label>
          <Form.Control
            type="date"
            name="dateBorrowed"
            value={bookingData.dateBorrowed}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDateReturned">
          <Form.Label>Date Returned</Form.Label>
          <Form.Control
            type="date"
            name="dateReturned"
            value={bookingData.dateReturned}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book Now
        </Button>
      </Form>
    </div>
  );
};

export default Booking;