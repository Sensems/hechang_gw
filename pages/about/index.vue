<template>
    <div class="about">
        <a-carousel autoplay>
            <div class="swiperImg">
                <img src="https://www.topamb.com/uploadfiles/pictures/others/20190110095423_7025.jpg" alt="和英阿米巴">
            </div>
        </a-carousel>
        <article class="article" id="introduce">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>{{aboutList[0].ChineseName}}</h1>
                            <h3>{{aboutList[0].EnglishName}}</h3>
                        </div>
                        <div class="richBox" v-html="aboutList[0].editor"></div>
                    </div>
                </a-col>
            </a-row>
        </article>
        <article class="article" id="culture">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>{{aboutList[1].ChineseName}}</h1>
                            <h3>{{aboutList[1].EnglishName}}</h3>
                        </div>
                        <div class="richBox" v-html="aboutList[1].editor"></div>
                    </div>
                </a-col>
            </a-row>
        </article>
        <article class="article" id="framework">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>{{aboutList[2].ChineseName}}</h1>
                            <h3>{{aboutList[2].EnglishName}}</h3>
                        </div>
                        <div class="richBox" v-html="aboutList[2].editor"></div>
                    </div>
                </a-col>
            </a-row>
        </article>
        <article class="article" id="contact">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>{{aboutList[3].ChineseName}}</h1>
                            <h3>{{aboutList[3].EnglishName}}</h3>
                        </div>
                        <div class="richBox" v-html="aboutList[3].editor"></div>
                    </div>
                </a-col>
            </a-row>
        </article>
    </div>
</template>

<script>
    import Service from '@/utils/api';
    export default {
        async asyncData ({ params }) {
            const about =  await Service.aboutUs({op: 2});
            return {
                aboutList: about.lists
            }
        },
        head() {
            return {
                    title: '和畅-关于我们',
                    meta: [
                    {
                        hid: '和畅-关于我们',
                        name: '和畅-关于我们',
                        content: '和畅-关于我们'
                    }
                ]   
            }
        },
        data () {
            return {}
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
.about {
    .article {
        background: #fff;
        padding: 30px 0;
        &:nth-child(odd) {
            background: #f3f4f5;
        }
    }
    .introduceBox {
        width: 1200px;
        .titlebox {
            position: relative;
            padding-left: 10px;
            margin-bottom: 5px;
            &::before {
                position: absolute;
                content: '';
                display: inline-block;
                height: 50px;
                width: 2px;
                background: #5f5f5f;
                left: 0;
                top: 6px;
            }
            h1 {
                font-weight: bold;
                font-size: 25px;  
            }
            h1, h3 {
                margin-bottom: 0;
                color: #5f5f5f;
            }
        }
        img {
            width: 100%;
            margin-bottom: 10px;
        }
    }
}
.richBox {
    img {
        width: 100% !important;
    }
}
</style>