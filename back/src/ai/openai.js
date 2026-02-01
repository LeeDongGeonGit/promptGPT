import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * systemPrompt : DB에 저장된 프롬프트 (관리자가 설정한 것)
 * userMessage  : 실제 유저 입력
 */
export const callLLM = async (systemPrompt, userMessage) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: [
      { role: "system", content: [{ type: "input_text", text: systemPrompt }] },
      { role: "user", content: [{ type: "input_text", text: userMessage }] }
    ],
  });

  return response.output_text;
};