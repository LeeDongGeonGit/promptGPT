import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByUsername, createUser } from '../repositories/auth.repo.js';

const SALT_ROUNDS = 10;

export const registerUser = async (username, password, role='admin') => {
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  return await createUser(username, hashed, role);
};

export const loginUser = async (username, password) => {
  const user = await findUserByUsername(username);
  if (!user) throw new Error('비밀번호 또는 아이디가 일치하지 않습니다.');
  
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('비밀번호 또는 아이디가 일치하지 않습니다.');

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return { token, user: { id: user.id, username: user.username, role: user.role } };
};
// 토큰 검증
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        throw new Error('유효하지 않은 토큰입니다.');
    }
};