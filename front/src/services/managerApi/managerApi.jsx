import ApiConfig from "../config/ApiConfig"

export const LoginApi = async(id,pw) => {
      return await ApiConfig.post(`/api/auth/login`,{
          username : id,
          password : pw
        })
}