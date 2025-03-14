// src/pages/nueva-alarma.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const NuevaAlarma = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaHora, setFechaHora] = useState(new Date());
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [integrantesSeleccionados, setIntegrantesSeleccionados] = useState([]);

  // Datos de ejemplo para grupos e integrantes
  const grupos = [
    { id: 'g1', nombre: 'Grupo 1' },
    { id: 'g2', nombre: 'Grupo 2' },
    { id: 'g3', nombre: 'Grupo 3' },
  ];

  const integrantes = [
    { id: 'i1', nombre: 'Integrante 1' },
    { id: 'i2', nombre: 'Integrante 2' },
    { id: 'i3', nombre: 'Integrante 3' },
  ];

  // Definir hook de navegación y estado para Snackbar
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    navigate('/alarmas');
  };

  // Maneja el cambio en el select de integrantes
  const handleIntegrantesChange = (event) => {
    const {
      target: { value },
    } = event;
    // Si se incluye el valor "all", selecciona o deselecciona todos
    if (value.includes('all')) {
      if (integrantesSeleccionados.length === integrantes.length) {
        setIntegrantesSeleccionados([]);
      } else {
        setIntegrantesSeleccionados(integrantes.map((item) => item.id));
      }
    } else {
      setIntegrantesSeleccionados(typeof value === 'string' ? value.split(',') : value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      titulo.trim() !== '' &&
      descripcion.trim() !== '' &&
      fechaHora &&
      grupoSeleccionado.trim() !== '' &&
      integrantesSeleccionados.length > 0
    ) {
      console.log({
        titulo,
        descripcion,
        fechaHora,
        grupoSeleccionado,
        integrantesSeleccionados,
      });
      setOpenSnackbar(true); // Muestra el mensaje de confirmación
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 350,
        mx: 'auto',
        p: 10,
        backgroundColor: 'background.paper',
        borderRadius: '30px 30px 10px 30px',
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" sx={{ mb: 5, textAlign: 'center', color: 'primary.main' }}>
        Crear alarma grupal
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Título */}
        <TextField
          label="Título de la alarma"
          variant="outlined"
          fullWidth
          required
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        {/* Descripción */}
        <TextField
          label="Descripción"
          helperText="Detalla datos relevantes (Ubicación, motivo, etc.)"
          variant="outlined"
          fullWidth
          multiline
          required
          rows={2}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        {/* Selección de Grupo */}
        <FormControl fullWidth>
          <InputLabel id="grupo-label">Grupo</InputLabel>
          <Select
            labelId="grupo-label"
            label="Grupo"
            required
            value={grupoSeleccionado}
            onChange={(e) => setGrupoSeleccionado(e.target.value)}
          >
            {grupos.map((grupo) => (
              <MenuItem key={grupo.id} value={grupo.id}>
                {grupo.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Selección de Integrantes (Multi-select) */}
        <FormControl fullWidth disabled={!grupoSeleccionado}>
          <InputLabel id="integrantes-label">
            {grupoSeleccionado ? "Integrantes" : "Selecciona un grupo para ver los integrantes"}
          </InputLabel>
          <Select
            labelId="integrantes-label"
            label={grupoSeleccionado ? "Integrantes" : "Escoge el grupo al cual quieres asignarle la alarma"}
            multiple
            required
            value={integrantesSeleccionados}
            onChange={handleIntegrantesChange}
            input={<OutlinedInput label="Integrantes" />}
            renderValue={(selected) =>
              integrantes
                .filter((i) => selected.includes(i.id))
                .map((i) => i.nombre)
                .join(', ')
            }
          >
            {/* Opción especial para seleccionar todos */}
            <MenuItem value="all">
              <Checkbox checked={integrantesSeleccionados.length === integrantes.length} />
              <ListItemText primary="Seleccionar todos" />
            </MenuItem>
            {integrantes.map((integrante) => (
              <MenuItem key={integrante.id} value={integrante.id}>
                <Checkbox checked={integrantesSeleccionados.indexOf(integrante.id) > -1} />
                <ListItemText primary={integrante.nombre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* DateTimePicker con estilos personalizados */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Fecha y Hora"
            value={fechaHora}
            onChange={(newValue) => setFechaHora(newValue)}
            renderInput={(params) => (
              <TextField {...params} fullWidth sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }} />
            )}
          />
        </LocalizationProvider>

        {/* Botón para enviar el formulario */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: 58,
            width: '50%',
            alignSelf: 'center',
            mt: 2,
            backgroundColor: 'primary.main',
            color: 'common.white',
            borderRadius: '30px 30px 10px 30px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Crear Alarma
        </Button>
      </Box>

      {/* Snackbar para mensaje de confirmación */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Alarma creada exitosamente
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default NuevaAlarma;
