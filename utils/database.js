const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'crown2_28',
    password: 'postgres',
});

console.log(`Postgres server running on ${pool.options.database} database`);

module.exports = pool;