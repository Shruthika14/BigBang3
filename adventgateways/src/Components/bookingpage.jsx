import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './booking';

const BookingPage = () => {
  const { packageId } = useParams(); // Get the packageId from the URL parameter

  // You can fetch package details using packageId if needed

  return (
    <div>
      <h2>Booking Page</h2>
      <BookingForm packageId={packageId} />
    </div>
  );
};

export default BookingPage;
