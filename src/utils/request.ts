import Taro from '@tarojs/taro'

const token: string = ''

// 同时请求的数量
let ajaxTimes: number = 0

function request(params, method = 'GET') {
  ajaxTimes++;

  Taro.showLoading({
    title: '玩命加载中',
  })

  return new Promise((resolve, reject) => {
    let { url, data } = params
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    return Taro.request({
      isShowLoading: false,
      url: url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token }, // 默认contentType ,预留token
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
      complete() {
        ajaxTimes--;
        //  关闭正在等待的图标
        (ajaxTimes === 0) && Taro.hideLoading()
      }
    })
  })
}

export const get = (url: string, data: string = '') => {
  let option = { url, data }
  return request(option)
}

export const post = (url: string, data: string, contentType: string) => {
  let params = { url, data, contentType }
  return request(params, 'POST')
}
