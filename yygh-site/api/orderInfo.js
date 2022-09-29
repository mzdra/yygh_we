import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
  // 生成订单
  sendOrders(scheduleId, patientId) {
    return request({
      url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: `post`
    })
  }
}