import request from '@/utils/request'

const login_api_name = `/api/ucenter/wx`

const pay_api_name = `/api/order/weixin`


export default {
  // 获取支付状态
  queryPayStatus(orderId) {
    return request({
      url: `${pay_api_name}/queryPayStatus/${orderId}`,
      method: 'get'
    })
  },
  // 生成微信支付二维码
  createNative(orderId) {
    return request({
      url: `${pay_api_name}/createNative/${orderId}`,
      method: `get`
    })
  },
  getLoginParam() {
    return request({
      url: `${login_api_name}/getLoginParam`,
      method: `get`
    })
  }
}