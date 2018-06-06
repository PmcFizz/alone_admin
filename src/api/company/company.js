/**
 * 庞孟臣 2018年5月20日13:47:19
 */
import $http from '../../server/index'

/**
 * 根据id获取公司信息
 * @param data
 */
export const getCompanyDetailById = (data) => $http.get(`/company/${data.id}`)

/**
 * 获取公司信息列表
 * @param data
 */
export const getCompanyListByPage = (data) => $http.post('/company/list ', data)

/**
 * 创建公司
 * @param data
 */
export const createOneCompany = (data) => $http.get(`/company/activitys`)
