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
                            <h1>平台介绍</h1>
                            <h3>Company Introduction</h3>
                        </div>
                        <img src="http://static.56qq.com/hcb/1606218850819/images/about/company.jpg" alt="">
                        <div class="content">公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</div>
                    </div>
                </a-col>
            </a-row>
        </article>
        <article class="article" id="culture">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>平台文化</h1>
                            <h3>Company Introduction</h3>
                        </div>
                        <img src="http://static.56qq.com/hcb/1606218850819/images/about/company.jpg" alt="">
                        <div class="content">公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</div>
                    </div>
                </a-col>
            </a-row>
        </article>
        <article class="article" id="framework">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>平台架构</h1>
                            <h3>Company Introduction</h3>
                        </div>
                        <img src="http://static.56qq.com/hcb/1606218850819/images/about/company.jpg" alt="">
                        <div class="content">公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</div>
                    </div>
                </a-col>
            </a-row>
        </article>
        <article class="article" id="contact">
            <a-row type="flex" justify="center">
                <a-col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
                    <div class="introduceBox">
                        <div class="titlebox">
                            <h1>咨询联络</h1>
                            <h3>Company Introduction</h3>
                        </div>
                        <img src="http://static.56qq.com/hcb/1606218850819/images/about/company.jpg" alt="">
                        <div class="content">公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</div>
                    </div>
                </a-col>
            </a-row>
        </article>
    </div>
</template>

<script>
    export default {
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
</style>