<template>
    <div class="contact">
        <a-carousel autoplay>
            <div class="swiperImg">
                <img src="https://www.topamb.com/uploadfiles/pictures/others/20190114104759_6493.jpg" alt="和英阿米巴">
            </div>
        </a-carousel>

        <a-row type="flex" justify="center" class="content">
            <a-col :xs="22" :sm="22" :md="21" :lg="21" :xl="20">
                <div class="severedTitle">联系我们</div>
                <div class="info">
                    <h2>广州和畅网络科技有限公司</h2>
                    <p>公司地址: 中国 / 广东省广州天河区融科商务园3楼</p>
                    <p>联系电话: 4008-093-7288</p>
                    <p>邮箱: hr@hechang.com</p>
                </div>
                <div class="mapbox">
                    <baidu-map class="bdwindow" :dragging="dragging" :center="center" :zoom="zoom" style="height:500px" :scroll-wheel-zoom='scroll'>
                        <bm-marker :position="center" :dragging="true">
                            <bm-info-window :show="true">和畅网络科技有限公司</bm-info-window>
                        </bm-marker>
                    </baidu-map>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                jump_path:"",
                center: {lng: 113.385851, lat: 23.127686},
                zoom: 17,  //缩放级别
                title:"标题",
                contents: '地址：具体地址信息',  //标签内容
                show: true,  //显示标签
                scroll:true,  //地图缩放
                dragging:true,  //地图拖拽
            }
        }
    }
</script>

<style lang="scss" scoped>
.contact {
    .content {
        padding: 30px 0;
        h2 {
            font-weight: bold;
        }
        .info {
            margin-top: 20px;
        }
    }
    
}
</style>