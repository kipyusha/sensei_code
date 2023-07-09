"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const RANK_QUERIES = {
    getRankById: (id) => connection_1.default.query(`SELECT * FROM ranks WHERE id='${id}'`),
};
exports.default = RANK_QUERIES;
