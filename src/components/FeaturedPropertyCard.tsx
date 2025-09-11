import * as React from 'react';
import { Box, Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { Property, Img } from '../mock/mockData';

type Props = {
    property: Property;
    image?: Img;                         // optional override (defaults to mainImage)
    onBookNow?: (property: Property) => void;
    sx?: SxProps<Theme>;
};

export default function FeaturedPropertyCard({ property, image, onBookNow, sx }: Props) {
    const img = image ?? property.mainImage;

    const handleBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onBookNow) {
            e.preventDefault();
            onBookNow(property);
        }
    };

    return (
        <Box sx={{ ...styles.wrap, ...sx }}>
            <Box component="img" src={img.src} alt={img.alt || property.name} loading="lazy" sx={styles.img} />
            <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={handleBook}
                href={onBookNow ? undefined : property.bookingUrl}
                target={onBookNow ? undefined : '_blank'}
                rel={onBookNow ? undefined : 'noopener noreferrer'}
                sx={styles.cta}
                aria-label={`Book ${property.name}`}
            >
                Book Now
            </Button>
        </Box>
    );
}

const styles = {
    wrap: {
        display: 'inline-block',
        bgcolor: 'transparent',
        width: '100%',
        '&:focus-within img': {
            outline: (theme: any) => `2px solid ${theme.palette.primary.main}`,
        },
    },
    img: {
        width: '100%',
        height: { xs: 200, sm: 280, md: 340 },
        objectFit: 'cover' as const,
        borderRadius: 3,
        display: 'block',
        boxShadow: 1,
        transition: 'transform 180ms ease',
        '&:hover': { transform: 'scale(1.01)' },
    },
    cta: {
        mt: 1.5,
        borderRadius: 999,
        px: 2.5,
        transition: 'all 0.2s ease',
        '&:hover': {
            bgcolor: 'background.paper',
            color: 'primary.main',
            border: 1,
            borderColor: 'primary.main',
        },
    },
};