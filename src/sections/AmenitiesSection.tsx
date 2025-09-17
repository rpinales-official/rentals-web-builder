import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AmenityIconCard from '../components/AmenityIconCard';
import { amenityIconMap } from '../components/amenityIconMap';
import { properties, type Property } from '../mock/mockData';

type AmenitiesSectionProps = {
    title?: string;
    propertyId?: number;
    /** Minimum card width before wrapping (px). Defaults to 160. */
    minItemWidth?: number;
    /** Maximum card width (px). Defaults to 240. */
    maxItemWidth?: number;
    /** Gap between items (theme spacing units). Defaults to 1.5. */
    gap?: number;
};

export default function AmenitiesSection({
    title = 'Amenities',
    propertyId = 1,
    minItemWidth = 160,
    maxItemWidth = 240,
    gap = 1.5,
}: AmenitiesSectionProps) {
    const property: Property | undefined = React.useMemo(
        () => properties.find((p) => p.id === propertyId),
        [propertyId]
    );

    if (!property) return null;

    return (
        <Box sx={styles.wrap}>
            <Typography variant="h6" sx={styles.title}>{title}</Typography>

            <Box
                role="list"
                sx={{
                    ...styles.grid,
                    gap, // still controls spacing
                }}
            >
                {property.amenities.map((a, i) => (
                    <Box
                        role="listitem"
                        key={`${a.icon}-${a.label}-${i}`}
                        sx={styles.item}
                    >
                        <AmenityIconCard iconKey={a.icon} label={a.label} iconMap={amenityIconMap} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

const styles = {
    wrap: { position: 'relative', mb: 4 },
    title: { mb: 1.5 },
    grid: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        alignItems: 'flex-start',
        gap: 1, // tighter gaps (1 = 8px, 1.5 = 12px, etc.)
    },
    item: {
        flex: '0 0 auto',   // <-- don't stretch, just fit content
    },
};