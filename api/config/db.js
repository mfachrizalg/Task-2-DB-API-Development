const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    group: "Servers",
    name : "Local",
    password: null,
    database: "GoodReadingBookstore",
    port : 5432
});

module.exports = pool;