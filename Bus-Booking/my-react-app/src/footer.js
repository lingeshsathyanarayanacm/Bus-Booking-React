// Footer.js
import React from 'react';
import { Container, Grid, Typography, List, ListItem, Link, IconButton, Divider } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#24262b', padding: '70px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" style={{ color: '#ffffff', textTransform: 'capitalize', marginBottom: '35px', fontWeight: 500 }}>
              company
            </Typography>
            <List>
              <ListItem><Link href="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>about us</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>our services</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>privacy policy</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>affiliate program</Link></ListItem>
            </List>
          </Grid>

          {/* Get Help Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" style={{ color: '#ffffff', textTransform: 'capitalize', marginBottom: '35px', fontWeight: 500 }}>
              get help
            </Typography>
            <List>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>FAQ</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>shipping</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>returns</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>order status</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>payment options</Link></ListItem>
            </List>
          </Grid>

          {/* Online Shop Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" style={{ color: '#ffffff', textTransform: 'capitalize', marginBottom: '35px', fontWeight: 500 }}>
              online shop
            </Typography>
            <List style={{ color: 'white', textDecoration: 'none' }}>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>watch</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>bag</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>shoes</Link></ListItem>
              <ListItem><Link href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>dress</Link></ListItem>
            </List>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" style={{ color: '#ffffff', textTransform: 'capitalize', marginBottom: '35px', fontWeight: 500 }}>
              follow us
            </Typography>
            <div style={{ display: 'flex' }}>
              <IconButton href="#" size="medium" style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 10px 10px 0' }}>
                <FaFacebook style={{ color: '#ffffff' }} />
              </IconButton>
              <IconButton href="#" size="medium" style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 10px 10px 0' }}>
                <FaTwitter style={{ color: '#ffffff' }} />
              </IconButton>
              <IconButton href="#" size="medium" style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 10px 10px 0' }}>
                <FaInstagram style={{ color: '#ffffff' }} />
              </IconButton>
              <IconButton href="#" size="medium" style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 10px 10px 0' }}>
                <FaLinkedin style={{ color: '#ffffff' }} />
              </IconButton>
            </div>
          </Grid>

          {/* Copyright Section */}
          <Grid item xs={12}>
            <Divider style={{ backgroundColor: '#ffffff', margin: '30px 0' }} />
            <Typography variant="body2" style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
              © 2023 Your Company Name. All Rights Reserved.
            </Typography>
          </Grid>

          {/* Additional Sections */}
          

          {/* Add more additional sections as needed */}
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
