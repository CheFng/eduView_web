import { getAssets } from '@/api/asset'
var arr = []
const getData = function () {
  getAssets().then(response => {
    var list1 = response.data
    for (var i in list1) {
      arr[i] = list1[i]
    }
    console.log(arr)
  })
}
getData()
const config1 = {}
const config2 = {
  header: ['列1', '列2', '列3', '列4', '列5'],
  data() {
    return {
      arr
    }
  },
  index: true,
  columnWidth: [50],
  align: ['center'],
  carousel: 'page'
}
const config3 = {
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 45
    },
    {
      name: '漯河',
      value: 29
    }
  ]
}
const config4 = {
  centerPoint: [0.57, 0.42],
  relative: true,
  points: [
    {
      position: [0.63, 0.33],
      text: '黑龙江省'
    },
    {
      position: [0.55, 0.39],
      text: '内蒙古自治区'
    },
    {
      position: [0.62, 0.38],
      text: '吉林省'
    }, {
      position: [0.60, 0.41],
      text: '辽宁省'
    }, {
      position: [0.57, 0.44],
      text: '天津市'
    }, {
      position: [0.58, 0.47],
      text: '山东省'
    }, {
      position: [0.56, 0.45],
      text: '河北省'
    }, {
      position: [0.54, 0.46],
      text: '山西省'
    }, {
      position: [0.53, 0.49],
      text: '陕西省'
    }, {
      position: [0.51, 0.46],
      text: '宁夏回族自治区'
    }, {
      position: [0.46, 0.42],
      text: '甘肃省'
    }, {
      position: [0.45, 0.48],
      text: '青海省'
    }, {
      position: [0.40, 0.39],
      text: '新疆维吾尔自治区'
    }, {
      position: [0.41, 0.53],
      text: '西藏自治区'
    }, {
      position: [0.49, 0.54],
      text: '四川省'
    }, {
      position: [0.53, 0.54],
      text: '重庆市'
    }, {
      position: [0.55, 0.54],
      text: '湖北省'
    }, {
      position: [0.55, 0.50],
      text: '河南省'
    }, {
      position: [0.57, 0.53],
      text: '安徽省'
    }, {
      position: [0.59, 0.52],
      text: '江苏省'
    }, {
      position: [0.60, 0.55],
      text: '上海市'
    }, {
      position: [0.59, 0.56],
      text: '浙江省'
    }, {
      position: [0.57, 0.57],
      text: '江西省'
    }, {
      position: [0.58, 0.59],
      text: '福建省'
    }, {
      position: [0.55, 0.58],
      text: '湖南省'
    }, {
      position: [0.52, 0.58],
      text: '贵州省'
    }, {
      position: [0.49, 0.60],
      text: '云南省'
    }, {
      position: [0.53, 0.61],
      text: '广西壮族自治区'
    }, {
      position: [0.55, 0.62],
      text: '广东省'
    }, {
      position: [0.56, 0.64],
      text: '香港特别行政区'
    }, {
      position: [0.55, 0.64],
      text: '澳门特别行政区'
    }, {
      position: [0.53, 0.67],
      text: '海南省'
    }, {
      position: [0.59, 0.61],
      text: '台湾省'
    }
  ],
  k: -0.5, // 飞线收束程度
  bgImgUrl: './image/mapImg.png',
  centerPointImg: {
    url: './image/mapCenterPoint.png'
  },

  pointsImg: {
    url: './image/mapPoint.png'
  }
}

export { config1, config2, config3, config4 }
