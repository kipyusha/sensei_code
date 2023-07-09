import { Response, Request } from "express";
import { NEWS_QUERIES } from "../../database/queries";
import DOCS_QUERIES from "../../database/queries/docs";

class NewsController {
  async getNews(req: Request, res: Response) {
    try {
      NEWS_QUERIES.getNews().then((result) => {
        res.status(200).json(result.rows);
      }).catch((error: Error) => {
        console.log(error)
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getNewsById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      NEWS_QUERIES.getNewsById(id).then((result) => {
        res.status(200).json(result.rows[0]);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getDocs(req: Request, res: Response) {
    try {
      DOCS_QUERIES.getDocs().then((result) => {
        res.status(200).json(result.rows);
      }).catch((error: Error) => {
        console.log(error)
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getDocsById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      DOCS_QUERIES.getDocsById(id).then((result) => {
        res.status(200).json(result.rows[0]);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async addNews(req: Request, res: Response) {
    try {
      const { title, content }: { title: string; content: string } = req.body;
      NEWS_QUERIES.addNews(title, content, new Date()).then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new NewsController();
