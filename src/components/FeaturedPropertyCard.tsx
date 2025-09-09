import * as React from 'react';
import { Box, Button } from '@mui/material';
import type { Property } from '../mock/mockData';

type Props = {
    property: Property;
    /** Defaults to the first image in property.images */
    imageIndex?: number;
    /** If provided, called instead of navigating to bookingUrl */
    onBookNow?: (property: Property) => void;
    /** Optional extra sx for the wrapper */
    sx?: object;
};

export default function FeaturedPropertyCard({
    property,
    imageIndex = 0,
    onBookNow,
    sx,
}: Props) {
    const img = property.images[imageIndex] ?? property.images[0];

    const handleBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onBookNow) {
            e.preventDefault();
            onBookNow(property);
            return;
        }
        // otherwise, let the button's href navigate
    };

    return (
        <Box
            sx={{
                display: 'inline-block',
                // transparent background; the "card" is visually just the media + CTA
                bgcolor: 'transparent',
                // keep image + button as a single block with nice spacing
                '&:focus-within img': { outline: (theme) => `2px solid ${theme.palette.primary.main}` },
                ...sx,
            }}
        >
            {/* Image */}
            <Box
                component="img"
                src={img?.src}
                alt={img?.alt || property.name}
                loading="lazy"
                sx={{
                    width: '100%',
                    height: { xs: 180, sm: 240, md: 300 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    display: 'block',
                    boxShadow: 1,
                    transition: 'transform 180ms ease',
                    '&:hover': { transform: 'scale(1.01)' },
                }}
            />

            {/* CTA */}
            <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={handleBook}
                href={onBookNow ? undefined : property.bookingUrl}
                target={onBookNow ? undefined : '_blank'}
                rel={onBookNow ? undefined : 'noopener noreferrer'}
                sx={{ mt: 1.5, borderRadius: 999, px: 2.5 }}
                aria-label={`Book ${property.name}`}
            >
                Book Now
            </Button>
        </Box>
    );
}