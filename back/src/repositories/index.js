import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,   // postgres 서버 IP
  port: process.env.DB_PORT,            // 네가 설정한 포트
  user: process.env.DB_USER,           // DB 계정
  password: process.env.DB_PASSWORD,
  database:  process.env.DB_NAME,    // 사용할 DB
});

 

export default pool;