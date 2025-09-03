import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#1e9478'
    },
    background: {
        default: '#f7f8f7'
    }
  },
  shape: {
    borderRadius: 12
},
  typography: {
    fontFamily: ['Lexend', 'Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
        fontWeight: 700
    },
    button: {
        textTransform: 'none',
        fontWeight: 600
    },
  },
  components: {
    MuiContainer: {
        defaultProps: {
            maxWidth: 'lg'
        }
    },
    MuiPaper: {
        styleOverrides: {
            rounded: {
                borderRadius: 16
            }
        }
    },
  },
});

export default theme;