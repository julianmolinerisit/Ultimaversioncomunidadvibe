// En tu archivo de rutas para negocios (business)
import express from 'express';
import getBusinessById from '../../controllers/getBusinessById.js';

const router = express.Router();

// Rutas para negocios
router.get('/:id', getBusinessById);

export default router;
