import { Pool } from "pg";

const connectionData = {
    user: "postgres",
    host: "localhost",
    database: "senseicodedb",
    password: "admin",
    port: 5432
}

const pool = new Pool(connectionData);

pool.connect((err, client, done)=>{
  if (err) {
    console.error("Database connection error!!!")
    throw new Error(err.message)
  } else {
    console.log(`Connection to the database with config ${JSON.stringify(connectionData)} was successful`)
  }
})

export default pool;

