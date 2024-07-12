import { Sequelize } from 'sequelize';
import { Testimoniales } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (nombre === '') errores.push({ mensaje: 'Nombre Vacio' })
    if (correo === '') errores.push({ mensaje: 'Correo Vacio' })
    if (mensaje === '') errores.push({ mensaje: 'Mensaje Vacio' })

    if (errores.length > 0) {
        //consultar testimoniales existente
        const testimoniales = await Testimoniales.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        //almacenarlo en la base de datos
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('testimoniales');
        } catch (e) {
            console.log(e);
        }
    }
};

export { guardarTestimonial };