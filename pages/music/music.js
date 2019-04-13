// pages/music/music.js
let BackgroundAudioManager = wx.getBackgroundAudioManager();
let t = 0;
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    button_text:"pause"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    BackgroundAudioManager.src = "http://www.ytmp3.cn/down/59964.mp3"
    BackgroundAudioManager.title = "Ark-Sound Horizon"
    BackgroundAudioManager.coverImgUrl = "http://www.gepuwang.net/uploads/allimg/140726/13533WJ3-0.png"
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    
  },
  pauseAndPlay: function() {
    if (BackgroundAudioManager.paused == true) {
      BackgroundAudioManager.play();
      this.setData({
        button_text: "pause"
      })
    }else{
      BackgroundAudioManager.pause();
      this.setData({
        button_text: "play"
      })
    }
    
    console.log(BackgroundAudioManager.paused)
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})