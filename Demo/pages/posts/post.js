Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var post_content=[
      {
        post_date: 'Sep 25 2016',
        post_title: '正是虾肥蟹壮时',
        post_content: '“菊黄蟹正肥，品尝秋之味”，徐志摩把“看初花的荻卢”和“到楼外楼吃蟹”，并列为秋天来杭州不能错过的风雅之事，用林妹妹的话讲是“蟹封嫩于双双满”。',
        post_like: '92',
        post_read: '68',
        img_condition: true,
        post_img: '/images/fan_1.jpeg',
        post_author_img: '/images/user-icon.png'
      },
      {
        post_date: 'Sep 25 2016',
        post_title: '正是虾肥蟹壮时',
        post_content: '“菊黄蟹正肥，品尝秋之味”，徐志摩把“看初花的荻卢”和“到楼外楼吃蟹”，并列为秋天来杭州不能错过的风雅之事，用林妹妹的话讲是“蟹封嫩于双双满”。',
        post_like: '92',
        post_read: '68',
        img_condition: true,
        post_img: '/images/fan_1.jpeg',
        post_author_img: '/images/user-icon.png'
      }
    ]    
    this.setData({
      post_key: post_content,
    });
    
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