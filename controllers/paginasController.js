import { Viaje } from '../models/Viaje.js';
import { Testimoniales } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimoniales.findAll({ limit: 3 }));

    //consultar 3 viajes del modelo viaje
    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (e) {
        console.log(e);
    }
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {

    //consultar base de datos
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
};

const paginaTestimonial = async (req, res) => {
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (e) {
        console.log(e);
    }
};

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        })
    } catch (e) {
        console.log(e);
    }

    /* console.log(req.params.viaje); */
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonial,
    paginaDetalleViaje
}