import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { Img } from '../mock/mockData';
import GalleryViewerModal from './GalleryViewerModal';

type Props = {
    image: Img;                  // category cover
    label: string;               // category label
    imagesInCategory?: Img[];    // full set for modal
    onOpen?: () => void;         // optional external open handler
    sx?: SxProps<Theme>;
};

export default function GalleryImageCard({
    image,
    label,
    imagesInCategory = [],
    onOpen,
    sx,
}: Props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        if (onOpen) onOpen();
        else setOpen(true);
    };
    const handleClose = () => setOpen(false);

    return (
        <>
            <Paper elevation={0} onClick={handleOpen} sx={{ ...styles.card, ...sx }}>
                <Box component="img" src={image.src} alt={image.alt || label} loading="lazy" sx={styles.img} />

                {/* Floating label overlay (no border/shadow) */}
                <Box sx={styles.badgeWrap}>
                    <Typography variant="body2" sx={styles.badgeText}>
                        {label}
                    </Typography>
                </Box>
            </Paper>

            <GalleryViewerModal
                open={open}
                onClose={handleClose}
                title={label}
                images={imagesInCategory}
                startIndex={0}
            />
        </>
    );
}

const styles = {
    card: {
        position: 'relative' as const,
        cursor: 'pointer',
        width: '100%',
        borderRadius: 1,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        transition: 'transform 160ms ease, box-shadow 160ms ease',
        boxShadow: 0,                    // no shadow for a cleaner tile
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 },
    },
    img: { width: '100%', height: 140, objectFit: 'cover', display: 'block' },

    // Floating label
    badgeWrap: {
        position: 'absolute' as const,
        left: 10,
        bottom: 10,
        px: 1,
        py: 0.25,
        borderRadius: 1,                 // tiny rounding on the chip
        bgcolor: 'rgba(255,255,255,0.92)',   // “no border/shadow” look
    },
    badgeText: { fontWeight: 600, color: 'text.primary', lineHeight: 1.2 },
};