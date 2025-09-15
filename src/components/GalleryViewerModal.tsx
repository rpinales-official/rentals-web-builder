import * as React from 'react';
import {
    Box,
    Dialog,
    DialogContent,
    IconButton,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import type { Img } from '../mock/mockData';

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;        // category label, e.g., "Kitchen"
    images: Img[];
    startIndex?: number;
};

export default function GalleryViewerModal({
    open,
    onClose,
    title,
    images,
    startIndex = 0,
}: Props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const count = images?.length ?? 0;

    const [index, setIndex] = React.useState(startIndex);

    // Ensure index is valid on open or when images change
    React.useEffect(() => {
        if (!open) return;
        const safe = Math.min(Math.max(startIndex, 0), Math.max(count - 1, 0));
        setIndex(safe);
    }, [open, startIndex, count]);

    const hasImages = count > 0;
    const current = hasImages ? images[index] : undefined;

    // Preload adjacent images for smoother nav
    React.useEffect(() => {
        if (!hasImages) return;
        const nextIdx = (index + 1) % count;
        const prevIdx = (index - 1 + count) % count;
        [nextIdx, prevIdx].forEach((i) => {
            const src = images[i]?.src;
            if (!src) return;
            const img = new Image();
            img.src = src;
        });
    }, [index, images, hasImages, count]);

    const go = (dir: 'prev' | 'next') => {
        if (!hasImages) return;
        setIndex((i) => (dir === 'prev' ? (i - 1 + count) % count : (i + 1) % count));
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (!hasImages) return;
        if (e.key === 'ArrowLeft') go('prev');
        if (e.key === 'ArrowRight') go('next');
        if (e.key === 'Escape') onClose();
    };

    // Basic swipe
    const touchX = React.useRef<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchX.current;
        const threshold = 40;
        if (delta > threshold) go('prev');
        if (delta < -threshold) go('next');
        touchX.current = null;
    };

    // Thumbnail click
    const onThumbClick = (i: number) => setIndex(i);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullScreen={fullScreen}
            fullWidth
            maxWidth="lg"
            PaperProps={{ sx: styles.paper }}
        >
            {/* Header */}
            <Box sx={styles.header}>
                <Typography variant="subtitle1" sx={styles.title}>
                    {title ?? 'Gallery'}
                    {hasImages && (
                        <Typography component="span" variant="body2" sx={styles.counter}>
                            {' '}- {index + 1}/{count}
                        </Typography>
                    )}
                </Typography>

                <Tooltip title="Close">
                    <IconButton aria-label="close" onClick={onClose} sx={styles.closeBtn}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Main viewer */}
            <DialogContent
                dividers
                sx={styles.content}
                onKeyDown={onKeyDown}
                tabIndex={0}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {hasImages && count > 1 && (
                    <>
                        <Tooltip title="Previous">
                            <IconButton aria-label="previous image" onClick={() => go('prev')} sx={{ ...styles.arrowBase, left: 8 }}>
                                <NavigateBeforeIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Next">
                            <IconButton aria-label="next image" onClick={() => go('next')} sx={{ ...styles.arrowBase, right: 8 }}>
                                <NavigateNextIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </>
                )}

                {hasImages ? (
                    <Box
                        component="img"
                        src={current!.src}
                        alt={current!.alt || title || 'Gallery image'}
                        loading="eager"
                        sx={styles.img}
                    />
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No images available.
                    </Typography>
                )}
            </DialogContent>

            {/* Thumbnail strip */}
            {hasImages && (
                <Box sx={styles.thumbBar}>
                    <Box sx={styles.thumbScroller} role="list">
                        {images.map((img, i) => {
                            const selected = i === index;
                            return (
                                <Box
                                    role="listitem"
                                    key={`${img.src}-${i}`}
                                    onClick={() => onThumbClick(i)}
                                    aria-label={`Thumbnail ${i + 1} ${selected ? '(current)' : ''}`}
                                    sx={{ ...styles.thumbWrap, ...(selected ? styles.thumbSelected : {}) }}
                                >
                                    <Box
                                        component="img"
                                        src={img.src}
                                        alt={img.alt || `Thumbnail ${i + 1}`}
                                        loading="lazy"
                                        sx={styles.thumb}
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            )}
        </Dialog>
    );
}

const styles = {
    paper: {
        borderRadius: { xs: 0, sm: 2 },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1,
    },
    title: { fontWeight: 600 },
    counter: { color: 'text.secondary', fontWeight: 400 },
    closeBtn: { ml: 1 },

    content: {
        position: 'relative' as const,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: { xs: 320, sm: 420 },
        bgcolor: 'background.default',
        outline: 'none',
    },
    img: {
        width: '100%',
        maxHeight: '75vh',
        objectFit: 'contain' as const,
        borderRadius: 1,
        userSelect: 'none' as const,
        WebkitUserDrag: 'none' as const,
    },
    arrowBase: {
        position: 'absolute' as const,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        boxShadow: 1,
        '&:hover': { bgcolor: 'primary.main', color: '#fff' },
    },

    // Thumbnails
    thumbBar: {
        px: 2,
        py: 1,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
    },
    thumbScroller: {
        display: 'flex',
        gap: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollSnapType: 'x proximity',
        pb: 0.5,
        '&::-webkit-scrollbar': { height: 6 },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 999 },
    },
    thumbWrap: {
        flex: '0 0 auto',
        width: 80,         // 👈 tweak size here
        height: 56,
        borderRadius: 1,
        overflow: 'hidden',
        border: 1,
        borderColor: 'transparent',
        cursor: 'pointer',
        scrollSnapAlign: 'start',
        transition: 'transform 120ms ease, border-color 120ms ease',
        '&:hover': { transform: 'translateY(-1px)' },
    },
    thumbSelected: {
        borderColor: 'primary.main',
        boxShadow: 1,
    },
    thumb: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        display: 'block',
    },
};