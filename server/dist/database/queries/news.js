"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const NEWS_QUERIES = {
    getNews: () => connection_1.default.query("SELECT * FROM news"),
    getNewsById: (id) => connection_1.default.query(`SELECT * FROM news WHERE id=${id}`),
    addNews: (title, content, date, description) => connection_1.default.query(`INSERT INTO news (title, content, date, description) VALUES ('${title}', '${content}', '${date}', '${description}')`),
};
exports.default = NEWS_QUERIES;
