let times=0
export default(url,data={},method="GET")=>{
  wx.showLoading({
    title: '加载中',
  })
  times++
  return new Promise((resolve,reject) => {
    let host="https://www.codeman.ink/api"
    wx.request({
      url:host+url,
      data,
      method,
      header:{
        // cookie:wx.getStorageSync('cookies')[1]
        cookie: wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1):''
      },
      success:(res)=>{
        if(data.islogin){   //验证登录状态获取cookies
          wx.setStorageSync('cookies', res.cookies)
        }
        // console.log(res)
       resolve(res.data)
      },
      fail:(err)=>{
       reject(err)
      },
      complete:()=>{
        times--
        if(times==0){
          wx.hideLoading()
        }
      }
    })
  })
}