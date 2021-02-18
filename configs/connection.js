const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'school',
  password: 'postgres',
  port: 5432,
  max: 3,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 2000

})


module.exports = pool