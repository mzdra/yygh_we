import request from '@/utils/request'

export default {
    // 分页带条件查询
    getPageList(page,limit,searchObj) {
        return request({
            url: `/admin/hosp/hospital/list/${page}/${limit}`,
            method: 'get',
            params: searchObj,
        })
    },
    // 根据dictCode获取下级节点
    findByDictCode(dictCode) {
        return request({
            url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
            method: 'get',
        })
    },
    // 根据id查询子节点
    findByParentId(id) {
        return request({
            url: `/admin/cmn/dict/findChildData/${id}`,
            method: 'get',
        })
    },
    updateStatus(id,status) {
        return request({
            url: `/admin/hosp/hospital/updateStatus/${id}/${status}`,
            method: 'get',
        })
    },
    showHospById(id){
        return request({
            url: `/admin/hosp/hospital/showHospDetail/${id}`,
            method: 'get',
        })
    },
    getDeptByHoscode(hoscode) {
        return request({
            url: `/admin/hosp/department/getDeptList/${hoscode}`,
            method: 'get',
        })
    },
    getScheduleRule(page,limit,hoscode,depcode) {
        return request({
            url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method: 'get',
        })
    },
    getDetailSchedule(hoscode, depcode, workDate) {
        return request({
            url: `/admin/hosp/schedule/getDetailSchedule/${hoscode}/${depcode}/${workDate}`,
            method: 'get',
        })
    },
}