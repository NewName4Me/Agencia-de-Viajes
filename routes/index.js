import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonial,
    paginaDetalleViaje
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

//esto era así al principio pero ajustamos al MVC
/* router.get('/', (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}); */

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimonial);
router.post('/testimoniales', guardarTestimonial);

export default router;