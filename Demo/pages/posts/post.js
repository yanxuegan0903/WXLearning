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
      },
    ]    
    this.setData({
      post_key: post_content,
    });
    
  },

})