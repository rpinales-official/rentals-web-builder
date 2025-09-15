import * as React from 'react';
import { Box, Button, ButtonBase } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { Property, Img } from '../mock/mockData';

type Props = {
    property: Property;
    image?: Img;                         // optional override (defaults to mainImage)
    onBookNow?: (property: Property) => void;
    onSelect?: (property: Property) => void;   // NEW: click card to select property
    selected?: boolean;                        // NEW: visual cue when selected
    sx?: SxProps<Theme>;
};

export default function FeaturedPropertyCard({
    property,
    image,
    onBookNow,
    onSelect,
    selected = false,
    sx,
}: Props) {
    const img = image ?? property.mainImage;

    const handleBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onBookNow) {
            e.preventDefault();
            onBookNow(property);
        }
    };

    const handleSelect = () => {
        onSelect?.(property);
    };

    return (
        <Box sx={{ ...styles.wrap, ...(selected ? styles.selected : {}), ...sx }}>
            {/* Clickable image area */}
            <ButtonBase onClick={handleSelect} sx={styles.clickArea} aria-label={`View ${property.name}`}>
                <Box component="img" src={img.src} alt={img.alt || property.name} loading="lazy" sx={styles.img} />
            </ButtonBase>

            {/* CTA */}
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
    selected: {
        '& img': {
            boxShadow: (theme: any) => `0 0 0 3px ${theme.palette.primary.light}`,
        },
    },
    clickArea: {
        display: 'block',
        width: '100%',
        borderRadius: 1,     // was 12 → subtle rounding (~16px)
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: { xs: 200, sm: 280, md: 340 },
        objectFit: 'cover' as const,
        borderRadius: 1,     // match the clickArea
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