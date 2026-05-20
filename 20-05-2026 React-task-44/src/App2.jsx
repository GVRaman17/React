import React from 'react';
import { Container, Stack } from '@mui/material';

import ProductCard from './20-05-26/ProductCard';
import LoginForm from './20-05-26/LoginForm';

export default function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={4}>
        <LoginForm/>
        <ProductCard />
      </Stack>
    </Container>
  );
}