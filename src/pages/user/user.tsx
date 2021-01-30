import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import './user.scss'
import UserInfo from '../../components/private/user/user-info/userInfo'

class User extends Component {

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <UserInfo></UserInfo>
      </View>
    )
  }
}

export default User

