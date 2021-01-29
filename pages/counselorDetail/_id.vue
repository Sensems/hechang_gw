<template>
  <div class="counselorDetail">
    <a-carousel autoplay>
      <div class="swiperImg" v-for="(item, index) of carouselList" :key="index">
        <img :src="baseUrl + item.Img" alt="和英阿米巴" />
      </div>
    </a-carousel>

    <div class="counselorInfo">
      <div class="imgWrap">
        <img
          :src="baseUrl + info.headImg"
          alt=""
        />
      </div>
      <div class="info">
        <p class="name">{{info.userName}}</p>
        <p class="mianTitle">{{info.jibie}}</p>
        <ul>
          <li class="otherTitle" v-for="(item, index) of info.management" :key="index">{{item.management}}</li>
        </ul>
      </div>
    </div>

    <div class="goodAt">
      <div class="content">
        <div class="left"></div>
        <div class="right">
          <img
            :src="baseUrl + info.Img"
            alt=""
          />
        </div>
        <div class="floatBox">
          <h1 class="title">
            <span>EXCEL IN THE FIELD</span>
            擅长领域
          </h1>
          <p class="text">
            {{info.IsgoodAt}}
          </p>
        </div>
      </div>
    </div>

    <div class="case">
      <h1>部分服务客户</h1>
      <p>
        {{info.IsgoodAt}}
      </p>
    </div>
    <div class="cooperation">
      <!-- <ul class="logoWall">
        <li v-for="(item, index) of friendshipList" :key="index">
          <a :href="item.url">
            <img :src="item.imgUrl" :alt="item.alt" />
          </a>
        </li>
      </ul> -->
      <ul class="logoWall">
        <li v-for="(item, index) of partnerList" :key="index">
          <a :href="item.wangzhi">
            <img :src="baseUrl + item.img" :alt="item.title">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Service from "@/utils/api";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params }) {
    const carousel = await Service.normal({ op: 20 });
    const counselorInfo = await Service.normal({ op: 27, Id: params.id });
    const partner =  await Service.normal({op: 25});
    return {
      info: counselorInfo,
      carouselList: carousel.lists,
      partnerList: partner.lists,
    };
  },
  data() {
    return {
      baseUrl: Service.baseUrl,
      friendshipList: [
        {
          alt: "妙可蓝多",
          imgUrl: require("../../assets/image/company/mkld.jpg"),
          url: "http://www.milkground.cn/"
        },
        {
          alt: "真功夫",
          imgUrl: require("../../assets/image/company/zgf.jpg"),
          url: "http://www.zkungfu.cn/"
        },
        {
          alt: "方太",
          imgUrl: require("../../assets/image/company/ft.jpg"),
          url: "https://www.fotile.com/"
        },
        {
          alt: "蒙牛",
          imgUrl: require("../../assets/image/company/mn.jpg"),
          url: "https://www.mengniu.com.cn/"
        },
        {
          alt: "格力空调",
          imgUrl: require("../../assets/image/company/gl.jpg"),
          url: "https://www.gree.com/"
        },
        {
          alt: "比亚迪",
          imgUrl: require("../../assets/image/company/byd.jpg"),
          url: "http://www.bydauto.com.cn/"
        },
        {
          alt: "辽宁参中堂",
          imgUrl: require("../../assets/image/company/szt.jpg"),
          url: "http://www.shenzhongtang.com/"
        },
        {
          alt: "碧桂园",
          imgUrl: require("../../assets/image/company/bgy.jpg"),
          url: "https://www.bgy.com.cn/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.counselorDetail {
  .counselorInfo {
    display: flex;
    margin: 50px auto;
    width: 1200px;
    background: #f3f4f5;
    color: #333333;
    .imgWrap {
      width: 750px;
      /* height: 400px;
            overflow: hidden; */
      img {
        width: 100%;
      }
    }
    .info {
      width: 580px;
      padding-top: 50px;
      p {
        margin-bottom: 0;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px;
      }
      .name {
        font-weight: bold;
        font-size: 40px;
        padding-left: 100px;
      }
      .mianTitle {
        font-size: 24px;
        padding-left: 100px;
        margin-bottom: 20px;
      }
      .otherTitle {
        font-size: 14px;
        background: url("../../static/img/teamceo_ico.gif") no-repeat;
        background-position-y: 50%;
        padding-left: 30px;
        line-height: 50px;
        width: 50%;
      }
    }
  }
  .goodAt {
    background: url("https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/8728700a385945e48ba120c8627ebdee.jpg!sswm")
      no-repeat;
    background-size: 100%;
    height: 540px;
    display: flex;
    justify-content: center;
    .content {
      position: relative;
      margin-top: 50px;
      background-color: #ffffff;
      width: 1200px;
      height: 400px;
      display: flex;
      .left {
        width: 400px;
        background: #84bcff;
      }
      .right {
        width: 800px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .floatBox {
        position: absolute;
        bottom: -40px;
        width: 400px;
        height: 400px;
        left: 150px;
        background-color: #fafaf7;
        box-shadow: 0 0 8px -2px #73777d;
        .title {
          margin: 50px 20px 20px;
          font-size: 40px;
          span {
            display: block;
            font-size: 14px;
          }
        }
        .text {
          padding: 0 20px;
        }
      }
    }
  }
  .case {
    h1 {
      font-weight: bold;
      font-size: 42px;
      color: #333;
      margin-bottom: 50px;
    }
    text-align: center;
    width: 1200px;
    margin: 50px auto;
  }
  .cooperation {
    background-color: #fff;
    padding: 50px 0;
    .logoWall {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1100px;
      margin: 30px auto 0;
      li {
        height: 60px;
        cursor: pointer;
        text-align: center;
        padding: 0 20px;
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
</style>
