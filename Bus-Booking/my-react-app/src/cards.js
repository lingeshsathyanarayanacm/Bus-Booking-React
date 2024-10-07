import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Snackbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TrendingOffersMui = () => {
  const offers = [
    { id: 1, coupon_name: 'FIRST', description: 'Description for Offer 1', image: 'https://tse4.mm.bing.net/th?id=OIP.LHd4MN3L_9PKVihz_EA1wgHaEK&pid=Api&P=0&h=180' },
    { id: 2, coupon_name: 'Regular', description: 'Description for Offer 2', image: 'https://i.pinimg.com/originals/9a/b2/5a/9ab25af41b2c74ef9c4068546d33648d.jpg' },
    { id: 3, coupon_name: 'Christmas', description: 'Description for Offer 3', image: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/12/merry-christmas-2015-carriage-santa-claus-vector-happy-desktop.jpg' },
    { id: 4, coupon_name: 'Easter', description: 'Description for Offer 4', image: 'https://wallpapercg.com/download/cute-easter-bunny-3840x2740-12237.jpg' },
  ];

  const [copied, setCopied] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = (id) => {
    setCopied(id);
    setSnackbarOpen(true);
    // Additional actions after copying (if needed)
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {offers.map((offer) => (
        <Grid item key={offer.id} xs={12} sm={6} md={3}>
          <Card sx={{ position: 'relative', overflow: 'hidden', boxShadow: 1, '&:hover': { boxShadow: 5 } }}>
            <CardMedia
              component="img"
              height="140"
              image={offer.image}
              alt={offer.coupon_name}
              sx={{ objectFit: 'cover', borderRadius: '8px' }}
            />
            <CardContent sx={{ textAlign: 'center', backgroundColor: '#f9f9f9', position: 'relative' }}>
              <CopyToClipboard text={offer.coupon_name} onCopy={() => handleCopy(offer.id)}>
                <IconButton
                  color="primary"
                  aria-label="Copy to clipboard"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginLeft:'90px',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: copied === offer.id ? '#f0f0f0' : '#f0f0f0',
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} style={{ fontSize: '1.5em', color: '#808080', cursor: 'pointer' }} />
                </IconButton>
              </CopyToClipboard>
              <Typography variant="h6" sx={{ marginTop: 2, color: '#333' }}>
                {offer.coupon_name}
              </Typography>
              {copied === offer.id && (
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={2000}
                  onClose={handleCloseSnackbar}
                  message="Copied!"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingOffersMui;
