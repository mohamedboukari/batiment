import express from 'express';
import {
    getbatimentsHandler,
    getbatimentHandler,
    createbatimentHandler,
    updatebatimentHandler,
    deletebatimentHandler,
    getbatimentByNameHandler,
    constructionHandler,
} from './controllers/batiment.controller.js';

const batimentRoutes = express.Router();

batimentRoutes.get('/', getbatimentsHandler);
batimentRoutes.get('/:id', getbatimentHandler);
batimentRoutes.get('/:name', getbatimentByNameHandler);
batimentRoutes.post('/', createbatimentHandler);
batimentRoutes.put('/:id', updatebatimentHandler);
batimentRoutes.put('/construction/:id', constructionHandler);

batimentRoutes.delete('/:id', deletebatimentHandler);

export default batimentRoutes;
