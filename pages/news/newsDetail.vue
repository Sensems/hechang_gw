<template>
    <div class="newDetail">
        <a-carousel autoplay>
            <div class="swiperImg">
                <img src="https://www.topamb.com/uploadfiles/pictures/others/20180903161025_4339.jpg" alt="和英阿米巴">
            </div>
        </a-carousel>
        <a-row type="flex" justify="center" class="mainBox" :gutter="20">
            <a-col class="article" :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
                <h1>中盐常州化工 : 聚焦高质量，打造优秀化工企业+幸福常化</h1>
                <div class="info">
                    <span>浏览：1254</span>
                    <span>发布时间：2020-12-23</span>
                </div>
                <div class="content">
                    中盐常州化工股份有限公司(以下简称“中盐常化”)是中国盐业集团有限公司(原中国盐业总公司)直属企业，以生产氯碱及其衍生产品为主的综合性化工企业，是国家重点氯碱企业之一，也是江苏省百家重点企业之一，连续多年被评为江苏省、常州市优秀企业、常州市工业十强企业、建行AAA级信用企业，拥有自营进出口权。
                </div>
                <div class="btns">
                    <div class="previous"><a-icon type="arrow-left" /><span>上一篇</span></div>
                    <div class="next"><span>下一篇</span><a-icon type="arrow-right" /></div>
                </div>
            </a-col>
            <a-col class="recommend" :xs="22" :sm="22" :md="4" :lg="4" :xl="4">
                <h3 class="title">推荐文章</h3>
                <div class="singleRecommend" v-for="item of 5" :key="item">
                    <img src="https://www.topamb.com/uploadfiles/pictures/news/20201216142109_2001.jpg" alt="">
                    <p><nuxt-link to="/news/newsDetail">中盐常州化工 : 聚焦高质量，打造优秀化工企业+幸福常化</nuxt-link></p>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../../assets/css/main.scss';
.newDetail {
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
                span  {
                    margin-right: 20px;
                }
            }
            .btns {
                display: flex;
                justify-content: space-around;
                margin-top: 30px;
                div {
                    transition: all .5s;
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
                width: 100%;
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