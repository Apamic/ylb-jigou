<template>
<div class="allbox">
    <!-- 绑定中的客户： -->
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="绑定中" name="first">
            <div class="binding">
                <div class="b-head">
                    <span>头像/昵称</span>
                    <span>最新绑定时间</span>
                    <span>剩余有效期(天)</span> 
                </div>
                <div class="b-body" v-for="(item,index) in list" :key="index">      
                    <div class="namephoto">
                        <div class="touxiang"><img :src="item.imagePath" alt=""></div>
                        <span>{{item.nickName}}</span>
                    </div>
                    <div class="newtime">{{item.bindingTime}}</div>
                    <div>{{item.period}}</div>
                </div>
                <el-pagination
                    @size-change="handleSizeChange1"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 100]"
                    :page-size="pageSize"
                    background
                    layout="prev, pager, next"
                    :total="total1"
                    class="fenye">
                </el-pagination> 
            </div>   
        </el-tab-pane>
        <el-tab-pane label="已解绑" name="second">
            <div class="un-binding">
                <div class="unb-head">
                    <span class="tx">头像/昵称</span>
                    <span class="bd">绑定时间</span>
                    <span class="period">解绑时间</span>
                </div>
                <div class="unb-body" v-for="(item,index) in unbindlist" :key="index">
                    <div class="un-namephoto">
                        <div class="un-touxiang"><div class="img"><img :src="item.imagePath" alt=""></div><span>{{item.nickName}}</span></div>
                        
                    </div>
                    <div class="un-newtime">{{item.bindingTime}}</div>
                    <div class="period">{{item.period}}2018-05-24 12:00</div>
                </div>
                
                <el-pagination
                style="text-align:right"
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
</div>
</template>

<script>
import {bindings} from '../api/api'
import {getBindings} from '../api/api.js'

export default {
    data() {
      return {
        activeName: 'first',
        // 绑定中：
        list:[],
        // 已解绑：
        unbindlist:[],
        // 分页：
        total1:5,
        total2:5,
        currentPage:1,// 当前页码
        pageSize:5,
      };
    },
    methods:{
        handleSizeChange1(val){
           console.log("长度改变:"+val)
        },
    //   绑定中翻页函数：
        handleCurrentChange1(val){
            var bindingList={
        	    "pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : val
        	},
        	"promoterInfo" : {
                "gener" : "1",
        		"bindingStatus" : "1",
                "parentUserId" : localStorage.getItem("upUserId"),
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        getBindings(bindingList).then(data=>{
        this.total1=data.data.total
        this.list=data.data.promoterInfoList
        // console.log("绑定中",data.data.promoterInfoList)
        })
    },
        handleSizeChange2(val){
        // console.log("长度改变:"+val)
        },
    //   已解绑翻页函数：
        handleCurrentChange2(val){
        var unbindingList={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : val
        	},
        	"promoterInfo" : {
                "gener" : "1",
        		"bindingStatus" : "0",
                "parentUserId" : localStorage.getItem("upUserId"),
                "orgId" : localStorage.getItem("orgId")
                
        	}
        }
        getBindings(unbindingList).then(data=>{
        this.total2=data.data.total
        this.unbindlist=data.data.promoterInfoList
        // console.log("已解绑",data.data.promoterInfoList)
        })
    },
},
    created(){
        // 绑定中：
        var bindingList={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : 1
        	},
        	"promoterInfo" : {
                "gener" : "1",
        		"bindingStatus" : "1",
                "parentUserId" : localStorage.getItem("upUserId"),
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        getBindings(bindingList).then(data=>{
        this.total1=data.data.total
        this.list=data.data.promoterInfoList
        // console.log("绑定中",data.data.promoterInfoList)
        })

        var unbindingList={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : 1
        	},
        	"promoterInfo" : {
                "gener" : "1",
        		"bindingStatus" : "0",
                "parentUserId" : localStorage.getItem("upUserId"),
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        getBindings(unbindingList).then(data=>{
        this.total2=data.data.total
        this.unbindlist=data.data.promoterInfoList
        // console.log("已解绑",data.data.total)
        })
    }
}
</script>

<style lang="scss" scoped>
.allbox{
    width: 100%;
}
 .binding{
        width: 100%;
        background-color: #fff;
        color:#212121;
        .b-head{
            background-color: #ededed;
            width: 90%;
            height: 32px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:40px;
            line-height: 32px;
            border-bottom:1px solid #e0e0e0;
        }
        .b-body{
            display: flex;
            justify-content:space-between;
            width: 90%;
            height: 64px;
            padding-left:40px;
            padding-right:38px;
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
                    width: 290px;
                    position: relative;
                    top:0px;
                    left:12px;
                }
            }
            .newtime{
                    width: 300px;
                    margin:0 10% 0 5%;
                }
            
        }
        .fenye{
        margin-top:30px;
        text-align:right;
        margin-right:30px;
        }
    }

    // 解绑的客户：
        .un-binding{
        width: 90%;
        color:#212121;
        .unb-head{
            background-color: #ededed;
            width: 100%;
            height: 32px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:42px;
            line-height: 32px;
            border-bottom:1px solid #e0e0e0;
            .bd{
                width: 200px;
            }
            .period{
                width: 200px;
            }
            .tx{
                width: 250px;
            }
        }
        .unb-body{
            // background-color: #ededed;
            display: flex;
            justify-content:space-between;
            width: 100%;
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
            .un-namephoto{
                position: relative;
                .un-touxiang{
                    width: 250px;
                    // background-color: pink;
                    height: 44px;
                    // border-radius: 50%;
                    // overflow: hidden;
                    margin-top:10px;
                    .img{
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        overflow: hidden;
                        img{
                            width: 44px;
                            height: 44px;
                        }
                    }
                    span{
                        margin-top:-10px;
                    }
                    
                }
                span{
                    display: block;
                    width: 300px;
                    position: relative;
                    top:0px;
                    left:12px;
                }
            }
            .un-newtime{
                    width: 200px;
                    // background-color: pink;
                    // margin:0 16% 0 4%;
                }
            .period{
                width: 200px;
            }
            
        }
        .fenye{
            margin-top:20px;
            margin-left:50%;
        } 
    }
</style>



