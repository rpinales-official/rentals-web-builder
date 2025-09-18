import { Box, Typography, Avatar, Rating, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import type { Property } from '../mock/mockData';

type Review = Property['reviews'][0];

type Props = {
    review: Review;
};

export default function ReviewCard({ review }: Props) {

    const date = new Date(review.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    }); // → "May 2025"

    return (
        <Box sx={styles.card}>
            <Box sx={styles.header}>
                <Avatar sx={styles.avatar}>
                    <PersonIcon />
                </Avatar>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {review.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {formattedDate}
                    </Typography>
                </Box>
            </Box>

            <Rating value={review.rating} readOnly size="small" sx={styles.rating} />

            <Typography variant="body2" sx={styles.comment}>
                {review.comment}
            </Typography>

            <Divider sx={styles.divider} />
        </Box>
    );
}

const styles = {
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 0.5,
    },
    avatar: {
        width: 32,
        height: 32
    },
    rating: {
        mb: 0.5
    },
    comment: {
        mb: 1
    },
    divider: {
        mt: 'auto'
    },
};