import request from "../../utils/request.js"
Page({
  data:{
    banners:[],
    introduce:[],
    toplist:[],
    value:[
      {title:"推荐歌曲",index:"为你精心推荐"},
      {title:"排行榜",index:"热歌风向标"}
    ],
    nav:[
      {class:"icon-meirituijian",name:"每日推荐"},
      {class:"icon-gedan1",name:"歌单"},
      {class:"icon-icon-ranking",name:"排行榜"},
      {class:"icon-diantai",name:"直播"},
      {class:"icon-zhiboguankanliangbofangsheyingshexiangjixianxing",name:"电台"}
    ]
  },

  //跳转
  navi(e){
    let index = e.currentTarget.dataset.index
    switch (index){
      case 0:{
        wx.navigateTo({
          url: '../song/song',
        })
      }
    }
  },
 async getSwiper(){
    let banner=await request("/banner")
    let banners = banner.banners
    this.setData({
      banners
    })
  },
  async intro(){
    let intro = await request("/personalized",{limit: 10})
    this.setData({
      introduce:intro
    })
  },
  async toplist(){
    let toplist = await request("/toplist/detail")
    let list = toplist.list.slice(0,3)
    this.setData({
      toplist:list
    })
  },
onLoad(){
    this.getSwiper()
    this.intro()
    this.toplist()
  }
})