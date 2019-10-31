<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <div class="buzhout buzhout1">
                            <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                                <el-step title="1.上传患者数据" ></el-step>
                                <el-step title="2.上传成功" ></el-step>
                            </el-steps>
                        </div>
                        <div class="chengongtishi m-t-10"><p>请给该员工勾选可使用的应用，如需更多应用请到</p></div>
                        <div class="hxmbiaoge2">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="num0"  label="序号"> </el-table-column>
                                <el-table-column prop="name" label="真实姓名"> </el-table-column>
                                <el-table-column prop="date"  label="生日  width="180" </el-table-column>
                                <el-table-column prop="name1"  label="性别"> </el-table-column>
                                <el-table-column prop="num1"  label="手机号"  width="180"> </el-table-column>
                                <el-table-column prop="name2"  label="来源"> </el-table-column>
                            </el-table>
                        </div>

                        <div class="shangchuanbtn">
                            <el-button  @click="next" type="primary"><router-link to="/huanzdr">继续上传</router-link></el-button>
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
            tableData: [{
            num0:'1',
            num1:'13638907228',
            date: '2009-10-11',
            name: '王小虎',
            name1: '男',
            name2: '网络',
          }, {
            num0:'2',
            num1:'15898372767',
            date: '2006-03-08',
            name: '胖丫',
            name1: '女',
            name2: '微信扫一扫',
          }],
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

.chengongtishi{background-color: #f4fff3; margin-bottom: 10px; border: solid 0.5px #8ae46f; color: #70c068; font-size: 14px; font-weight: normal;}
.chengongtishi p{padding:10px; margin: 0;}
.chengongtishi a{padding-left: 10px; color: #409EFF;}

 </style>
