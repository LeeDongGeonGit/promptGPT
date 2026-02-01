import { updateSystemPrompt, getSystemPrompt } from '../services/admin.service.js';

export const postPrompt = async (req, res) => {
  try {
    const { message } = req.body;

    const result = await updateSystemPrompt(message);

    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export const getActivePrompt = async (req,res) => {
    try {
        const result = await getSystemPrompt();
    
        res.json(result);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}
