import request from '@/utils/request'

export default {
  // 条件页查询
  getHospSetList(current,limit,seatchObj){
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: seatchObj
    })
  },
  // 根据id删除医院设置
  removeHospSetById(id){
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete',
    })
  },
  // 批量删除
  removeBatchByIdList(idList){
    return request({
      url: `/admin/hosp/hospitalSet/BatchRemove`,
      method: 'delete',
      data:idList
    })
  },
  // 锁定-取消锁定-status
  islockHostSet(id,status){
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put',
    })
  },
  // 添加医院设置信息
  saveHospSet(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet,
    })
  },
  // 更新医院设置信息
  updateHospset(hospitalSet){
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet,
    })
  },
  // 根据id查询单条医院设置信息
  getHospitalSet(id){
    return request({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get',
    })
  },
}
