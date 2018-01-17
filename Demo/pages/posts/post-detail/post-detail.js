var postsData = require("../../../datas/posts-data.js")


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
    var postid = options.id;
    console.log('postid = ' + postid);

    var postData = postsData.postList[postid];
    this.setData({
      postData:postData,
    });

  },

})