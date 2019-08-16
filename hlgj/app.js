App({

  onLaunch: function() {

    wx.login({
      success: res => {}
    })
  },

  globalData: {
    domain: "http://192.168.137.1/xxsk"
  }
})