import { createTheme } from '@mui/material/styles';
import '@fontsource/cabin'; // Importa la fuente "Cabin"


const theme = createTheme({
  palette: {
    primary: { main: '#3052CC' }, // color azul para selección, encabezados, etc. (azul de Figma)
    secondary: { main: '#f50057' },
  },
  typography: {
    fontFamily: 'Cabin, sans-serif', // Fuente global para toda la app
  },
  shape: {
    borderRadius: 12, // Curvatura general para componentes
  },
  components: {
    // Sobrescribe estilos de componentes específicos
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

