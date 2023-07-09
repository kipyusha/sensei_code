import pool from "../connection";

const NEWS_QUERIES = {
  getNews: () => pool.query("SELECT * FROM news"),

  getNewsById: (id: string) => pool.query(`SELECT * FROM news WHERE id=${id}`),

  addNews: (title: string, content: string, date: Date, description: string) => pool.query(`INSERT INTO news (title, content, date, description) VALUES ('${title}', '${content}', '${date}', '${description}')`),
};

export default NEWS_QUERIES;
