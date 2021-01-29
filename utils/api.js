import request from "./request";

export default {
    baseUrl: 'http://hcgw.consultantlikeyzx.com',
    // baseUrl: 'http://172.16.0.240:8056',
    normal: (params) => {
        return request.get("/data/wxapp.ashx", params);
    },
}
