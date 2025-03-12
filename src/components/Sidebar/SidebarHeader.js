import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SidebarHeader = ({ onClose }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          UserName
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            backgroundColor: 'primary.main',
            color: 'common.white',
            borderRadius: '30px 0px 0px 30px',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            marginRight: '-18px',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          24 Alarmas
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarHeader;
