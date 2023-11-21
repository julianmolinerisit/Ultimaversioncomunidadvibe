import express from 'express';
import newsRoutes from './api/news';
import orderRoutes from './api/orders';
import productRoutes from './api/products';
import businessRoutes from './api/business';
import loginRoutes from './api/user'; // Agrega la ruta de autenticación

const router = express.Router();

// Define las rutas base
router.use('/news', newsRoutes);
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);
router.use('/business', businessRoutes);


// Agrega las rutas de autenticación
router.use('/login', loginRoutes); // Ruta de autenticación

export default router;
