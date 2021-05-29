// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usernameRule:[{
      required: true
    },{
      type: 'string',
      min: 2,
      max: 8,
      message: "用户名长度在2-8之间"
    }],
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
    }],
    majorRule:[{
      required: true
    },{
      type: 'string',
      min: 2,
      max: 8,
      message: "专业名长度在2-8之间"
    }],
  },

  // 注册成功后跳转到登录页面
  redirectBtn:function(){
    wx.redirectTo({
      url: '../logs/logs',
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