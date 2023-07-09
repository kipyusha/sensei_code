"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const USERS_QUERIES = {
    addUser: (id, login, password, email, date_of_register) => connection_1.default.query(`INSERT INTO users (id, login, password, email, date_of_register, last_seen) VALUES ('${id}', '${login}', '${password}', '${email}', '${date_of_register}', '${date_of_register}')`),
    getUserById: (id) => connection_1.default.query(`SELECT * FROM users WHERE id='${id}'`),
    getUserByLogin: (login) => connection_1.default.query(`SELECT * FROM users WHERE login='${login}'`),
    getUsers: () => connection_1.default.query("SELECT * FROM users;"),
};
exports.default = USERS_QUERIES;
