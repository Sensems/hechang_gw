import request from "./request";

export default {
    baseUrl: 'http://172.16.0.240:8056',
    normal: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //首页数字数据
    homeNumData: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //首页轮播图
    homeSlideshow: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //首页轮播图
    homeNews: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //关于我们介绍
    aboutUs: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //新闻
    newsList: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //新闻详情
    newsDetail: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
    //咨询师
    consultant: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
}
