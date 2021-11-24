// pages/login/login.js
import request from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
    userinfo:{}
  },
  handleInput(e){
    console.log(e)
    //获取登录表单数据
    let type = e.currentTarget.dataset.id
    this.setData({
      [type]:e.detail.value
    })
  },
  async login(){
    let {phone,password} = this.data
    let reg = /1(3|4|5|6|7|8|9)\d{9}/;
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon:"none"
      })
    }
    if(!reg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon:"error"
      })
    }
    else{
      if(!password){
        wx.showToast({
          title: '密码不能为空',
          icon:"none"
        })
      }
    }
    let result = await request("/login/cellphone",{phone,password,islogin:true})
    console.log(result)
    if(result.code==200){
      wx.setStorageSync('userinfo', result)
      wx.switchTab({
        url: '../personal/personal',
      })
    }
    else if(result.code==502){
      wx.showToast({
        title: '密码错误',
        icon:"error"
      })
    }
    else if(result.code==400){
      wx.showToast({
        title: '手机号错误',
        icon:"error"
      })
    }
    else{
      wx.showToast({
        title: '登录失败',
        icon:"error"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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