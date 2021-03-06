// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIdRule:[{
      required: true
    },{
      type: 'number',
      len: 10,
      message: "学号需为10位数字"
    }],
    pwdRule:[{
      required: true
    },{
      type: 'number',
      min: 8,
      max: 15,
      message: "密码长度在8-15之间"
    }]
  },

  //登录成功后跳转到主界面
  myLog:function(){
    wx.redirectTo({
      url: '../index/index',
      success: function(res){},
      fail: function() {},
      complete: function() {}
    })
 },
  // 跳转到注册页面
  redirectToRegister:function(){
    wx.redirectTo({
      url: '../register/register',
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