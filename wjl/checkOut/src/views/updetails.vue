<template>
    <div>
       <commonHe></commonHe>
       <div class="rightbody">
           <!-- 上部详情： -->
            <div class="person">
               <div class="photo"><img :src="detailslist.imagePath" alt=""></div>
               <div class="details">
                    <div class="top">
                       <div class="name"><strong>{{detailslist.userName}}</strong><span>高级推广员</span></div>
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
                    <div class="bottom2">
                        <div class="address">地址：</div>
                        <div class="addressname">{{detailslist.address}}</div>
                    </div>
                </div>
            </div>
            <template>
                <el-tabs v-model="activeName" class="client">
                    <el-tab-pane label="他的客户" name="first">
                        <upclient></upclient>
                    </el-tab-pane>
                    <el-tab-pane label="他的下级" name="second">
                        <subordinate></subordinate>
                    </el-tab-pane>
                </el-tabs>
            </template>
        </div>
    </div>
</template>
<script>
import commonHe from '../components/commonHe.vue'
import upclient from '../components/upclient.vue'
import subordinate from '../components/subordinate'
// 查细节详情：
import {getDetails} from '../api/api.js'
export default {
    data() {
      return {
        activeName: 'first',
        detailslist:[]
      };
    },
    components:{
        commonHe,
        upclient,
        subordinate
    },
    created(){
        var listParams={"promoterInfo" : {"userId" : localStorage.getItem("upUserId"),"orgId":localStorage.getItem('orgId')}}
        getDetails(listParams).then(data=>{
            console.log("33",data)
            localStorage.setItem("upDetParentId",data.data.promoterInfo.parentUserId)
            this.detailslist=data.data.promoterInfo
            // console.log(this.detailslist) 
        })
    }
}
</script>
<style lang="scss" scoped>
.rightbody{
    width: 80%;
    // overflow: hidden;
    // height: 800px;
    // border:1px solid;
    position: absolute;
    top:110px;
    left:18%;
    overflow: hidden;
    // 上部详情:
    .person{
        width: 94%;
        background:#ededed;
        overflow: hidden;
        .photo{
            width: 56px;
            height: 56px;
            background: #fff;
            border-radius: 50%;
            margin-top:19px;
            margin-left:39px;
            float:left;
            overflow: hidden;
            img{
                width: 56px;
                height: 56px; 
            }
        }
        .details{
        width: 85%;
        height: 155px;
        // background-color: red;
        float:left;
        margin-top:36px;
        // margin-bottom:10px;
        .top{
            margin-left:13px;
            // background-color: pink;
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
            width: 880px;
            height: 50px;
            line-height: 50px;
            margin-left:15px;
            margin-top:7px;
            div{
                float:left;
                font-size:14px;
            }
            span{
                    color:#212121;
                }
                .name{
                    display: block;
                    width: 70px;
                    height: 50px;
                    // background-color: pink;
                    float:left;
                    color:#666666;
                }
                .namespan{
                    display: block;
                    width: 100px;
                    height: 50px;
                    // background-color: pink;
                    color:#212121;
                }
                .counts{
                    display: block;
                    width: 110px;
                    float:left;
                    color:#666666;
                    margin-left:140px;
                }
                .countsspan{
                    display: block;
                    width: 110px;
                    float:left;
                    // background-color: pink;
                }
                .upper{
                    display: block;
                    width: 100px;
                    float:left;
                    color:#666666;
                    margin-left:40px;
                }

        }
        .bottom{
            overflow: hidden;
            width: 880px;
            // background-color: brown;
            height: 35px;
            margin-left:13px;
            div{
                float:left;
                font-size:14px;
            }
          
            .phone{
                display: block;
                width: 70px;
                float:left;
                color:#666666; 
            }
            .phonespan{
                color:#212121;
                display: block;
                width: 140px;
                float:left;
                // background-color: pink;
                margin-left:2px;
            }
            .money{
                display: block;
                width: 110px;
                float:left;
                color:#666666;
                margin-left:100px;
            }
            .moneyspan{
                // background-color: pink;
                display: block;
                width: 110px;
            }
            .date{
                display: block;
                width: 100px;
                float:left;
                color:#666666;
                margin-left:43px;
            }
        }
        .bottom2{
            overflow: hidden;
            width: 880px;
            // background-color: brown;
            height: 30px;
            margin-left:13px;
            div{
                float:left;
                font-size:14px;
            }
          
            .address{
                display: block;
                width: 72px;
                float:left;
                color:#666666; 
            }
            .phonespan{
                color:#212121;
            }
            .money{
                display: block;
                width: 120px;
                float:left;
                color:#666666;
                margin-left:151px;
            }
            .date{
                display: block;
                width: 100px;
                float:left;
                color:#666666;
                margin-left:140px;
            }

        }
    }
}

    .client{
        margin-top:10px;
        width: 92%;
    }
    // 绑定的客户：
    .binding{
        width: 100%;
        color:#212121;
        .b-head{
            background-color: #ededed;
            // width: 7%;
            height: 32px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:40px;
            line-height: 32px;
            border-bottom:1px solid #e0e0e0;
        }
        .b-body{
            // background-color: #ededed;
            width: 90%;
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
                    margin:0 143px 0 115px;
                    // background-color: pink;
                }
            
        }
    }

    // 解绑的客户：
        .un-binding{
        width: 100%;
        color:#212121;
        .unb-head{
            background-color: #ededed;
            width: 965px;
            height: 32px;
            display: flex;
            justify-content:space-between;
            padding-left:40px;
            padding-right:40px;
            line-height: 32px;
            border-bottom:1px solid #e0e0e0;
        }
        .unb-body{
            // background-color: #ededed;
            width: 963px;
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
            .un-newtime{
                    width: 300px;
                    margin:0 143px 0 115px;
                    // background-color: pink;
                }
            
        }
    
    }
    

}
</style>


