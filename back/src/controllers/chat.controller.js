import { chatWithPrompt } from '../services/chat.service.js';

export const chat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ message: '메세지를 입력해주세요.' });
    }

    const answer = await chatWithPrompt(message);
    res.json({ answer });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};