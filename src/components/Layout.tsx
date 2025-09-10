import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <Header />

            <Container maxWidth="lg" sx={styles.container}>
                <Outlet />
            </Container>

            <Box component="footer" sx={styles.footer}>
                Footer Placeholder
            </Box>
        </>
    );
}

const styles = {
    container: {
        py: 4,
    },
    footer: {
        bgcolor: '#eee',
        p: 2,
        mt: 4,
    },
};