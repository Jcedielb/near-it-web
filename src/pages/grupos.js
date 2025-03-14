import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const grupos = [
  {
    id: 'g1',
    nombre: 'Grupo1',
    color: '#2B2B40',
    integrantes: ['Integrante1', 'Integrante2'],
    descripcion: 'DescripciónExtensa1',
    categoria: 'Categoría1',
  },
  {
    id: 'g2',
    nombre: 'Grupo2',
    color: '#4C5782',
    integrantes: ['Integrante1', 'Integrante2'],
    descripcion: 'DescripciónExtensa2',
    categoria: 'Categoría2',
  },
  {
    id: 'g3',
    nombre: 'Grupo3',
    color: '#E57373',
    integrantes: ['Integrante1', 'Integrante2'],
    descripcion: 'DescripciónExtensa3',
    categoria: 'Categoría3',
  },
];

const Grupos = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Near-it
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Grupos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/nuevo-grupo')}
          startIcon={<AddIcon />}
        >
          Agregar Grupo
        </Button>
      </Box>
      <Grid container spacing={2}>
        {grupos.map((grupo) => (
          <Grid item xs={12} md={6} lg={4} key={grupo.id}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: grupo.color,
                  width: 56,
                  height: 56,
                  mr: 2,
                }}
              >
                {grupo.nombre.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {grupo.nombre}
                </Typography>
                <List>
                  {grupo.integrantes.map((integrante, index) => (
                    <ListItem key={index} sx={{ p: 0 }}>
                      <ListItemText primary={integrante} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="body2">{grupo.descripcion}</Typography>
                <Typography variant="body2">{grupo.categoria}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              backgroundColor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/nuevo-grupo')}
          >
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                width: 56,
                height: 56,
                mr: 2,
              }}
            >
              <AddIcon />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Agregar Grupo
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Grupos;
