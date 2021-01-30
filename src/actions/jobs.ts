import { get } from '../utils/request'
import apiList from '../constants/api';

//请求职位列表数据
export function getJobs(params) {
  return async dispatch => {
    let result:any = await get(apiList.getJobs, params)
    if (result && result.data) {
      result.data.success && dispatch({ type: 'getJobList', list: result.data.data })
    }
  }
}
