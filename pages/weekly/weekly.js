Page({
  data: {
    weeklyMovieList: [
    {
      name: "泰坦尼克号",
      comment: "失去的才是永恒的",
      imagePath: "/images/泰坦尼克号.jpg",
      isHighlyRecommended: false,
      id: 1292722
    },
    {
      name: "这个杀手不太冷",
      comment: "小萝莉与怪蜀黍纯正灿烂的爱情故事",
      imagePath: "/images/这个杀手不太冷.jpg",
      isHighlyRecommended: false,
      id: 1295644
    },
    {
      name: "教父",
      comment: "最精彩的剧本,最真实的黑帮电影。",
      imagePath: "/images/教父",
      isHighlyRecommended: true,
      id: 1291841
    }
    ],
    count: 123,
    score: 61,
  },

  onLoad: function(options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1,
    })
  },

  f1: function(event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1,
    })
  },

    f2: function(event) {
      var movieId = event.currentTarget.dataset.movieId;
      console.log(movieId);
      wx.navigateTo({
        url: '/pages/detail/detail?id='+movieId,
      })
  },

  onShareAppMessage: function(){
    return {
      title: "每周推荐"
    }
  }
})