import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GalleryImageCard from '../components/GalleryImageCard';
import { properties, type Property } from '../mock/mockData';

type Props = {
    title?: string;
    propertyId: number;
    spacing?: number;
    // control grid density if you like
    cols?: { xs?: 12 | 6; sm?: 6 | 4 | 3 };
};

export default function GallerySection({
    title = 'Photo Gallery',
    propertyId,
    spacing = 2,
    cols = { xs: 6, sm: 3 },
}: Props) {
    const property: Property | undefined = React.useMemo(
        () => properties.find((p) => p.id === propertyId),
        [propertyId]
    );

    if (!property) return null;

    return (
        <Box sx={styles.wrap}>
            <Typography variant="h6" sx={styles.title}>{title}</Typography>

            <Grid container spacing={spacing}>
                {property.gallery.map((cat) => (
                    <Grid key={cat.key} item xs={cols.xs ?? 6} sm={cols.sm ?? 3}>
                        <GalleryImageCard
                            image={cat.cover}
                            label={cat.label}
                            imagesInCategory={cat.images}
                            sx={styles.cardSxOverride}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const styles = {
    wrap: { mb: 4 },
    title: { mb: 1.5 },
    // You can push any section-wide tweaks down into cards through sx here
    cardSxOverride: {},
};