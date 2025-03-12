import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Grid,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationAddOutlined from '@mui/icons-material/NotificationAddOutlined';


const Home = () => {
  return (
    <Box sx={{ width: '100%', p: 3 }}>
      {/* Sección de GRUPOS */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
            Grupos
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            &rarr;
          </Typography>
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <GroupCard label="G1" displayName="Grupo1" bgColor="#2B2B40" />
          </Grid>
          <Grid item>
            <GroupCard label="G2" displayName="Grupo2" bgColor="#4C5782" />
          </Grid>
          <Grid item>
            <GroupCard label="G3" displayName="Grupo3" bgColor="#8187DC" />
          </Grid>
          <Grid item>
            <GroupCard label="G4" displayName="Grupo4" bgColor="#A9B3F2" />
          </Grid>
          <Grid item>
            <AddGroupCard />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Sección de PRÓXIMAS ALARMAS */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
            Próximas alarmas
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            &rarr;
          </Typography>
          <IconButton
            sx={(theme) => ({
              marginLeft: 'auto',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
              height: 50,
              width: 50,
              borderRadius: '15px',
              mr: 15,
            })}
          >
            <NotificationAddOutlined />
          </IconButton>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
          Hoy 3 de marzo
        </Typography>
        <AlarmCard group="G1" title="Alarma1" description="Descripción" />
        <AlarmCard group="G3" title="AlarmaIndividual" description="Descripción" />
        <AlarmCard group="G2" title="Alarma2" description="Descripción" sx={{ mb: 2 }} />

        <Typography variant="subtitle1" sx={{ mb: 1, mt: 3, fontWeight: 'bold' }}>
          Martes 4 de marzo
        </Typography>
        <AlarmCard group="G2" title="Alarma2" description="Descripción" />
        <AlarmCard group="G2" title="Alarma2" description="Descripción" />
        <AlarmCard group="G2" title="Alarma2" description="Descripción" />

      </Box>
    </Box>
  );
};

export default Home;

/**
 * Tarjeta para representar cada grupo.
 */
const GroupCard = ({ label, displayName, bgColor }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Avatar
        sx={{
          backgroundColor: bgColor || 'primary.main',
          width: 56,
          height: 56,
          mb: 1,
          borderRadius: '12px',
        }}
      >
        {label}
      </Avatar>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        {displayName}
      </Typography>
    </Box>
  );
};

/**
 * Botón para agregar un grupo, con la misma apariencia que los GroupCard.
 */
const AddGroupCard = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Avatar
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          width: 56,
          height: 56,
          mb: 1,
          borderRadius: '12px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ml: 2.5,
          
        })}
      >
        <AddIcon sx={{ color: '#fff' }} />
      </Avatar>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Agregar grupo
      </Typography>
    </Box>
  );
};

/**
 * Tarjeta para representar una alarma.
 * Se han reducido los tamaños de fuente y el padding para que sea más compacta.
 */
const AlarmCard = ({ group, title, description, sx = {} }) => {
    return (
      <Card
        sx={{
          mb: 1,
          backgroundColor: '#1D1B33',
          borderRadius: '30px',
          color: '#fff',
          boxShadow: 1,
          maxWidth: 800, // Limita el ancho máximo a 300px (ajusta este valor según tu diseño)
          width: '100%', // Se adapta al 100% del contenedor, pero no excederá maxWidth
          mx: 'auto', // Centra el componente horizontalmente
        }}
      >
        <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
          <Typography variant="caption" sx={{ fontWeight: 'bold', mb: 0.3 }}>
            {group}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.3 }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
