<template>
<div class="seniorbox" id="seniorbox">
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="高级推广员" name="first">
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
            <div class="person">
                <div class="person-tr">
                    <span>头像/昵称</span>
                    <span class="upper">上级推广员</span>
                    <span>累计推广笔数</span>
                    <span>累计成交金额(元)</span>
                    <span>加入时间</span>
                    <span>操作</span>
                </div>
                <div class="create-tr" v-for="(item,index) in searchlist" :key="index">
                    <div class="touxiang"><img :src="item.imagePath" alt=""></div>
                    <span>{{item.userName}}</span>
                    <span class="cr-upper">{{item.parentNickName}}</span>
                    <span>{{item.amount}}</span>
                    <span>{{item.money}}</span>
                    <span>{{item.bindingTime}}</span>
                    <span class="details" v-if="item.isLock==1">
                        <!-- <div @click="showdetails(item.userId)">详情</div>
                        <div @click="godel(item.userId)">清退</div> -->
                        已清退
                    </span>
                    <span class="details" v-if="item.isLock!=1">
                        <div @click="showdetails(item.userId)">详情</div>
                        <div @click="godel(item.userId)">清退</div>
                    </span>
                </div>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 100]"
                    :page-size="pageSize"
                    background
                    layout="prev, pager, next"
                    :total="total"
                    class="fenye">
                </el-pagination> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="审核信息" name="second">
            <seniorshxx></seniorshxx>
        </el-tab-pane>
    </el-tabs>
</div>
</template>
<script>
import seniorshxx from './senior-shxx.vue'
// 查询api导入：
import {getPromoters} from '../api/api.js'
// 清退：
import {delPromoter} from '../api/api.js'

  export default {
    data() {
      return {
        activeName: 'first', 
        value1: '',
        input: '',
        searchlist:[],
        // 分页：
        total:5,
        currentPage:1,// 当前页码
        pageSize:5,
      };
    },
    methods: {
        showdetails(id){
            // alert(id)
            let upUserId=id;
            localStorage.setItem('upUserId', upUserId);
            this.$router.push({path: 'updetails'})
        },
        godel(userId){
            this.$confirm('此操作将永久清退该推广员, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var del={
            	"promoterInfo" : {
            		"userId" : userId,
                "orgId": localStorage.getItem("orgId")
            	}
            }
            delPromoter(del).then(data=>{
            //   this.searchlist=data.data.promoterInfoList
            // console.log(data)
                if(data.rtnCode==1){
                    // alert("清退成功")
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    var upPromotersInfo={
                    pageParam:{
                        pageSize:5,
                        pageNum:1
                    },
                    promoterInfo:{
                        gener:2,
                        approvalStatus:"1",
                        parentUserId:null,
                        orgId : localStorage.getItem("orgId")
                    },
                    startTime:this.value1[0],
                    endTime:this.value1[1],
                    search:this.input
                    }
                    getPromoters(upPromotersInfo).then(data=>{
                        this.searchlist=data.data.promoterInfoList
                    })
                }else{
                    alert("清退失败")
                }
            })  
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消清退'
                });          
            });
    },
        gosearch(){
            var upPromotersInfo={
                pageParam:{
                    pageSize:5,
                    pageNum:1
                    },
                promoterInfo:{
                    gener:2,
                    approvalStatus:"1",
                    parentUserId:null,
                    orgId : localStorage.getItem("orgId")
                    },
                startTime:this.value1[0],
                endTime:this.value1[1],
                search:this.input
                }
            getPromoters(upPromotersInfo).then(data=>{
                this.total=data.data.total
                this.searchlist=data.data.promoterInfoList
          })
        },
        handleSizeChange(val){
           console.log("长度改变:"+val)
        },
    //   翻页函数：
        handleCurrentChange(val){
        var upPromotersInfo={
                pageParam:{
                    pageSize:5,
                    pageNum:val
                    },
                promoterInfo:{
                    gener:2,
                    approvalStatus:"1",
                    parentUserId:null,
                    orgId : localStorage.getItem("orgId")
                    },
                startTime:this.value1[0],
                endTime:this.value1[1],
                search:this.input
        }
        
        getPromoters(upPromotersInfo).then(data=>{
            this.total=data.data.total
            this.searchlist=data.data.promoterInfoList
        // console.log("绑定中",data.data.promoterInfoList)
        })
    }
    },
    components:{
        seniorshxx
    },
    created(){
        var upPromotersInfo={
            pageParam:{
                pageSize:5,
                pageNum:1
                },
            promoterInfo:{
                gener:2,
                approvalStatus:"1",
                parentUserId:null,
                orgId : localStorage.getItem("orgId")
                },
            startTime:this.value1[0],
            endTime:this.value1[1],
            search:this.input
            }
            getPromoters(upPromotersInfo).then(data=>{
                this.total=data.data.total
                this.searchlist=data.data.promoterInfoList
            })
    },
    mounted(){
    let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
    // document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
    // document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
    document.getElementById("seniorbox").style.width = (w - 280) + "px";
    document.getElementById("seniorbox").style.height = (h - 128) + "px";
    var upPromotersInfo={
        pageParam:{
            pageSize:5,
            pageNum:1
            },
        promoterInfo:{
            gener:2,
            approvalStatus:"1",
            parentUserId:null,
            orgId : localStorage.getItem("orgId")
            },
        startTime:this.value1[0],
        endTime:this.value1[1],
        search:this.input
        }
        getPromoters(upPromotersInfo).then(data=>{
            this.total=data.data.total
            this.searchlist=data.data.promoterInfoList
        })

    }
  };
</script>
<style lang="scss" scoped>
.seniorbox{
    .fenye{
        margin-top:30px;
        text-align:right;
        margin-right:30px;
        }
    // color:#212121;
    color:red;
    font-size:14px;
    position: relative;
.block{
        // float:left;
    width: 300px;
    height: 80px;
}
.sealname{
    // float:left;
    width: 240px;
    margin-top:-80px;
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
.person{
    width: 98%;
    height: 500px;
    // border:1px solid ;
    text-align: left;
    margin-top:20px;
    
    // 表格固定栏：
    .person-tr{
        width: 100%;
        height: 40px;
        background-color: #EDEDED;
        font-size:13px;
        padding-left:5px;
        display: flex;
        span{
            display: block;
            float:left;
            width: 170px;
            line-height: 40px;
            color:#212121;
            margin-left:5px;
        }
        .upper{
            margin-left:30px;
        }
    }
        // 生成栏：
    .create-tr{
        display: flex;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #e0e0e0;
        border-left:1px solid #e0e0e0;
        border-right:1px solid #e0e0e0;
        font-size:13px;
        padding-left:3px;
        // background-color: #EDEDED;
        .touxiang{
            width: 45px;
            height: 45px;
            background-color: red;
            margin-top:7px;
            margin-left:3px;
            border-radius: 50%;
            float:left;
            overflow: hidden;
            img{
                width: 45px;
                height: 45px; 
            }

        }
        span{
            display: block;
            float:left;
            width: 170px;
            height: 60px;
            line-height: 60px;
            color:#212121;
            margin-left:5px;
        }
        .cr-upper{
            margin-left:-16px;
        }
        .details{
            width: 180px;
            color:#0076FF;
            margin-left:-5px;
            div{
                text-align: left;
                width: 40px;
                float:left;
                margin-left:10px;
            }
        }
        .details:hover{
            cursor:pointer
        }
    }
}

// 审核信息：
    .second-tr{
        text-align: center;
        width: 100%;
        height: 40px;
        background-color: #EDEDED;
        font-size:13px;
        span{
            display: block;
            float:left;
            width: 180px;
            line-height: 40px;
            color:#212121;
        }
    }
    .second-create-tr{
        text-align: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #e0e0e0;
        font-size:13px;
        // background-color: #EDEDED;
        span{
            display: block;
            float:left;
            width: 180px;
            line-height: 40px;
            color:#212121;
        }
        .details{
            width: 180px;
            color:#0076FF;
            div{
                text-align: center;
                width: 40px;
                float:left;
                margin-left:32px;
            }
        }
        .details:hover{
            cursor:pointer
        }
    }
}
</style>
<style>
#seniorbox .el-tabs__item{
    font-size:14px;
}
</style>




