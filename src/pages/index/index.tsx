import React, { Component } from 'react'
import { View } from '@tarojs/components'
import MySwiper from '../../components/common/my-swiper/mySwiper'

import './index.scss'
import JobList from '../../components/private/index/job-list/jobList'


type Istate = {
  banner: [
    { image_src: string }
  ],
  data: [
    {}
  ]
}

interface Index {
  props: Istate;
}

class Index extends Component {

  state = {
    banner: [{ image_src: '../../assets/images/index_banner/banner_1.jpg' }, { image_src: '../../assets/images/index_banner/banner_2.jpg' }, { image_src: '../../assets/images/index_banner/banner_3.jpg' }],
    data: []
  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let { banner, data } = this.state
    return (
      <View className='index'>
        <MySwiper banner={banner} />
        <JobList data={data} />
        <JobList data={data} />
        <JobList data={data} />
        <JobList data={data} />
        <JobList data={data} />
      </View>
    )
  }
}

export default Index

