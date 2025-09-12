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
    title?: string;          // category label, e.g. "Kitchen"
    images: Img[];           // images in this category
    startIndex?: number;     // initial image index
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

    // keep index in range when images change or modal reopens
    React.useEffect(() => {
        if (!open) return;
        const safe = Math.min(Math.max(startIndex, 0), Math.max(count - 1, 0));
        setIndex(safe);
    }, [open, startIndex, count]);

    const hasImages = count > 0;

    const go = (dir: 'prev' | 'next') => {
        if (!hasImages) return;
        setIndex((i) => {
            if (dir === 'prev') return (i - 1 + count) % count;
            return (i + 1) % count;
        });
    };

    // keyboard navigation
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (!hasImages) return;
        if (e.key === 'ArrowLeft') go('prev');
        if (e.key === 'ArrowRight') go('next');
        if (e.key === 'Escape') onClose();
    };

    // basic swipe
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

    const current = hasImages ? images[index] : undefined;

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

            {/* Content */}
            <DialogContent
                dividers
                sx={styles.content}
                onKeyDown={onKeyDown}
                tabIndex={0}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {/* Prev / Next */}
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

                {/* Image */}
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
    title: {
        fontWeight: 600,
    },
    counter: {
        color: 'text.secondary',
        fontWeight: 400,
    },
    closeBtn: {
        ml: 1,
    },
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
};