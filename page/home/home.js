var app     = getApp()
var Api     = require('../../utils/api.js');
var util    = require('../../utils/util.js');

Page({
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tapName(e) {
    console.log(e)
  },
  lower(e){
    alert(e)

  },
  data: {
    data:[],
    hidden:true
  },
  myFun(){
    console.log('vue react')
  },
  onLoad: function () {
    this.setData({
      hidden:false
    });
    console.log(this.myFun())
    
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
      }
    })
        


    Api.home( res => {
      console.log(res)
      //更新数据
      this.setData({
          data:res.modules,
          hidden:true
      });
    });

  },


})
