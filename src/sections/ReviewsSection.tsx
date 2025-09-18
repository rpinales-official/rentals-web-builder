import { Box, Typography } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import { properties } from '../mock/mockData';

type Props = { propertyId: number; title?: string };

export default function ReviewsSection({ propertyId, title = 'Guest Reviews' }: Props) {
    const property = properties.find((p) => p.id === propertyId);
    if (!property) return null;

    return (
        <Box sx={styles.wrap}>
            <Typography variant="h6" sx={styles.title}>{title}</Typography>

            <Box sx={styles.grid}>
                {property.reviews.map((r) => (
                    <Box key={r.id} sx={styles.cell}>
                        <ReviewCard review={r} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

const styles = {
    wrap: {
        mb: 4
    },
    title: {
        mb: 2
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr'
        }, // 1 col on mobile, 2 on ≥600px
        columnGap: '24px',
        rowGap: '16px',
        alignItems: 'stretch', // rows share the tallest cell height
    },
    cell: {
        display: 'flex', // lets the inner card stretch to full cell height
    },
};