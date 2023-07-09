import express, { Response, Request } from "express";
import { NewsController } from "../controllers/News";

const router = express.Router();

router.get("/news", (req: Request, res: Response) =>
  NewsController.getNews(req, res)
);

router.get("/news/:id", (req: Request, res: Response) =>
  NewsController.getNewsById(req, res)
);

router.get("/docs", (req: Request, res: Response) =>
  NewsController.getDocs(req, res)
);

router.get("/docs/:id", (req: Request, res: Response) =>
  NewsController.getDocsById(req, res)
);

router.post("/news", (req: Request, res: Response) =>
  NewsController.addNews(req, res)
);

export default router;
