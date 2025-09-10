import * as React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import AmenityIconCard from '../components/AmenityIconCard';
import { amenityIconMap } from '../components/amenityIconMap';
import { properties, type Property } from '../mock/mockData';

type Props = {
    /** Section title */
    title?: string;
    /** Property ID to read amenities from (defaults to 1) */
    propertyId?: number;
    /** Scroll amount in px per arrow click */
    scrollBy?: number;
};

export default function AmenitiesSection({
    title = 'Amenities',
    propertyId = 1,
    scrollBy = 320,
}: Props) {
    const scrollerRef = React.useRef<HTMLDivElement | null>(null);
    const [canLeft, setCanLeft] = React.useState(false);
    const [canRight, setCanRight] = React.useState(false);

    const property: Property | undefined = React.useMemo(
        () => properties.find((p) => p.id === propertyId),
        [propertyId]
    );

    const updateButtons = React.useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setCanLeft(scrollLeft > 0);
        setCanRight(scrollLeft + clientWidth < scrollWidth - 1);
    }, []);

    React.useEffect(() => {
        updateButtons();
        const el = scrollerRef.current;
        if (!el) return;
        const onScroll = () => updateButtons();
        el.addEventListener('scroll', onScroll, { passive: true });
        const onResize = () => updateButtons();
        window.addEventListener('resize', onResize);
        return () => {
            el.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, [updateButtons]);

    const scroll = (dir: 'left' | 'right') => {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === 'left' ? -scrollBy : scrollBy, behavior: 'smooth' });
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') scroll('left');
        if (e.key === 'ArrowRight') scroll('right');
    };

    if (!property) return null;

    return (
        <Box sx={styles.wrap}>
            <Typography variant="h6" sx={styles.title}>
                {title}
            </Typography>

            {canLeft && (
                <Tooltip title="Scroll left">
                    <IconButton
                        aria-label="scroll left"
                        onClick={() => scroll('left')}
                        sx={{ ...styles.arrowBase, left: -8 }}
                    >
                        <NavigateBeforeIcon fontSize="medium" />
                    </IconButton>
                </Tooltip>
            )}
            {canRight && (
                <Tooltip title="Scroll right">
                    <IconButton
                        aria-label="scroll right"
                        onClick={() => scroll('right')}
                        sx={{ ...styles.arrowBase, right: -8 }}
                    >
                        <NavigateNextIcon fontSize="medium" />
                    </IconButton>
                </Tooltip>
            )}

            <Box
                ref={scrollerRef}
                role="list"
                tabIndex={0}
                onKeyDown={onKeyDown}
                sx={styles.scroller}
            >
                {property.amenities.map((a, i) => (
                    <Box role="listitem" key={`${a.icon}-${a.label}-${i}`} sx={styles.item}>
                        <AmenityIconCard iconKey={a.icon} label={a.label} iconMap={amenityIconMap} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

const styles = {
    wrap: {
        position: 'relative',
        mb: 4,
    },
    title: {
        mb: 1.5,
    },
    scroller: {
        display: 'flex',
        gap: 1.5,
        overflowX: 'auto',
        overflowY: 'hidden',
        py: 1,
        px: 0.5,
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': { height: 6 },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 999 },
        '& > *': { scrollSnapAlign: 'start' },
    },
    item: {
        flex: '0 0 auto',
    },
    arrowBase: {
        position: 'absolute' as const,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        boxShadow: 1,
        transition: 'background-color 0.2s ease, color 0.2s ease',
        '&:hover': { bgcolor: 'primary.main', color: '#fff' },
    },
};