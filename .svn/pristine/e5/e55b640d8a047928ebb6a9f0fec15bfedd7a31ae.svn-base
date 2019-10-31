<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym yyglsz-ym">
                        <div class="yyglsz-t">
                            <el-button type="primary">添加人员</el-button>
                            <el-button class="mrbtn">删除</el-button>
                            <el-button class="mrbtn">排序</el-button>  
                        </div>
                        <div class="yyglsz-table">
                            <el-table  :data="tableData" style="width: 100%" @selection-change="">
                                <el-table-column  type="selection"  width="30">
                                </el-table-column>
                                <el-table-column prop="shichang" label="时长(分钟)">
                                </el-table-column>
                                <el-table-column label="操作"  width="100">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small">编辑</el-button>
                                        <el-button type="text" size="small">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
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
            tableData: [{
            shichang: '10',
          }, {
           shichang: '20',
          }, {
            shichang: '5',
          }, {
            shichang: '30',
          }],
          multipleSelection: [],
        };
    },
    methods: {
     
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
.style-box{
    background:rgba(245,245,245,1);
    position: absolute;
    left:200px;
    top:68px;
    overflow-y: auto;
}
.xjks-k .el-dialog__footer{background:#fff; width:100%; float:left;}
.xjks-k .dialog-footer{ margin:auto; width:260px;   padding-left: 40px;}
 </style>
