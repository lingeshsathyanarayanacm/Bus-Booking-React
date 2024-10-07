// BusList.js

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Rating,
  Chip,
  CardMedia,
  Divider,
  Grid,
} from '@mui/material';
import acBusImage from './images/bb.jpg';
import nonAcBusImage from './images/aaa.jpg';
import './assests/style/BusList.css';

const buses = [
  {
    id: 1,
    brand: 'Mercedes',
    name: 'Luxury Express',
    description: 'Luxury bus with comfortable seating and amenities.',
    rating: 4.5,
    isAC: true,
    liveTrackingUrl: 'https://www.google.co.in/maps/dir/Coimbatore,+Tamil+Nadu/Hosur,+Tamil+Nadu/@11.8325549,76.9447689,8.63z/data=!4m14!4m13!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!2m2!1d77.8252923!2d12.7409127!3e0?entry=ttu',
  },
  {
    id: 2,
    brand: 'Volvo',
    name: 'Super Sleeper',
    description: 'Sleeper bus with spacious beds for a comfortable journey.',
    rating: 4.2,
    isAC: false,
    liveTrackingUrl: 'https://www.google.co.in/maps/dir/Coimbatore,+Tamil+Nadu/Hosur,+Tamil+Nadu/@11.8325549,76.9447689,8.63z/data=!4m14!4m13!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!2m2!1d77.8252923!2d12.7409127!3e0?entry=ttu',
  },
  {
    id: 3,
    brand: 'Volvo',
    name: 'Super Sleeper',
    description: 'Sleeper bus with spacious beds for a comfortable journey.',
    rating: 3,
    isAC: false,
    liveTrackingUrl: 'https://www.google.co.in/maps/dir/Coimbatore,+Tamil+Nadu/Hosur,+Tamil+Nadu/@11.8325549,76.9447689,8.63z/data=!4m14!4m13!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!2m2!1d77.8252923!2d12.7409127!3e0?entry=ttu',
  },
  {
    id: 4,
    brand: 'Volvo',
    name: 'Super Sleeper',
    description: 'Sleeper bus with spacious beds for a comfortable journey.',
    rating: 3.5,
    isAC: true,
    liveTrackingUrl: 'https://www.google.co.in/maps/dir/Coimbatore,+Tamil+Nadu/Hosur,+Tamil+Nadu/@11.8325549,76.9447689,8.63z/data=!4m14!4m13!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!2m2!1d77.8252923!2d12.7409127!3e0?entry=ttu',
  },
  // Add more bus details as needed
];

const BusCard = ({ bus }) => (
  <Card className="bus-card">
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <CardMedia
          component="img"
          height="220"
          image={bus.isAC ? acBusImage : nonAcBusImage}
          alt={`${bus.brand} Bus`}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardContent className="bus-info">
          <Typography variant="h6">{bus.brand} - {bus.name}</Typography>
          <Typography variant="body2" color="textSecondary">{bus.description}</Typography>
          <Rating name="rating" value={bus.rating} precision={0.1} readOnly />
          <div className="bus-details">
            <Chip label={bus.isAC ? 'Air Conditioned' : 'Non-Air Conditioned'} color="default" />
            <Divider orientation="vertical" flexItem />
            <Chip label="Live Tracking" color="default" />
          </div>
        </CardContent>
        <div className="actions">
          <Link to={`/seat`}>
            <Button variant="contained" color="primary" className="view-seats-btn">View Seats</Button>
          </Link>
          {bus.liveTrackingUrl ? (
            <Button
              variant="contained"
              color="secondary"
              className="live-tracking-btn"
              onClick={() => window.open(bus.liveTrackingUrl, '_blank')}
            >
              Live Tracking
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              className="live-tracking-btn"
              onClick={() => alert("Live tracking is not available for this bus.")}
            >
              Live Tracking (N/A)
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  </Card>
);

const BusList = () => (
  <div>
    <span>coimbatore</span>
    <div className="bus-list">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} />
      ))}
    </div>
  </div>
);

export default BusList;
