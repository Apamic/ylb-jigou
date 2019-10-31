<template>
  <div class="goodslistbox">
    <!-- <el-button class="bili" type="primary" @click="openbili">设置比例</el-button> -->
    <!-- <el-button class="haibao" type="primary" @click="openpost">设置海报</el-button> -->
    <el-select class="select" v-model="value" placeholder="请选择商品">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input class="search" v-model="input" placeholder="请输入商品名称"></el-input>
    <el-button @click="gosearch">搜索</el-button>
    <div class="item-tr">
      <span class="mt goods">商品</span>
      <span class="leixing mt">商品类型</span>
      <span class="ml">普通推广者佣金比例</span>
      <span class="ml">高级推广者一级佣金比例</span>
      <span class="ml">高级推广者二级佣金比例</span>
      <span class="ml">高级推广者三级佣金比例</span>
      <span class="mt">操作</span>
    </div>
    <div class="item-td" v-for="(item,index) in goodsList" :key="index">
      <div class="sp">
        <div class="img">
          <img :src="item.imagePath" alt="">
        </div>
        <div class="name">
          <p class="name-item"><strong>{{item.productName}}</strong></p>
          <p class="name-price"><span>￥</span>{{item.sellPrice}}</p>
        </div>
      </div>
      <div class="server">{{item.productGenre}}</div>
      <div class="usual"><span>{{item.ordinaryPercentage}}</span>%</div>
      <div class="up-one"><span>{{item.oneLevelPercentage}}</span>%</div>
      <div class="up-two"><span>{{item.twoLevelPercentage}}</span>%</div>
      <div class="up-three"><span>{{item.threeLevelPercentage}}</span>%</div>
      <div class="biliset">
              <span v-on:click="isOnSale($event)" ref="dataStatus" :data-productId="item.productId" :data-status="item.status" v-if="item.status != null">
                <span v-if="item.status == '1' || item.status == '3'">上架</span><span v-if="item.status == '2'">下架</span>
              </span>
        <span class="percent_set" @click="openbili(item.sellPrice,item.productId,item.percentageId,item.ordinaryPercentage,item.oneLevelPercentage,item.twoLevelPercentage,item.threeLevelPercentage)">比例设置</span>
      </div>
      <!-- <div class="bgc" ></div>
      <div class="postset" @click="openpost">海报设置</div> -->
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

    <!-- 设置比例弹窗： -->
    <div class="bilipop" v-if="showbili">
      <div class="popbox">
        <div class="top">
          <div class="bgimg"></div>
          <div class="title"><strong>比例设置</strong></div>
        </div>
        <div class="middle">
          <div class="middle-usual">
            普通推广员佣金：<input class="bilipersen" v-model="ordinary" type="text" placeholder="0.00"><span class="persen">%</span>
            <span class="yongin">佣金：</span><span>{{(ordinary*this.price*0.01).toFixed(2)}}</span>元
          </div>
          <div class="middle-up">
            <p>高级推广员佣金</p>
            <div >
              <span class="up-one"> 一级佣金比例：</span><input class="bilipersen" v-model="persenone" type="text" placeholder="0.00"><span class="persen">%</span>
              <span class="yongin">佣金：</span><span>{{(persenone*this.price*0.01).toFixed(2)}}</span>元
            </div>
            <div>
              <span class="up-one"> 二级佣金比例：</span><input class="bilipersen" v-model="persentwo" type="text" placeholder="0.00"><span class="persen">%</span>
              <span class="yongin">佣金：</span><span>{{(persentwo*this.price*0.01).toFixed(2)}}</span>元
            </div>
            <div >
              <span class="up-one"> 三级佣金比例：</span><input class="bilipersen" v-model="persenthree" type="text" placeholder="0.00"><span class="persen">%</span>
              <span class="yongin">佣金：</span><span>{{(persenthree*this.price*0.01).toFixed(2)}}</span>元
            </div>
          </div>
        </div>
        <div class="desc">
          <p>佣金分成说明 ：</p>
          <span>高级推广员佣金比例不可低于普通推广员佣金比例， 比例范围：0-100%</span>
        </div>
        <el-button class="sure" type="primary" size="medium" @click="sure">确认</el-button>
        <el-button class="cancel" type="info" size="medium" @click="closebili">取消</el-button>
      </div>
    </div>
    <!-- 设置海报弹窗： -->
    <div class="postpop" v-if="showpost">
      <div class="postbox">
        <div class="post-top">
          <div class="bgimg"></div>
          <div class="title"><strong>海报设置</strong></div>
        </div>
        <div class="post-middle">
          <div class="left">
          </div>
          <div class="right">
            <span>自定义海报</span>
            <el-button type="primary" class="scbtn" size="medium" plain>点击上传</el-button>
            <p>建议尺寸750*560px或4:3，JPG 、PNG格式，图片小于1M</p>
            <el-button type="primary" size="medium">确认</el-button>
            <el-button type="info" size="medium" @click="closepost" >取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 商品列表查询api:
  import {goodsList} from '../api/api'
  //商品下架:
  import {goodsObtained} from '../api/api'
  //商品上架:
  import {goodsOnSale} from '../api/api'
  // 比例保存API:
  import {persenSet} from '../api/api'
  // 比例更新：
  import {persenUpdate} from '../api/api'
  export default {
    data() {
      return {
        options: [{
          value: 'FLLX003',
          label: '医疗服务'
        },{
          value: 'FLLX004',
          label: '知识课程'
        },{
          value: 'FLLX005',
          label: '知识专栏'
        },{
          value: 'FLLX006',
          label: '心理测评'
        }],
        value: '',
        input: '',
        // 商品类型:
        gener:'',
        // 佣金计算时取的商品价格:
        price:'',
        // 设置比例显示隐藏：
        showbili:false,
        showpost:false,
        // 默认查询商品列表
        goodsList:[],
        // 普通推广员比例:
        ordinary:'',
        // 一二三级比例:
        persenone:'',
        persentwo:'',
        persenthree:'',
        // 商品id:
        productId:'',
        // 判断比例是否设置过，如设置过，更新比例；未设置过，保存比例：
        isSet:'',
        // 分页：
        total:5,
        currentPage:1,// 当前页码
        pageSize:5,
      }
    },
    methods:{
      openbili(price,productId,percentageId,ordinaryPercentage,oneLevelPercentage,twoLevelPercentage,threeLevelPercentage){
        this.isSet=percentageId;
        // alert(this.isSet)
        this.price=price;
        this.productId=productId;
        this.showbili=true;
        // 保证再次点击时输入框没有上次输入值:
        this.ordinary=ordinaryPercentage,
          this.persenone=oneLevelPercentage,
          this.persentwo=twoLevelPercentage,
          this.persenthree=threeLevelPercentage
        // console.log(1111,this.productId,this.gener,this.ordinary,this.persenone,this.persentwo,this.persenthree,)
      },
      isOnSale(event){
        let targetObj = event.currentTarget;

        let productId = targetObj.getAttribute('data-productId');
        let status = targetObj.getAttribute('data-status');

        let promotingPercentage = {
          "promotingPercentage" : {
            "productId" : productId,
            "productGenre" : this.value
          }
        }

        if(status == '2'){
          targetObj.innerText = '上架';
          targetObj.setAttribute('data-status','3');

          goodsObtained(promotingPercentage).then(data=>{

          })
        }else{
          targetObj.innerText = '下架';
          targetObj.setAttribute('data-status','2');

          goodsOnSale(promotingPercentage).then(data=>{

          })
        }
      },
      closebili(){
        this.showbili=false;
      },


      // 海报设置:
      // openpost(){
      //     this.showpost=true;
      // },
      // closepost(){
      //     this.showpost=false;
      // },

      // 查询按钮:
      gosearch(){
        if(this.value){
          this.gener=this.value;
        }else{
          this.gener="FLLX003"
        }
        var listQuery={
          "pageParam" : {
            "pageSize" : 5,
            "pageNum" : 1
          },
          "promotingPercentage" : {
            "productGenre" : this.gener,
            "orgId" : localStorage.getItem("orgId")
          },
          "productName" : this.input
        }
        goodsList(listQuery).then(data=>{
          this.goodsList=data.data.list
        })
      },
      // 比例提交确认按钮:
      sure(){
        if(this.isSet){
          var sureList={
            "promotingPercentage" : {
              "percentageId" : this.isSet,
              "productId" : this.productId,
              "productGenre" :this.gener,
              "ordinaryPercentage" : this.ordinary,
              "oneLevelPercentage" : this.persenone,
              "twoLevelPercentage" : this.persentwo,
              "threeLevelPercentage" : this.persenthree,
              "orgId" : localStorage.getItem("orgId")
            }
          }
          persenUpdate(sureList).then(data=>{
            // console.log(data)
            if(data.rtnCode==1){
              var listQuery={
                "pageParam" : {
                  "pageSize" : 5,
                  "pageNum" : 1
                },
                "promotingPercentage" : {
                  "productGenre" : this.gener,
                  "orgId" : localStorage.getItem("orgId")
                },
                "productName" : this.input
              }
              // console.log(listQuery)
              goodsList(listQuery).then(data=>{
                this.goodsList=data.data.list
              })

              this.showbili=false
            }else{
              // alert("比例设置失败")
            }
          })

        }else{
          var sureList={
            "promotingPercentage" : {
              "productId" : this.productId,
              "productGenre" :this.gener,
              "ordinaryPercentage" : this.ordinary,
              "oneLevelPercentage" : this.persenone,
              "twoLevelPercentage" : this.persentwo,
              "threeLevelPercentage" : this.persenthree,
              "orgId" : localStorage.getItem("orgId")
            }
          }
          // console.log(sureList)
          persenSet(sureList).then(data=>{
            // console.log(data)
            if(data.rtnCode==1){
              var listQuery={
                "pageParam" : {
                  "pageSize" : 5,
                  "pageNum" : 1
                },
                "promotingPercentage" : {
                  "productGenre" : this.gener,
                  "orgId" : localStorage.getItem("orgId")
                },
                "productName" : this.input
              }
              // console.log(listQuery)
              goodsList(listQuery).then(data=>{
                this.goodsList=data.data.list
              })
              this.showbili=false
            }else{
              alert("比例设置失败")
            }
          })
        }
      },
      // 分页：
      handleSizeChange(val){
        console.log("长度改变:"+val)
      },
      //   翻页函数：
      handleCurrentChange(val){
        // console.log(this.value)
        if(this.value){
          this.gener=this.value;
        }else{
          this.gener="FLLX003"
        }
        var listQuery={
          "pageParam" : {
            "pageSize" : 5,
            "pageNum" : val
          },
          "promotingPercentage" : {
            "productGenre" : this.gener,
            "orgId" : localStorage.getItem("orgId")
          },
          "productName" : this.input
        }
        // console.log(listQuery)
        goodsList(listQuery).then(data=>{
          this.total=data.data.total
          this.goodsList=data.data.list
        })
      }
    },
    created(){
      // if(this.value){
      //   this.gener=this.value;
      // }else{
      //   this.gener="FLLX003"
      // }

      this.value = this.options[0].value;
      this.gener = "FLLX003"

      var listParams={
        "pageParam" : {
          "pageSize" : 5,
          "pageNum" : 1
        },
        "promotingPercentage" : {
          "productGenre" : this.gener,
          "orgId" : localStorage.getItem("orgId")
        },
        "productName" : ""
      }
      goodsList(listParams).then(data=>{
        // console.log("商品列表",data)
        this.total=data.data.total
        this.goodsList=data.data.list
        // console.log(this.goodsList)
      })
    },
    // updated(){
    //     var listQuery={
    //     	"pageParam" : {
    //     		"pageSize" : 5,
    //     		"pageNum" : 1
    //     	},
    //     	"promotingPercentage" : {
    //     		"productGenre" : this.gener
    //     	},
    //     	"productName" : this.input
    //     }
    //     // console.log(listQuery)
    //     goodsList(listQuery).then(data=>{
    //     this.goodsList=data.data.list
    // })
    // }
  }
</script>
<style lang="scss" scoped>
  .fenye{
    margin-top:30px;
    text-align:right;
    margin-right:30px;
  }
  .goodslistbox{
    padding-bottom:100px;
    width: 98%;
    position: relative;
    .select{
      margin-left:58%;
      width: 160px;
    }
    .search{
      width: 160px;
    }
    .item-tr{
      width: 100%;
      height: 50px;
      background-color: #EDEDED;
      font-size:13px;
      margin-top:18px;
      display: flex;
      justify-content: space-between;
      span{
        display: block;
        width: 100px;
        float:left;
        line-height: 20px;
        color:#212121;
      }
      .goods{
        margin-left:10px;
        width: 250px;
        // background-color: pink;
      }
      .mt{
        margin-top:15px;
      }
      .ml{
        margin-top:6px;
      }
      .leixing{

      }
    }
    .item-td{
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      height: 96px;
      border:1px solid #E0E0E0;
      .checkbox{
        margin-top:27px;
        position: absolute;
        top:15px;
        left: 8px;
        // z-index: 5;
      }
      .sp{
        width: 250px;
        // background-color: pink;
        margin-left:10px;

      }
      .img{
        margin-top:20px;
        float:left;
        display: inline;
        width: 75px;
        height: 56px;
        // margin-left:30px;
        img{
          width: 75px;
          height: 56px;
        }
      }
      div{
        float:left;
      }
      .name{
        width: 170px;
        // overflow: hidden;
        .name-item{
          color:#212121;
          font-size:14px;
          margin-top:24px;
          margin-left:12px;
        }
        .name-price{
          color:#0076FF;
          font-size:14px;
          margin-left:12px;
          margin-top:-4px;
        }
      }
      .server{
        width: 100px;
        float:left;
        font-size:14px;
        color:#212121;
        margin-top:40px;
      }
      .usual{
        width: 100px;
        margin-top:40px;
        font-size:14px;
        color:#212121;
      }
      .up-one{
        width: 100px;
        margin-top:40px;
        font-size:14px;
        color:#212121;
      }
      .up-two{
        width: 100px;
        margin-top:40px;
        font-size:14px;
        color:#212121;
      }
      .up-three{
        width: 100px;
        margin-top:40px;
        font-size:14px;
        color:#212121;
      }
      .biliset{
        margin-top:40px;
        font-size:14px;
        color:#0076FF;
        cursor:pointer;
        padding-right:35px;
        .percent_set{
          margin-left:10px;
        }
      }
      .bgc{
        width: 1px;
        height: 14px;
        background:rgba(0,118,255,1);
        margin-top:43px;
        margin-left:15px;
      }
      .postset{
        margin-left:15px;
        margin-top:40px;
        font-size:14px;
        color:#0076FF;
        cursor:pointer
      }

    }
    .bilipop{
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.5);
      position: fixed;
      top:0px;
      left:0px;
      z-index: 5;
      .popbox{
        width:670px;
        height: 500px;
        background-color: #fff;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        border-radius: 5px;
        .top{
          overflow: hidden;
          .bgimg{
            width: 4px;
            height: 20px;
            background-color: #0076FF;
            margin-left:40px;
            float:left;
            margin-top:36px;
          }
          .title{
            margin-top:36px;
            margin-left:9px;
            float:left;
            font-size:16px;
          }
        }
        .middle{
          .middle-usual{
            margin-left:40px;
            margin-top:20px;
            color:#212121;
            font-size:14px;
            .bilipersen{
              margin-left:20px;
              width: 220px;
            }
            .persen{
              margin-left:10px;
            }
            .yongin{
              margin-left:30px;
            }
          }
          .middle-up{
            div{
              margin-top:20px;
            }
            p{
              margin-left:40px;
              margin-top:20px;
              color:#212121;
              font-size:14px;
            }
            .up-one{
              color:#666666;
              font-size:14px;
              margin-left:40px;
            }
            .bilipersen{
              margin-left:34px;
              width: 220px;
              font-size:14px;

            }
            .persen{
              margin-left:10px;
              font-size:14px;
            }
            .yongin{
              margin-left:30px;
              font-size:14px;
            }

          }

        }
        .desc{
          color:#212121;
          font-size:14px;
          margin-left:40px;
          margin-top:30px;
        }
        .sure{
          width: 90px;
          // height: 32px;
          margin-top:20px;
          margin-left:40px;

        }
        .cancel{
          width: 90px;
        }

      }
    }
    .postpop{
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.5);
      position: fixed;
      top:0px;
      left:0px;
      z-index: 5;
      .postbox{
        // overflow: hidden;
        width: 50%;
        height: 75%;
        background-color: #fff;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        border-radius: 5px;
        .post-top{
          overflow: hidden;
          .bgimg{
            width: 4px;
            height: 20px;
            background-color: #0076FF;
            margin-left:40px;
            float:left;
            margin-top:36px;
          }
          .title{
            margin-top:36px;
            margin-left:9px;
            float:left;
            font-size:16px;
          }
        }
        .post-middle{
          // width: 700px;
          // height: 500px;
          overflow: hidden;
          margin-top:10px;
          .left{
            width: 207px;
            height: 369px;
            background-color: #EDEDED;
            float:left;
            margin-left:40px;
            margin-right:20px;
          }
          .right{
            overflow: hidden;
            float:right;
            margin-left:80px;
            margin-top:-378px;
            .scbtn{
              margin-top:50px;
            }
          }
        }

      }
    }

  }
</style>


