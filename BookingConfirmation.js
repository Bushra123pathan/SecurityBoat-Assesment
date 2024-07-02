import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookingConfirmation = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`/bookings/confirmation/${bookingId}/`);
        setBooking(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, [bookingId]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Movie: {booking.movie.title}</p>
      <p>Seats: {booking.seats.map(seat => seat.seat_number).join(', ')}</p>
      <p>Total Price: ${booking.total_price}</p>
    </div>
  );
};

export default BookingConfirmation;
