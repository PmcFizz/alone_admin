/**
 * 庞孟臣 2018年5月20日13:47:19
 */
import $http from '../../server/index'

/**
 * 用户登录
 * @param data
 */
export const userLogin = (data) => $http.get('/base/getPorjectInfo', data)

/**
 * 用户退出
 * @param data
 */
export const userLogout = (data) => $http.post('/logout', data)
