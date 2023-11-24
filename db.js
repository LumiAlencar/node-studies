const Pool = require('pg').Pool;

const pool = new Pool({
    user: "byocqhxk",
    host: "isabelle.db.elephantsql.com",
    database: "byocqhxk",
    password: "0YyhSrqyK6pdveL4OY2HrcSsfhgetnLi",
    port: 5432
})

module.exports = pool;