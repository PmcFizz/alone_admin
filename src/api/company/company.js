/**
 * 庞孟臣 2018年5月20日13:47:19
 */
import $http from '../../server/index'

/**
 * 根据id获取公司信息
 * @param data
 */
export const getDetailById = (data) => $http.get(`/company/${data.id}`)

/**
 * 获取公司信息列表
 * @param data
 */
export const queryByPage = (data) => $http.post('/company/queryByPage ', data)

/**
 * 创建公司
 * @param data
 */
export const createOneCompany = (data) => $http.get(`/company/activitys`)
