import express from 'express';

import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, agregarSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIdController, eliminarSuperheroePorNombreController } from '../controllers/superheroesController.mjs';
import { handleVAlidationErrors } from '../middlewares/errorMiddleware.mjs';
import { heroeValidator } from '../validators/heroeValidator.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

router.post('/heroes/heroe-nuevo',heroeValidator(), handleVAlidationErrors, agregarSuperheroeController);
router.put('/heroes/:id', heroeValidator(),handleVAlidationErrors, actualizarSuperheroeController);
router.delete('/heroes/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/nombre/:nombre',  eliminarSuperheroePorNombreController);

export default router;