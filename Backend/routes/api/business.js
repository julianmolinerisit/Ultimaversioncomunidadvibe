import express from 'express';
import {
  getAllBusinesses,
  getBusinessById,
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from '../../controllers/businessController.js';

const router = express.Router();

// Rutas para negocios
router.get('/', getAllBusinesses);
router.get('/:id', getBusinessById); // Agregar esta línea para obtener un negocio por ID
router.post('/', createBusiness); // Agregar esta línea para crear un negocio
router.put('/:id', updateBusiness); // Agregar esta línea para actualizar un negocio
router.delete('/:id', deleteBusiness); // Agregar esta línea para eliminar un negocio

export default router;
