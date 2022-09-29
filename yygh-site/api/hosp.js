import request from '@/utils/request'

const api_name = '/api/hosp/hospital'
export default {
  // 分页查询医院列表
  findHospList(page, limit, searchObj) {
    return request({
      url: `${api_name}/findHospList/${page}/${limit}`,
      method: 'get',
      params: searchObj,
    })
  },
  // 根据医院名称模糊查询医院列表
  show(hosname) {
    return request({
      url: `${api_name}/findByHosname/${hosname}`,
      method: 'get',
    })
  },
  //查询所有科室名列表
  findDepartment(hoscode) {
    return request({
      url: `${api_name}/getDepartment/${hoscode}`,
      method: 'get',
    })
  },
  // 医院预约挂号详情
  findHospDetail(hoscode) {
    return request({
      url: `${api_name}/findHospDetail/${hoscode}`,
      method: 'get',
    })
  },
  //获取可预约排班数据
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  // 获取排班数据
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  //根据排班id获取排班数据
  getSchedule(id) {
    return request({
      url: `${api_name}/getSchedule/${id}`,
      method: 'get'
    })
  }
}
