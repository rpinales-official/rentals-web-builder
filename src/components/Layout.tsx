// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

export default function Layout() {
  return (
    <>
      <Box component="header" sx={{ bgcolor: '#ddd', p: 2 }}>
        Header Placeholder
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>

      <Box component="footer" sx={{ bgcolor: '#eee', p: 2, mt: 4 }}>
        Footer Placeholder
      </Box>
    </>
  );
}