// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Drawer, Divider, List, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, selectedIndex, onClose, onSelectItem }) => {
  const navigate = useNavigate();

  // Función para manejar el clic en un label y navegar
  const handleLabelClick = (labelIndex, route) => {
    onSelectItem(labelIndex);
    navigate(route);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <SidebarHeader onClose={onClose} />

      <Divider />

      <List>
        <SidebarItem
          icon={<HomeIcon />}
          text="Home"
          selected={selectedIndex === 0}
          onClick={() => {
            onSelectItem(0);
            navigate('/Home');
          }}
        />
        <SidebarItem
          icon={<NotificationsIcon />}
          text="Alarmas grupales"
          selected={selectedIndex === 1}
          onClick={() => {
            onSelectItem(1);
            // Puedes definir una ruta para esta opción si la tienes
            navigate('/Alarmas'); 
          }}
        />
        <SidebarItem
          icon={<DeleteIcon />}
          text="Eliminadas"
          selected={selectedIndex === 2}
          onClick={() => {
            onSelectItem(2);
            // Define la ruta correspondiente
            navigate('/');
          }}
        />
      </List>

      <Divider />

      <Box sx={{ p: 1 }}>
        <Typography variant="subtitle2" sx={{ ml: 1, mb: 1, fontWeight: 'bold' }}>
          Labels
        </Typography>
        <List>
          {[
            { label: 'Alarmas', route: '/label1' },
            { label: 'Label 2', route: '/label2' },
            { label: 'Label 3', route: '/label3' },
          ].map((item, idx) => (
            <SidebarItem
              key={item.label}
              icon={<HomeIcon />}
              text={item.label}
              selected={selectedIndex === idx + 3}
              onClick={() => handleLabelClick(idx + 3, item.route)}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
