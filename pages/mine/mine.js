// pages/shelf/shelf.js
//获取应用实例
const dev_request = require('../../utils/dev_request')
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: '../../image/dev.jpg',
        username: '未登录',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let userinfo = wx.getStorageSync('userinfo');
        if (userinfo) {
            this.setData({
                avatar: dev_request.BaseUrl + userinfo.icon,
                username: userinfo.nickname
            })
        }
    },

    bindTapUseravatar: function () {
        if (this.data.username === '未登录') {
            wx.navigateTo({
                url: "../login/login"
            })
        }
    }
})