/**
 * 庞孟臣 2018年5月20日13:47:19
 */
import $http from '../../server/index'

/**
 * 会员列表
 * @param data
 */
export const getMemberList = (data) => $http.get('/user/list', data)

/**
 * 会员详情
 * @param data
 */
export const getMemberDetail = (data) => $http.get(`/user/${data.id}`)

/**
 * 新增会员
 * @param data
 */
export const createOneMember = (data) => $http.post(`/user/${data.id}`)
