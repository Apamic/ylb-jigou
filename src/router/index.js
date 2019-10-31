import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import marketing from '@/views/yxzx'
// 公共头部组件：
// import commonhead from '@/components/commonhead.vue'
// 普通推广员详情页：
import usualdetails from '../views/usualdetails.vue'
// 高级推广员详情页：
import updetails from '../views/updetails.vue'
// 健康商城：
import mall from '../views/mall.vue'
// 订单中心：
import orders from '../views/orders'
// 财务中心：
import finance from '../views/finance'
// 登陆：
import login from '../views/login'
// 科室管理：
import department from '../views/iframes/keshi'
// 员工管理
import staff from '../views/iframes/staff'
import ygglxinj from '../views/iframes/ygglxinj'
//员工角色管理
import ygglYgjsgl from '../views/iframes/ygglYgjsgl'

// 医院设置
import yysz from '../views/yysz'
// 患者库：
import patientbank from '../views/huanzheguanli/patientBank'
// 患者分配：
import patientallocation from '../views/huanzheguanli/patientAllocation'
// 服务包商品：
import servicegoods from '../views/iframes/servicegoods'
// 界面风格：
import style from '../views/jmfg'
// 新的微页面：
import newpaper from '../views/jigouguanli/newPaper'

// import yxzx from '../views/yxzx'

//知识付费:
// import knowledgePay from '../views/knowledgePay'
// 健康商城：
// import jksc from '../views/jksc'
// 科室配置：
import deploy from '../views/iframes/keshi'
// 科室配置--人员管理界面：
import keshiRygl from '../views/iframes/keshiRygl'
// 特色科室界面：
import tsks from '../views/iframes/tsks'
// 导入科室界面：
import drks from '../views/iframes/drks'
// 创建小组界面：
import cjxz from '../views/iframes/cjxz'
import tjzgly from '../views/iframes/tjzgly'
// 患者详情界面：
import huanzxq from '../views/huanzheguanli/huanzxq'
// 患者导入界面：
import huanzdr from '../views/huanzheguanli/huanzdr'
// 患者导入下一步：
import huanzdr1 from '../views/huanzheguanli/huanzdr1'
// 内容审核界面：
import nrsh from '../views/yiyuanzmt/nrsh'
// 内容管理界面：
import nrgl from '../views/yiyuanzmt/nrgl'
//内容管理界面 下的创作图文：
import chuangtw from '../views/yiyuanzmt/chuangtw'
//内容管理界面 下的创作图集：
import chuangtw1 from '../views/yiyuanzmt/chuangtw1'
//内容管理界面 下的查看视频：
import videoShow from '../views/yiyuanzmt/chuangsp'
// 视频编辑:
import editVideo from '../views/yiyuanzmt/videobj'

// 创作视频：
import videoEdit from '../views/yiyuanzmt/videoEdit'

import nrglTjfz from '../views/yiyuanzmt/nrglTjfz'
// 群发管理界面：
import qfgl from '../views/yiyuanzmt/qfgl'
// 群发界面：
import qunfa from '../views/yiyuanzmt/qunfa'
// 应用管理界面：
import yygl from '../views/iframes/yygl'
// 应用管理 应用设置界面：
import yyglsz from '../views/iframes/yyglsz'
// 应用管理 诊后报道设置界面：
import yyglzhbd from '../views/iframes/yyglzhbd'
// 应用管理 护士上门设置界面：
import yyglhssm from '../views/iframes/yyglhssm'
// 应用管理 转诊（上转）设置界面：
import yyglzhuanzs from '../views/iframes/yyglzhuanzs'
// 应用管理 转诊（下转）设置界面：
import yyglzhuanzx from '../views/iframes/yyglzhuanzx'
// 应用管理 知识付费设置界面：
import yyglzsffsz from '../views/iframes/yyglzsffsz'
// 员工分组 人员管理
import peopleManagement from '../views/iframes/peopleManagement'

//应用管理 健康小屋
import healthHut from '../views/iframes/healthHut.vue'

//数据统计 数据概况
import profileData from '../views/dataStatistics/profileData.vue'

// 医院自媒体查看页面：
import mediaShow from '../views/yiyuanzmt/mediaShow'
// 图文编辑页面：
import edit from '../views/yiyuanzmt/edit'
// 文章分组内容管理页面：
import contentManage from '../views/yiyuanzmt/nrglTjfz'
// 医院自媒体图集编辑页面：
import atlasEdit from '../views/yiyuanzmt/atlasEdit'
// // 图集查看页：
import atlasShow from '../views/yiyuanzmt/atlasShow'
//实物商品
// import PhysicalCommodity from '../views/physicalCommodity/PhysicalCommodity.vue'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  },
    {
      path: '/marketing',
      name: 'marketing',
      component: marketing
    },
    {
      path: '/usualdetails',
      name: 'usualdetails',
      component: usualdetails
    },
    {
      path: '/updetails',
      name: 'updetails',
      component: updetails
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // {
    //   path: '/knowledgePay',
    //   name: 'knowledgePay',
    //   component: knowledgePay
    // },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    },
    {
      path: '/deploy',
      name: 'deploy',
      component: deploy
    },
    {
      path: '/keshiRygl',
      name: 'keshiRygl',
      component: keshiRygl
    },
    {
      path: '/peopleManagement',
      name: 'peopleManagement',
      component: peopleManagement
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff
    },
    {
      path: '/ygglxinj',
      name: 'ygglxinj',
      component: ygglxinj
    },
    {
      path: '/ygglYgjsgl',
      name: 'ygglYgjsgl',
      component: ygglYgjsgl
    },
    {
      path: '/yysz',
      name: 'yysz',
      component: yysz
    },
    {
      path: '/patientbank',
      name: 'patientbank',
      component: patientbank
    },
    {
      path: '/patientallocation',
      name: 'patientallocation',
      component: patientallocation
    },
    {
      path: '/servicegoods',
      name: 'servicegoods',
      component: servicegoods
    }
    // 界面风格：
    ,
    {
      path: '/style',
      name: 'style',
      component: style
    }
    ,
    {
      path: '/style/newpaper',
      name: 'newpaper',
      component: newpaper
    },
    {
      path: '/tsks',
      name: 'tsks',
      component: tsks
    },
    {
      path: '/drks',
      name: 'drks',
      component: drks
    },
    {
      path: '/cjxz',
      name: 'cjxz',
      component: cjxz
    }
    ,
    {
      path: '/tjzgly',
      name: 'tjzgly',
      component: tjzgly
    },
    {
      path: '/huanzxq',
      name: 'huanzxq',
      component: huanzxq
    },
    {
      path: '/huanzdr',
      name: 'huanzdr',
      component: huanzdr
    },
    {
      path: '/huanzdr1',
      name: 'huanzdr1',
      component: huanzdr1
    },
    {
      path: '/nrsh',
      name: 'nrsh',
      component: nrsh
    },
    {
      path: '/nrgl',
      name: 'nrgl',
      component: nrgl
    },
    {
      path: '/chuangtw',
      name: 'chuangtw',
      component: chuangtw
    }
    ,
    {
      path: '/chuangtw1',
      name: 'chuangtw1',
      component: chuangtw1
    },
    {
      path: '/videoShow',
      name: 'videoShow',
      component: videoShow
    },
    {
      path: '/nrglTjfz',
      name: 'nrglTjfz',
      component: nrglTjfz
    }
    ,
    {
      path: '/qfgl',
      name: 'qfgl',
      component: qfgl
    },
    {
      path: '/qunfa',
      name: 'qunfa',
      component: qunfa
    },
    {
      path: '/yygl',
      name: 'yygl',
      component: yygl
    },
    {
      path: '/yyglsz',
      name: 'yyglsz',
      component: yyglsz
    },
    {
      path: '/yyglzhbd',
      name: 'yyglzhbd',
      component: yyglzhbd
    }
    ,
    {
      path: '/yyglhssm',
      name: 'yyglhssm',
      component: yyglhssm
    },
    {
      path: '/yyglzhuanzs',
      name: 'yyglzhuanzs',
      component: yyglzhuanzs
    },
    {
      path: '/yyglzhuanzx',
      name: 'yyglzhuanzx',
      component: yyglzhuanzx
    },
    {
      path: '/yyglzsffsz',
      name: 'yyglzsffsz',
      component: yyglzsffsz
    },
    {
      path: '/mediaShow',
      name: 'mediaShow',
      component: mediaShow
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    // 文章分组内容管理：


    {
      path: '/contentManage',
      name: 'contentManage',
      component: contentManage
    },
    // 视频创作界面：

    {
      path: '/videoEdit',
      name: 'videoEdit',
      component: videoEdit
    },
    {
      path: '/editVideo',
      name: 'editVideo',
      component: editVideo
    },
    {
      path: '/atlasEdit',
      name: 'atlasEdit',
      component: atlasEdit
    },{
      path: '/atlasShow',
      name: 'atlasShow',
      component: atlasShow
    },
    {
      path: '/healthHut',
      name: 'healthHut',
      component: healthHut
    },
    {
      path: '/profileData',
      name: 'profileData',
      component: profileData
    },
    {
      path: '/PhysicalCommodity',
      name: 'PhysicalCommodity',
      component: () => import('../views/physicalCommodity/PhysicalCommodity')  //实物商品
    },
    {
      path: '/PhysicalCommodityGrouping',
      name: 'PhysicalCommodityGrouping',
      component: () => import('../views/physicalCommodity/PhysicalCommodityGrouping')  //实物商品分组
    },
    {
      path: '/physicalCommodityApplication',
      name: 'physicalCommodityApplication',
      component: () => import('../views/physicalCommodity/physicalCommodityApplication')  //实物商品应用
    },
    {
      path: '/cityDistribution',
      name: 'cityDistribution',
      component: () => import('../views/physicalCommodity/cityDistribution.vue')  //同城配送
    }
  ]
})
