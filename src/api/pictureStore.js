// 图片仓库相关接口
import $http from '../server/index'

/**
 * 上传图片
 * @param data
 */
export const uploadImgs = (data) => $http.post('/base/uploadImgs', data)

/**
 * 查询图片仓库
 * @param data
 */
export const queryPicStore = (data) => $http.post('/pictureStore/commonQuery', data)

/**
 * 向图片仓库添加图片链接
 * @param data
 */
export const pushImgToStore = (data) => $http.post('/pictureStore/pushImgToStore', data)

/**
 * 查询图片仓库详情
 * @param data
 */
export const getStoreImg = (data) => $http.get('/pictureStore/getStoreImg', data)