import Cookies from "react-cookies";

export const SESSION_TIMEOUT =10800;
  export const loadJWT = () =>{
    const data = Cookies.load(import.meta.env.VITE_X_API_JWT_NAME);
    return data;
 }

  export const removeCookie = () =>{
     Cookies.remove(import.meta.env.VITE_X_API_JWT_NAME, { path: '/' });
  }

  export const saveJWT = (token) =>{
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + SESSION_TIMEOUT); // 현재 시간 기준으로 남은 시간 추가
    Cookies.save(import.meta.env.VITE_X_API_JWT_NAME,token, {
      path: "/",
      expires,
    });
  }
  export const isToken = () =>{
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    
    if(token!==null&& token !== undefined){
        saveJWT(token);
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete("token");
        window.history.replaceState(null, "", currentUrl);
        return true;
    }
    return false;
  }
