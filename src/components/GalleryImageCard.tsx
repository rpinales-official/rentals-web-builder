import * as React from 'react';
import { Box, Paper, Typography, Dialog, DialogContent, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { SxProps, Theme } from '@mui/material/styles';
import type { Img } from '../mock/mockData';

type Props = {
    image: Img;
    label: string;
    imagesInCategory?: Img[];
    onOpen?: () => void;
    sx?: SxProps<Theme>;
};

export default function GalleryImageCard({ image, label, imagesInCategory, onOpen, sx }: Props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => (onOpen ? onOpen() : setOpen(true));
    const handleClose = () => setOpen(false);

    return (
        <>
            <Paper elevation={0} onClick={handleOpen} sx={{ ...styles.card, ...sx }}>
                <Box component="img" src={image.src} alt={image.alt || label} loading="lazy" sx={styles.img} />
                <Typography variant="subtitle2" sx={styles.caption}>{label}</Typography>
            </Paper>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <Box sx={styles.modalHeader}>
                    <Typography variant="subtitle1">{label}</Typography>
                    <Tooltip title="Close">
                        <IconButton onClick={handleClose} aria-label="close" sx={styles.closeBtn}>
                            <CloseIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <DialogContent dividers sx={styles.modalBody}>
                    <Box component="img" src={image.src} alt={image.alt || label} sx={styles.modalImg} />
                </DialogContent>
            </Dialog>
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
    modalHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1 },
    closeBtn: { ml: 1 },
    modalBody: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 360, bgcolor: 'background.default' },
    modalImg: { width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 1 },
};