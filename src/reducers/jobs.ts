const JOBS_STATE = {
  page: 0,
  limit: 20,
  jobList: [],
  jobDetail: {},
}
export default function infolist(prestate = JOBS_STATE, action) {
  switch (action.type) {
    case 'getJobDetail':
      return { ...prestate, jobDetail: action.detailInfo }
    case 'getJobList':
      return { ...prestate, jobList: [...action.list], page: 0 }
    case 'appendJobList':
      return { ...prestate, jobList: prestate.jobList.concat(action.list), page: action.page }
    default:
      return { ...prestate }
  }
}
