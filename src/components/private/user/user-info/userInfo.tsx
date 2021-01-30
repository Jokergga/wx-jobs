import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './userInfo.scss'

type Iprops = {
  
}

interface UserInfo {
  props: Iprops
}

class UserInfo extends Component {

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() {
  }

  componentDidHide() { }

  render() {

    return (
      <View className="userInfo">
        <View className="avatar">
          <Image src={require('../../../../assets/images/index_banner/banner_2.jpg')}></Image>
        </View>
        <View className="name">
          <Text>用户名</Text>
        </View>
        <View className="iphone">
          <Text>13121212121</Text>
        </View>
      </View>
    )
  }
}

export default UserInfo
