<template>
  <div id="index-continer">
      <div class="left">
          <div class="img">
              <img src="" alt="">
          </div>
          <div class="universe"><strong>{{orgName}}</strong></div>
          <!-- <div class="survey">概况</div> -->
          <div class="seal">营销中心</div>
          <div class="sc" @click="gomall">健康商城</div>
          <div class="sc" @click="orders">订单中心</div>
          <div class="sc" @click="finance">财务中心</div>
      </div>
      <div class="right">
          <div class="top">
              <div class="gener">
                  <strong>概况</strong> 
              </div>
              <div class="rig">
                  <div><strong>退出登录</strong></div>
                  <div><strong>操作指南</strong></div>
                  <div><strong>访问医院</strong></div>
              </div>
          </div>
          <div class="rigbody">
                <template>
                    <div class="select" >
                        <el-tabs v-model="activeName" id="table-bar">
                            <el-tab-pane class="ziti" label="普通推广员" name="first" >
                                <div class="usual">
                                        <div class="block">
                                            <el-date-picker
                                              v-model="value1"
                                              type="daterange"
                                              range-separator="至"
                                              start-placeholder="开始日期"
                                              value-format="yyyy-MM-dd"
                                              end-placeholder="结束日期">
                                            </el-date-picker>
                                        </div>
                                    <div class="sealname">
                                        <el-input v-model="input" placeholder="请输入推广员手机号"></el-input>
                                    </div>
                                    <el-row class="search">
                                        <el-button type="primary" class="btn" @click="consoletest">搜索</el-button>
                                    </el-row>
                                    <div class="person">
                                        <div class="person-tr">
                                            <span class="tr-touxiang">头像/昵称</span>
                                            <span>上级推广员</span>
                                            <span>累计推广笔数</span>
                                            <span>累计成交金额(元)</span>
                                            <span>加入时间</span>
                                            <span class="caozuo">操作</span>
                                        </div>
                                        <div class="create-tr" v-for="(item,index) in searchlist" :key="index">
                                            <div class="touxiang"><div class="tx-left"><img :src="item.imagePath" alt=""></div><div class="tx-rig"><span>{{item.nickName}}</span></div></div>
                                            
                                            <span class="upname">{{item.parentNickName}}</span>
                                            <span>{{item.amount}}</span>
                                            <span>{{item.money}}</span>
                                            <span>{{item.bindingTime}}</span>
                                            <span class="details" @click="godetails(item.userId)">详情</span>
                                        </div>
                                    </div>
                                    <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :page-sizes="[10, 20, 30, 100]"
                                        :page-size="pageSize"
                                        :current-page="currentPage"
                                        background
                                        layout="prev, pager, next"
                                        :total="total"
                                        class="fenye">
                                    </el-pagination>   
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="高级推广员" name="second">
                                <senior></senior>
                            </el-tab-pane>
                            <el-tab-pane label="商品列表" name="third">
                                <goodslist></goodslist>
                            </el-tab-pane>
                            <el-tab-pane label="推广记录" name="fourth">
                                <tuiguangjilu></tuiguangjilu>
                            </el-tab-pane>
                            <el-tab-pane label="业绩统计" name="fifth">
                                <yeji></yeji>
                            </el-tab-pane>
                            <el-tab-pane label="绑定查询" name="sixth">
                                <bindings></bindings>
                            </el-tab-pane>
                            <el-tab-pane label="设置" name="seventh">
                                <shezhi></shezhi>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </template>
          </div>
      </div>
  </div>
</template>

<script>
  import senior from '../components/seniorPromoter.vue' 
//   商品列表：
  import goodslist from '../components/goodslist.vue' 
//   推广记录：
  import tuiguangjilu from '../components/tuiguangjilu.vue'
//   设置:
import shezhi from '../components/shezhi'
// 业绩统计：
import yeji from '../components/yeji'
// 绑定查询：
import bindings from '../components/bindings'
// 查询api:
import {getPromoters} from "../api/api.js"

  export default {
    data() {
      return {
        //   选项卡：
        activeName: 'first',

    //  日期选择框的值：
        value1: '',

        // input框：
        input: '',
        // 查询结果：
        searchlist:[],
        // 分页：
        currentPage:1,// 当前页码
        pageSize:5,// 每页大小
        total:5,
        orgName:localStorage.getItem("orgName")
      };
    },
    components:{
        senior,
        goodslist,
        tuiguangjilu,
        shezhi,
        yeji,
        bindings
    },
    methods: {
      godetails(id){
            let userId=id;
            localStorage.setItem('userId', userId);
            this.$router.push({path: 'usualdetails'})
            // alert(userId)
      },
      gomall(){
        //   alert("1111")
          this.$router.push("/mall")
      },
      orders(){
        //   alert("1111")
          this.$router.push("/orders")
      },
      finance(){
          this.$router.push("/finance")
      },
      consoletest(){
            var listParams={
                pageParam:{
                    pageSize:5,
                    pageNum:1
                    },
                promoterInfo:{
                    gener:1,
                    parentUserId:null,
                    orgId : localStorage.getItem("orgId")
                    },
                startTime:this.value1[0],
                endTime:this.value1[1],
                search:this.input
                }
                var that=this;
             getPromoters(listParams).then(data=>{
            //   console.log(data)
                // var that=this;
                that.currentPage=1
                // this.currentPage=1;
                that.searchlist=data.data.promoterInfoList;
                that.total=data.data.total
                // console.log(this.total)
        })
    },
    handleSizeChange(val){
        console.log("长度改变:"+val)
    },
    // 当前改变----当前页码改变之后，触发这个函数
    handleCurrentChange(val){                       
        // console.log("当前改变："+val)
        var listParams={
                pageParam:{
                    pageSize:5,
                    pageNum:val
                    },
                promoterInfo:{
                    gener:1,
                    parentUserId:null,
                    orgId : localStorage.getItem("orgId")
                    },
                startTime:this.value1[0],
                endTime:this.value1[1],
                search:this.input
                }
          getPromoters(listParams).then(data=>{
                var that=this;
                that.searchlist=data.data.promoterInfoList;
                this.total=data.data.total
            //   console.log(that.searchlist)
        })
    },

    },
    created(){
        var listParams={
                pageParam:{
                    pageSize:5,
                    pageNum:1
                    },
                promoterInfo:{
                    gener:1,
                    parentUserId:null,
                    orgId : localStorage.getItem("orgId")
                    },
                startTime:this.value1[0],
                endTime:this.value1[1],
                search:this.input
                }
        getPromoters(listParams).then(data=>{
            console.log("1111",data)
            this.total=data.data.total
            this.searchlist=data.data.promoterInfoList;
        })
        // console.log("orgName",this.orgName)
    }
};
</script>
<style lang="scss" scoped>

#index-continer{
    width: 100%;
    height: 1500px;
    background-color: #F4F4F4;
    display: flex;
    overflow: hidden;
    color:#212121;
    // 左边菜单栏：
    .left{
        order: -1;
        height: 1500px;
        z-index: 10;
        width: 16%;
        height: 1500px;
        background-color: #333B4C;
        // float:left;
        .img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: #ededed;
            margin:auto;
            margin-top:23px;
        }
        .universe{
            width: 100%;
            height: 19px;
            font-size:14px;
            color:#fff;
            text-align: center;
            // margin-left:42px;
            margin-top:10px;
        }
        .survey{
            width: 89%;
            height: 52px;
            background:rgba(0,0,0,0.2);
            font-size:16px;
            color:#fff;
            margin-top:20px;
            padding-left: 11%;
            line-height: 52px;
            background-image: url(../assets/images/1-gaikuo.png);
            background-repeat: no-repeat;
            background-size:24px 24px;
            background-position: 16px 14px;
        }
        .seal{
            width: 80%;
            height: 52px;
            color:#fff;
            padding-left:20%;
            font-size:16px;
            line-height: 52px;
            background-image: url(../assets/images/8-seal.png);
            background-repeat: no-repeat;
            background-size:24px 24px;
            background-position: 16px 15px;
            margin-top:15px;
            cursor:pointer;
            background-color:rgba(0,0,0,0.2);
        }
        .sc{
            cursor:pointer;
            width: 80%;
            height: 52px;
            color:#fff;
            padding-left:20%;
            font-size:16px;
            line-height: 52px;
            background-image: url(../assets/images/3-shangcheng.png);
            background-repeat: no-repeat;
            background-size:24px 24px;
            background-position: 16px 15px;
        }
        
    }

    // 右边内容栏：
    .right{
        overflow: hidden;
        width: 84%;
        height: 1500px;
        float:left;
    // 上面蓝条：
        .top{
            width: 100%;
            height: 4.53%;
            background-color: #0076FF;
           
            .gener{
                color:#fff;
                font-size:16px;
                line-height: 68px;
                margin-left:60px;
                float:left;
            }
            .rig{
                float:right;
                div{
                    float:right;
                    width: 100px;
                    height: 68px;
                    color:#fff;
                    font-size:14px;
                    text-align: center;
                    line-height: 68px;
                }
            }
        }
        .rigbody{
            width: 97%;
            height: 1500px;
            background-color: #fff;
            margin-top:20px;
            margin-left:20px;
            .select{
                margin-left:20px;
                // 普通员工内容：
                .usual{
                    position: relative;
                    .block{
                        // float:left;
                    }
                    .sealname{
                        // float:left;
                        width: 240px;
                        margin-top:-40px;
                        margin-left:360px;
                    }
                    .search{
                        position: absolute;
                        top:2px;
                        left:610px;
                        .btn{
                            width: 80px;
                            height: 36px;
                            font-size:16px;
                            line-height: 12px;
                        }
                    }
                    // 搜索表格：
                    .person{
                        width: 99%;
                        // height: 500px;
                        // border:1px solid ;
                        text-align: left;
                        margin-top:20px;
                        // 表格固定栏：
                        .person-tr{
                            display: flex;
                            justify-content: space-between;
                            width: 98%;
                            height: 40px;
                            background-color: #EDEDED;
                            font-size:13px;
                            padding-left:5px;
                            span{
                                display: block;
                                float:left;
                                width: 170px;
                                line-height: 40px;
                                color:#212121;
                                margin-left:5px;
                            }
                            .tr-touxiang{
                                width: 215px;
                            }
                            .caozuo{
                                width: 90px;
                            }
                        }
                        // 生成栏：
                        .create-tr{
                            height: 60px;
                            display: flex;
                            justify-content: space-between;
                            width: 98%;
                            // height: 40px;
                            border-bottom: 1px solid #e0e0e0;
                            border-left:1px solid #e0e0e0;
                            border-right:1px solid #e0e0e0;
                            font-size:13px;
                            padding-left:3px;
                            // background-color: #EDEDED;
                            span{
                                display: block;
                                float:left;
                                width: 170px;
                                height: 60px;
                                line-height: 60px;
                                color:#212121;
                                margin-left:5px;
                                text-align: left;
                            }
                            .touxiang{
                                width: 215px;
                                height: 45px;
                                // background-color: red;
                                margin-top:7px;
                                margin-left:3px;
                                margin-right:2px;
                                // border-radius: 50%;
                                float:left;
                                .tx-left{
                                    width: 45px;
                                    height: 45px;
                                    float:left;
                                    border-radius: 50%;
                                    overflow: hidden;
                                }
                                .tx-rig{
                                    float:left;
                                    width: 130px;
                                    height: 45px;
                                    line-height: 45px;
                                    margin-top:-7px;
                                }
                                img{
                                    width: 45px;
                                    height: 45px; 
                                }
                            }
                            .upname{
                                // margin-left:-4%;
                            }
                            .details{
                                width: 90px;
                                color:#0076FF;
                                // margin-left:20px;
                            }
                            .details:hover{
                                cursor:pointer
                            }
                            
                        }
                    }
                    .fenye{
                        margin-top:30px;
                        text-align:right;
                        margin-right:30px;
                    }
                }

                // 高级推广员：
                .senior-seals{
                    width: 100%;
                    .topselect{
                        font-size:14px;
                        .first-choice{
                            width: 100px;
                            height: 30px;
                            border: 1px solid #E0E0E0;
                            float:left;
                            text-align: center;
                            line-height: 30px;
                        }
                        .second-choice{
                            width: 100px;
                            height: 30px;
                            border: 1px solid #E0E0E0;
                            float:left;
                            text-align: center;
                            line-height: 30px;
                            margin-left:5px;
                        }
                    }
                }
            }
        }
    }
    
}
</style>
<style>
#table-bar .el-tabs__item{
    height: 50px;
    line-height: 50px;
    font-size:16px;
    font-weight: bold;
}
body{
    overflow:hidden;
}
</style>



