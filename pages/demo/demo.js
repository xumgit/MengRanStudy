// pages/demo/demo.js

var questionsData = require('../../data/question.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    items: [],
    answers: [],
    aa:'CHN'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("onLoad");
      this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给items
        items: questionsData.data
      });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      console.log("onShareAppMessage");
  },

  bindtap1:function(e){
    var items = this.data.items;
  /*  for (var i = 0; i < items.length; i++){
      if (items[i].name == this.data.aa){
        for (var j = 0; j < items.length; j++) {
          // console.log("items[j].checked = ", items[j].checked);
          if (items[j].checked && j != i) {
              items[j].checked = false;
            }
        }
        items[i].checked = !(items[i].checked);
        console.log("-----:" ,items);
        // this.setData(this.data.items[i]);
 
      }
    }
    this.setData({
      items: items
    });*/
  },
  radioChange: function(e) {
      let seq = e.currentTarget.dataset.seq;
      let value = e.detail.value;    
      //console.log("seq:" + seq + ",value:" + value);
      let answerData = this.data.answers;      
      let data = {};
      data["seq"] = seq;
      data["value"] = value;
      let isExist = false;
      for (let i = 0; i < answerData.length; i++) {
        if (answerData[i]["seq"] == seq) {
          isExist = true;
          answerData[i]["value"] = value;
          break;
        }
      }
      if (!isExist) {
        answerData.push(data);
      }    
      this.setData({
        answers: answerData
      });  
      //console.log(JSON.stringify(answerData));   
  },
  submitAnswer: function() {
      //console.log(JSON.stringify(this.data.answers));
      this.checkAnswer();
  },
  checkAnswer: function() {
    let checkAnswersData = this.data.answers;
    let checkAnswersItem = this.data.items;
    let checkAnswersDataLen = checkAnswersData.length;
    let checkAnswersItemLen = checkAnswersItem.length;
    if (checkAnswersDataLen != checkAnswersItemLen) {
      this.showModalTip('还有题目没做完!');
      return;
    }
    let errorSeq = [];
    for (let i = 0; i < checkAnswersDataLen; i++) {
      for (let j = 0; j < checkAnswersItemLen; j++) {
        if (checkAnswersData[i].seq == checkAnswersItem[j].seq) {
          if (checkAnswersData[i].value != checkAnswersItem[j].right) {
            errorSeq.push(checkAnswersData[i].seq);
          }
          break;
        }
      }      
    }
    if (errorSeq.length > 0) {
      this.showModalTip("第" + errorSeq.toString() + "题目,答错了!");
    } else {
      this.showModalTip("全部答对了!");
    }
  },
  showModalTip: function(msg) {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: msg,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        } else {
          console.log('其他情况');
        }
      }
    })
  }
})