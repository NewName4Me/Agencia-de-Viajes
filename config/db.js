import sequelize, { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

/* //Datos base de datos
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
 */
//establecer conexion base de datos
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        adle: 10000,
    },
    /* operatorsAliases: false */ //esto está obsoleto y da error
});

export default db;