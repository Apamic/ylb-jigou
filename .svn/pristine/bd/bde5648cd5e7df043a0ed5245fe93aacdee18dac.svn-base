import axios from './axios.js';

// -------------------------------测试---------------------------------
let serviceIpUrl = 'http://47.92.25.25';
let serviceDomainUrl = 'http://47.92.25.25';
// -------------------------------测试---------------------------------

// -------------------------------正式---------------------------------
// let serviceIpUrl = 'http://47.92.159.136';
// let serviceDomainUrl = 'http://org.sinoylb.com';
// -------------------------------正式---------------------------------

let bBase = serviceIpUrl + ':8020/'
let base = bBase + 'marketing/promoterInfo';
let base1 = bBase + 'system/user';
let base2 = bBase + 'marketing/promotingProduct';
let base3 = bBase + "marketing/promoterSet";

export const addUrl = serviceIpUrl + ':8011/upload/res';
export const microUrl = bBase

export const mallUrl = serviceDomainUrl + '/mall/page/medical/packages.html';
export const orderUrl = serviceIpUrl + '/finance/page/finance/order_medic_svc.shtml';
export const financeUrl = serviceIpUrl + '/finance/page/finance/bill_org.shtml';
export const knowledgePayUrl = serviceIpUrl + '/finance/page/knowledgePay/graphic.shtml?cosType=COSTXT';

// 新登陆接口测试：
export const newBase = serviceIpUrl + ':8011/'

//分组列表 知识付费,资讯师,健康测评等
export const psychologyUrl = serviceIpUrl + ':8088/'

//机构二维码（测试环境用正式环境接口）
export const yumUrl = 'http://47.92.159.136:8088/'

export const jvAliGetVideoInfo = params => {
    return axios.post(`${psychologyUrl}sk/jvAliGetVideoInfo.mo`,
      params,
    ).then(res => res.data);
}

export const jvAliGetPlayInfo = params => {
    return axios.post(`${psychologyUrl}sk/jvAliGetPlayInfo.mo`,
      params,
    ).then(res => res.data);
}

export const jvAliCreateUploadVideo = params => {
    return axios.post(`${psychologyUrl}sk/jvAliCreateUploadVideo.mo`,
      params,
    ).then(res => res.data);
}

export const jvAliRefreshUploadVideo = params => {
    return axios.post(`${psychologyUrl}sk/jvAliRefreshUploadVideo.mo`,
      params,
    ).then(res => res.data);
}

//分组列表 知识付费,资讯师,健康测评
export const jvCosGroupQuery = params => {
    return axios.post(`${psychologyUrl}sk/jvCosGroupQuery.mo?from=js`,
      params,
    ).then(res => res.data);
}

export const newLogin = params => {
    return axios.post(`${newBase}login/org/admin`,
        params,
    ).then(res => res.data);
};


// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };


//医院业务统计
export const hospitalServiceStatistics = params => {
  return axios.post(`${bBase}statistics/hospital/hospitalServiceStatistics`,
    params,
  ).then(res => res.data)
}

//医院业务数据图
export const hospitalSpecialPackageList = params => {
  return axios.post(`${bBase}statistics/hospital/hospitalSpecialPackageList`,
    params,
  ).then(res => res.data)
}

//健康小屋预警统计
export const warningStatistics = params => {
  return axios.post(`${bBase}healthHouse/house/warningStatistics`,
    params,
  ).then(res => res.data);
};

//健康小屋预警明细列表
export const warningList = params => {
  return axios.post(`${bBase}healthHouse/house/warningList`,
    params,
  ).then(res => res.data);
};

//图片上传地址
export const updateUrl = `${bBase}system/file/uploadImage`;

//处理详情
export const warningDetails = params => {
  return axios.post(`${bBase}healthHouse/warningDetails/queryById`,
    params,
  ).then(res => res.data);
};

//预警信息处理
export const infoHandle = params => {
  return axios.post(`${bBase}healthHouse/warningDetails/infoHandle`,
    params,
  ).then(res => res.data);
};

//分组列表
export const getPackagesProductGroupDecorationList = params => {
  return axios.post(`${bBase}medical/packagesProductGroup/decorationList`,
    params,
  ).then(res => res.data);
};

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
// 自媒体操作按钮撤回和下线：
export const reCall = params => {
    return axios.post(`${newBase}news/status/update`,
        params,
    ).then(res => res.data);
};

// 自媒体操作删除页面：
export const newsDelete = params => {
    return axios.post(`${newBase}news/delete`,
        params,
    ).then(res => res.data);
};
// 新建文章：

export const newsArticelAdd = params => {
    return axios.post(`${newBase}/news/add`,
        params,
    ).then(res => res.data);
};
// 自媒体图文编辑确认修改：
export const newsArticelUpdate = params => {
    return axios.post(`${newBase}news/update`,
        params,
    ).then(res => res.data);
};

//内容审核
export const contentStatus = params => {
  return axios.post(`${newBase}news/status/update`,
    params,
  ).then(res => res.data);
};

export const newsDetail = params => {
    return axios.post(`${newBase}news/detail`,
        params,
    ).then(res => res.data);
};

// 文章分组：
export const newsClassifies = params => {
    return axios.post(`${newBase}news/classifies`,
        params,
    ).then(res => res.data);
};
// 文章分组按钮操作：
// 删除：
export const newsClassifiesDelete = params => {
    return axios.post(`${newBase}news/classify/delete`,
        params,
    ).then(res => res.data);
};
// 添加：
export const newsClassifiesAdd = params => {
    return axios.post(`${newBase}news/classify/add`,
        params,
    ).then(res => res.data);
};
// 编辑
export const newsClassifiesUpdate = params => {
    return axios.post(`${newBase}news/classify/update`,
        params,
    ).then(res => res.data);
};
// 分组内文章列表：
export const newsClassifiesHas= params => {
    return axios.post(`${newBase}news/classify/news/has`,
        params,
    ).then(res => res.data);
};
// 分组内待添加文章列表：

export const newsClassifiesAll= params => {
    return axios.post(`${newBase}news/classify/news/all`,
        params,
    ).then(res => res.data);
};
// 移除分组：

export const newsClassifiesRemove= params => {
    return axios.post(`${newBase}news/classify/news/delete`,
        params,
    ).then(res => res.data);
};
// 确认添加文章：

export const prenewsClassifiesAdd= params => {
    return axios.post(`${newBase}news/classify/news/add`,
        params,
    ).then(res => res.data);
};
// 排序：
export const prenewsClassifiesSort= params => {
    return axios.post(`${newBase}news/classify/news/sort`,
        params,
    ).then(res => res.data);
};

//机构二维码
export const orgCode= params => {
  return axios.post(`${yumUrl}sk/jvWxpayOrgQcode.mo`,
    params,
  ).then(res => res.data);
};
// 医院自媒体创建图文文章分组：
export const articleClassifies= params => {
    return axios.post(`${newBase}news/classifies`,
        params,
    ).then(res => res.data);
};
// 医院自媒体创建图文文章封面类型：
export const coverClassifies= params => {
    return axios.post(`${newBase}news/style`,
        params,
    ).then(res => res.data);
};
// base64图片上传接口：
export const coverUpload= params => {
    return axios.post(`${newBase}upload/res/multi`,
        params,
    ).then(res => res.data);
};
// 医院自媒体内容管理点击预览：
export const previewHtml= params => {
    return axios.post(`${newBase}news/preview`,
        params,
    ).then(res => res.data);
};
// 医院自媒体点击分享：
export const newsShare= params => {
    return axios.post(`${newBase}news/share/web`,
        params,
    ).then(res => res.data);
};
// 二维码下载：
export const codeDownload=`${newBase}news/share/code/download?newsId=`;

// 登陆获取验证码：
export const getCaptcha=()=>{
    return axios.get(`${newBase}captcha`).then(res => {
        console.log(res)
        return res.data
    });
};
// 医院自媒体分组分享
export const groupShare= params => {
  return axios.post(`${newBase}news/classify/share`,
    params,
  ).then(res => res.data);
};
// 二维码下载：
export const groupCodeDownload=`${newBase}news/classify/code/download?classifyId=`;








