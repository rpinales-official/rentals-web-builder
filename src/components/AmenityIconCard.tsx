import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { amenityIconMap, fallbackAmenityIcon } from './amenityIconMap';

type Props = {
    icon?: React.ReactNode;
    iconKey?: string;
    label: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    ariaLabel?: string;
    iconMap?: Record<string, React.ReactNode>;
};

export default function AmenityIconCard({
    icon,
    iconKey,
    label,
    onClick,
    sx,
    ariaLabel,
    iconMap = amenityIconMap,
}: Props) {
    const resolvedIcon =
        icon ?? (iconKey ? iconMap[iconKey] ?? fallbackAmenityIcon : fallbackAmenityIcon);

    return (
        <Paper
            elevation={0}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            aria-label={ariaLabel ?? label}
            sx={{ ...styles.card, ...(onClick ? styles.clickable : {}), ...sx }}
        >
            <Box sx={styles.icon}>{resolvedIcon}</Box>
            <Typography variant="body2" sx={styles.label}>
                {label}
            </Typography>
        </Paper>
    );
}

const styles = {
    card: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        border: 1,
        borderColor: 'divider',
        px: 1.5,
        py: 1,
        borderRadius: 1, // rectangular (slight rounding). Use 0 for sharp corners.
        bgcolor: 'background.paper',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
        '&:hover': { bgcolor: 'grey.50', borderColor: 'grey.300' },
    },
    clickable: { cursor: 'pointer' },
    icon: { display: 'inline-flex', alignItems: 'center', color: 'text.secondary' },
    label: { fontWeight: 600, color: 'text.primary' },
};