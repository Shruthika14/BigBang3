import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BookingPDFGenerator from './bookingbill';

const BookingForm = ({ packageTitle, onClose }) => {
  const [formData, setFormData] = useState({
    bookedBy: '',
    bookingContact: '',
    email: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'your_api_endpoint' with your actual API endpoint
      await axios.post('https://localhost:7222/api/Bookings', formData);

      // Set booking success state to display message
      setBookingSuccess(true);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Overlay>
      <FormContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {bookingSuccess ? (
          <SuccessMessage>
            Your booking for {packageTitle} is successful!
            <BookingPDFGenerator booking={formData} />
          </SuccessMessage>
        ) : (
          <>
            <h2>Booking Form for {packageTitle}</h2>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="bookedBy">Booked By:</label>
                <input
                  type="text"
                  id="bookedBy"
                  name="bookedBy"
                  value={formData.bookedBy}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="bookingContact">Booking Contact:</label>
                <input
                  type="text"
                  id="bookingContact"
                  name="bookingContact"
                  value={formData.bookingContact}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </>
        )}
      </FormContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  /* Styles for overlay */
`;

const FormContainer = styled.div`
  /* Styles for form container */
`;

const CloseButton = styled.button`
  /* Styles for close button */
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default BookingForm;





