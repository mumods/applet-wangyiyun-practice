import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tarnsition:'',
    trans:'',
    recentPlayList:{}
  },
  toLogin(){
    if(!this.data.userInfo){
    wx.redirectTo({
      url: '../login/login',
    })
  }
  else{
    return
  }
  },
  startY:'',
  moveY:'',
  movestance:'',
  handleTouchStart(e){
    // console.log(e)
    this.setData({
      trans:'0'
    })
    this.statY = e.touches[0].clientY
  },
  handleTouchMove(e){
    this.moveY = e.touches[0].clientY
    this.movestance = this.moveY - this.statY

    if(this.movestance>80){
      this.movestance=80
    }
    if(this.movestance<=0){
      this.movestance=0
    }
    this.setData({
      tarnsition:`${this.movestance}rpx`
    })
  },
  handleTouchEnd(e){
    this.movestance=0
    this.setData({
      tarnsition:`${this.movestance}rpx`,
      trans:'1s'
    })
  },

  async recentPlayList(){
    let userId = this.data.userInfo.profile.userId
    let recentPlayList = await request("/user/record",{uid:userId,type:0})
    // console.log(recentPlayList)
    let s = recentPlayList.allData.slice(0,15)
    this.setData({
      recentPlayList:s
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 读取用户的基本信息
    let userInfo = wx.getStorageSync('userinfo')
    if(userInfo){
    this.setData({
      userInfo
    })
    // console.log(this.data.userInfo)
    this.recentPlayList()
  }
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
