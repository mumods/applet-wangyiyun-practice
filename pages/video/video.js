// pages/video/video.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    nav:{}
  },

//获取导航栏数据
  async getnav(){
    let nav = await request("/video/group/list")
    // console.log(nav)
    let navi = nav.data.slice(0,20)
    this.setData({
      nav:navi,
      id:navi[0].id
    })
    this.getvideo(this.data.id)
  },
  //导航栏点击切换
  change(e){
    this.setData({
      video:[]
    })
    let {index} = e.currentTarget.dataset
    // let nav = this.data.nav
    console.log(e)
    this.setData({
      id:index
    })
    this.getvideo(this.data.id)
  },

  //获取视频
  async getvideo(id){
    let video = await request("/video/group",{id:id})
    console.log(video)
    this.setData({
      video
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnav()
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