// pages/index/1.js
var app = getApp()

let BackgroundAudioManager= wx.getBackgroundAudioManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: BackgroundAudioManager.src+"sdf",

  },
  bindback: function(){
    BackgroundAudioManager.src = "http://www.ytmp3.cn/down/59964.mp3"
    BackgroundAudioManager.title = "Ark-Sound Horizon"
    BackgroundAudioManager.play();
    BackgroundAudioManager.onPlay(() => {
      console.log("音乐播放开始");
    })
  },
  stopPlay: function(){
    BackgroundAudioManager.pause();
  }
})