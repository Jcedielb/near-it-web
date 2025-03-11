import React, { useState, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import KeyboardDoubleArrowRightOutlined from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const drawerWidth = 50;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hoverTimerRef = useRef(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Al mantener el mouse en el área sensible por 2s, se abre el sidebar.
  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setOpen(true);
    }, 600);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  // Cierra el sidebar al hacer click en el área principal
  const handleMainClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar
        open={open}
        selectedIndex={selectedIndex}
        onClose={toggleDrawer}
        onSelectItem={(index) => setSelectedIndex(index)}
      />

      {/* Contenido principal */}
      <Box
        component="main"
        onClick={handleMainClick}
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin 0.3s ease',
          marginLeft: open ? `${drawerWidth}px` : 0,
        }}
      >
        {children}
      </Box>

      {/* Botón para abrir el sidebar, ubicado en la parte superior izquierda */}
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={(theme) => ({
            position: 'fixed',
            top: theme.spacing(2),
            left: theme.spacing(0),
            zIndex: 1300,
            backgroundColor: theme.palette.primary.main,
            marginLeft: '0px',
            
            
            color: theme.palette.common.white,
            borderRadius: '0px 30px 30px 0px',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          })}
        >
          <KeyboardDoubleArrowRightOutlined />
        </IconButton>
      )}

      {/* Área sensible en el borde izquierdo para abrir el sidebar tras 2s */}
      {!open && (
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '20px',
            zIndex: 1200,
          }}
        />
      )}
    </Box>
  );
};

export default Layout;
