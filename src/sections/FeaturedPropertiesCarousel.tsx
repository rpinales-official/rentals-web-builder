import * as React from 'react';
import { Box, IconButton, Typography, useMediaQuery, useTheme, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeaturedPropertyCard from '../components/FeaturedPropertyCard';
import { properties as defaultList, type Property } from '../mock/mockData';

type Props = {
    title?: string;
    items?: Property[];           // we’ll receive the ordered list
    visible?: number;
    visibleMobile?: number;
    spacing?: number;
    onSelect?: (property: Property) => void;
    selectedId?: number;
};


export default function FeaturedPropertiesCarousel({
    title = 'Featured Properties',
    items = defaultList,
    visible = 2,
    visibleMobile = 1,
    spacing = 3,
    onSelect,
    selectedId,
}: Props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const vis = isMobile ? Math.max(1, visibleMobile) : Math.max(1, visible);
    const total = items.length;

    const [start, setStart] = React.useState(0);
    const canSlide = total > vis;

    const next = React.useCallback(() => {
        if (!canSlide) return;
        setStart((s) => (s + vis) % total);
    }, [canSlide, vis, total]);

    const prev = React.useCallback(() => {
        if (!canSlide) return;
        setStart((s) => (s - vis + total) % total);
    }, [canSlide, vis, total]);

    const touchX = React.useRef<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchX.current;
        const threshold = 40;
        if (delta > threshold) prev();
        if (delta < -threshold) next();
        touchX.current = null;
    };

    const windowItems: Property[] = React.useMemo(() => {
        if (total === 0) return [];
        const out: Property[] = [];
        for (let i = 0; i < Math.min(vis, total); i++) {
            out.push(items[(start + i) % total]);
        }
        return out;
    }, [items, start, vis, total]);

    return (
        <Box sx={{ position: 'relative', mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>{title}</Typography>

            {canSlide && (
                <>
                    <Tooltip title="Previous">
                        <IconButton aria-label="previous properties" onClick={prev} sx={{ ...styles.iconButtonBase, left: -40 }}>
                            <ArrowBackIosNewIcon fontSize="medium" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Next">
                        <IconButton aria-label="next properties" onClick={next} sx={{ ...styles.iconButtonBase, right: -40 }}>
                            <ArrowForwardIosIcon fontSize="medium" />
                        </IconButton>
                    </Tooltip>
                </>
            )}

            <Box onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <Grid container spacing={spacing}>
                    {windowItems.map((p) => (
                        <Grid key={p.id} item xs={12} sm={6} sx={{ display: 'flex' }}>
                            <FeaturedPropertyCard
                                property={p}
                                onSelect={onSelect}
                                selected={p.id === selectedId}
                                sx={{ flexGrow: 1 }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

const styles = {
    iconButtonBase: {
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