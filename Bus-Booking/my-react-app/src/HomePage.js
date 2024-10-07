import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  Tooltip,
} from '@mui/material';
import Carousel from './component/carousel';
import About from './about';
import ContactComponent from './contact';
import TrendingOffersMui from './cards';
import Footer from './footer';
import NameComponent from './component/navbar';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const locations = ["Salem", "Coimbatore", "Hosur"];

const HomePage = () => {
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleLogin = () => {
    if (selectedFrom && selectedTo) {
      setLoggedIn(true);
    } else {
      alert('Please select both "From" and "To" locations.');
    }
  };

  const handleFromChange = (e) => {
    setSelectedFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setSelectedTo(e.target.value);
  };

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NameComponent />
        <Carousel />
        <br /><br />
        <Container>
          <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
            {loggedIn ? (
              <div>
                <Typography variant="h4" align="center" gutterBottom>
                  Welcome
                </Typography>
                {/* Add content for logged-in users */}
              </div>
            ) : (
              <form>
                <Typography variant="h4" align="center" gutterBottom>
                  Bus Booking
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="from" sx={{ marginBottom: 1, display: 'block' }}>
                      From:
                    </InputLabel>
                    <Select
                      id="from"
                      fullWidth
                      value={selectedFrom}
                      onChange={handleFromChange}
                    >
                      <MenuItem value="">Select From Location</MenuItem>
                      {locations.map((location) => (
                        <MenuItem key={location} value={location}>
                          {location}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="to" sx={{ marginBottom: 1, display: 'block' }}>
                      To:
                    </InputLabel>
                    <Select
                      id="to"
                      fullWidth
                      value={selectedTo}
                      onChange={handleToChange}
                    >
                      <MenuItem value="">Select To Location</MenuItem>
                      {locations.map((location) => (
                        <MenuItem key={location} value={location}>
                          {location}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="journey-date" sx={{ marginBottom: 1, display: 'block' }}>
                      Journey's date:
                    </InputLabel>
                    <TextField
                      type="date"
                      id="journey-date"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" fullWidth onClick={handleLogin} sx={{ marginTop: 2, backgroundColor: '#007bff' }}>
                  <Link to="/buslist" style={{ color: 'white', textDecoration: 'none' }}>Bus Details</Link>
                </Button>
              </form>
            )}
            {/* Add theme toggle button with react-icons */}
            <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
              <IconButton onClick={handleThemeToggle} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                {isDarkMode ? <IoMdMoon /> : <IoMdSunny />}
              </IconButton>
            </Tooltip>
          </Paper>
        </Container>
        <img
          src="https://gos3.ibcdn.com/img-1636967955.jpg"
          alt="Slide 1"
          style={{ width: '70%', height: '200px', alignItems: 'center', marginLeft: '250px' }}
        />
        <br /><br />
        <br /><br />
        <br />
        <Typography variant="h2" align="center" gutterBottom>
          Trending Offers
        </Typography>
        <TrendingOffersMui sx={{ position: 'absolute', top: '-50000px' }} /> {/* Adjust the top value accordingly */}

        <div>
          {/* Add content */}
        </div>
        <br />
        <div id="about-section">
          <About />
        </div>

        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />

        <div id="contact-section">
          <ContactComponent />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
