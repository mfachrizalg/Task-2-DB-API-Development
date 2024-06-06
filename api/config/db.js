const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "GoodReadingBookstore",
    port : 5432.
});

module.exports = pool;