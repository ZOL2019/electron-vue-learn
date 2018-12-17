import post from '../base/post'

// 查询主要经济指标
export const getDefault = data => post('/api/getDefault')
