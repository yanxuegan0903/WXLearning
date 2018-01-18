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
    //  将postID 缓存早数据data中
    this.data.currentPostid = postid;
    console.log('postid = ' + postid);

    var postData = postsData.postList[postid];
    // 设置数据
    this.setData({
      postData: postData,
    });

    //  获取这篇文章是否已经收藏
    var postsCollected = wx.getStorageSync('posts_Collected');
    if(postsCollected){
      console.log("postsCollected = "+postsCollected);
      var postCollected = postsCollected[postid];
      console.log("是否收藏 = " + postCollected);
      this.setData({
        collected: postCollected
      })
    }else{
      console.log("postsCollected 不存在");
      var postsCollected = {};
      postsCollected[postid] = false;
      wx.setStorageSync("posts_Collected", postsCollected);
    }


  },

  onCollectedTap:function(event){
  
    var postsCollected = wx.getStorageSync('posts_Collected')
    var postCollected = postsCollected[this.data.currentPostid]
    postCollected = !postCollected
    postsCollected[this.data.currentPostid] = postCollected;
    wx.setStorageSync('posts_Collected', postsCollected)
    
    this.setData({
      collected: postCollected
    });

  }

})