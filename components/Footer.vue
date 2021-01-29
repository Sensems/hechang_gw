<template>
  <footer>
    <div class="content">
      <div class="menuList">
        <div class="singleMenu" v-for="(item, index) of navList" :key="index">
          <div class="bigTitle">
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </div>
          <ul class="childMenu">
            <li v-for="(_item, _index) of item.children" :key="_index">
              <router-link :to="_item.url" v-if="item.title !== '友情链接'">{{ _item.title }}</router-link>
              <a :href="_item.url" v-else>{{ _item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="imgWrap">
        <img :src="require('../assets/image/miniQr.jpg')" alt="" />
        <p>广州和畅网络科技有限公司</p>
      </div>
    </div>
    <div class="archivalInfo">
      <div class="left">
        <p>
          版权所有©2018 和畅网络科技有限公司
          <a href="https://www.baidu.com">黔ICP备16000322号</a>
          <a href="https://www.baidu.com">
            <img
              src="http://static.56qq.com/hcb/1606218850819/images/record.png"
            />
            广公网安备 XXXXXXXXXXXXXXXX号
          </a>
        </p>
        <p>总部地址：广东省广州市天河区棠下 全国客服电话：90000</p>
      </div>
      <div class="right">
		  <p>法律声明 | 隐私保护 | 联系我们</p>
	  </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "关于我们",
          url: "/about",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: [
            {
              title: "平台介绍",
              url: "/about#introduce"
            },
            {
              title: "平台文化",
              url: "/about#culture"
            },
            {
              title: "平台架构",
              url: "/about#framework"
            },
            {
              title: "咨询联络",
              url: "/about#contact"
            }
          ]
        },
        {
          title: "咨询动态",
          url: "/news",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_1960.jpg",
          checked: false,
          children: [
            {
              title: "咨询研究",
              url: "/news#research"
            },
            {
              title: "行业新闻",
              url: "/news#news"
            },
            {
              title: "平台动态",
              url: "/news#dynamic"
            }
          ]
        },
        {
          title: "咨询师之家",
          url: "/counselor",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: [
            {
              title: "咨询师",
              url: "/counselor#counselor"
            },
            {
              title: "咨询团队",
              url: "/counselor#team"
            },
            {
              title: "咨询公司",
              url: "/counselor#company"
            },
            {
              title: "赋能提升",
              url: "/counselor#promote"
            }
          ]
        },
        {
          title: "咨询工具",
          url: "/instrument",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        {
          title: "产品服务",
          url: "/product",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        {
          title: "客户案例",
          url: "/case",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        {
          title: "智慧分享",
          url: "/wisdomShare",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        {
          title: "加入平台",
          url: "",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        }
        // {
        //   title: "联系我们",
        //   url: "/contact",
        //   imgUrl:
        //     "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
        //   checked: false,
        //   children: []
        // }
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.content {
  display: flex;
  justify-content: space-between;
  padding: 30px 10%;
  background: #4a4b57;
  .menuList {
    display: flex;
    .singleMenu {
      margin-right: 30px;
      .bigTitle {
        /* width: ; */
        font-size: 16px;
        line-height: 40px;
        a {
          color: #fff;
        }
      }
      .childMenu {
        li {
          line-height: 30px;
          a {
            color: #a1a2a6;
            font-size: 12px;
          }
        }
      }
    }
  }
  .imgWrap {
    width: 150px;
    img {
      width: 150px;
      margin-bottom: 4px;
      border-radius: 4px;
    }
    p {
      font-size: 12px;
      color: #fff;
      text-align: right;
      margin: 0;
    }
  }
  /* @media screen and (max-width: 414px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    .menuList {
      text-align: center;
      flex-wrap: wrap;
      .singleMenu {
        width: 33.3%;
        margin-right: 0 !important;
      }
    }
  } */
}
.archivalInfo {
  display: flex;
  justify-content: space-between;
  background-color: $main-color;
  color: #333;
  font-size: 12px;
  padding: 6px 50px;
  p {
	margin: 0;
	line-height: 20px;
  }
  a {
    color: #333;
  }
	@media screen and (max-width: 414px) {
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
	}
}
</style>
