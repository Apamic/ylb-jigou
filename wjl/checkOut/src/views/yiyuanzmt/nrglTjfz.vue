<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <div class="tishikuang tishikuang2">
                            <div class="tishikz">
                                <h2>育儿知识</h2>
                                <p>创建时间: 2018-12-23 12:23:12</p>
                            </div>
                            <div class="tishiky">
                                <el-button type="text" size="small">编辑</el-button>
                                <el-button type="text" size="small">分享</el-button>
                                <el-button type="text" size="small">删除</el-button>
                            </div>
                        </div>
                                <el-row class="tou-btn">
                                    <div class="xuanzhong-btn">
                                        <el-button type="text" @click="dialogFormVisible = true">
                                            <div class="xuanzhong-btn">添加文章</div>
                                        </el-button>   
                                    </div>
                                    <div class="sousuo1">
                                        <el-input v-model="formInline.user" placeholder="请输入医生姓名"></el-input>
                                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                                    </div>  
                                </el-row>

                                <!--添加文章弹出框  开始--------------------------------------->
                                <div class="tanckbig">
                                    <el-dialog title="添加文章" :visible.sync="dialogFormVisible">
                                        <div class="sskuang">
                                            <el-input placeholder="请输入文章标题"  class="input-with-select">
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div>
                                        <div class="hxmbiaoge2">
                                            <el-table ref="multipleTable" :data="tableData8"  tooltip-effect="dark"
                                            style="width: 100%" >
                                                <el-table-column prop="name" type="selection"  width="20">
                                                    <template slot-scope="scope">
                                                        <el-checkbox :checked="scope.row.isKey== 1"/>
                                                    </template>
                                                </el-table-column>
                                                <el-table-column prop="name"  label="文章名称" >
                                                </el-table-column>
                                                <el-table-column prop="date"  label="发布时间" width="160px">
                                                </el-table-column>
                                            </el-table>
                                        </div>
                                        <div slot="footer" class="dialog-footer">
                                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                        </div>  
                                    </el-dialog>
                                </div>
                                <!--分配医生弹出框  结束-------------------------------------->

                                <div class="hxmbiaoge2">
                                    <el-table ref="multipleTable" :data="tableData7"  tooltip-effect="dark"
                                    style="width: 100%" >
                                        <el-table-column  type="index" label="排序"  width="50">
                                        </el-table-column>
                                        <el-table-column prop="name"  label="商品名称" >
                                        </el-table-column>
                                        <el-table-column prop="name"  label="文章分类" width="100">
                                        </el-table-column>
                                        <el-table-column prop="name"  label="状态" width="100">
                                        </el-table-column>
                                        <el-table-column  label="操作" width="220">  
                                            <template slot-scope="scope">
                                            <el-button type="text" size="small">排序</el-button>
                                                <el-button
                                                @click.native.prevent="deleteRow(scope.$index, tableData)"
                                                type="text"
                                                size="small">
                                                移出分组
                                                </el-button>
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
        dialogFormVisible: false,
         tableData8:[
        {
         name:'这里是文章名称',
         date:'2019-02-12 13:12:01',
        
        },
        {
         name:'这里是文章名称2',
         date:'2019-02-12 13:12:01',
        }
        ],
            tableData7:
        [
        {
         name:'儿科专家',
         num1:'8',
         date:'2018-12-23 12:23:12',
        },
        {
         name:'名医医生',
         num1:'6',
         date:'2018-12-23 12:23:12',
        }
        ],
        formInline: {
          user: '',
          region: ''
        },
        };
    },
    methods: {
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
       onSubmit() {
        console.log('submit!');
      },
     
      handleNodeClick(data) {
        console.log(data);
      },
     
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
