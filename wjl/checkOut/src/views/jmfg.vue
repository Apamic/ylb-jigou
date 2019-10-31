<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div id="box">
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="医院主页" name="first">
                        <div class="pershow">
                            医院主页预览
                        </div>
                        <el-button class="zhuangxiu" type="primary">装修医院页面</el-button>
                    </el-tab-pane>
                    <el-tab-pane label="微页面" name="second">
                        <el-button class="button" type="primary" @click="newpaper">新建微页面</el-button>
                        <div class="cr-tr">
                            <div class="name">页面名称</div>
                            <div class="time">添加时间</div>
                            <div class="opr">操作</div>
                        </div>
                        <div class="cr-td">
                            <div class="name">首页</div>
                            <div class="time">2019-03-01 08:45:01</div>
                            <div class="opr">
                                <span>编辑</span>
                                <span>设为主页</span>
                                <span>分享</span>
                                <span>复制</span>
                            </div>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="店铺导航" name="third">
                        <daohang></daohang>
                    </el-tab-pane>
                  </el-tabs>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import commonHe from '../components/commonHe'
import daohang from '../components/Administration/style/daohang'
export default {
    data() {
      return {
        activeName: 'third'
      };
    },
    components:{
        commonHe,
        daohang
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      newpaper(){
          this.$router.push("/style/newpaper")
      }
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 205) + "px";
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 110) + "px";
    }
}
</script>
<style lang="scss" scoped>
$left-width:300px;
.style-box{
    background:rgba(245,245,245,1);
    // height: 200px;
    position: absolute;
    left:200px;
    top:68px;
    overflow-y: auto;
    #box{
        margin-top:24px;
        margin-left:18px;
        background-color: #fff;
        padding-left:20px;
        padding-right:20px;
        padding-top:15px;
        // overflow-y: auto;
        .pershow{
            width: 246px;
            height: 456px;
            color:#646161;
            border:1px solid #ededed;
            float:left;
            background:rgba(237,237,237,1);
            text-align: center;
            line-height: 526px;
        }
        .zhuangxiu{
            margin-left:20px;
        }
        .cr-tr{
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            line-height: 60px;
            background-color: #ededed;
            margin-top:10px;
            div{
                // width: 28%;
                // background-color: pink;
            }
            .name{
                margin-left:20px;
                width: 28%;
            }
            .time{
                width: 30%;
            }
            .opr{
                text-align: right;
                padding-right:20px;
                width: 20%;
            }
        }
        .cr-td{
            width: calc(100%-#{2px});
            height: 60px;
            display: flex;
            justify-content: space-between;
            line-height: 60px;
            // background-color: #ededed;
            border-left:1px solid #ededed;
            border-right:1px solid #ededed;
            border-bottom:1px solid #ededed;
            // margin-left:-2px;
            div{
                // width: 28%;
                // background-color: pink;
            }
            .name{
                margin-left:20px;
                width: 28%;
            }
            .time{
                width: 30%;
            }
            .opr{
                text-align: right;
                padding-right:20px;
                width: 20%;
                span{
                    color:#0076FF;
                    margin-left:5px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>


