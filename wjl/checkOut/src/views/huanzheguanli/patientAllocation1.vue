<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="未非配患者" name="first">
                                <el-row class="tou-btn">
                                    <div class="xuanzhong-btn">
                                        <el-button type="text" @click="dialogFormVisible = true">
                                            <div class="xuanzhong-btn">批量分配医生</div>
                                        </el-button>   
                                    </div>
                                    <el-button><router-link to="/huanzdr">患者导入</router-link></el-button>
                                </el-row>
                                <!--分配医生弹出框  开始--------------------------------------->
                                <div class="tanckbig">
                                    <el-dialog title="分配医生" :visible.sync="dialogFormVisible">
                                        <div class="sskuang">
                                            <span>医生：</span>
                                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                                <el-button slot="append">查询</el-button>
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
                                                <el-table-column prop="num0"  label="医生编号" width="180px">
                                                </el-table-column>
                                                <el-table-column prop="name0"  label="昵称" >
                                                </el-table-column>
                                                <el-table-column prop="name1"  label="姓名" width="110px">
                                                </el-table-column>
                                                <el-table-column prop="num1"  label="身份证号" width="180px">
                                                </el-table-column>
                                                <el-table-column prop="name2"  label="科室" >
                                                </el-table-column>
                                                <el-table-column prop="name3"  label="职称" >
                                                </el-table-column>
                                                <el-table-column prop="num3"  label="已分配患者数" width="120px">
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
                                    <el-table ref="multipleTable" :data="tableData4"  tooltip-effect="dark"
                                    style="width: 100%" >
                                        <el-table-column prop="name" type="selection"  width="20">
                                            <template slot-scope="scope">
                                                <el-checkbox :checked="scope.row.isKey== 1"/>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="num0"  label="序号" >
                                        </el-table-column>
                                        <el-table-column prop="name0"  label="真实姓名" >
                                        </el-table-column>
                                        <el-table-column prop="num1"  label="生日" width="120px">
                                        </el-table-column>
                                        <el-table-column prop="sex"  label="性别" >
                                        </el-table-column>
                                        <el-table-column prop="num2"  label="手机号" width="150px">
                                        </el-table-column>
                                        <el-table-column prop="name1"  label="是否已注册" width="110px">
                                        </el-table-column>
                                        <el-table-column prop="name2"  label="来源" >
                                        </el-table-column>
                                        <el-table-column prop="num3"  label="添加时间" width="120px">
                                        </el-table-column>
                                        <el-table-column  label="操作" width="100"> 
                                            <el-button type="text" @click="dialogFormVisible = true" size="small">分配</el-button>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>

                            <el-tab-pane class="tsks-table" label="已分配患者" name="second">
                                <el-row class="tou-btn">
                                    <div class="xuanzhong-btn">
                                        <el-button type="text" @click="dialogFormVisible1 = true">
                                            <div class="xuanzhong-btn">批量分配医生</div>
                                        </el-button>   
                                    </div>
                                </el-row>
                                 <!--分配医生弹出框  开始--------------------------------------->
                                <div class="tanckbig">
                                    <el-dialog title="分配医生" :visible.sync="dialogFormVisible1">
                                        <div class="sskuang">
                                            <span>医生：</span>
                                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                                <el-button slot="append">查询</el-button>
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
                                                <el-table-column prop="num0"  label="医生编号" width="180px">
                                                </el-table-column>
                                                <el-table-column prop="name0"  label="昵称" >
                                                </el-table-column>
                                                <el-table-column prop="name1"  label="姓名" width="110px">
                                                </el-table-column>
                                                <el-table-column prop="num1"  label="身份证号" width="180px">
                                                </el-table-column>
                                                <el-table-column prop="name2"  label="科室" >
                                                </el-table-column>
                                                <el-table-column prop="name3"  label="职称" >
                                                </el-table-column>
                                                <el-table-column prop="num3"  label="已分配患者数" width="120px">
                                                </el-table-column>
                                            </el-table>
                                        </div>
                                        <div slot="footer" class="dialog-footer">
                                            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                                            <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                                        </div>  
                                    </el-dialog>
                                </div>
                                <!--分配医生弹出框  结束-------------------------------------->

                                <div class="hxmbiaoge2">
                                    <el-table ref="multipleTable" :data="tableData5"  tooltip-effect="dark"
                                    style="width: 100%" >
                                        <el-table-column prop="name" type="selection"  width="20">
                                            <template slot-scope="scope">
                                                <el-checkbox :checked="scope.row.isKey== 1"/>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="num0"  label="序号" >
                                        </el-table-column>
                                        <el-table-column prop="name0"  label="真实姓名" >
                                        </el-table-column>
                                        <el-table-column prop="num1"  label="生日" width="120px">
                                        </el-table-column>
                                        <el-table-column prop="sex"  label="性别" >
                                        </el-table-column>
                                        <el-table-column prop="num2"  label="手机号" width="150px">
                                        </el-table-column>
                                        <el-table-column prop="name1"  label="是否已注册" width="110px">
                                        </el-table-column>
                                        <el-table-column prop="name3"  label="分配医生" width="120px">
                                        </el-table-column>
                                        <el-table-column prop="name2"  label="来源" >
                                        </el-table-column>
                                        <el-table-column prop="num3"  label="添加时间" width="120px">
                                        </el-table-column>
                                        <el-table-column  label="操作" width="100"> 
                                            <el-button type="text" size="small">添加分配</el-button>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
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
        //批量分配医生弹出框里面的医生输入框的值
        input3: '',

        //弹出对话框显示与否
        dialogFormVisible: false,
        
        //已分配患者批量分配医生弹框显示与否
        dialogFormVisible1: false,

        //未分配患者表格
        tableData4:[
        {
         name:'',
         num0:'1',
         name0:'张三',
         num1:'1990/08/26',
         sex:'男',
         name1:'是',
         name2:'正常',
         num2:'158987793705',
         num3:'2019-6-26',
        },
        {
         name:'',
         num0:'2',
         name0:'李四',
         num1:'1987/12/05',
         sex:'女',
         name1:'否',
         name2:'不正常',
         num2:'13898281990',
         num3:'2019-07-02',
        }
        ],

        //已分配患者表格
        tableData5:[
        {
         name:'',
         num0:'1',
         name0:'张三',
         num1:'1990/08/26',
         sex:'男',
         name1:'是',
         name2:'正常',
         num2:'158987793705',
         num3:'2019-6-26',
         name3:'李四等3人',
        },
        {
         name:'',
         num0:'2',
         name0:'李四',
         num1:'1987/12/05',
         sex:'女',
         name1:'否',
         name2:'不正常',
         num2:'13898281990',
         num3:'2019-07-02',
         name3:'张三等2人',
        }
        ],

        //批量分配医生弹出界面里的表格
        tableData8:[
        {
         name:'',
         num0:'4324524557654',
         name0:'黄点点',
         name1:'黄若馨',
         num1:'420921198723908765',
         name2:'外科',
         name3:'主任',
         num3:'265',
        },
        {
         name:'',
         num0:'563456',
         name0:'啊云',
         name1:'马云',
         num1:'420921198712055727',
         name2:'脑科',
         name3:'教授',
         num3:'666666',
        }
        ],
          count: 1,
            //tab切换方法默认第二个
            activeName: 'first',  
        };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },

      //tab切换方法
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        commonHe
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
 </style>
