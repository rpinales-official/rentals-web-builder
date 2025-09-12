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

export default function GalleryImageCard({ image, label, imagesInCategory = [], onOpen, sx }: Props) {
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
                <Typography variant="subtitle2" sx={styles.caption}>{label}</Typography>
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
        cursor: 'pointer',
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        transition: 'transform 160ms ease, box-shadow 160ms ease',
        boxShadow: 1,
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
    },
    img: { width: '100%', height: 140, objectFit: 'cover', display: 'block' },
    caption: { px: 1, py: 0.75, color: 'text.primary', fontWeight: 600 },
};