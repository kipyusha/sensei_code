import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { USERS_QUERIES } from "../../database/queries";
import RANK_QUERIES from "../../database/queries/rank";
import LANG_QUERIES from "../../database/queries/lang";

class UsersController {
  async getUsers(req: Request, res: Response) {
    try {
      USERS_QUERIES.getUsers().then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      USERS_QUERIES.getUserById(id).then((result) => {
        res.status(200).json(result.rows);
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }

  async getUserByLogin(req: Request, res: Response) {
    try {
      const {info} = req.body;
      const userInfo = await USERS_QUERIES.getUserByLogin(info.login)
      const rankInfo = await RANK_QUERIES.getRankById(String(userInfo.rows[0].rank_id));
      const lastLangInfo = await LANG_QUERIES.getLangById(String(userInfo.rows[0].lang_id));

      res.status(200).json({...userInfo.rows[0], last_lang: lastLangInfo.rows[0].title, rank: rankInfo.rows[0].title})

    } catch (error) {
      res.status(500).json({ errorMessage: error });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const {
        login,
        password,
        email,
      }: { login: string; password: string; email: string } = req.body;
      const id: string = uuidv4();
      
      const stringDate = new Date().toISOString().split("T")[0];

      USERS_QUERIES.addUser(id, login, password, email, stringDate).then(async (result) => {
        const userInfo = await USERS_QUERIES.getUserByLogin(id)
        const rankInfo = await RANK_QUERIES.getRankById(String(userInfo.rows[0].rank_id));
        const lastLangInfo = await LANG_QUERIES.getLangById(String(userInfo.rows[0].lang_id));
        res.status(200).json({...userInfo.rows[0], last_lang: lastLangInfo.rows[0].title, rank: rankInfo.rows[0].title})
      });
    } catch (error) {
      res.status(500).json("Incorrect request");
    }
  }
}

export default new UsersController();
