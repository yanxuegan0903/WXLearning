App({

  //  声明一个全局变量  在别的界面 可通过  var app = getAPP(); var global = app.global; 来获取这个变量
  global:{
    
  },



  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.getUserInfo
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  getUserInfo:function(){
    wx.getUserInfo({
      success:function(res){

        console.log('获取信息')
        console.log(res)
      },

      fail:function(res){
        console.log('失败');
      },
      complete:function(){
        console.log('获取用户信息结束')
      }
    
    })  


  }




})
