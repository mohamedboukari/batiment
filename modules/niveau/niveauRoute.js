import express from 'express';
import {
    getniveaus,
    getniveau,
    createniveauHandler,
    updateniveauHandler,
    deleteniveauHandler,
} from './controllers/niveau.controller.js';

const niveauRoutes = express.Router();

niveauRoutes.get('/', getniveaus);
niveauRoutes.get('/:id', getniveau);
niveauRoutes.post('/', createniveauHandler);
niveauRoutes.put('/:id', updateniveauHandler);
niveauRoutes.delete('/:id', deleteniveauHandler);

export default niveauRoutes;
