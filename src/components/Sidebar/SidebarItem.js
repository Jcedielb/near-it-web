import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const SidebarItem = ({ icon, text, selected, onClick }) => {
  return (
    <ListItemButton
      selected={selected}
      onClick={onClick}
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: '#fff',
          borderRadius: '12px',
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default SidebarItem;
