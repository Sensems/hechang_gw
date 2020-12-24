<template>
    <div class="case">
        <a-carousel autoplay>
            <div class="swiperImg">
                <img src="https://www.topamb.com/uploadfiles/pictures/others/20190114103041_3056.jpg" alt="和英阿米巴">
            </div>
        </a-carousel>
        <a-row type="flex" justify="center" class="caseBox">
            <a-col :xs="22" :sm="22" :md="21" :lg="21" :xl="20">
                <div class="severedTitle">客户案例</div>
                <div class="caseList">
                    <div class="singleCase" v-for="item of 10" :key="item">
                        <img src="https://www.topamb.com/uploadfiles/pictures/news/20200807105713_8700.jpg" alt="">
                        <div class="content">
                            <h3>
                                <nuxt-link to="/news/newsDetail">为降本增效、培养经营人才蓄力!成都禾润世家找到了和英阿米巴</nuxt-link>
                            </h3>
                            <p>2020年7月上旬，成都禾润世家家居携手和英吹响合作的号角，正式启动阿米巴咨询项目。成都禾润世家家居有限公司(以下简称“禾润世家")</p> 
                            <nuxt-link to="/news/newsDetail" class="detailBtn">查看详情</nuxt-link>
                        </div>
                    </div>
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
                transition: all .5s;
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
                    transition: all .5s;
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
                        transition: all .5s;
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