import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/auth/AuthButton";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Prompt<span className="text-indigo-400">GPT</span>
        </h1>
        <AuthButton
          className="text-sm text-slate-300 hover:text-white transition"/>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8">
          
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            프롬프트로<br />
            <span className="text-indigo-400">AI를 설계하세요</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            로그인 없이도 미리 정의된 프롬프트로 AI를 체험할 수 있고,<br />
            로그인하면 나만의 프롬프트를 직접 설계할 수 있습니다.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                비로그인 체험
              </h3>
              <p className="text-sm text-slate-400">
                미리 준비된 커스텀 프롬프트 기반으로
                AI의 답변을 바로 확인하세요.
              </p>
            </div>

            <div className="bg-slate-800/70 backdrop-blur rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">
                로그인 전용 기능
              </h3>
              <p className="text-sm text-slate-400">
                프롬프트를 직접 작성하고,
                나만의 AI 응답 스타일을 만들어보세요.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg"
            >
              💬 Chat 하러 가기
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-500 py-6">
        © 2026 PromptGPT. All rights reserved.
      </footer>
    </div>
  );
};

export default MainPage;