import express from 'express';

const batimentViewRoutes = express.Router();

batimentViewRoutes.get('/', (req, res) => {
    res.render('batiment.twig');
});

export default batimentViewRoutes;
