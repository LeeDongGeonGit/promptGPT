import { registerUser, loginUser } from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = await registerUser(username, password, role);
        res.json({ statusCode: 200,message: '회원가입 성공', user });
    } catch (err) {
        res.json({ statusCode: 401,message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const data = await loginUser(username, password);
        res.json({ statusCode: 200,message: '로그인 성공', ...data });
    } catch (err) {
        res.json({ statusCode: 401, message: err.message });
    }
};