// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import SeatSelection from './Seat';
import { FaBook, FaBus } from 'react-icons/fa';
import './assests/style/app.css';
import BusList from './BusList';
import About from './about';
import Paysuc from './paysuc';
import ContactComponent from './contact';
import PaymentComponent from './PaymentComponent';
import TrendingOffersMui from './cards';
import BusTicket from './booked';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
          🚍BusBooking
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              {/* Add other navigation links as needed */}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/buslist" element={<BusList />} />
          <Route path="/paysuc" element={<Paysuc />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/payy" element={<PaymentComponent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/seat" element={<SeatSelection />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<TrendingOffersMui />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/ticket" element={<BusTicket />} />
          <Route path="/" element={<HomePage />} />
          {/* Add other routes for different pages if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
