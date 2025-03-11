// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3052CC' }, // color azul para selección, encabezados, etc.
    secondary: { main: '#f50057' },
  },
  shape: {
    borderRadius: 12, // curvatura general para componentes
  },
  components: {
    // Puedes sobreescribir estilos de componentes específicos aquí.
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#3f51b5',
            color: '#fff',
            borderRadius: 12, // Curvatura en el ítem seleccionado
            '& .MuiListItemIcon-root': {
              color: '#fff',
            },
          },
        },
      },
    },
  },
});

export default theme;
