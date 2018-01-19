Page({

  //   点击跳转
  onTap: function () {
    // wx.redirectTo({
    //   url: '../posts/post',
    // })
    console.log("1111");
    wx.switchTab({
      url: '../posts/post',
    })

  },

})