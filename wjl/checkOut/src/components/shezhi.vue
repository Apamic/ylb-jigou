<template>
  <div class="shezhi">
    <div class="bg"></div>
    <span class="title">基本信息</span>
    <!-- 开关： -->
    <div class="jiben">
      <div class="jiben-usual">
        <span>
        普通推广开关
        </span>
        <el-switch
          class="el-switch"
          v-model="value1"
          active-color="#0076FF"
          inactive-color="#B3B3B3">
        </el-switch>
      </div>
      <div class="jiben-high">
        <span>
        高级推广按钮
        </span>
        <el-switch 
          class="el-switch"
          v-model="value2"
          active-color="#0076FF"
          inactive-color="#B3B3B3">
        </el-switch>
      </div>
    </div>
    <div class="usual">
      <div class="bg"></div>
      <div class="usual-title">普通推广员设置</div>
      <div class="usualbox">
        <div class="usual-left">普通推广员客户有效期设置</div>
        <div class="usual-right">
          <el-input class="usual-day" v-model="input1" placeholder="请输入内容"></el-input>天
          <p class="desc">有效期可设置1-999天，普通推广员会与其发展的客户绑定关系，在有效期内绑定的客户再次进入店铺下单，无论是通过该推广员的链接还是直接进入店铺购买，都将计算普通推广员 的佣金，且在有效期内，客户不会更换绑定关系。</p>
        </div>
      </div>
    </div>
    <div class="high">
      <div class="bg"></div>
      <div class="high-title">高级推广员设置</div>
      <div class="highbox">
        <div class="high-left">高级推广员客户有效期设置</div>
        <div class="high-right">
          <el-input class="high-day" v-model="input2" placeholder="请输入内容"></el-input>天
          <p class="desc">有效期可设置1-999天，普通推广员会与其发展的客户绑定关系，在有效期内绑定的客户再次进入店铺下单，无论是通过该推广员的链接还是直接进入店铺购买，都将计算普通推广员 的佣金，且在有效期内，客户不会更换绑定关系。</p>
          <p class="desc-bottom">建议：高级推广员的有效期高于普通推广员</p>
        </div>
      </div>
    </div>
    <div class="zhaomu">
      <div class="bg"></div><span class="zhaomu-title">高级推广员招募设置</span>
      <div class="lianjie">
        <div class="lianjie-left">链接地址</div>
        <div class="lianjie-right">
          <span>{{link}}</span>
          <el-button size="medium"
          v-clipboard:copy="this.link"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          >分享链接</el-button>
        </div>
      </div>
      <div class="ymbt">
        <span>页面标题</span><el-input class="ymbt-input" v-model="input3" placeholder="请输入内容"></el-input>
      </div>
      <div class="xqms">
        <span>详情描述</span>
        <!-- <el-input
          class="xqms-textarea"
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input> -->
        <div class="edit_container xqms-textarea">
          <quill-editor 
              v-model="textarea" 
              ref="myQuillEditor" 
              :options="editorOption" 
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
          </quill-editor>
        </div>
        <div class="sure">
          <el-button type="primary" @click="godown">保存</el-button>
        </div>
        <!-- <div class="sure">
          <el-button type="primary" @click="gocheck">检查</el-button>
        </div> -->
         
      </div>
    </div>
    <template>
      
    </template>

  </div> 
</template>
<script>

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// 查询导入：
import {loadSearch} from '../api/api'
import {updateSettings} from '../api/api'
import {newSettings} from '../api/api'

  export default {
    data() {
      return {
        value1:true,
        value2:true,
        input1:"15",
        input2:"999",
        input3:"高级推广员招募计划",
        textarea:"<p><strong>欢迎加入成为我们的推广员</strong></p><p>一、奖励说明</p><p>	1.用户点击您分享的推广链接即会绑定成为您的客户，在有效期内购买任意参与推广的商品，您将获得对应比例的佣金奖励。 </p><p>	2.您可以邀请好友成为您的下级推广员，用户在你邀请的下级推广员的推广下成功付费，您将获得对应比例的邀请奖励。</p><p>二、结算说明</p><p>	1.您所获得的每笔订单的奖励依据商品的分成比例有所不同。</p><p>	2.您可以在“首页-我的-我的钱包”查看您的收益数据，并进行提现操作。</p>",
        editorOption: {},
        isOrdinary:'',
        isHighLevel:'',
        // 初始化判断是否设置过Id查询：
        isPromoterSetId:'',
        // 更新之后返回参数：
        recruitId:'',
        //分享链接
        link:'123'
      };
    },
    methods: {
      handleClick(tab, event) {
      },
      go(){
        alert(this.input1)
      },
      gocheck(){
        var searchList={
	      "promoterSet" : {
	      	"orgId" : localStorage.getItem("orgId")
	      }
      }
      loadSearch(searchList).then(data=>{
        console.log("检查",data)
        // localStorage.setItem("isPromoterSetId",data.data.promoterSet.promoterSetId)
      })

      },
      onEditorReady(editor) { // 准备编辑器
 
      },
      onEditorBlur(){}, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件

      // 点击复制按钮：
      onCopy () {
      this.$message({
        message: `复制成功！`,
        type: 'success'
      });
      this.snackBar.info(this.$t('prompt.copySuccess'))
      },
      onError () {
        this.$message.error(this.$t('prompt.copyFail'))
      },


      // 点击保存按钮：
      godown(){
        
        if(this.value1==true){
          this.isOrdinary=1;
        }else{
          this.isOrdinary=0;
        }
        
        if(this.value2==true){
          this.isHighLevel=1;
        }else{
          this.isHighLevel=0;
        }
        // alert(this.isHighLevel)
        if(this.isPromoterSetId){
          console.log(typeof(this.isPromoterSetId))
          // alert("更新")
          if(this.value1==true){
          this.isOrdinary=1;
          }else{
            this.isOrdinary=0;
          }

          if(this.value2==true){
            this.isHighLevel=1;
          }else{
            this.isHighLevel=0;
          }
          var updateList={
          	"promoterSet" : {
          		"promoterSetId":this.isPromoterSetId,
          		"isOrdinary" : this.isOrdinary,
          		"isHighLevel" : this.isHighLevel,
          		"promotingMethod" : "",
          		"promotingContent" : "",
          		"ordinaryPeriod" : this.input1,
          		"highLevelPeriod" : this.input2,
          		"isInvite" : "",
              "isApproval" : "",
              "orgId":localStorage.getItem("orgId"),
          	},
          	"promoterRecruit" : {
          		"recruitId" : this.recruitId,
          		"isRecruit" : "",
          		"title" : this.input3,
          		"description" : this.textarea
          	}
          }
          updateSettings(updateList).then(data=>{
            console.log("更新设置",data)
          })
        }else{
          // alert("新增")
          var newSet={
          	"promoterSet" : {
          		"isOrdinary" : this.isOrdinary,
          		"isHighLevel" : this.isHighLevel,
          		"promotingMethod" : "",
          		"promotingContent" : "",
          		"ordinaryPeriod" : this.input1,
          		"highLevelPeriod" : this.input2,
          		"isInvite" : "",
          		"isApproval" : "",
          		"orgId" :localStorage.getItem("orgId")
          	},
          	"promoterRecruit" : {
          		"isRecruit" : "",
          		"title" : this.input3,
          		"description" : this.textarea
          	}
          }
          newSettings(newSet).then(data=>{
            console.log("新增设置",data,data.data.promoterSetId)
            this.isPromoterSetId=data.data.promoterSetId
            this.recruitId=data.data.recruitId
          })
        }
      }
    },
    created(){
      let orgId=localStorage.getItem("orgId")
      this.link=`http://gzh.1010psy.com/addSubordinate?orgId=${orgId}`
      var searchList={
	      "promoterSet" : {
	      	"orgId" :localStorage.getItem("orgId")
	      }
      }
      loadSearch(searchList).then(data=>{
        console.log("初始化查询",data)
        if(data.data.promoterSet.promoterSetId){
          console.log(data.data.promoterSet.promoterSetId)
          this.isPromoterSetId=data.data.promoterSet.promoterSetId
          this.recruitId=data.data.promoterRecruit.recruitId
        }
      })
      // alert(localStorage.getItem("isPromoterSetId"))
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        
    },
    mounted(){
      setTimeout(() => {
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("el-tabs__content")[0].style.height = (h - 70-60) + "px";
   
      }, 500);

     
    }
  };
</script>

<style lang="scss" scoped>
.shezhi{
  width: 98%;
  // height: 1500px;
  // background-color: pink;
  margin-top:15px;
  overflow: auto !important;
  .bg{
    width: 4px;
    height: 20px;
    background-color: #0076FF;
    float:left;
    margin-right:9px;
  }
  .title{
    font-size:16px;
  }
  .jiben{
    width: 100%;
    height: 70px;
    margin-bottom:10px;
    .el-switch{
      margin-left:210px;
    }

    .jiben-usual{
      margin-top:15px;
      font-size:14px;
      color:#222222;
    }
    .jiben-high{
      margin-top:15px;
      font-size:14px;
      color:#222222;
    }
  }
  .usual{
    margin-top:15px;
    width: 100%;
    height: 170px;
    .usual-title{
      font-size:16px;
      margin-bottom:15px;
    }
    .usualbox{
        .usual-left{
          width: 300px;
          height: 50px;
          float:left;
          color:#222222;
          font-size:14px;
        }
        .usual-right{
          width: 600px;
          height: 50px;
          float:left;
          .usual-day{
            width: 180px;
            margin-right:10px;
            margin-top:5px;
          }
          .desc{
            font-size:12px;
            color:#666666;
          }
        }
      }
  }
  .high{
    margin-top:15px;
    width: 100%;
    height: 200px;
    .high-title{
      font-size:16px;
      margin-bottom:15px;
    }
    .highbox{
        .high-left{
          width: 300px;
          height: 50px;
          float:left;
          color:#222222;
          font-size:14px;
        }
        .high-right{
          width: 600px;
          height: 50px;
          float:left;
          // color:red;
           .high-day{
            width: 180px;
            margin-right:10px;
            margin-top:5px;
          }
          .desc{
            font-size:12px;
            color:#666666;
          }
          .desc-bottom{
            font-size:12px;
            color:#666666;
            margin-top:-8px;
          }
        }
      }
  }
  .zhaomu{
    .zhaomu-title{
      font-size:16px;
    }
    .lianjie{
      margin-top:15px;
      width: 100%;
      height: 50px;
      .lianjie-left{
        width: 300px;
        height: 50px;
        float:left;
        color:#222222;
        font-size:14px;
      }
      .lianjie-right{
        float:left;
        color:#222222;
        font-size:15px;
        span{
          padding:5px 10px 5px 10px;
          display: block;
          border:1px solid #ededed;
          border-radius: 3px;
          float:left;
          margin-right:10px;
          margin-top:2px;
        }
      }
    }
    .ymbt{
      width: 100%;
      height: 50px;
      margin-top:10px;
      span{
        display: block;
        width: 300px;
        height: 50px;
        float:left;
        color:#222222;
        font-size:14px;
      }
      .ymbt-input{
        float:left;
        width: 200px;
        height: 50px;
      }
    }
    .xqms{
      width: 100%;
      height: 800px;
      position: relative;
      margin-top:10px;
      overflow: hidden;
      span{
        display: block;
        width: 300px;
        height: 400px;
        float:left;
        color:#222222;
        font-size:14px;
      }
      .xqms-textarea{
        width: 500px;
        float:left;
        position: relative;                                                     
      }
      .sure{
        margin-top:300px;
      }
    }
  }
}
</style>
<style>
.el-tabs__content{
  height: 800px;
  overflow: auto !important;
}
</style>






