"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const News_1 = require("../controllers/News");
const router = express_1.default.Router();
router.get("/news", (req, res) => News_1.NewsController.getNews(req, res));
router.get("/news/:id", (req, res) => News_1.NewsController.getNewsById(req, res));
router.get("/docs", (req, res) => News_1.NewsController.getDocs(req, res));
router.get("/docs/:id", (req, res) => News_1.NewsController.getDocsById(req, res));
router.post("/news", (req, res) => News_1.NewsController.addNews(req, res));
exports.default = router;
