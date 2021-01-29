<template>
  <div class="counselor">
    <a-carousel autoplay>
      <div class="swiperImg" v-for="(item, index) of carouselList" :key="index">
        <img :src="baseUrl + item.Img" alt="和英阿米巴" />
      </div>
    </a-carousel>

    <article class="article" id="counselor">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
          <div class="contentBox">
            <div class="titlebox">
              <h1>咨询师</h1>
              <h3>Counselor</h3>
            </div>
            <div class="peopleBox">
              <div
                class="singlePeople"
                v-for="item of consultantList"
                :key="item.Id"
              >
                <nuxt-link :to="'/counselorDetail/' + item.Id">
                  <img :src="baseUrl + item.img" alt="" />
                  <div class="info">
                    <p class="name">{{ item.userName }}</p>
                    <p class="title">{{ item.level }}</p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </article>

    <article class="article" id="team">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
          <div class="contentBox">
            <div class="titlebox">
              <h1>咨询团队</h1>
              <h3>Consulting Team</h3>
            </div>
            <div class="consultTeam">
              <template v-for="item of teamList">
                <div
                  class="singleConsult imgLeft"
                  :key="item.Id"
                  v-if="item % 2 !== 0"
                >
                  <img :src="baseUrl + item.img" alt="" />
                  <div class="info">
                    <h1>{{ item.userName }}</h1>
                    <p>
                      {{ item.Introduction }}
                    </p>
                  </div>
                </div>
                <div class="singleConsult imgRight" :key="item.Id" v-else>
                  <div class="info">
                    <h1>{{ item.userName }}</h1>
                    <p>
                      {{ item.Introduction }}
                    </p>
                  </div>
                  <img :src="baseUrl + item.img" alt="" />
                </div>
              </template>
            </div>
          </div>
        </a-col>
      </a-row>
    </article>

    <article class="article" id="company">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
          <div class="contentBox">
            <div class="titlebox">
              <h1>咨询公司</h1>
              <h3>Consulting Company</h3>
            </div>
            <div class="consultTeam">
              <template v-for="item of companyList">
                <div
                  class="singleConsult imgLeft"
                  :key="item.Id"
                  v-if="item % 2 !== 0"
                >
                  <img :src="baseUrl + item.img" alt="" />
                  <div class="info">
                    <h1>{{ item.userName }}</h1>
                    <p>
                      {{ item.Introduction }}
                    </p>
                  </div>
                </div>
                <div class="singleConsult imgRight" :key="item.Id" v-else>
                  <div class="info">
                    <h1>{{ item.userName }}</h1>
                    <p>
                      {{ item.Introduction }}
                    </p>
                  </div>
                  <img :src="baseUrl + item.img" alt="" />
                </div>
              </template>
            </div>
          </div>
        </a-col>
      </a-row>
    </article>

    <article class="article" id="promote">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
          <div class="contentBox">
            <div class="titlebox">
              <h1>赋能提升</h1>
              <h3>Energize Promote</h3>
            </div>
            <div class="consultTeam">
              <template v-for="item of promoteList">
                <div
                  class="singleConsult imgLeft"
                  :key="item.Id"
                  v-if="item % 2 !== 0"
                >
                  <img :src="baseUrl + item.img" alt="" />
                  <div class="info">
                    <h1>{{ item.userName }}</h1>
                    <p>
                      {{ item.Introduction }}
                    </p>
                  </div>
                </div>
                <div class="singleConsult imgRight" :key="item.Id" v-else>
                  <div class="info">
                    <h1>{{ item.userName }}</h1>
                    <p>
                      {{ item.Introduction }}
                    </p>
                  </div>
                  <img :src="baseUrl + item.img" alt="" />
                </div>
              </template>
            </div>
          </div>
        </a-col>
      </a-row>
    </article>
  </div>
</template>

<script>
import Service from "@/utils/api";
export default {
  async asyncData({ params }) {
    const consultan = await Service.normal({ op: 10, page: 1, count: 99 });
    const team = await Service.normal({ op: 11, page: 1, count: 99 });
    const company = await Service.normal({ op: 12, page: 1, count: 99 });
    const promote = await Service.normal({ op: 13, page: 1, count: 99 });
    const carousel = await Service.normal({ op: 20 });

    return {
      consultantList: consultan.lists,
      teamList: team.lists,
      companyList: company.lists,
      promoteList: promote.lists,
      carouselList: carousel.lists
    };
  },
  head() {
    return {
      title: "和畅-咨询师之家",
      meta: [
        {
          hid: "和畅-咨询师之家",
          name: "和畅-咨询师之家",
          content: "和畅-咨询师之家"
        }
      ]
    };
  },
  data() {
    return {
      baseUrl: Service.baseUrl
    };
  },
  mounted() {
    if (window.location.hash) {
      this.goAnchor(window.location.hash);
    }
  },
  methods: {
    toPeopleDetail() {
      this.$router.push("/counselor/counselorDetail");
    },
    goAnchor(selector) {
      // 最好加个定时器给页面缓冲时间
      setTimeout(() => {
        // 获取锚点元素
        let anchor = this.$el.querySelector(selector);
        anchor.scrollIntoView(true);
      }, 100);
    }
  }
};
</script>

<style lang="scss" scoped>
.counselor {
  .article {
    background: #fff;
    padding: 30px 0;
    &:nth-child(odd) {
      background: #f3f4f5;
    }
  }
  .peopleBox {
    padding: 10px;
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
    .singlePeople {
      width: 184px;
      background: #f3f4f5;
      transition: all 0.3s;
      margin: 0 81px 40px 0;
      float: left;
      a {
        color: #333333;
      }
      img {
        width: 100%;
      }
      .info {
        padding: 6px;
        text-align: center;
        p {
          margin-bottom: 0;
        }
        .name {
          font-size: 20px;
          font-weight: bold;
        }
        .title {
          font-size: 16px;
        }
      }
      &:hover {
        box-shadow: 0 5px 10px -5px #999;
        transform: translateY(-3px);
        cursor: pointer;
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  .singleConsult {
    display: flex;
    margin: 20px 0;
    border-bottom: 1px solid #eee;
    h1 {
      font-weight: bold;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
  }

  .imgLeft {
    img {
      margin-right: 20px;
    }
  }

  .imgRight {
    img {
      margin-left: 20px;
    }
    h1 {
      text-align: right;
    }
  }
}
</style>
