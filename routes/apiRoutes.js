import express from 'express';
import batimentRoutes from '../modules/batiment/batimentRoute.js';
import niveauRoutes from '../modules/niveau/niveauRoute.js';
import batimentViewRoutes from './view/batimentView.js';

const router = express.Router();

router.use('/api/batiment', batimentRoutes);
router.use('/api/niveau', niveauRoutes);
router.use('/batimentView', batimentViewRoutes);

export default router;
