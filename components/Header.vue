<template>
  <header>
    <div class="content">
      <img
        src="https://upload-file-input.obs.cn-south-1.myhuaweicloud.com/18b580a95de45706b6bf4d2457a4306.png"
        alt=""
      />
    </div>
    <!-- <a-affix :offset-top="0"> -->
      <nav>
        <ul class="menu">
          <li
            v-for="(item, index) of navList"
            :key="index"
            class="singleMenu"
            :class="item.checked ? 'active' : ''"
            @mouseenter="menuEnter(index, $event)"
            @click="menuClike(index)"
          >
            <nuxt-link :to="item.url">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- <nav class="menu_phone">
        <ul class="menu">
          <li
            v-for="(item, index) of navList"
            :key="index"
            class="singleMenu"
            :class="item.checked ? 'active' : ''"
            @click="menuClike(index)"
          >
            <nuxt-link :to="item.url">
              {{ item.title }}
            </nuxt-link>
            <ul class="childMenu">
              <li v-for="(_item, _index) of item.children" :key="_index">
                <nuxt-link :to="_item.url">
                  {{ _item.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav> -->
    <!-- </a-affix> -->
    <div
      class="floatChildMenu"
      :style="{
        left: floatMenuLeft + 'px',
        top: (floatMenuTop + 55) + 'px',
        height: showFloatMenu ? '216px' : 0,
      }"
      @mouseleave="menuOut"
    >
      <div class="insideBox" style="margin: 8px 8px 8px 0">
        <ul class="childMenu">
        <li v-for="(item, index) of childMenu.menuList" @click="menuClike(childMenu.parentsIndex)" :key="index" >
          <nuxt-link :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <div>
        <img :src="childMenu.imgUrl" alt="" />
      </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showFloatMenu: false,
      floatMenuLeft: 0,
      floatMenuTop: 0,
      navList: [
        {
          title: "首页",
          url: "/",
          children: [],
          checked: true,
        },
        {
          title: "关于我们",
          url: "/about",
          imgUrl:"https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
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
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: [
            {
              title: "咨询师",
              url: "/"
            },
            {
              title: "咨询团队",
              url: "/"
            },
            {
              title: "咨询公司",
              url: "/"
            },
            {
              title: "赋能提示",
              url: "/"
            },
          ]
        },
        {
          title: "咨询工具",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        {
          title: "产品服务",
          url: "/",
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
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        {
          title: "加入平台",
          url: "/",
          imgUrl:
            "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
          checked: false,
          children: []
        },
        // {
        //   title: "联系我们",
        //   url: "/contact",
        //   imgUrl:
        //     "https://www.topamb.com/uploadfiles/pictures/product/20180201180909_3220.jpg",
        //   checked: false,
        //   children: []
        // }
      ],
      childMenu: {
        parentsIndex: 0,
        menuList: [],
        imgUrl: ""
      },
    };
  },
  methods: {
    menuEnter(index, e) {
      if (this.navList[index].children.length > 0) {
        this.childMenu.parentsIndex = index;
        this.childMenu.menuList = this.navList[index].children;
        this.childMenu.imgUrl = this.navList[index].imgUrl;
        this.floatMenuLeft = e.target.offsetLeft;
        this.floatMenuTop = e.target.offsetTop;
        this.showFloatMenu = true;
      } else {
        this.showFloatMenu = false;
      }
    },
    menuOut () {
      this.showFloatMenu = false;
    },
    menuClike (i) {
      this.navList.forEach((item, index) => {
        item.checked = false;
        if(index === i) {
          item.checked = true;
        }
      })
      this.showFloatMenu = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.content {
  height: 80px;
  background: $main-color;
  padding: 0 50px;
  > img {
    height: 80px;
    /* margin-top: 10px; */
  }
}
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #f1f1f1;
  li {
    width: 130px;
    line-height: 55px;
    height: 55px;
    text-align: center;
    margin-right:4px;
    a {
      display: inline-block;
      color: #4c4c4c;
      font-size: 18px;
      width: 100%;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: #4a4b57;
      a {
        color: #fff;
      }
    }
    &.active {
      background-color: #4a4b57;
      a {
        color: #fff;
      }
    }
  }
}
.floatChildMenu {
  position: fixed;
  top: 135px;
  /* padding: 8px 8px 8px 0; */
  background: #fff;
  transition: height 0.1s;
  overflow: hidden;
  z-index: 999;
  .insideBox {
    margin: 8px 8px 8px 0;
    display: flex;
  }
  .childMenu {
    width: 150px;
    padding-top: 10px;
    li {
      height: 40px;
      line-height: 40px;
      width: 100%;
      padding-left: 20px;
      box-sizing: border-box;
      a {
        display: inline-block;
        color: #4c4c4c;
        width: 100%;
      }
      &:hover {
        background-color: #4a4b57;
        a {
          color: #fff;
        }
      }
    }
  }
  img {
    display: block;
    width: 300px;
  }
}
.menu_phone {

}
</style>
