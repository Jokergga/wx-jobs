import React, { Component } from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './mySwiper.scss'

type Iprops = {
  banner: [
    { image_src: string }
  ]
}

interface MySwiper {
  props: Iprops
}

class MySwiper extends Component {

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() {
  }

  componentDidHide() { }

  render() {
    const { banner } = this.props;
    
    return (
      <Swiper
        className='swiper-container'
        circular
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay>
        { banner.map((item, index) => (
          <SwiperItem key={index}>
            <Image className="swiper-img" mode="widthFix" src={item.image_src}></Image>
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}

export default MySwiper
