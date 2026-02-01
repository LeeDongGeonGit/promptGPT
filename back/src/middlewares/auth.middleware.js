import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: '토큰이 필요합니다.' });
    }

    const token = authHeader.split(' ')[1];
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
            // 토큰 만료
    if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          statusCode: 401,
          message: "토큰이 만료되었습니다.",
        });
      }
  
      // 토큰 위조 / 변조
      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({
          code: "INVALID_TOKEN",
          message: "유효하지 않은 토큰입니다.",
        });
      }
  
      // 기타 오류
      return res.status(500).json({
        code: "TOKEN_ERROR",
        message: "토큰 처리 중 오류가 발생했습니다.",
      });
    }
};
export const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
  
    if (!apiKey) {
      return res.status(401).json({
        message: "X-API-KEY header is missing",
      });
    }
  
    if (apiKey !== process.env.X_API_KEY) {
      return res.status(403).json({
        message: "Invalid API key",
      });
    }
  
    next(); // 통과
  }