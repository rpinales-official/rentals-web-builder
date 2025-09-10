import * as React from 'react';
import {
    Box,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
    Tooltip,
} from '@mui/material';
// replace your current Grid import(s)
import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeaturedPropertyCard from '../components/FeaturedPropertyCard';
import { properties as defaultList, type Property } from '../mock/mockData';

type Props = {
    title?: string;
    items?: Property[];
    visible?: number;        // desktop/tablet visible count
    visibleMobile?: number;  // mobile visible count
    spacing?: number;        // spacing between cards
    randomize?: boolean;  // whether to randomize the order of items
};

export default function FeaturedPropertiesCarousel({
    title = 'Featured Properties',
    items = defaultList,
    visible = 2,
    visibleMobile = 1,
    spacing = 3,
    randomize = true,
}: Props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const orderedItems = React.useMemo(
        () => (randomize ? shuffleArray(items) : items),
        [items, randomize]
    );

    const vis = isMobile ? Math.max(1, visibleMobile) : Math.max(1, visible);
    const total = orderedItems.length;

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

    // swipe support
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
            out.push(orderedItems[(start + i) % total]);
        }
        return out;
    }, [orderedItems, start, vis, total]);

    function shuffleArray<T>(arr: T[]): T[] {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    return (
        <Box sx={styles.container}>
            <Typography variant="h5" sx={styles.mb2}>
                {title}
            </Typography>

            {/* Arrows */}
            {canSlide && (
                <>
                    <Tooltip title="Previous">
                        <IconButton
                            aria-label="previous properties"
                            onClick={prev}
                            sx={{ ...styles.iconButtonBase, left: -40 }}
                        >
                            <ArrowBackIosNewIcon fontSize="medium" />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Next">
                        <IconButton
                            aria-label="next properties"
                            onClick={next}
                            sx={{ ...styles.iconButtonBase, right: -40 }}
                        >
                            <ArrowForwardIosIcon fontSize="medium" />
                        </IconButton>
                    </Tooltip>
                </>
            )}

            {/* Cards */}
            <Box onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <Grid container spacing={spacing}>
                    {windowItems.map((p) => (
                        <Grid key={p.id} item xs={12} sm={6} sx={styles.innerGrid}>
                            <FeaturedPropertyCard property={p} sx={styles.featuredPropertyCard} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        position: 'relative',
        mb: 4
    },
    iconButtonBase: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        boxShadow: 1,
        transition: 'background-color 0.2s ease, color 0.2s ease',
        '&:hover': {
            bgcolor: 'primary.main',
            color: '#fff',
        },
    },
    innerGrid: {
        display: 'flex'
    },
    featuredPropertyCard: {
        flexGrow: 1
    },
    mb2: {
        marginBottom: 2
    }
};