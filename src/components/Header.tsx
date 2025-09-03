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
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper', color: 'text.primary', borderBottom: 1, borderColor: 'divider' }}>
      <Container>
        <Toolbar disableGutters sx={{ gap: 2 }}>
          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton aria-label="open navigation menu" edge="start" onClick={toggle(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo / Brand */}
          <Button
            component={RouterLink}
            to="/"
            sx={{ fontSize: 20, fontWeight: 700, color: 'text.primary', mr: 1 }}
          >
            Caona Homes
          </Button>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.to}
                sx={{
                  color: 'text.secondary',
                  '&.active': { color: 'text.primary', fontWeight: 600 },
                }}
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
            sx={{ borderRadius: 999, px: 2.5 }}
            // TODO: replace href with your Airbnb link later
            href="#book"
          >
            Book Now
          </Button>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={toggle(false)} ModalProps={{ keepMounted: true }}>
        <Box role="presentation" sx={{ width: 280 }} onClick={toggle(false)} onKeyDown={toggle(false)}>
          <Typography variant="h6" sx={{ p: 2, fontWeight: 700 }}>Coastal Retreats</Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.label} component={RouterLink} to={item.to}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <Button fullWidth variant="contained" color="primary" sx={{ borderRadius: 999 }} href="#book">
              Book Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}