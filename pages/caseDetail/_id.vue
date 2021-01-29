<template>
  <div class="newDetail">
    <a-carousel autoplay>
      <div class="swiperImg">
        <img
          src="https://www.topamb.com/uploadfiles/pictures/others/20180903161025_4339.jpg"
          alt="和英阿米巴"
        />
      </div>
    </a-carousel>
    <a-row type="flex" justify="center" class="mainBox" :gutter="20">
      <a-col class="article" :xs="15" :sm="12" :md="12" :lg="12" :xl="12">
        <h1>{{ info.title }}</h1>
        <div class="info">
          <span>浏览：{{ info.browseCount }}</span>
          <span>发布时间：{{ info.createTime }}</span>
        </div>
        <div class="content" v-html="info.lists"></div>
        <!-- <div class="btns">
          <div class="previous">
            <a-icon type="arrow-left" /><span>上一篇</span>
          </div>
          <div class="next">
            <span>下一篇</span><a-icon type="arrow-right" />
          </div>
        </div> -->
      </a-col>
      <a-col class="recommend" :xs="7" :sm="7" :md="7" :lg="6" :xl="6">
        <h3 class="title">推荐文章</h3>
        <div class="singleRecommend" v-for="item of recommendList" :key="item.Id">
          <img
            :src="baseUrl + item.img"
            alt=""
          />
          <p>
            <nuxt-link :to="'/caseDetail/' + item.Id">{{item.title}}</nuxt-link>
          </p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Service from "@/utils/api";
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params }) {
    const caseDetail = await Service.normal({ op: 9, Id: params.id });
    const recommend = await Service.normal({ op: 28, page: 1, count: 5 });
    return {
      info: caseDetail,
      recommendList: recommend.lists,
    };
  },
  head() {
    return {
      title: this.info.title,
      meta: [
        {
          hid: this.info.title,
          name: this.info.title,
          content: this.info.title
        }
      ]
    };
  },
  data () {
    return {
      baseUrl: Service.baseUrl
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main.scss";
.newDetail {
  width: 100%;
  overflow-x: hidden;
  .mainBox {
    margin: 30px 0;
    .article {
      h1 {
        text-align: center;
      }
      .info {
        font-size: 14px;
        color: #666;
        margin: 15px 0;
        span {
          margin-right: 20px;
        }
      }
      .btns {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        div {
          transition: all 0.5s;
          height: 38px;
          width: 146px;
          border: 2px solid #e3e3e3;
          text-align: center;
          line-height: 35px;
          cursor: pointer;
          &:hover {
            color: #fff;
            background: $main-color;
            border-color: $main-color;
          }
        }
        span {
          margin: 0 10px;
        }
      }
    }
    .recommend {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        border-bottom: 1px solid #666;
        font-weight: bold;
        /* color: #666; */
        padding-bottom: 8px;
        width: 300px;
        margin-bottom: 15px;
      }
      .singleRecommend {
        height: 215px;
        width: 300px;
        background: #f3f4f5;
        margin-bottom: 15px;
        img {
          width: 100%;
          height: 178px;
        }
        p {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 8px 5px;
          box-sizing: border-box;
        }
        a {
          color: #555;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
