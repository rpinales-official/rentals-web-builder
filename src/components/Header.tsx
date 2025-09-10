import { useState } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import {
	AppBar, Toolbar, IconButton, Button, Box, Container, Drawer, List, ListItemButton,
	ListItemText, Divider, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
	{ label: 'Home', to: '/' },
	{ label: 'Properties', to: '/#properties' }, // anchor for now
	{ label: 'About Us', to: '/#about' },
	{ label: 'Contact', to: '/#contact' },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const toggle = (val: boolean) => () => setOpen(val);

	return (
		<AppBar position="sticky" elevation={0} sx={styles.appBar}>
			<Container>
				<Toolbar disableGutters sx={styles.toolbar}>
					{/* Mobile menu button */}
					<Box sx={styles.iconButtonContainer}>
						<IconButton aria-label="open navigation menu" edge="start" onClick={toggle(true)}>
							<MenuIcon />
						</IconButton>
					</Box>

					{/* Logo / Brand */}
					<Button
						component={RouterLink}
						to="/"
						sx={styles.logoButton}
					>
						Caona Homes
					</Button>

					{/* Desktop nav */}
					<Box sx={styles.navItemWrapper}>
						{navItems.map((item) => (
							<Button
								key={item.label}
								component={NavLink}
								to={item.to}
								sx={styles.navItem}
							>
								{item.label}
							</Button>
						))}
					</Box>

					{/* Spacer */}
					<Box sx={{ flexGrow: 1 }} />

					{/* CTA */}
					<Button
						variant="contained"
						color="primary"
						size="medium"
						sx={styles.cta}
						// TODO: replace href with your Airbnb link later
						href="#book"
					>
						Book Now
					</Button>
				</Toolbar>
			</Container>

			{/* Mobile Drawer */}
			<Drawer anchor="left" open={open} onClose={toggle(false)} ModalProps={{ keepMounted: true }}>
				<Box role="presentation" sx={styles.mobileBarWrapper} onClick={toggle(false)} onKeyDown={toggle(false)}>
					<Typography variant="h6" sx={styles.mobileLogo}>Caona Homes</Typography>
					<Divider />
					<List>
						{navItems.map((item) => (
							<ListItemButton key={item.label} component={RouterLink} to={item.to}>
								<ListItemText primary={item.label} />
							</ListItemButton>
						))}
					</List>
					<Box sx={styles.mobileCtaWrapper}>
						<Button fullWidth variant="contained" color="primary" sx={styles.mobileCta} href="#book">
							Book Now
						</Button>
					</Box>
				</Box>
			</Drawer>
		</AppBar>
	);
}

const styles = {
	appBar: {
		backgroundColor: 'background.paper',
		color: 'text.primary',
		borderBottom: 1,
		borderColor: 'divider'
	},
	toolbar: {
		gap: 2
	},
	iconButtonContainer: {
		display: {
			xs: 'inline-flex',
			md: 'none'
		}
	},
	logoButton: {
		fontSize: 20,
		fontWeight: 700,
		color: 'text.primary',
		mr: 1
	},
	navItemWrapper: {
		display: {
			xs: 'none',
			md: 'flex'
		},
		gap: 1,
		ml: 2
	},
	navItem: {
		color: 'text.secondary',
		'&.active': {
			color: 'text.primary',
			fontWeight: 600
		}
	},
	cta: {
		borderRadius: 999,
		px: 2.5
	},
	mobileBarWrapper: {
		width: 280
	},
	mobileLogo: {
		 p: 2,
		 fontWeight: 700
	},
	mobileCtaWrapper: {
		p: 2
	},
	mobileCta: {
		borderRadius: 999
	}
};