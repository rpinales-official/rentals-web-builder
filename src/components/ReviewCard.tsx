// src/components/ReviewCard.tsx
import * as React from 'react';
import { Box, Avatar, Typography, Rating } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export type Review = {
    id: number;
    name: string;
    date: string;
    rating: number;
    comment: string;
};

type Props = { review: Review; sx?: any };

export default function ReviewCard({ review, sx }: Props) {
    const date = React.useMemo(() => formatDate(review.date), [review.date]);

    return (
        <Box sx={{ ...styles.wrap, ...sx }}>
            <Box sx={styles.header}>
                <Avatar sx={styles.avatar}><PersonRoundedIcon fontSize="small" /></Avatar>
                <Box>
                    <Typography variant="subtitle2" sx={styles.name}>{review.name}</Typography>
                    <Typography variant="caption" sx={styles.date}>{date}</Typography>
                </Box>
            </Box>

            <Rating value={review.rating} precision={0.5} readOnly size="small" sx={styles.rating} />
            <Typography variant="body2" sx={styles.comment}>{review.comment}</Typography>

            {/* bottom divider sits at the same Y because the card stretches */}
            <Box sx={styles.divider} />
        </Box>
    );
}

function formatDate(input: string) {
    const d = new Date(input);
    return isNaN(d.getTime())
        ? input
        : d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

const styles = {
    wrap: {
        // stretch to the grid cell height so the divider aligns across the row
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
    },
    header: { display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 },
    avatar: { width: 36, height: 36, bgcolor: 'grey.200', color: 'text.secondary' },
    name: { lineHeight: 1.2 },
    date: { color: 'text.secondary' },
    rating: { mb: 1 },
    comment: { color: 'text.primary', lineHeight: 1.6 },

    // divider is a separate element at the very bottom
    divider: {
        mt: 'auto',                // pushes divider to the bottom
        borderBottom: '1px solid',
        borderColor: 'divider',
        pt: 2,                     // spacing above the line
    },
};