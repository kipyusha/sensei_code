import pool from "../connection";

const USERS_QUERIES = {
  addUser: (id: string, login: string, password: string, email: string, date_of_register: string) =>
    pool.query(
      `INSERT INTO users (id, login, password, email, date_of_register, last_seen) VALUES ('${id}', '${login}', '${password}', '${email}', '${date_of_register}', '${date_of_register}')`
    ),

  getUserById: (id: string) =>
    pool.query(`SELECT * FROM users WHERE id='${id}'`),

  getUserByLogin: (login: string) =>
    pool.query(`SELECT * FROM users WHERE login='${login}'`),

  getUsers: () => pool.query("SELECT * FROM users;"),
};

export default USERS_QUERIES;

