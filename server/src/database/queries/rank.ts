import pool from "../connection";

const RANK_QUERIES = {
  getRankById: (id: string) =>
    pool.query(`SELECT * FROM ranks WHERE id='${id}'`),
};

export default RANK_QUERIES;

