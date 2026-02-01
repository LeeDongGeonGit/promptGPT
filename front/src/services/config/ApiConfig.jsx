import axios from 'axios'
import { loadJWT } from '../../utils/CookiesHandler'
// Axios 인스턴스 생성
const ApiConfig = axios.create({
  baseURL: import.meta.env.VITE_X_API_ROOT,
  headers: { 'X-API-KEY': import.meta.env.VITE_X_API_KEY

   },
})

// 요청 인터셉터 (요청 전 로직 처리 가능)
ApiConfig.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 공통적으로 처리할 사항이 있으면 추가 가능
    const token = loadJWT();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  },
  (error) => {
    // 요청 전 발생한 에러 공통 처리
    return Promise.reject(error)
  },
)

// 응답 인터셉터 (응답 후 에러 처리)
ApiConfig.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      alert(error.response.data?.error || '서버 에러 발생');
    } else if (error.request) {
      // 요청은 갔는데 응답이 없는 경우
      alert('서버와 연결되지 않았습니다.');
    } else {
      // 요청 설정 중 에러 발생
      alert('알 수 없는 에러가 발생했습니다.');
    }
  },
)

export default ApiConfig
