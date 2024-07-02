import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get(`/bookings/seat_selection/${movieId}/`);
        setSeats(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSeats();
  }, [movieId]);

  const handleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/bookings/seat_selection/${movieId}/`, {
        seats: selectedSeats
      });
      navigate.push(`/confirmation/${response.data.booking_id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {seats.map((seat) => (
            <label key={seat.id}>
              <input
                type="checkbox"
                value={seat.id}
                onChange={() => handleSeatSelection(seat.id)}
                disabled={seat.is_booked}
              />
              {seat.seat_number}
            </label>
          ))}
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default SeatSelection;
