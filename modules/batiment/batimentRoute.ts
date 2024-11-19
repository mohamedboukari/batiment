import express from 'express';
import {
    constructionHandler,
    createbatimentHandler,
    deletebatimentHandler,
    getbatimentByNameHandler,
    getbatimentHandler,
    getbatimentsHandler,
    updatebatimentHandler,
} from './controllers/batiment.controller.ts';

const batimentRoutes = express.Router();

batimentRoutes.get('/', getbatimentsHandler);
batimentRoutes.get('/:id', getbatimentHandler);

batimentRoutes.get('/:name', getbatimentByNameHandler);
batimentRoutes.post('/', createbatimentHandler);
batimentRoutes.put('/:id', updatebatimentHandler);
batimentRoutes.put('/construction/:id', constructionHandler);

batimentRoutes.delete('/:id', deletebatimentHandler);

export default batimentRoutes;
