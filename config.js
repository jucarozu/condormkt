'use strict'

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGODB || 'mongodb+srv://jucarozu:c0nd0rm47@cluster0-pvfs9.mongodb.net/condormkt';
const SECRET_KEY = 'M4RK37PL4C3D3V3L0PM3N7';

module.exports = { PORT, DB, SECRET_KEY };