import { useState, useEffect, useRef } from "react";
import {  getChatApi, getPromptApi, postPromptApi } from "../../services/chatApi";
import { loadJWT } from "../../utils/CookiesHandler";
import AuthButton from "../../components/auth/AuthButton";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();
  const jwtToken = loadJWT();

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      toAi(input)
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "오류가 발생했습니다." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      sendMessage();
    }
  };
  const toAi = async(input) => {
    if(jwtToken) {
      const res = await postPromptApi(input);
      console.log(res)
      const aiMessage = { role: "ai", content: res.data.message };
      setMessages((prev) => [...prev, aiMessage]);
    } else {
      const res = await getChatApi(input);
      const aiMessage = { role: "ai", content: res.data.answer };
      setMessages((prev) => [...prev, aiMessage]);
    }
  }
  const getPrompt = async() => {
    const res = await getPromptApi();
    const aiMessage = { role: "ai", content: res.data.message };
    setMessages((prev) => [...prev, aiMessage]);
  }


  useEffect(() => {
    if(jwtToken){
      getPrompt();
    }else {
      toAi("너에 대해서 소개해줘");
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="relative bg-white shadow p-4 flex items-center justify-center">
        <h1 className="font-semibold text-xl">AI Chat</h1>
        <div className="absolute right-6">
          <AuthButton className="text-sm font-medium text-gray-600 hover:text-gray-800 transition" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`
                relative px-4 py-2 rounded-lg max-w-[70%] break-words
                ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-tr-none"
                    : "bg-gray-200 text-gray-900 rounded-tl-none"
                }
              `}
            >
              {msg.content}
              {/* 말풍선 꼬리 */}
              {msg.role === "user" ? (
                <div className="absolute right-[-6px] bottom-0 w-0 h-0 border-l-8 border-l-blue-500 border-t-8 border-t-transparent"></div>
              ) : (
                <div className="absolute left-[-6px] bottom-0 w-0 h-0 border-r-8 border-r-gray-200 border-t-8 border-t-transparent"></div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Box */}
      <div className="bg-white p-4 border-t flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="메시지를 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? "..." : "전송"}
        </button>
      </div>
    </div>
  );
}
export default ChatApp;