const { Pool } = require('pg');

const pool = new Pool({
    user: 'SYSTEM',
    host: 'localhost',
    database: 'Park',
    password: '1907',
    port: 1521,
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
