<template>
  <div class="counselorDetail">
    <a-carousel autoplay>
      <div class="swiperImg">
        <img
          src="https://www.topamb.com/uploadfiles/pictures/others/20200114141452_4579.jpg"
          alt="和英阿米巴"
        />
      </div>
    </a-carousel>

    <div class="counselorInfo">
      <div class="imgWrap">
        <img
          src="https://www.topamb.com/uploadfiles/pictures/help/20180919095801_3323.jpg"
          alt=""
        />
      </div>
      <div class="info">
        <p class="name">朱先春</p>
        <p class="mianTitle">易咨询首席咨询项目总监</p>
        <ul>
          <li class="otherTitle">十五年以上管理咨询经验</li>
          <li class="otherTitle">企业组织效能提升资深顾问</li>
          <li class="otherTitle">十五年以上企业中高层管理阅历</li>
          <li class="otherTitle">中山大学管理与IT咨询中心研究员</li>
          <li class="otherTitle">河海大学企业管理学院特聘教授</li>
        </ul>
      </div>
    </div>

    <div class="goodAt">
      <div class="content">
        <div class="left"></div>
        <div class="right">
          <img
            src="https://www.topamb.com/skins/default/img/ny/teamceoxc03.jpg"
            alt=""
          />
        </div>
        <div class="floatBox">
          <h1 class="title">
            <span>EXCEL IN THE FIELD</span>
            擅长领域
          </h1>
          <p class="text">
            企业综合诊断、企业战略管理、集团管控与组织设计、高层机制设计、企业决策效能提升、企业运营效能提升、企业人本效能提升、组织和谐管理、心理资本开发、薪酬与绩效体系、培训与人才发展体系、阿米巴经营模式等。
          </p>
        </div>
      </div>
    </div>

    <div class="case">
      <h1>部分服务客户</h1>
      <p>
        广东移动、深圳移动、中山移动万和集团、广东科高、佛山伟仕达广特电气、广州日立电梯、南方电网惠利电子、珠海精路电子、生活家地板、益高卫浴、千芝雅卫生用品、华强本邦照明、沈阳桃李面包、禄丰天宝、中盐常化、新伟星塑料、洛阳钼业、奥扬新能源、阿里巴巴、（科大讯飞）讯飞樽鸿、银仕来纺织、张家港一商场集团、江阴兴澄特钢、精艺股份等。
      </p>
    </div>
    <div class="cooperation">
      <ul class="logoWall">
        <li v-for="(item, index) of friendshipList" :key="index">
          <a :href="item.url">
            <img :src="item.imgUrl" :alt="item.alt" />
          </a>
        </li>
      </ul>
      <ul class="logoWall">
        <li v-for="(item, index) of friendshipList" :key="index">
          <a :href="item.url">
            <img :src="item.imgUrl" :alt="item.alt" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
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
