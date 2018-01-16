Page({

//   点击跳转
  onTap: function () {
    console.log('onTap');
    wx.redirectTo({
      url: '../posts/post',
    })

  },
  
})