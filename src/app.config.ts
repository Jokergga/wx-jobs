export default {
  pages: [
    'pages/index/index',
    'pages/user/user',
    'pages/trainer/trainer',
    'pages/menu/menu'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#707070",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icons/tabs/job.png',
        selectedIconPath: 'assets/icons/tabs/job_active.png'
      },
      {
        pagePath: 'pages/trainer/trainer',
        text: '课程',
        iconPath: 'assets/icons/tabs/trainer.png',
        selectedIconPath: 'assets/icons/tabs/trainer_active.png'
      },
      {
        pagePath: 'pages/menu/menu',
        text: '菜单',
        iconPath: 'assets/icons/tabs/menu.png',
        selectedIconPath: 'assets/icons/tabs/menu_active.png'
      },
      {
        pagePath: 'pages/user/user',
        text: '我的',
        iconPath: 'assets/icons/tabs/user.png',
        selectedIconPath: 'assets/icons/tabs/user_active.png'
      },
    ]
  }
}
