import pool from "../connection";

const LANG_QUERIES = {
  getLangById: (id: string) =>
    pool.query(`SELECT * FROM languages WHERE id='${id}'`),
};

export default LANG_QUERIES;

