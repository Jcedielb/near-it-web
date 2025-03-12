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
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

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
            onClick={() => navigate('/nueva-alarma')}
            sx={(theme) => ({
              ml: 'auto',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                borderRadius: '20px',

              },
              height: 80,
              width: 80,
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
        <AlarmCard group="I3" title="AlarmaIndividual" description="Descripción" />
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
          width: 80,
          height: 80,
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
          width: 80,
          height:80,
          mb: 1,
          borderRadius: '12px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
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


const AlarmCard = ({
  group,       // string: p.ej. "G1" o "AlarmaIndividual"
  title,       // título de la alarma
  description, // descripción de la alarma
  sx = {},
}) => {
  // Definimos si es grupal o individual. Ajusta la lógica según tu proyecto.
  // Ejemplo: si el texto empieza con "G", lo consideramos grupo; si no, individual.
  const isGroup = group?.toLowerCase().startsWith('g');

  return (
    <Card
      sx={{
        mb: 1,
        backgroundColor: '#2B2B40',
        borderRadius: '30px 30px 30px 10px',
        color: '#fff',
        boxShadow: 1,
        maxWidth: 800,

        mx: 'auto', // Centra horizontalmente
        ...sx,
      }}
    >
      <CardContent sx={{ p: 2 }}>
        {/* Contenedor horizontal */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Avatar / círculo con borde */}
          <Box sx={{ mr: 7 , ml: 1}}>
            <Avatar
              sx={{
                // Ajusta el tamaño del círculo
                width: 40,
                height: 40,

                // Color de fondo del círculo (puede ser más oscuro para resaltar el borde)
                backgroundColor: 'primary.main',
                // Borde alrededor del círculo
                border: '2px solid', // Ajusta el color de borde (morado, por ejemplo)
                // Texto o ícono en blanco
                color: '#fff',
              }}
            >
              {isGroup ? (
                // Si es grupo, mostramos el texto del grupo, p.ej. "G1" o un ícono de grupo
                group.length >= 3 ? group : <GroupIcon />
              ) : (
                // Si es individual, mostramos ícono de persona
                <PersonIcon />
              )}
            </Avatar>
          </Box>

          {/* Contenido de la alarma */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};



  
