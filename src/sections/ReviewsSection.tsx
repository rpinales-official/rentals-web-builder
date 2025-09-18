import { Box, Typography } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import { properties } from '../mock/mockData';

type Props = {
    propertyId: number;
    title?: string;
};

export default function ReviewsSection({ propertyId, title = 'Guest Reviews' }: Props) {
    const property = properties.find((p) => p.id === propertyId);
    if (!property) return null;

    return (
        <Box sx={styles.wrap}>
            <Typography variant="h6" sx={styles.title}>{title}</Typography>

            {/* Masonry-style columns */}
            <Box sx={styles.masonry}>
                {property.reviews.map((review) => (
                    <Box key={review.id} sx={styles.masonryItem}>
                        <ReviewCard review={review} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

const styles = {
    wrap: { mb: 4 },
    title: { mb: 2 },
    masonry: {
        columnCount: { xs: 1, sm: 2 },
        columnGap: '24px',
    },
    masonryItem: {
        breakInside: 'avoid',
        WebkitColumnBreakInside: 'avoid',
        pageBreakInside: 'avoid',
        display: 'inline-block',
        width: '100%',
        marginBottom: '24px',
    },
};