import request from './request'

export default async (url = '', data = {}) => {
  return request({ url: url, method: 'post', data: data })
}
