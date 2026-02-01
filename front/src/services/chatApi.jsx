import ApiConfig from "./config/ApiConfig"

export const getChatApi = async(message) => {
      return await ApiConfig.post(`/api/chat`,{
        message
        })
}
export const postPromptApi = async(message) => {
    return await ApiConfig.post(`/api/admin/prompt`,{
      message
      })
}
export const getPromptApi = async() => {
    return await ApiConfig.get(`/api/admin/prompt`)
}
