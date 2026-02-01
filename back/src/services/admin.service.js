import {
    deactivateAllPrompts,
    savePrompt,
    findActivePrompt
  } from '../repositories/prompt.repo.js';
  
  export const updateSystemPrompt = async (content) => {
    if (!content || content.trim().length === 0) {
        throw new Error('학습할 내용이 비어있습니다.');
      }
    await deactivateAllPrompts();
    await savePrompt(content);
    return {
        message: '학습 데이터가 성공적으로 저장되었습니다.',
      };
  };

  export const getSystemPrompt = async() => {
    const prompt = await findActivePrompt();
    return {
        message: prompt,
      };
  }