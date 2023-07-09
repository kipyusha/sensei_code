"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connectionData = {
    user: "postgres",
    host: "localhost",
    database: "senseicodedb",
    password: "admin",
    port: 5432
};
const pool = new pg_1.Pool(connectionData);
pool.connect((err, client, done) => {
    if (err) {
        console.error("Database connection error!!!");
        throw new Error(err.message);
    }
    else {
        console.log(`Connection to the database with config ${JSON.stringify(connectionData)} was successful`);
    }
});
exports.default = pool;
