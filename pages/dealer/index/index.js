const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isData: false,
    words: {},
    user: {},
    dealer: {},
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
    // 获取分销商中心数据
    _this.getDealerCenter();
  },

  /**
   * 获取分销商中心数据
   */
  getDealerCenter() {
    let _this = this;
    App._get('user.dealer/center', {}, function(result) {
      let data = result.data;
      data.isData = true;
      // 设置当前页面标题
      wx.setNavigationBarTitle({
        title: data.words.index.title.value
      });
      _this.setData(data);
    });
  },

  /**
   * 跳转到提现页面
   */
  navigationToWithdraw() {
    wx.navigateTo({
      url: '../withdraw/apply/apply',
    })
  },

  /**
   * 立即加入分销商
   */
  triggerApply(e) {
    wx.navigateTo({
      url: '../apply/apply',
    })
  },

})