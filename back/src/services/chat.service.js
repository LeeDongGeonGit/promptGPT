import { findActivePrompt } from '../repositories/prompt.repo.js';
import { callLLM } from '../ai/openai.js';

export const chatWithPrompt = async (userMessage) => {
  const systemPrompt = await findActivePrompt();

  if (!systemPrompt) {
    throw new Error('Active prompt not found');
  }

  return await callLLM(systemPrompt, userMessage);
};