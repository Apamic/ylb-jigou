<template>
    <div>
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
            <el-button type="primary" class="btn" @click="gosearch" >搜索</el-button>
        </el-row>
        <div class="nav">
            <div class="touxiang">头像/昵称</div>
            <div class="gener">推广员类型</div>
            <div>姓名</div>
            <div class="phone">手机号码</div>
            <div>个人推广订单</div>
            <div>个人推广金额</div>
            <div>下级推广订单</div>
            <div>下级推广金额</div>
            <div>合计佣金</div>
        </div>
        <div class="cr-nav" v-for="(item,index) in statisticsInfo" :key="index">
            <div class="touxiang">
                <div class="photo"><img :src="item.imagePath" alt=""></div>
                <span>{{item. nickName}}</span>
            </div>
            <div class="cr-gener">{{item.gener==1?"普通推广员":"高级推广员"}}</div>
            <div class="cr-username">{{item.userName}}</div>
            <div class="cr-phone">{{item.phone}}</div>
            <div>{{item.amount}}</div>
            <div><span>￥</span>{{item.money}}</div>
            <div>{{item.subordinateAmount}}</div>
            <div><span>￥</span>{{item.subordinateMoney}}</div>
            <div><span>￥</span>{{item.totalMoney}}</div>
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
</template>
<script>
import {statistics} from '../api/api'

export default {
    data(){
        return{
            value1: '',
            input:'',
            statisticsInfo:'',
             // 分页：
            currentPage:1,// 当前页码
            pageSize:5,// 每页大小
            total:5
            }
    },
    methods:{
        gosearch(){
            var searchList={
	        "pageParam" : {
		        "pageSize" : 5,
		        "pageNum" : 1
            },
            "promoterInfo" : {
	        	"orgId" : localStorage.getItem("orgId")
	        },
	        "startTime" : this.value1[0],
            "endTime" : this.value1[1],
            "search" : this.input
        }
          
        statistics(searchList).then(data=>{
            this.statisticsInfo=data.data.promoterInfoList
            // console.log(this.statisticsInfo)
            
        })
    },
        handleSizeChange(val){
        console.log("长度改变:"+val)
    },
    // 当前改变----当前页码改变之后，触发这个函数
    handleCurrentChange(val){                       
        // console.log("当前改变："+val)
            var searchList={
	        "pageParam" : {
		        "pageSize" : 5,
		        "pageNum" : val
            },
            "promoterInfo" : {
	        	"orgId" : localStorage.getItem("orgId")
	        },
	        "startTime" : this.value1[0],
            "endTime" : this.value1[1],
            "search" : this.input
        }
        statistics(searchList).then(data=>{
            this.statisticsInfo=data.data.promoterInfoList
            // console.log(this.statisticsInfo)
            
        })
    },
    
    },
    created(){
        var searchList={
	        "pageParam" : {
		        "pageSize" : 5,
		        "pageNum" : 1
            },
            "promoterInfo" : {
	        	"orgId" : localStorage.getItem("orgId")
	        },
	        "startTime" : this.value1[0],
            "endTime" : this.value1[1],
            "search" : this.input
        }
          
        statistics(searchList).then(data=>{
            this.statisticsInfo=data.data.promoterInfoList
            // console.log(this.statisticsInfo)
            this.total=data.data.total
            
        })
        
    }
}
</script>
<style lang="scss" scoped>
.fenye{
        margin-top:30px;
        text-align:right;
        margin-right:30px;
}
.sealname{
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
.nav{
    font-size:13px;
    padding-left:5px;
    padding-right:2px;
    // padding-right:15px;
    line-height: 40px;
    margin-top:15px;
    width: 98%;
    height: 40px;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-between;
    div{
        width: 80px;
        float:left;
    }
    .gener{
        width: 70px;
    }
    // .username{
    //     width: 90px;
    // }
    .touxiang{
        width: 110px;
    }
    .phone{
        width: 100px;
        margin-left:-30px;
    }
}
.cr-nav{
    border-left:1px solid #ededed;
    border-right:1px solid #ededed;
    border-bottom:1px solid #ededed;
    font-size:13px;
    padding-left:5px;
    // padding-right:15px;
    line-height: 20px;
    // margin-top:15px;
    width: 98%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    div{
        width: 80px;
        // background-color: pink;
        float:left;
        // padding-top:20px;
    }
    .cr-gener{
        width: 70px;
    }
    // .cr-username{
    //     width: 90px;
    // }
    .cr-phone{
        width: 100px;
        margin-left:-30px;
    }
    .touxiang{
        width: 110px;
        line-height: 25px;
        word-break:break-all;
        // overflow: hidden;
        .photo{
            width: 40px;
            height: 40px;
            // background-color: red;
            margin-top:5px;
            border-radius: 50%;
            margin-right:5px;
            overflow: hidden;
            img{
                width: 40px;
                height: 40px;
            }
        }
    }
}


</style>


