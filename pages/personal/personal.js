// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 2019013320,
    major: "软件工程"
  },

  //跳转到修改密码界面
  toRepwd:function(){
    wx.navigateTo({
      url: '../repwd/repwd',
      success: function(res){},
      fail: function() {},
      complete: function() {}
    })
  },

  //跳转到收藏中心界面
  toCollect:function(){
    wx.navigateTo({
      url: '../collection/collection',
      success: function(res){},
      fail: function() {},
      complete: function() {}
    })
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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