import request from '@/utils/request'

const api_name = `/api/user`

export default {
  // 登录
  login(userInfo) {
    return request({
      url: `${api_name}/login`,
      method: `post`,
      data: userInfo
    })
  },
  // 上传认证
  saveUserAuth(userInfo) {
    return request({
      url: `${api_name}/auth/userAuth`,
      method: `post`,
      data: userInfo
    })
  },
  // 根据id获取认证信息
  getUserInfo() {
    return request({
      url: `${api_name}/auth/getUserInfo`,
      method: `get`,
    })
  },
}