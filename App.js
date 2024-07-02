import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import MovieList from './components/MovieList';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/signup" element={Signup} />
        <Route path="/login" element={Login} />
        <Route path="/movies" element={MovieList} />
        <Route path="/seat_selection/:movieId" element={SeatSelection} />
        <Route path="/confirmation/:bookingId" element={BookingConfirmation} />
       </Routes>
      </Router> 
    </div>
  );
}

export default App;

