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
          版权所有©2018 贵阳货车帮科技有限公司
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
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          children: [
            {
              title: "公司介绍",
              url: "/"
            },
            {
              title: "企业文化",
              url: "/"
            },
            {
              title: "社会价值",
              url: "/"
            }
          ]
        },
        {
          title: "咨询动态",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_1960.jpg",
          children: [
            {
              title: "公司动态",
              url: "/"
            },
            {
              title: "和英新闻",
              url: "/"
            },
            {
              title: "行业新闻",
              url: "/"
            }
          ]
        },
        {
          title: "产品服务",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          children: []
        },
        {
          title: "客户案例",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          children: []
        },
        {
          title: "咨询师加入",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          children: []
        },
        {
          title: "项目方加入",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          children: []
        },
        {
          title: "联系我们",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          children: []
        },
        // {
        //   title: "友情链接",
        //   url: "",
        //   imgUrl:
        //     "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
        //   children: [
        //     {
        //       title: '和英咨询',
        //       url: "https://www.topamb.com/",
        //     }
        //   ]
        // }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.content {
  display: flex;
  justify-content: space-between;
  padding: 30px 170px;
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
  @media screen and (max-width: 414px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    .menuList {
      /* justify-content: center; */
      text-align: center;
      flex-wrap: wrap;
      .singleMenu {
        width: 33.3%;
        margin-right: 0 !important;
      }
    }
  }
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
