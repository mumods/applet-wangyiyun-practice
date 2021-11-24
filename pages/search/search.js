// pages/search/search.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder:'',
    hotlist:[],
    searchlist:[]
  },
  timeId:-1,
  async getplaceholder(){
    let placeholder = await request("/search/default")
    let hotlist = await request("/search/hot/detail")
    // console.log(hotlist)
    this.setData({
      placeholder:placeholder.data.showKeyword,
      hotlist:hotlist.data
    })
  },
  search(e){
    let searchlist = e.detail.value.trim()
    this.setData({
      searchlist
    })
    clearTimeout(this.timeId)
    this.timeId = setTimeout(()=>{
      this.getsearch()
    },1000)
    
  },
  async getsearch(){
    let searchlistres = await request("/search",{keywords:this.data.searchlist,limit:10})
    console.log(searchlistres)
    if(!this.data.searchlist){
        this.setData({
          searchlistres:[]
        })
        return
    }
    else{
    this.setData({
      searchlistres:searchlistres.result.songs
    })
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getplaceholder()
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