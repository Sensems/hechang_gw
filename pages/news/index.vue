<template>
    <div class="news">
        <a-carousel autoplay>
            <div class="swiperImg">
                <img src="https://www.topamb.com/uploadfiles/pictures/others/20180903161025_4339.jpg" alt="和英阿米巴">
            </div>
        </a-carousel>
        <a-row type="flex" justify="center" class="newsWrap" id="research">
            <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                <div class="newsBox">
                    <div class="newsLeft">
                        <a-carousel autoplay>
                            <div>
                                <img src="http://static.56qq.com/hcb/1606218850819/images/news/news/dynamic_2.jpg?v1" alt="和英阿米巴">
                            </div>
                            <div>
                                <img src="http://static.56qq.com/hcb/1606218850819/images/news/news/activity_5.jpg?v2" alt="和英阿米巴">
                            </div>
                        </a-carousel>
                    </div>
                    <div class="newsRight newsContent">
                        <div class="title">咨询研究</div>
                        <ul class="newThing">
                            <li>
                                <nuxt-link to="/">
                                    <span class="newsTitle">公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态</span>
                                    <span class="date">2020-12-22</span>
                                </nuxt-link>
                            </li>
                            <li v-for="item of 4" :key="item">
                                <nuxt-link to="/to">
                                    <span class="newsTitle">公司动态公司动态公司动态公司动态公司动态</span>
                                    <span class="date">2020-12-22</span>
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="paging">
                            <a-pagination 
                                v-model="currentPage1" 
                                :show-total="total => `共${total}条 ${Math.ceil(total/5)}页`"
                                :pageSize="5" 
                                show-less-items
                                :total="58" />
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
        <a-row type="flex" justify="center" class="newsWrap" id="news">
            <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                <div class="newsBox">
                    <div class="newsRight newsContent">
                        <div class="title">行业新闻</div>
                        <ul class="newThing">
                            <li>
                                <nuxt-link to="/">
                                    <span class="newsTitle">公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态</span>
                                    <span class="date">2020-12-22</span>
                                </nuxt-link>
                            </li>
                            <li v-for="item of 4" :key="item">
                                <nuxt-link to="/to">
                                    <span class="newsTitle">公司动态公司动态公司动态公司动态公司动态</span>
                                    <span class="date">2020-12-22</span>
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="paging">
                            <a-pagination 
                                v-model="currentPage2" 
                                :show-total="total => `共${total}条 ${Math.ceil(total/5)}页`"
                                :pageSize="5" 
                                show-less-items
                                :total="58" />
                        </div>
                    </div>
                    <div class="newsLeft">
                        <a-carousel autoplay>
                            <div>
                                <img src="http://static.56qq.com/hcb/1606218850819/images/news/news/dynamic_2.jpg?v1" alt="和英阿米巴">
                            </div>
                            <div>
                                <img src="http://static.56qq.com/hcb/1606218850819/images/news/news/activity_5.jpg?v2" alt="和英阿米巴">
                            </div>
                        </a-carousel>
                    </div>
                </div>
            </a-col>
        </a-row>
        <a-row type="flex" justify="center" class="newsWrap" id="dynamic">
            <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                <div class="newsBox">
                    <div class="newsLeft">
                        <a-carousel autoplay>
                            <div>
                                <img src="http://static.56qq.com/hcb/1606218850819/images/news/news/dynamic_2.jpg?v1" alt="和英阿米巴">
                            </div>
                            <div>
                                <img src="http://static.56qq.com/hcb/1606218850819/images/news/news/activity_5.jpg?v2" alt="和英阿米巴">
                            </div>
                        </a-carousel>
                    </div>
                    <div class="newsRight newsContent">
                        <div class="title">平台动态</div>
                        <ul class="newThing">
                            <li>
                                <nuxt-link to="/">
                                    <span class="newsTitle">公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态公司动态</span>
                                    <span class="date">2020-12-22</span>
                                </nuxt-link>
                            </li>
                            <li v-for="item of 4" :key="item">
                                <nuxt-link to="/to">
                                    <span class="newsTitle">公司动态公司动态公司动态公司动态公司动态</span>
                                    <span class="date">2020-12-22</span>
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="paging">
                            <a-pagination 
                                v-model="currentPage3" 
                                :show-total="total => `共${total}条 ${Math.ceil(total/5)}页`"
                                :pageSize="5" 
                                show-less-items
                                :total="58" />
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentPage1: 1,
                currentPage2: 1,
                currentPage3: 1,
            }
        },
        mounted(){
            if (window.location.hash) {
                this.goAnchor(window.location.hash)
            }
        },
        methods: {
            goAnchor(selector) {
                // 最好加个定时器给页面缓冲时间
                setTimeout(() => {
                    // 获取锚点元素
                    let anchor = this.$el.querySelector(selector)
                    anchor.scrollIntoView(true)
                }, 100)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/css/main.scss';
.news {
    .newsWrap {
        padding: 20px 0;
        background: #fff;
        &:nth-child(odd) {
            background: #f3f4f5;
        }
    }
    .newsBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .newsLeft,.newsRight {
            width: 48%;
            height: 340px;
            img {
                width: 100%;
                height: 340px;
            }
        }
        .newsContent {
            .title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
                padding-bottom: 6px;
                border-bottom: 1px solid $main-color;
            }
            .newThing {
                margin: 10px 0 15px;
                padding-left: 6px;
                li {
                    padding: 12px 0;
                    border-bottom: 1px dashed #3e3e3e;
                    font-size: 12px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    }
                    a {
                    color: #3e3e3e;
                    display: flex;
                    justify-content: space-between;
                    &:hover {
                        color: $main-color;
                        text-decoration: underline;
                    }
                    &:visited {
                        color: #939393;
                    }
                    .newsTitle {
                        display: inline-block;
                        width: 80%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .date {
                        display: inline-block;
                        width: 20%;
                        text-align: right;
                    }
                }
            }
            .paging {
                padding-left: 6px;
                padding-bottom: 15px;
                border-bottom: 1px solid #cacaca;
            }
        }
        @media screen and (max-width: 414px) {
            .newsLeft,.newsRight {
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>