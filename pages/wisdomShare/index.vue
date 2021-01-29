<template>
  <div class="case">
    <a-carousel autoplay>
      <div class="swiperImg" v-for="(item, index) of carouselList" :key="index">
        <img :src="baseUrl + item.Img" alt="和英阿米巴" />
      </div>
    </a-carousel>
    <a-row type="flex" justify="center" class="caseBox">
      <a-col :xs="22" :sm="22" :md="21" :lg="21" :xl="20">
        <div class="severedTitle">智慧分享</div>
        <div class="caseList">
          <div class="singleCase" v-for="item of shareList" :key="item.id">
            <img
              src="https://www.topamb.com/uploadfiles/pictures/news/20200807105713_8700.jpg"
              alt=""
            />
            <div class="content">
              <h3>
                <nuxt-link to="">{{ item.title }}</nuxt-link>
              </h3>
              <p>{{ item.Introduction }}</p>
              <!-- <nuxt-link :to="'/caseDetail/' + item.Id" class="detailBtn">查看详情</nuxt-link> -->
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Service from "@/utils/api";
export default {
  async asyncData({ params }) {
    const share = await Service.normal({ op: 14 });
    const carousel = await Service.normal({ op: 24 });
    return {
      shareList: share.lists,
      carouselList: carousel.lists
    };
  },
  head() {
    return {
      title: "和畅-智慧分享",
      meta: [
        {
          hid: "和畅-智慧分享",
          name: "和畅-智慧分享",
          content: "和畅-智慧分享"
        }
      ]
    };
  },
  data() {
    return {
      baseUrl: Service.baseUrl
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/main.scss";
.case {
  .caseBox {
    padding: 30px 0;
    .caseList {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      justify-content: center;
      .singleCase {
        width: 400px;
        height: 470px;
        transition: all 0.5s;
        margin: 0 10px 20px;
        img {
          width: 400px;
          height: 238px;
        }
        .content {
          padding: 15px;
          height: 232px;
          box-sizing: border-box;
          background-color: #f3f4f5;
          transition: all 0.5s;
          h3 {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
          }
          a {
            color: #333;
          }
          p {
            height: 100px;
          }
          .detailBtn {
            display: inline-block;
            transition: all 0.5s;
            height: 38px;
            width: 146px;
            border: 2px solid #e3e3e3;
            text-align: center;
            line-height: 35px;
            cursor: pointer;
          }
        }
        &:hover {
          box-shadow: 0 2px 6px 3px #eaeaeb;
          .content {
            background-color: #fff;
          }
          .detailBtn {
            color: #fff;
            background: $main-color;
            border-color: $main-color;
          }
        }
      }
    }
  }
}
</style>
