<template>
    <div>
        <div class="nav">
            <div class="touxiang">头像/昵称</div>
            <div class="name">姓名</div>
            <div class="">手机号码</div>
            <div class="">累计推广笔数</div>
            <div class="">累计推广金额</div>
            <div class="">加入时间</div>
        </div>
        <div class="cr-nav" v-for="(item,index) in list" :key="index">
            <div class="touxiang">
                <span class="img"><img :src="item.imagePath" alt=""></span>
                <span>{{item.nickName}}</span>
            </div>
            <div class="name">{{item.userName}}</div>
            <div class="phone">{{item.phone}}</div>
            <div class="">{{item.amount}}</div>
            <div class=""><span>￥</span>{{item.money}}</div>
            <div class="">{{item.bindingTime}}</div>
        </div>
    </div>
</template>
<script>
import {getPromoters} from '../api/api'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        var unbindingList={
        	"pageParam" : {
        		"pageSize" : 5,
        		"pageNum" : 1
        	},
        	"promoterInfo" : {
        		"gener" : "2",
        		"bindingStatus" : "1",
                "parentUserId" : localStorage.getItem("upUserId"),
                "orgId" : localStorage.getItem("orgId")
        	}
        }
        getPromoters(unbindingList).then(data=>{
        this.list=data.data.promoterInfoList
        // console.log("下级",data.data)
        })
    }
}
</script>

<style lang="scss" scoped>
.nav{
    background-color: #ededed;
    width: 99%;
    padding-right:2px;
    height: 32px;
    display: flex;
    text-align: left;
    justify-content:space-between;
    line-height: 32px;
    border-bottom:1px solid #e0e0e0;
    color:#212121;
    div{
        width: 200px;
    }
    .touxiang{
        width: 210px;
        padding-left:8px;
    }
    .name{
        width: 160px;
    }
}
.cr-nav{
    width: 99%;
    display: flex;
    justify-content:space-between;
    text-align: left;
    height: 60px;
    font-size:14px;
    color:#040B1C;
    border-bottom:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
    border-right:1px solid #e0e0e0;
    line-height: 60px;
    div{
        width: 200px;
        // background-color: pink;
    }
    .touxiang{
        // background-color: green;
        width: 210px;
        margin-left:8px;
        .img{
            display: block;
            width: 44px;
            height: 44px;
            background-color: pink;
            float:left;
            margin-top:8px;
            margin-right:5px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 44px;
                height: 44px;
            }
        }
    }
    .name{
        width: 160px;
        // background-color: red;
    }
}
</style>

