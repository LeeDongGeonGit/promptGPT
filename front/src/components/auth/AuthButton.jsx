import { useNavigate } from "react-router-dom";
import { loadJWT, removeCookie } from "../../utils/CookiesHandler";

const AuthButton = ({
  className = "text-sm text-slate-300 hover:text-white transition",
}) => {
  const navigate = useNavigate();
  const jwtToken = loadJWT();

  const handleLogout = () => {
    removeCookie();
    navigate("/");
  };

  if (jwtToken) {
    return (
      <button onClick={handleLogout} className={className}>
        로그아웃
      </button>
    );
  }

  return (
    <button
      onClick={() => navigate("/login")}
      className={className}
    >
      로그인
    </button>
  );
};

export default AuthButton;