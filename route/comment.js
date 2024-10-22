const express = require('express');
const router = express.Router();


const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Yas2024data@',
    database: 'voyageonsensemble',
    connectionLimit: 10
});





module.exports = router;
