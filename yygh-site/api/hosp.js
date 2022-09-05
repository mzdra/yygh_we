import request from '@/utils/request'

const api_name = '/api/hosp/hospital/'
export default {
    // 分页查询医院列表
    findHospList(page,limit,searchObj) {
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj,
        })
    },
    // 根据医院名称模糊查询医院列表
    findByHosname(hosname) {
        return request({
            url: `${api_name}/findByHosname/${hosname}`,
            method: 'get',
        })
    },
}