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

/**
 * 公司状态
 * @params data
 */
export const companyStatusArr = [
  {label: '正常', value: '1'},
  {label: '异常', value: '2'},
  {label: '破产', value: '3'},
  {label: '创业', value: '4'},
  {label: '独角兽', value: '5'}
]

/**
 * 公司信用等级
 * @params data
 */
export const companyCreditLeveArr = [
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '9', value: 9},
  {label: '10', value: 10}
]

