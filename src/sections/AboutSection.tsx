import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { properties, type Property } from '../mock/mockData';

type Props = {
    title?: string;
    propertyId: number;
};

export default function AboutSection({ title = 'About the Property', propertyId }: Props) {
    const property: Property | undefined = React.useMemo(
        () => properties.find((p) => p.id === propertyId),
        [propertyId]
    );

    if (!property) return null;

    return (
        <Box sx={styles.wrap}>
            <Typography variant="h6" sx={styles.title}>
                {title}
            </Typography>

            {/* Description */}
            {property.description && (
                <Typography variant="body1" sx={styles.desc}>
                    {property.description}
                </Typography>
            )}

            {/* Main image */}
            <Box
                component="img"
                src={property.mainImage.src}
                alt={property.mainImage.alt || property.name}
                loading="lazy"
                sx={styles.img}
            />
        </Box>
    );
}

const styles = {
    wrap: { mb: 4 },
    title: { mb: 1 },
    desc: {
        mb: 2,
        color: 'text.secondary',
        maxWidth: 900,
        lineHeight: 1.6,
    },
    img: {
        width: '100%',
        maxHeight: { xs: 380, sm: 480, md: 560 },
        objectFit: 'cover' as const,
        borderRadius: 1,
        display: 'block',
        boxShadow: 0,
    },
};