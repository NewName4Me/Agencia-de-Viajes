import sequelize, { Sequelize } from 'sequelize';

//Datos base de datos
const dbName = 'agenciadeviajes';
const dbUser = 'root';
const dbPassword = 'User41641344';

//establecer conexion base de datos
const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',/* tambien acepta postgress */
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