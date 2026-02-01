import pool from './index.js';

export const deactivateAllPrompts = async () => {
  await pool.query(`UPDATE system_prompt SET is_active = false`);
};

export const savePrompt = async (content) => {
  await pool.query(
    `INSERT INTO system_prompt (content) VALUES ($1)`,
    [content]
  );
};

export const findActivePrompt = async () => {
  const result = await pool.query(
    `SELECT content FROM system_prompt WHERE is_active = true LIMIT 1`
  );
  return result.rows[0]?.content || '등록된 프롬프트가 없습니다.';
};