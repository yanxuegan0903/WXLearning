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
    if (postsCollected) {
      console.log("postsCollected = " + postsCollected);
      var postCollected = postsCollected[postid];
      console.log("是否收藏 = " + postCollected);
      this.setData({
        collected: postCollected
      })
    } else {
      console.log("postsCollected 不存在");
      var postsCollected = {};
      postsCollected[postid] = false;
      wx.setStorageSync("posts_Collected", postsCollected);
    }


  },

  //  点击收藏
  onCollectedTap: function (event) {

    var postsCollected = wx.getStorageSync('posts_Collected')
    var postCollected = postsCollected[this.data.currentPostid]
    postCollected = !postCollected
    postsCollected[this.data.currentPostid] = postCollected;
    wx.setStorageSync('posts_Collected', postsCollected)

    this.setData({
      collected: postCollected
    });

    //  显示提示
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      icon: 'success',
      mask: true,
      duration: 1000,
    })

  },

  //  点击分享
  onShareTap: function (event) {
    wx.showActionSheet({
      itemList: [
        '分享给微信好友',
        '分享到朋友圈',
        '分享到QQ',
        '分享到微博'
      ],
      success: function (res) {
      },
      fail: function (res) {
      }
    })

  },

  //  播放音乐按钮
  onPlayTap: function () {

    var playMusicStatus = this.data.playMusicStatus

    if (playMusicStatus) {
      console.log('正在播放 来暂停');
      wx.pauseBackgroundAudio()

      this.setBackgroundPlayStatus(false)

    } else {
      console.log('没有播放 来播放');

      var postData = postsData.postList[this.data.currentPostid];


      wx.playBackgroundAudio({
        dataUrl: postData.music.src,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImgUrl
      })

      this.setBackgroundPlayStatus(true)
    }

  },

  onPlay: function () {
    console.log("11111");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.stopBackgroundAudio()
    this.setBackgroundPlayStatus(false)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.stopBackgroundAudio()
    this.setBackgroundPlayStatus(false)

  },


  setBackgroundPlayStatus: function (status) {
    this.data.playMusicStatus = status
    this.setData({
      playMusicState: status
    })
  }


})