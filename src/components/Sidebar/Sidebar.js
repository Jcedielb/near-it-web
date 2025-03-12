import React from 'react';
import { Drawer, Divider, List, Box, Typography } from '@mui/material';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
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
          icon={<HomeOutlined />}
          text="Home"
          selected={selectedIndex === 0}
          onClick={() => {
            onSelectItem(0);
            navigate('/Home');
          }}          
        />
        <SidebarItem
          icon={<GroupsOutlined />}
          text="Grupos"
          selected={selectedIndex === 1}
          onClick={() => {
            onSelectItem(1);
            navigate('/Grupos'); 
          }}
        />
        <SidebarItem
          icon={<GroupsOutlined />}
          text="Alarmas grupales"
          selected={selectedIndex === 2}
          onClick={() => {
            onSelectItem(2);
            navigate('/Alarmas'); 
          }}
        />
        <SidebarItem
          icon={<DeleteOutlined />}
          text="Eliminadas"
          selected={selectedIndex === 3}
          onClick={() => {
            onSelectItem(3);
            // Define la ruta correspondiente
            navigate('/');
          }}
        />
      </List>

      <Divider />

    </Drawer>
  );
};

export default Sidebar;
