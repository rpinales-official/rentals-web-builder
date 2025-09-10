import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

type Props = {
    icon?: React.ReactNode;
    iconKey?: string;
    label: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    ariaLabel?: string;
    iconMap?: Record<string, React.ReactNode>;
};

export default function HighlightIconCard({
    icon,
    iconKey,
    label,
    onClick,
    sx,
    ariaLabel,
    iconMap,
}: Props) {
    const resolvedIcon = icon ?? (iconKey && iconMap ? iconMap[iconKey] : null);

    return (
        <Paper
            elevation={0}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            aria-label={ariaLabel ?? label}
            sx={{ ...styles.card, ...(onClick ? styles.clickable : {}), ...sx }}
        >
            {resolvedIcon && <Box sx={styles.icon}>{resolvedIcon}</Box>}

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
        borderRadius: 2.5,
        bgcolor: 'background.paper',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
        '&:hover': {
            bgcolor: 'grey.50',
            borderColor: 'grey.300',
        },
    },
    clickable: {
        cursor: 'pointer',
    },
    icon: {
        display: 'inline-flex',
        alignItems: 'center',
        color: 'text.secondary',
    },
    label: {
        fontWeight: 600,
        color: 'text.primary',
    },
};