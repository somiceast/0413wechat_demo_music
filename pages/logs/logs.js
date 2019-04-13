//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    
  },
  location: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log(res.latitude, res.longitude)//113.33476,22.987086
        const latitude = 22.987086
        const longitude = 113.33476
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
  mapPresentation: function () {
    let mapcontext = wx.createMapContext(mapid, this)
  }
  
})
