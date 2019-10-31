<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <div class="buzhout">
                            <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                                <el-step title="1.上传患者数据" ></el-step>
                                <el-step title="2.上传成功" ></el-step>
                            </el-steps>
                        </div>
                        <div class="buzhouw">
                            <div style="height: 200px;">
                                <el-steps direction="vertical" :active="1">
                                    <el-step title="步骤 1" description="下载员会员导入模版，批量填写会员信息"></el-step>
                                    <el-step title="步骤 2" description="上传填写好的会员信息表"></el-step>
                                </el-steps>
                            </div>
                            <div class="buzhouwbtn1">
                                <el-button type="primary">下载</el-button>
                            </div>
                            <div class="buzhouwbtn2">
                                <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-change="handleChange"
                                :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </div>
                        </div>
                        <div class="shangchuanbtn">
                            <el-button  @click="next" type="primary"><router-link to="/huanzdr1">确定上传</router-link></el-button>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
    </div>
</template>

<script>
import commonHe from '../../components/commonHe'
export default {
    data(){
        return{
            //以下是步骤点击下一步的效果
            active: 0,
             //以上是步骤点击下一步的效果
            fileList: [],
        };
    },
    methods: {
        //以下是步骤点击下一步的效果
        next() {
        if (this.active++ > 2) this.active = 0;
      },
      //以上是步骤点击下一步的效果
        handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
     
    },
    components:{
        commonHe
    },
    created(){
        this.userId=localStorage.getItem("userId")
        // alert(this.userId)
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 120) + "px";
    }

}
</script>
<style lang="scss">
 @import '../../styles/hxmstyle.css';
 $left-width:300px;
.style-box{ background:rgba(245,245,245,1); position: absolute; left:200px; top:68px; overflow-y: auto;}
.xjks-k .el-dialog__footer{background:#fff; width:100%; float:left;}
.xjks-k .dialog-footer{ margin:auto; width:260px;   padding-left: 40px;}


.buzhout .el-step.is-simple .is-success{background-color: #0076ff; max-width: inherit;  padding-left:20px;  color: #fff; height: 40px; line-height: 40px;}
.buzhouw{margin-top: 30px; position:relative; padding-bottom:30px;}
.buzhout .el-steps--simple{ padding: 0; background-color: transparent;}
.buzhout .el-step.is-simple{ width: 50%;}
.buzhout .el-step__head.is-success{ color: #fff; height: 40px; line-height: 40px;     border-color: #fff;}
.buzhout .el-step.is-simple .el-step__icon{margin-top: 12px;}
.buzhout .is-simple.is-flex{background-color: #eef0f2; margin-left: 20px;}
.buzhout .el-step.is-simple .el-step__head{ height: 40px;}
.buzhout .el-step__title.is-success{position: relative;}
.buzhout .el-step.is-simple .el-step__main{flex-grow: inherit; width: 100%;}
.buzhout .el-step.is-simple:not(:last-of-type) .el-step__title{ max-width: auto !important;}
.buzhout .el-step .el-step__title.is-success{ padding-left: 0; padding-right: 30px;}
.buzhout .el-step.is-simple .el-step__main:before{content: ''; display: none; border-top: 20px solid #50abe4; border-bottom: 20px solid #50abe4; border-left: 20px solid #35749b; position: absolute; left: 0px; top: 0; }
.buzhout .el-step.is-simple .el-step__main{background-color: #0076ff;}
.buzhout .is-simple.is-flex .el-step__main{background-color: #eef0f2;}
.buzhout .is-simple .el-step__main:after{content: ''; display: block; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 20px solid #0076ff; background-color: #fff; position: absolute; right: -20px; top: 0; z-index: 10;}
.buzhout .is-simple.is-flex .el-step__main:after{display: none;}
.buzhout .el-step.is-simple .el-step__arrow{ display: none;}
.buzhout .el-step__title.is-process{height: 40px; line-height: 40px; font-weight: normal;}
.buzhout .is-simple.is-flex:before{content: '';  display: block; border-top: 20px solid #eef0f2; border-bottom: 20px solid #eef0f2; border-left: 20px solid #fff; position: absolute; left: 0px; top: 0;}
.buzhout .el-step__head.is-process{ padding-left: 50px;}

.buzhouw .el-button{height: 32px; line-height: 32px;  margin-top:20px; width: 100px; text-align: center; padding: 0;}
.buzhouwbtn1{ position: absolute; left:270px; top:0;}
.buzhouwbtn2{ position: absolute; left:200px; top:150px; }
.buzhouwbtn2 .el-button{font-size: 14px;}
.shangchuanbtn{position: absolute; width: 160px; height: 40px; bottom: 80px; left: 50%; margin-left: -80px;}
.shangchuanbtn .el-button{width: 160px; height: 40px; line-height: 40px; padding: 0; font-size: 16px;}
.shangchuanbtn .el-button a{color: #fff;}


 </style>
