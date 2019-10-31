import axios from './axios.js';

// axios.defaults.headers['accessToken'] = 'a8d065c493724ac0ada5657f03ce41e6'

    // a8d065c493724ac0ada5657f03ce41e6
// 测试环境地址：
    // http://47.92.25.25:8020
// 真实环境地址：
    // http://47.92.159.136:8020

     


// let base = 'http://47.92.159.136:8020/marketing/promoterInfo';
// let base1= 'http://47.92.159.136:8020/system/user';
// let base2='http://47.92.159.136:8020/marketing/promotingProduct';
// let base3="http://47.92.159.136:8020/marketing/promoterSet";

// 测试：
let base = 'http://47.92.25.25:8020/marketing/promoterInfo';
let base1= 'http://47.92.25.25:8020/system/user';
let base2='http://47.92.25.25:8020/marketing/promotingProduct';
let base3="http://47.92.25.25:8020/marketing/promoterSet";

// 新登陆接口测试：
let newBase='http://47.92.25.25:8011/'

// 新登陆接口真实 http://47.92.159.136:8011

// let newBase='http://47.92.159.136:8011/'


export const newLogin = params => {
    return axios.post(`${newBase}login/org/admin`,
        params,
    ).then(res => res.data);
};


// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

// 普通、高级推广员根据日期手机号查询：
    // 高级推广员下级查询：
export const getPromoters = params => {
    return axios.post(`${base}/list`,
        params,
    ).then(res => res.data);
};
// 普通、高级推广员根据userID进入详情页：
export const getDetails = params => {
    return axios.post(`${base}/details`,
        params,
    ).then(res => res.data);
};
// 普通、高级推广员绑定详情查询：
export const getBindings = params => {
    return axios.post(`${base}/bindings`,
        params,
    ).then(res => res.data);
};
// 高级推广员审批 通过：
export const pass = params => {
    return axios.post(`${base}/approved`,
        params,
    ).then(res => res.data);
};
    // 未通过：
export const fail = params => {
    return axios.post(`${base}/notPass`,
        params,
    ).then(res => res.data);
};
// 商品列表查询：
export const goodsList = params => {
    return axios.post(`${base2}/list`,
        params,
    ).then(res => res.data);
};

// 商品下架：
export const goodsObtained = params => {
  return axios.post(`${base2}/obtained`,
    params,
  ).then(res => res.data);
};

// 商品上架：
export const goodsOnSale = params => {
  return axios.post(`${base2}/onSale`,
    params,
  ).then(res => res.data);
};

// 高级推广员清退：
export const delPromoter = params => {
    return axios.post(`${base}/lock`,
        params,
    ).then(res => res.data);
};

// 比例设置保存:
export const persenSet = params => {
    return axios.post(`${base2}/save`,
        params,
    ).then(res => res.data);
};
// 比例设置更新:
export const persenUpdate = params => {
    return axios.post(`${base2}/update`,
        params,
    ).then(res => res.data);
};

// 推广记录：
export const extendRecord = params => {
    return axios.post(`${base}/promotingRecord`,
        params,
    ).then(res => res.data);
};

// 业绩统计：
export const statistics = params => {
    return axios.post(`${base}/statistics`,
        params,
    ).then(res => res.data);
};

// 绑定查询：
export const bindings = params => {
    return axios.post(`${base}/bindingList`,
        params,
    ).then(res => res.data);
};

// 设置页面初始化查询：
export const loadSearch = params => {
    return axios.post(`${base3}/info`,
        params,
    ).then(res => res.data);
};

// 设置页面更新设置：
export const updateSettings = params => {
    return axios.post(`${base3}/update`,
        params,
    ).then(res => res.data);
};
// 设置页面新增设置：
export const newSettings = params => {
    return axios.post(`${base3}/save`,
        params,
    ).then(res => res.data);
};
// 登陆：
export const login = params => {
    return axios.post(`${base1}/login`,
        params,
    ).then(res => res.data);
};
// 退出登陆：
export const logout = params => {
    return axios.post(`${base1}/logout`,
        params,
    ).then(res => res.data);
};
// 医院设置   基本信息：
export const hospitalSettings = params => {
    return axios.post(`${newBase}org`,
        params,
    ).then(res => res.data);
};

//图片上传图片上传图片上传图片上传图片上传图片上传               图片上传：
export const updateImages = params => {
    return axios.post(`${newBase}upload/res`,
        params,
    ).then(res => res.data);
};

// 医院设置 基本信息确认：
export const infoSure = params => {
    return axios.post(`${newBase}org/update`,
        params,
    ).then(res => res.data);
};

// 科室配置：
export const orgDept = params => {
    return axios.post(`${newBase}orgDept`,
        params,
    ).then(res => res.data);
};
// 科室配置新增科室：
export const addDept = params => {
    return axios.post(`${newBase}orgDept/add`,
        params,
    ).then(res => res.data);
};
// 特色科室展示：
export const tsDept = params => {
    return axios.post(`${newBase}dept`,
        params,
    ).then(res => res.data);
};

// 新建特科室：
export const addTsDept = params => {
    return axios.post(`${newBase}dept/add`,
        params,
    ).then(res => res.data);
};

// 患者库：
export const patientBank = params => {
    return axios.post(`${newBase}patient/list`,
        params,
    ).then(res => res.data);
};
// 患者库详情：
export const patientBasic = params => {
    return axios.post(`${newBase}patient/basic`,
        params,
    ).then(res => res.data);
};


// 医院自媒体：media
export const mediaTuwen = params => {
    return axios.post(`${newBase}news/list`,
        params,
    ).then(res => res.data);
};
// 医院自媒体控制显隐：
export const hide = params => {
    return axios.post(`${newBase}news/hide/update`,
        params,
    ).then(res => res.data);
};
// 自媒体新建图文栏目：
export const tps = params => {
    return axios.post(`${newBase}news/tps`,
        params,
    ).then(res => res.data);
};
export const status = params => {
    return axios.post(`${newBase}news/source`,
        params,
    ).then(res => res.data);
};












