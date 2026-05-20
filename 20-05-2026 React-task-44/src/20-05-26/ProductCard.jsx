import React from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Wireless Headphones"
        subheader="Rs:99.99"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Premium wireless headphones with noise cancellation
          and 20-hour battery life.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="outlined">
          View
        </Button>

        <Button size="small" variant="contained">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}