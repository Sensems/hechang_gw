<template>
  <div class="index">
    <a-carousel autoplay effect="fade">
      <div class="swiperImg">
        <img src="../assets/image/bg1.png" alt="和英阿米巴">
      </div>
      <div class="swiperImg">
        <img src="../assets/image/bg2.png" alt="和英阿米巴">
      </div>
      <div class="swiperImg">
        <img src="../assets/image/bg3.png" alt="和英阿米巴">
      </div>
    </a-carousel>

    <div class="dataBoard">
      <div class="singleData" v-for="(item, index) of dataBoardList" :key="index">
          <div class="iconWrap">
            <span class="iconfont icon" v-if="index === 0">&#xe60a;</span>
            <span class="iconfont icon" v-if="index === 1">&#xe6ad;</span>
            <span class="iconfont icon" v-if="index === 2">&#xe649;</span>
            <span class="iconfont icon" v-if="index === 3">&#xe604;</span>
            <span class="iconfont icon" v-if="index === 4">&#xe601;</span>
          </div>
          <div>
            <span class="num">{{item.num}}</span>
          </div>
          <div>
            <span class="title">{{item.title}}</span>
          </div>
      </div>
    </div>

    <div class="newsBox">
      <div class="news">
        <div class="title">咨询研究</div>
        <a-carousel>
          <div class="newsSwiper">
            <img src="https://www.topamb.com/uploadfiles/pictures/others/20200924154054_7177.jpg" alt="和英阿米巴">
          </div>
          <div class="newsSwiper">
            <img src="https://www.topamb.com/uploadfiles/pictures/others/20200924154054_7177.jpg" alt="和英阿米巴">
          </div>
        </a-carousel>
        <ul class="newThing">
          <li>
            <nuxt-link to="/">公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/to">公司动态公司动态公司动态公司动态公司动态</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="news">
        <div class="title">行业新闻</div>
        <a-carousel>
          <div class="newsSwiper">
            <img src="https://www.topamb.com/uploadfiles/pictures/others/20200924154054_7177.jpg" alt="和英阿米巴">
          </div>
          <div class="newsSwiper">
            <img src="https://www.topamb.com/uploadfiles/pictures/others/20200924154054_7177.jpg" alt="和英阿米巴">
          </div>
        </a-carousel>
        <ul class="newThing">
          <li>
            <nuxt-link to="/">公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/to">公司动态公司动态公司动态公司动态公司动态</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="news">
        <div class="title">平台动态</div>
        <a-carousel>
          <div class="newsSwiper">
            <img src="https://www.topamb.com/uploadfiles/pictures/others/20200924154054_7177.jpg" alt="和英阿米巴">
          </div>
          <div class="newsSwiper">
            <img src="https://www.topamb.com/uploadfiles/pictures/others/20200924154054_7177.jpg" alt="和英阿米巴">
          </div>
        </a-carousel>
        <ul class="newThing">
          <li>
            <nuxt-link to="/">公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/to">公司动态公司动态公司动态公司动态公司动态</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="cooperation">
      <div class="severedTitle">合作伙伴</div>
      <ul class="logoWall">
        <li v-for="(item, index) of friendshipList" :key="index">
          <a :href="item.url">
            <img :src="item.imgUrl" :alt="item.alt">
          </a>
        </li>
      </ul>
    </div>
    <div class="friendship">
      <div class="severedTitle">友情链接</div>
      <ul class="logoWall">
        <li v-for="item of 5" :key="item">
          <a href="">
            <img :src="require('../assets/image/company/gl.jpg')" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataBoardList: [
        {
          title: '咨询顾问',
          num: '1000+',
        },
        {
          title: '咨询公司',
          num: '200+',
        },
        {
          title: '会员企业',
          num: '5000+',
        },
        {
          title: '项目信息',
          num: '500+',
        },
        {
          title: '项目案例',
          num: '2000+',
        },
      ],
      friendshipList: [
        {
          alt: '妙可蓝多',
          imgUrl: require('../assets/image/company/mkld.jpg'),
          url: 'http://www.milkground.cn/'
        },
        {
          alt: '真功夫',
          imgUrl: require('../assets/image/company/zgf.jpg'),
          url: 'http://www.zkungfu.cn/'
        },
        {
          alt: '方太',
          imgUrl: require('../assets/image/company/ft.jpg'),
          url: 'https://www.fotile.com/'
        },
        {
          alt: '蒙牛',
          imgUrl: require('../assets/image/company/mn.jpg'),
          url: 'https://www.mengniu.com.cn/'
        },
        {
          alt: '格力空调',
          imgUrl: require('../assets/image/company/gl.jpg'),
          url: 'https://www.gree.com/'
        },
        {
          alt: '比亚迪',
          imgUrl: require('../assets/image/company/byd.jpg'),
          url: 'http://www.bydauto.com.cn/'
        },
        {
          alt: '辽宁参中堂',
          imgUrl: require('../assets/image/company/szt.jpg'),
          url: 'http://www.shenzhongtang.com/'
        },
        {
          alt: '碧桂园',
          imgUrl: require('../assets/image/company/bgy.jpg'),
          url: 'https://www.bgy.com.cn/'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.index {
  .dataBoard {
    min-height: 300px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .singleData {
      text-align: center;
      width: 250px;
      .iconWrap {
        display: inline-block;
        width: 134px;
        height: 134px;
        line-height: 128px;
        transition: all .5s;
        border: 2px solid #909290;
        border-radius: 50%;
        margin-bottom: 4px;
        .icon {
          font-size: 50px;
          color: #909290;
          transition: all .5s;
        }
      }
      .num {
        display: inline-block;
        font-size: 32px;
        color: #909290;
        border-bottom: 1px solid #909290;
        margin-bottom: 6px;
      }
      &:hover {
        .iconWrap {
          border-color: $main-color;
          animation: homeProductNumIcon 1s 1 linear;;
          .icon {
            color: $main-color;
          }
        }
        .num {
          animation: homeProductNum 1s 1 linear;
        }
      }
    }
  }
  .newsBox {
    background-color: #f3f4f5;
    display: flex;
    justify-content: center;
    padding: 20px 0 50px;
    .news {
      width: 370px;
      margin-right: 70px;
      &:last-child {
        margin-right: 0;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #5f5f5f;
        text-align: center;
        line-height: 50px;
      }
      .newsSwiper {
        width: 370px;
        height: 240px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .newThing {
        li {
          padding: 6px 0;
          border-bottom: 1px dashed #3e3e3e;
          font-size: 12px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        a {
          color: #3e3e3e;
          &:hover {
            color: $main-color;
            text-decoration: underline;
          }
          &:visited {
            color: #939393;
          }
        }
      }
    }
    @media screen and (max-width: 414px) {
      flex-wrap: wrap;
      justify-content: center;
      .news {
        margin-right: 0;
      }
    }
  }
  .cooperation,.friendship {
    background-color: #fff;
    padding: 50px 0;
    .logoWall {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1000px;
      margin: 30px auto 0;
      li {
        height: 60px;
        cursor: pointer;
        text-align: center;
        padding: 0 20px;
        /* border-bottom: 1px dashed #999;
        border-right: 1px dashed #999;
        &:nth-child(6n) {
          border-right: none;
        }
        &:last-child {
          border-right: none;
        } */
        img {
          height: 100%;
          filter: grayscale(100%);
          &:hover {
            filter: grayscale(0%);
          }
        }
      }
    }
  }
}

@keyframes homeProductNumIcon {
  0% {
    transform: rotate(-60deg);
  }
  50% {
      transform: rotate(60deg);
  }
  100% {
      transform: rotate(0);
  }
}
@keyframes homeProductNum {
  0% {
    transform: scale(.5);
  }
  100% {
      transform: scale(1.1);
  }
}
</style>
