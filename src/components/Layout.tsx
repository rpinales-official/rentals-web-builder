import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <Header />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Outlet />
            </Container>

            <Box component="footer" sx={{ bgcolor: '#eee', p: 2, mt: 4 }}>
                Footer Placeholder
            </Box>
        </>
    );
}