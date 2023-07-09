import pool from "../connection";

const DOCS_QUERIES = {
  getDocs: () => pool.query("SELECT * FROM documents"),

  getDocsById: (id: string) => pool.query(`SELECT * FROM documents WHERE id=${id}`),
};

export default DOCS_QUERIES;
