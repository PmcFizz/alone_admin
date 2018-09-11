// 设计相关接口
import $http from '../server/index'

/**
 * 保存一个我的设计
 * @param data
 */
export const createOne = (data) => $http.post('/design/createOne', data)

/**
 * 查询我的设计
 * @param data
 */
export const queryMyDesign = (data) => $http.post('/design/queryMy', data)
