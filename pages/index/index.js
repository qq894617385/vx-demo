//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    constellation:[{
      name:'水瓶座',
      icon:''
    },
    {
      name:'双鱼座',
      icon:'icon-shuangzizuo'
    },
    {
      name:'白羊座',
      icon:''
    },{
      name:'金牛座',
      icon:''
    },{
      name:'双子座',
      icon:''
    },{
      name:'巨蟹座',
      icon:''
    },{
      name:'狮子座',
      icon:''
    },{
      name:'处女座',
      icon:''
    },{
      name:'天秤座',
      icon:''
    },{
      name:'天蝎座 ',
      icon:''
    },{
      name:'射手座 ',
      icon:''
    },{
      name:'摩羯座 ',
      icon:''
    }
  ]
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('点击图片');

    wx.redirectTo({
      //目的页面地址
      url: '../newOne/newOne',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})