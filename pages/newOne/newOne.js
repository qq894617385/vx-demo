//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLaunch: function(options) { 
    console.log('周期一')
  },
  onShow: function(options) {
      // Do something when show.
      console.log('周期二')
  },
  onHide: function() {
      // Do something when hide.
      console.log()
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
