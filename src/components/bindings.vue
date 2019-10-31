<template>
    <div>
        <div class="sealname">
            <el-input v-model="input" placeholder="请输入买家手机号"></el-input>
        </div>
        <el-row class="search">
            <el-button type="primary" class="btn" @click="gosearch">搜索</el-button>
        </el-row>
        <div class="nav">
            <div>买家昵称</div>
            <div>推广员昵称</div>
            <div class="phone">推广员手机号码</div>
            <div class="time">绑定时间</div>
            <div class="time">解绑时间</div>
            <div>状态</div>
        </div>
        <div class="cr-nav" v-for="(item,index) in list" :key="index">
            <div>{{item.nickName}}</div>
            <div>{{item.parentNickName}}</div>
            <div class="phone">{{item.phone}}</div>
            <div class="time">{{item.bindingTime}}</div>
            <div class="time">{{item.untiedTime}}</div>
            <div>{{item.bindingStatus==1?"已绑定":"未绑定"}}</div>
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
import {bindings} from '../api/api'
export default {
    data(){
        return{
            input:'',
            list:[],
            // 分页：
            currentPage:1,// 当前页码
            pageSize:5,// 每页大小
            total:100
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
                    "phone" : this.input,
                    "orgId" : localStorage.getItem("orgId")
            	}
            }
            bindings(searchList).then(data=>{
                this.list=data.data.promoterInfoList
                this.total=data.data.total
            // console.log(data.data.promoterInfoList)
            
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
                    "phone" : this.input,
                    "orgId" : localStorage.getItem("orgId")
            	}
            }
            bindings(searchList).then(data=>{
                this.list=data.data.promoterInfoList
            // console.log(data.data.promoterInfoList)
            
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
                "phone" : this.input,
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        bindings(searchList).then(data=>{
            this.list=data.data.promoterInfoList
            this.total=data.data.total
        // console.log(data.data.promoterInfoList)
            
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
    // margin-top:-40px;
    margin-left:0px;
    } 
.search{
    position: absolute;
    top:2px;
    left:250px;
    .btn{
        width: 80px;
        height: 36px;
        font-size:16px;
        line-height: 12px;
    }
}
.nav{
    font-size:13px;
    padding-left:10px;
    padding-right:2px;
    // padding-right:15px;
    line-height: 40px;
    margin-top:15px;
    width: 97%;
    height: 40px;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-between;
    div{
        width: 120px;
        float:left;
    }
    .time{
        width: 140px;
    }
}
.cr-nav{
    border-left:1px solid #ededed;
    border-right:1px solid #ededed;
    border-bottom:1px solid #ededed;
    font-size:13px;
    padding-left:10px;
    line-height: 50px;
    width: 97%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    div{
        width: 120px;
        float:left;
    }
    .time{
        width: 140px;
    }
}


</style>


