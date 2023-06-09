const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let _this = this;
    // 获取我的钱包
    _this.getUserDetail();
  },

  /**
   * 获取我的钱包
   */
  getUserDetail: function() {
    let _this = this;
    App._get('user.wallet/index', {}, function(result) {
      _this.setData(result.data);
    });
  },

  /**
   * 跳转充值页面
   */
  onTargetRecharge(e) {
    wx.navigateTo({
      url: '../recharge/index'
    })
  },

  /**
   * 跳转充值记录页面
   */
  onTargetRechargeOrder(e) {
    wx.navigateTo({
      url: '../recharge/order/index'
    })
  },

  /**
   * 跳转账单详情页面
   */
  onTargetBalanceLog(e) {
    wx.navigateTo({
      url: '../wallet/balance/log'
    })
  },

})