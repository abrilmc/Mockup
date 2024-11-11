import express from 'express';
const route = express.Router();
import alumnoController from '../controllers/alumnos.js';

route.post('/', alumnoController.create);
route.get('/:id', alumnoController.getOne);
route.get('/', alumnoController.getAll);
route.put('/:id', alumnoController.update);
route.delete('/:id', alumnoController.delete);

export default route;