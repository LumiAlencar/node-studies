const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "123456rav",
    port: 3000,
})

module.exports = pool;