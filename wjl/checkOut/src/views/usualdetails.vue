<template>
    <div>
       <commonHe></commonHe>
       <div class="rightbody">
           <!-- 上部详情： -->
           <div class="person" >
               <div class="photo"><img :src="detailslist.imagePath" alt=""></div>
               <div class="details">
                    <div class="top">
                       <div class="name"><strong>{{detailslist.userName}}</strong><span>普通推广员</span></div>
                    </div>
                    <div class="middle">
                        <div class="name">姓名：</div> <div class="namespan">{{detailslist.userName}}</div>
                        <div class="counts">累计推广笔数：</div> <div class="countsspan">{{detailslist.amount}}</div>
                        <div class="upper">上级推广员：</div> <div class="upperspan">{{detailslist.parentNickName}}</div>
                    </div>
                    <div class="bottom">
                        <div class="phone">手机号：</div><div class="phonespan">{{detailslist.phone}}</div> 
                        <div class="money">累计推广金额：</div><div class="moneyspan">￥{{detailslist.money}}</div> 
                        <div class="date">加入时间：</div><div class="datespan">{{detailslist.bindingTime}}</div> 
                    </div>
                </div>
           </div>
           <!-- 他的客户： -->
           <div class="clients">他的客户</div>
           <template>
               <!-- 绑定中的客户： -->
                <el-tabs v-model="activeName" type="card" class="select">
                    <el-tab-pane label="绑定中" name="first">
                        <div class="binding">
                            <div class="b-head">
                                <span>头像/昵称</span>
                                <span>最新绑定时间</span>
                                <span>剩余有效期(天)</span>
                            </div>
                            <div class="b-body" v-for="(item,index) in bindinglist" :key="index">
                                <div class="namephoto">
                                    <div class="touxiang"><img :src="item.imagePath" alt=""></div>
                                    <span>{{item.nickName}}</span>
                                </div>
                                <div class="newtime">{{item.bindingTime}}</div>
                                <div>{{item.period}}</div>
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

                    <!-- 解绑客户： -->

                    <el-tab-pane label="已解绑" name="second">
                        <div class="un-binding">
                            <div class="unb-head">
                                <span class="un-tx">头像/昵称</span>
                                <span class="un-time">解绑时间</span>
                                <span class="un-day">剩余有效期(天)</span>
                            </div>
                            <div class="unb-body" v-for="(item,index) in unbindinglist" :key="index">
                                <div class="un-namephoto">
                                    <div class="un-touxiang">
                                        <div class="un-txl"><div class="img"><img :src="item.imagePath" alt=""></div><span class="nc">{{item.nickName}}</span></div>
                                        <!-- <div class="un-txr"></div> -->
                                    </div>
                                    
                                </div>
                                <div class="un-newtime">{{item.untiedTime}}</div>
                                <div class="un-day">{{item.period}}</div>
                            </div>
                            <el-pagination
                                @size-change="handleSizeChange2"
                                @current-change="handleCurrentChange2"
                                :current-page="currentPage"
                                :page-sizes="[10, 20, 30, 100]"
                                :page-size="pageSize"
                                background
                                layout="prev, pager, next"
                                :total="total2"
                                class="fenye">
                            </el-pagination>    
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </template>
        </div>
    </div>
</template>
<script>
import commonHe from '../components/commonHe.vue'
// 查询api 查询详情
import {getDetails} from '../api/api.js'
    // 查询绑定：
import {getBindings} from '../api/api.js'
import {getUnBindings} from '../api/api.js'

export default {
    data() {
      return {
        activeName: 'first',
        // 基本信息列表：
        detailslist:[],
        // 绑定客户数组：
        bindinglist:[],
        // 已解绑客户数组：
        unbindinglist:[],
        // 用户id:
        userId:'',
        // 父Id：
        parentUserId:'',
        // 分页：
        currentPage:1,// 当前页码
        pageSize:5,// 每页大小
        total:5,
        total2:5
      };
    },
    components:{
        commonHe
    } ,
    methods:{
        handleSizeChange(val){
           console.log("长度改变:"+val)
       },
    //   绑定中翻页函数：
       handleCurrentChange(val){
           console.log("当前改变："+val)
           var bindingInfo={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : val
        	},
        	"promoterInfo" : {
        		"gener" : "1",
        		"bindingStatus" : "1",
                "parentUserId" :this.parentUserId,
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        getBindings(bindingInfo).then(data=>{
            this.tatal=data.data.total
            this.bindinglist=data.data.promoterInfoList;
            // console.log(this.bindinglist)
        })
       },


        handleSizeChange2(val){
           console.log("长度改变:"+val)
        },

        // 已解绑翻页函数：
     
        handleCurrentChange2(val){
        //    console.log("当前改变："+val)
           var unbindingInfo={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : val
        	},
        	"promoterInfo" : {
        		"gener" : "1",
        		"bindingStatus" : "0",
                "parentUserId" : this.parentUserId,
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        getBindings(unbindingInfo).then(data=>{
            this.unbindinglist=data.data.promoterInfoList
            this.total2=data.data.total
            // console.log("已解绑",this.unbindinglist)
          })
       }
    },
    beforeCreate(){
        

    },
    created(){
    // 基本信息查询：
        this.userId=localStorage.getItem('userId');
        // console.log(this.userId)
        var listParams={"promoterInfo" : {"userId":this.userId,"orgId":localStorage.getItem('orgId')}}
        // 909579800690073600
        getDetails(listParams).then(data=>{
            console.log("24234222",data.data.promoterInfo.parentUserId)
            // console.log(data)
            this.parentUserId=data.data.promoterInfo.parentUserId
            this.detailslist=data.data.promoterInfo
            console.log("打印",this.parentUserId)


                    // 绑定中传参：
        var bindingInfo={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : 1
        	},
        	"promoterInfo" : {
        		"gener" : "1",
        		"bindingStatus" : "1",
                "parentUserId" :this.parentUserId,
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        

        getBindings(bindingInfo).then(data=>{
            console.log("绑定",data)
            this.bindinglist=data.data.promoterInfoList;
            this.total=data.data.total
            // console.log(data)
        })


        // 已解绑传参：
        var unbindingInfo={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : 1
        	},
        	"promoterInfo" : {
        		"gener" : "1",
        		"bindingStatus" : "0",
                "parentUserId" : this.parentUserId,
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        
        getBindings(unbindingInfo).then(data=>{
            console.log("已解绑",data)
            // this.unbindinglist=data.data.promoterInfoList
            this.total2=data.data.total
            // console.log("已解绑",this.unbindinglist)
            })
        })
    }
}
</script>
<style lang="scss" scoped>
.rightbody{
    width: 82%;
    // height: 900px;
    // border:1px solid;
    position: absolute;
    top:110px;
    left:18%;
    overflow: hidden;
    // 上部详情:
    .person{
        width: 95%;
        background:#ededed;
        overflow: hidden;
        .photo{
            width: 56px;
            height: 56px;
            background: #fff;
            border-radius: 50%;
            margin-top:12px;
            margin-left:39px;
            float:left;
            overflow: hidden;
            img{
                width: 56px;
                height: 56px; 
            }
        }
    .details{
        overflow: hidden;
        width: 90%;
        height: 120px;
        // background-color: red;
        float:left;
        margin-top:29px;
        .top{
            margin-left:13px;
            overflow: hidden;
            div{
                font-size:16px;
                float:left;
            }
            span{
                display: block;
                width: 74px;
                height: 20px;
                border:1px solid rgba(0,118,255,1);
                border-radius: 7px;
                float:right;
                text-align: center;
                font-size:12px;
                line-height: 20px;
                color:rgba(0,118,255,1);
                margin-left:9px;
            }
        }
        .middle{
            width: 100%;
            height: 50px;
            line-height: 50px;
            margin-left:15px;
            margin-top:2px;
            div{
                float:left;
                font-size:14px;
            }
            span{
                    color:#212121;
                }
                .name{
                    display: block;
                    width: 80px;
                    float:left;
                    color:#666666;
                }
                .namespan{
                    width: 110px;
                    color:#212121;
                }
                .counts{
                    display: block;
                    width: 110px;
                    float:left;
                    color:#666666;
                    margin-left:90px;
                }
                .countsspan{
                    width: 105px;
                    height: 50px;
                }
                
                .upper{
                    display: block;
                    width: 100px;
                    float:left;
                    color:#666666;
                    margin-left:88px;
                }
                .upperspan{
                    width: 120px;
                    height: 50px;
                }
        }
        .bottom{
            overflow: hidden;
            width: 100%;
            height: 80px;
            margin-left:15px;
            div{
                float:left;
                font-size:14px;
            }
          
            .phone{
                display: block;
                width: 80px;
                float:left;
                color:#666666; 
            }
            .phonespan{
                display: block;
                width: 110px;
                height: 80px;
                color:#212121;
            }
            .money{
                display: block;
                width: 110px;
                float:left;
                color:#666666;
                margin-left:90px;
            }
            .moneyspan{
                width: 105px;
                height: 80px;
                // background-color: pink;
            }
            .date{
                display: block;
                width: 100px;
                float:left;
                color:#666666;
                margin-left:90px;
            }

        }
    }
}

// 他的客户：
    .clients{
        width: 80px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        font-size:16px;
        margin-top:19px;
        border-left:4px solid #0076FF;
        margin-bottom: 21px;
        // overflow: auto;
    }
    // 绑定的客户：
    .select{
        width: 95%;
    }
    .binding{
        // width: 70%;
        color:#212121;
        .b-head{
            background-color: #ededed;
            width: 91%;
            height: 32px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:42px;
            line-height: 32px;
            border-bottom:1px solid #e0e0e0;
        }
        .b-body{
            display: flex;
            width: 91%;
            height: 64px;
            padding-left:40px;
            padding-right:40px;
            line-height: 64px;
            font-size:14px;
            color:#040B1C;
            border-bottom:1px solid #e0e0e0;
            border-left:1px solid #e0e0e0;
            border-right:1px solid #e0e0e0;
            div{
                float:left;
            }
            .namephoto{
                position: relative;
                .touxiang{
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-top:10px;
                    img{
                        width: 44px;
                        height: 44px;
                    }
                }
                span{
                    display: block;
                    width: 300px;
                    position: relative;
                    top:0px;
                    left:12px;
                    // z-index: 5;
                }
                
            }
            .newtime{
                    width: 300px;
                    margin:0 12% 0 8%;
                    // background-color: pink;
                }
            
        }
    }

        .un-binding{
        width: 100%;
        color:#212121;
        .unb-head{
            background-color: #ededed;
            width: 91%;
            height: 32px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:42px;
            line-height: 32px;
            border-bottom:1px solid #e0e0e0;
            .un-time{
                width: 250px;
                // background-color: pink;
            }
            .un-day{
                width: 200px;
                // background-color: pink;
            }
        }
        .un-tx{
            // background-color: pink;
            width: 250px;
        }
        .unb-body{
            // background-color: #ededed;
            // display: flex;
            width: 91%;
            height: 64px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:41px;
            line-height: 64px;
            font-size:14px;
            color:#040B1C;
            border-bottom:1px solid #e0e0e0;
            border-left:1px solid #e0e0e0;
            border-right:1px solid #e0e0e0;
            div{
                width: 245px;
                float:left;
            }
        
            .un-namephoto{
                // margin-right:15.5%;                                                                         
                position: relative;
                width: 250px;
                // background-color: pink;
                .un-touxiang{
                    
                    .img{
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    overflow: hidden;
                    }
                    
                    margin-top:10px;
                    img{
                        width: 44px;
                        height: 44px;
                    }
                }
                span{
                    display: block;
                    width: 300px;
                    position: relative;
                    top:0px;
                    left:12px;
                    // z-index: 5;
                }
                .nc{
                    margin-top:-10px;
                }
                
            }
            .un-newtime{
                width: 250px;
            }
            .un-day{
                width: 200px;
            }
            
        }
    }
    .fenye{
        margin-top:30px;
        text-align:right;
        margin-right:30px;
    }

}
</style>




