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
          borderRadius: '10px 30px 30px 30px',
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
          marginLeft: '5px',
          marginRight: '5px',
          marginBottom: '5px',

        },

        '&.Mui-selected:hover': {
          backgroundColor: 'primary.main',
          borderRadius: '10px 30px 30px 30px',
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
          marginLeft: '5px',
          marginRight: '5px',
          marginBottom: '5px',

        },
        
        '&:hover': {
          backgroundColor: 'gray',
          
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
          marginLeft: '5px',
          marginRight: '5px',
          marginBottom: '5px',
          borderRadius: '30px 30px 30px 30px',

        },
        
        
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default SidebarItem;
