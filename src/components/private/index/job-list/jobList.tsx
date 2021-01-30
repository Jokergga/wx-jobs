import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './jobList.scss'

type Iprops = {
  data: [
    { image_src: string }
  ]
}

interface JobList {
  props: Iprops
}

class JobList extends Component {

  componentWillMount() {

  }

  componentDidMount() {
  }


  render() {

    return (
      <View className="jobList">
        <View className='job'>

          <View className="left_con">
            <Image className='img' src={require('../../../../assets/images/index_banner/banner_1.jpg')}></Image>
          </View>
          
          <View className="right_con">
            <View className="name">
              <Text>新媒体运营</Text>
              <Text>6K-8K</Text>
            </View>
            <View className="company">
              <Text>加加酱油</Text>
              <Text>赏金99元</Text>
            </View>
            <View className="info">
              <Text>长沙 | 5-10年 | 本科</Text>
              <Text>01月15日</Text>
            </View>
            <View className="share">
              <Text>已有<Text>84</Text>人分享</Text>
              <Text>有赏分享</Text>
            </View>
          </View>

        </View>

      </View>
    )
  }
}

export default JobList
