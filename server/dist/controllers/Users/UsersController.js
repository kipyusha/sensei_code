"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const queries_1 = require("../../database/queries");
const rank_1 = __importDefault(require("../../database/queries/rank"));
const lang_1 = __importDefault(require("../../database/queries/lang"));
class UsersController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                queries_1.USERS_QUERIES.getUsers().then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                queries_1.USERS_QUERIES.getUserById(id).then((result) => {
                    res.status(200).json(result.rows);
                });
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
    getUserByLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { info } = req.body;
                const userInfo = yield queries_1.USERS_QUERIES.getUserByLogin(info.login);
                const rankInfo = yield rank_1.default.getRankById(String(userInfo.rows[0].rank_id));
                const lastLangInfo = yield lang_1.default.getLangById(String(userInfo.rows[0].lang_id));
                res.status(200).json(Object.assign(Object.assign({}, userInfo.rows[0]), { last_lang: lastLangInfo.rows[0].title, rank: rankInfo.rows[0].title }));
            }
            catch (error) {
                res.status(500).json({ errorMessage: error });
            }
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password, email, } = req.body;
                const id = (0, uuid_1.v4)();
                const stringDate = new Date().toISOString().split("T")[0];
                queries_1.USERS_QUERIES.addUser(id, login, password, email, stringDate).then((result) => __awaiter(this, void 0, void 0, function* () {
                    const userInfo = yield queries_1.USERS_QUERIES.getUserByLogin(id);
                    const rankInfo = yield rank_1.default.getRankById(String(userInfo.rows[0].rank_id));
                    const lastLangInfo = yield lang_1.default.getLangById(String(userInfo.rows[0].lang_id));
                    res.status(200).json(Object.assign(Object.assign({}, userInfo.rows[0]), { last_lang: lastLangInfo.rows[0].title, rank: rankInfo.rows[0].title }));
                }));
            }
            catch (error) {
                res.status(500).json("Incorrect request");
            }
        });
    }
}
exports.default = new UsersController();
