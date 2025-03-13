// src/pages/nuevo-grupo.js
import React, { useState, useEffect } from 'react';
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
  IconButton,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate } from 'react-router-dom';

const NuevoGrupo = () => {
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [descripcionGrupo, setDescripcionGrupo] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [integrantesSeleccionados, setIntegrantesSeleccionados] = useState([]);
  const [imagen, setImagen] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Datos de ejemplo para categorías e integrantes
  const categorias = [
    { id: 'c1', nombre: 'Categoría 1' },
    { id: 'c2', nombre: 'Categoría 2' },
    { id: 'c3', nombre: 'Categoría 3' },
  ];

  const integrantes = [
    { id: 'i1', nombre: 'Integrante 1' },
    { id: 'i2', nombre: 'Integrante 2' },
    { id: 'i3', nombre: 'Integrante 3' },
  ];

  // Maneja el cambio en el select de integrantes
  const handleIntegrantesChange = (event) => {
    const {
      target: { value },
    } = event;
    setIntegrantesSeleccionados(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombreGrupo,
      descripcionGrupo,
      categoriaSeleccionada,
      integrantesSeleccionados,
      imagen,
    });
  };

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const validateField = (value) => {
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(value);
  };

  useEffect(() => {
    const isNombreValid = validateField(nombreGrupo) && nombreGrupo.trim() !== '';
    const isDescripcionValid = validateField(descripcionGrupo) && descripcionGrupo.trim() !== '';
    const isCategoriaValid = categoriaSeleccionada !== '';
    const isIntegrantesValid = integrantesSeleccionados.length > 0;
    setIsFormValid(isNombreValid && isDescripcionValid && isCategoriaValid && isIntegrantesValid);
  }, [nombreGrupo, descripcionGrupo, categoriaSeleccionada, integrantesSeleccionados]);

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        mt: 4,
        p: 10,
        backgroundColor: 'background.paper',
        borderRadius: '15px 50px 50px 50px',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Near-it
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <PeopleIcon sx={{ mr: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Nuevo grupo
            </Typography>
          </Box>
          {/* Campo de Imagen */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Imagen del Grupo
            </Typography>
            <Button
              variant="contained"
              component="label"
              sx={{ mb: 2 }}
            >
              Subir Imagen
              <input
                type="file"
                hidden
                onChange={handleImageChange}
              />
            </Button>
            {imagen && (
              <Typography variant="body2">
                {imagen.name}
              </Typography>
            )}
          </Box>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Nombre del Grupo */}
          <Box sx={{ position: 'relative' }}>
            <TextField
              label="Nombre del grupo"
              variant="outlined"
              fullWidth
              required
              value={nombreGrupo}
              onChange={(e) => setNombreGrupo(e.target.value)}
              error={!validateField(nombreGrupo) || nombreGrupo.trim() === ''}
            />
            {(!validateField(nombreGrupo) || nombreGrupo.trim() === '') && (
              <IconButton sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
                <ErrorIcon color="error" />
              </IconButton>
            )}
          </Box>

          {/* Descripción del Grupo */}
          <Box sx={{ position: 'relative' }}>
            <TextField
              label="Descripción del grupo"
              variant="outlined"
              fullWidth
              multiline
              required
              rows={3}
              value={descripcionGrupo}
              onChange={(e) => setDescripcionGrupo(e.target.value)}
              error={!validateField(descripcionGrupo) || descripcionGrupo.trim() === ''}
            />
            {(!validateField(descripcionGrupo) || descripcionGrupo.trim() === '') && (
              <IconButton sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
                <ErrorIcon color="error" />
              </IconButton>
            )}
          </Box>

          {/* Selección de Categoría */}
          <FormControl fullWidth>
            <InputLabel id="categoria-label">Categoría</InputLabel>
            <Select
              labelId="categoria-label"
              label="Categoría"
              required
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Selección de Integrantes (Multi-select) */}
          <FormControl fullWidth>
            <InputLabel id="integrantes-label">Adicionar integrantes</InputLabel>
            <Select
              labelId="integrantes-label"
              label="Adicionar integrantes"
              multiple
              required
              value={integrantesSeleccionados}
              onChange={handleIntegrantesChange}
              input={<OutlinedInput label="Adicionar integrantes" />}
              renderValue={(selected) =>
                integrantes
                  .filter((i) => selected.includes(i.id))
                  .map((i) => i.nombre)
                  .join(', ')
              }
            >
              {integrantes.map((integrante) => (
                <MenuItem key={integrante.id} value={integrante.id}>
                  <Checkbox checked={integrantesSeleccionados.indexOf(integrante.id) > -1} />
                  <ListItemText primary={integrante.nombre} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Botones para enviar y cancelar el formulario */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                height: 58,
                width: '45%',
                borderRadius: '30px 30px 10px 30px',
                fontWeight: 'bold',
              }}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                height: 58,
                width: '45%',
                backgroundColor: 'primary.main',
                color: 'common.white',
                borderRadius: '30px 30px 10px 30px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
              disabled={!isFormValid}
            >
              Crear Grupo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NuevoGrupo;
