var postData = require("../../datas/posts-data.js")

// RESTFul Json
// SOAP XML

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


    var top250 = postData.top250
    var coming_soon = postData.coming_soon
    var in_theaters = postData.in_theaters

    var local_movies = {
      'in_theaters':in_theaters,
      'coming_soon':coming_soon,
      'top250':top250
    }
    console.log('local_movies =')

    console.log(local_movies)


    this.setData({
      local_movies: local_movies,
    });







  },


})