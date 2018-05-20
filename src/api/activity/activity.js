/**
 * 庞孟臣 2018年5月20日13:47:19
 */
import $http from '../../server/index'

/**
 * 根据id获取活动信息
 * @param data
 */
export const getActivityDetailById = (data) => $http.get(`/activity/${data.id}`)

/**
 * 获取活动信息列表
 * @param data
 */
export const getActivityListByPage = (data) => $http.post('/activity/list ', data)

/**
 * 创建活动
 * @param data
 */
export const createOneActivity = (data) => $http.get(`/activity/activitys`)
