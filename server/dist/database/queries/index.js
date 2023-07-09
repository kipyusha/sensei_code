"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEWS_QUERIES = exports.USERS_QUERIES = void 0;
var users_1 = require("./users");
Object.defineProperty(exports, "USERS_QUERIES", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
var news_1 = require("./news");
Object.defineProperty(exports, "NEWS_QUERIES", { enumerable: true, get: function () { return __importDefault(news_1).default; } });
