// Payment.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { FaCheck } from 'react-icons/fa';
import './assests/style/Payment.css'; // Import your CSS file for styling

const Payment = () => {
  const [showCouponTextbox, setShowCouponTextbox] = useState(false);
  const [showNetbankingQR, setShowNetbankingQR] = useState(false);

  const handleCouponClick = () => {
    setShowCouponTextbox(true);
    setShowNetbankingQR(false);
  };

  const handleNetbankingClick = () => {
    setShowCouponTextbox(false);
    setShowNetbankingQR(true);
  };

  return (
    <div>
    <Container component="div" maxWidth="xs" className="payment-container" style={{ height: 'auto' ,marginTop :'50px' }}>
      <div className="payment-header">
        <Typography variant="h4" className="company-name">
          Bus Booking
        </Typography>
      </div>

      <div className="payment-details">
        <Typography variant="h6" className="course-title">
          Seat No: 3A
        </Typography>
        <div className="price-container">
          <Typography variant="h3" className="price">
            500 /-
          </Typography>
        </div>
      </div>

      <div className="payment-options">
        <Button variant="contained" color="primary" onClick={handleCouponClick} className="coupon-btn">
          Apply Coupons
        </Button>
        <Button variant="contained" color="primary" onClick={handleNetbankingClick} className="netbanking-btn">
          Pay with Netbanking
        </Button>
      </div>

      {showCouponTextbox && (
        <div className="coupon-textbox">
          <TextField label="Add your coupon here" fullWidth variant="outlined" />
        </div>
      )}

      {showNetbankingQR && (
        <div className="netbanking-qr-code">
          <center>
            <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png" alt="QR Code" width="100px" height="100px" />
          </center>
          <br />
        </div>
      )}
      <br/>
      <Card className="card-details">
        <CardContent>
          <Typography variant="h6" className="payment-heading">
            Pay with Credit or Debit Card
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Card Number" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Expiry Date" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="CVV" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Card Holder Name" fullWidth variant="outlined" />
            </Grid>
          </Grid>

          <Button
            component={Link}
            to="/paysuc"
            variant="contained"
            color="primary"
            className="submit-btn"
            fullWidth
            style={{ marginTop: '15px' }}
          >
            <FaCheck style={{ marginRight: '5px' }} />
            Payment
          </Button>
        </CardContent>
      </Card>
    </Container>
    <br/>
    <br/>
    </div>
  );
};

export default Payment;
