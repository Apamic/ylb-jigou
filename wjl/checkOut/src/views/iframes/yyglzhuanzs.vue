<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="转诊审批人" name="first">
                                <el-alert type="warning">
                                    <p>1.审批人会在医联邦APP收到上转或下转的通知并进行处理</P>
                                    <p>2.多个客服人员按照饱和度进行分配，新接入的客户，分配到当前饱和度最低的客服 , 若多个客服饱和度相同随机分配 【接待饱和度 = （已接待人数 / 100）%】</P>
                                    <p>3.离线的客服不能接受到客服消息，超过1分钟未被接待的客户自动转接到其他客服，如客服都未上线则客服对话转接到第1个人客服人员</P>
                                </el-alert>
                                <el-row class="tou-btn">
                                    <el-button type="primary" @click="dialogFormVisible = true">
                                        添加审批人
                                    </el-button>   
                                    <el-button>删除</el-button>
                                </el-row>
                                <!--添加审批人弹出框  开始--------------------------------------->
                                <div class="tanckbig">
                                    <el-dialog title="添加审批人" :visible.sync="dialogFormVisible">
                                        <div class="sskuang">
                                            <span>医生：</span>
                                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                                <el-button slot="append">查询</el-button>
                                            </el-input>
                                        </div>
                                        <div class="hxmbiaoge2">
                                            <el-table ref="multipleTable" :data="tableData8"  tooltip-effect="dark"
                                            style="width: 100%" >
                                                <el-table-column prop="namysbh"  label="医生编号" width="180px">
                                                </el-table-column>
                                                <el-table-column prop="namxingming"  label="姓名">
                                                </el-table-column>
                                                <el-table-column prop="namxinzjb"  label="行政级别" >
                                                </el-table-column> 
                                                <el-table-column prop="namkeshi"  label="科室" >
                                                </el-table-column>
                                                <el-table-column prop="namzhichen"  label="职称" >
                                                </el-table-column>
                                                
                                                <el-table-column  label="操作" width="100"> 
                                                    <el-button type="text" @click="dialogFormVisible = true" size="small">添加</el-button>
                                                </el-table-column>
                                            </el-table>
                                        </div>
                                        <div slot="footer" class="dialog-footer fenye">
                                            <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[10, 20]"
                                                :page-size="10"
                                                layout="total, sizes, prev, pager, next, jumper"
                                                :total="16">
                                            </el-pagination>  
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
                                        <el-table-column prop="namxingming"  label="姓名" >
                                        </el-table-column>
                                        <el-table-column prop="namkeshi"  label="科室" >
                                        </el-table-column>
                                        <el-table-column prop="namzhichen"  label="职称" >
                                        </el-table-column>
                                        <el-table-column prop="namxinzjb"  label="行政级别" >
                                        </el-table-column>
                                        <el-table-column prop="namdangqzt"  label="当前状态" >
                                        </el-table-column>
                                        
                                        <el-table-column  label="操作" width="100"> 
                                            <el-button type="text" @click="dialogFormVisible = true" size="small">分配</el-button>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>

                            <el-tab-pane class="zhuanztj" label="转诊统计">
                                <el-tabs v-model="activeName1" type="card" @tab-click="handleClick" name="first">
                                    <el-tab-pane label="转诊总览" name="first">
                                        <div class="zhuanztitle">科室转诊明细统计</div>
                                        <div class="zhuanzmxbiao">
                                            <el-table  :data="tableData"  style="width: 100%"  :default-sort = "{prop: 'date', order: 'descending'}" >
                                                <el-table-column type="index" label="序号"> </el-table-column>
                                                <el-table-column property="namkeshi" label="科室"></el-table-column>
                                                <el-table-column  prop="numzcsz" label="转出(上转)次数" sortable width="140"></el-table-column>
                                                <el-table-column  prop="numzcxz" label="转出(下转)次数" sortable width="140"></el-table-column>
                                                <el-table-column  prop="numzrsz" label="转入(上转)次数" sortable width="140"></el-table-column>
                                                <el-table-column  prop="numzrxz" label="转入(下转)次数" sortable width="140"></el-table-column>
                                            </el-table>
                                            <div slot="footer" class="dialog-footer fenye">
                                                <el-pagination
                                                    @size-change="handleSizeChange"
                                                    @current-change="handleCurrentChange"
                                                    :current-page="currentPage4"
                                                    :page-sizes="[10, 20]"
                                                    :page-size="10"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="16">
                                                </el-pagination>  
                                            </div>
                                        </div>
                                        <div class="zhuanztitle m-t-20">医生转诊明细统计</div>
                                        <div class="zhuanzmxbiao">
                                            <el-table  :data="tableData"  style="width: 100%"  :default-sort = "{prop: 'date', order: 'descending'}" >
                                                <el-table-column type="index" label="序号"> </el-table-column>
                                                <el-table-column property="namyisheng" label="医生"></el-table-column>
                                                <el-table-column  prop="numzcsz" label="转出(上转)次数" sortable width="140"></el-table-column>
                                                <el-table-column  prop="numzcxz" label="转出(下转)次数" sortable width="140"></el-table-column>
                                                <el-table-column  prop="numzrsz" label="转入(上转)次数" sortable width="140"></el-table-column>
                                                <el-table-column  prop="numzrxz" label="转入(下转)次数" sortable width="140"></el-table-column>
                                            </el-table>
                                            <div slot="footer" class="dialog-footer fenye">
                                                <el-pagination
                                                    @size-change="handleSizeChange"
                                                    @current-change="handleCurrentChange"
                                                    :current-page="currentPage4"
                                                    :page-sizes="[10, 20]"
                                                    :page-size="10"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="16">
                                                </el-pagination>  
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="转诊明细" name="second">
                                        <ul class="zhuanzmxul ulli4">
                                            <li>
                                                <p>总转诊数</p>
                                                <h2>862</h2>
                                            </li>
                                            <li>
                                                <p>上转数量</p>
                                                <h2>1536</h2>
                                            </li>
                                            <li>
                                                <p>下转数量</p>
                                                <h2>862</h2>
                                            </li>
                                            <li>
                                                <p>转诊平均耗时</p>
                                                <h2>862</h2>
                                            </li>
                                        </ul>
                                        <div class="zhuanzmxbiao m-t-20">
                                            <el-table  :data="tableData1"  style="width: 100%"  :default-sort = "{prop: 'date', order: 'descending'}" >
                                                <el-table-column type="index" label="序号"> </el-table-column>
                                                <el-table-column property="namyisheng" label="医生"></el-table-column>
                                                <el-table-column  prop="datezzsj" label="转诊时间" sortable width="140"></el-table-column>
                                                <el-table-column property="namzzfx" label="转诊方向"></el-table-column>
                                                <el-table-column property="namhuanzhe" label="患者"></el-table-column>
                                                <el-table-column property="namzcyy" label="转出医院"></el-table-column>
                                                <el-table-column property="namzcys" label="转出医生"></el-table-column>
                                                <el-table-column property="namzcks" label="转出科室"></el-table-column>
                                                <el-table-column property="namzryy" label="转入医院"></el-table-column>
                                                <el-table-column property="namzrks" label="转入科室"></el-table-column>
                                                <el-table-column property="namzhuangtai" label="状态"></el-table-column>
                                                <el-table-column property="datezzhs" label="转诊耗时"></el-table-column>  
                                            </el-table>
                                            <div slot="footer" class="dialog-footer fenye">
                                                <el-pagination
                                                    @size-change="handleSizeChange"
                                                    @current-change="handleCurrentChange"
                                                    :current-page="currentPage4"
                                                    :page-sizes="[10, 20]"
                                                    :page-size="10"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="16">
                                                </el-pagination>  
                                            </div>
                                        </div>
                                    </el-tab-pane>  
                                </el-tabs>
                                
                                <template >
                                    <div class="zhuanztjt">             
                                        <el-radio-group v-model="radio1">
                                            <el-radio-button label="今日"></el-radio-button>
                                            <el-radio-button label="本周"></el-radio-button>
                                            <el-radio-button label="本月"></el-radio-button>
                                            <el-radio-button label="全年"></el-radio-button>
                                        </el-radio-group>
                                        <el-date-picker
                                            v-model="value1"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                </template>
                                    
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
            radio1: '今日',
            value1: '',
            currentPage4: 4,
            input3: '',
            dialogTableVisible: false,
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
                },
            tableData1:[
                {
                namyisheng:'张医生',
                datezzsj:'2019-07-10',
                namzzfx:'上转↑',
                namhuanzhe:'刘军',
                namzcyy:'天台分院',
                namzcys:'张玲',
                namzcks:'外科',
                namzryy:'峨眉山分院',
                namzrks:'外科',
                namzhuangtai:'转诊中',
                datezzhs:'00:23:43',
                },
                {
                namyisheng:'黄医生',
                datezzsj:'2019-08-25',
                namzzfx:'下转↓',
                namhuanzhe:'王美玲',
                namzcyy:'武汉同济',
                namzcys:'黄芳',
                namzcks:'妇产科',
                namzryy:'孝感医院',
                namzrks:'妇产科',
                namzhuangtai:'已完成',
                datezzhs:'00:40:12',
                }
            ],
            tableData: [{
                namyisheng:'张医生',
                namkeshi:'肿瘤科',
                numzcsz:'3',
                numzcxz:'6',
                numzrsz:'2',
                numzrxz:'8',
                }, 
                {
                namyisheng:'黄医生',
                namkeshi:'内科',
                numzcsz:'5',
                numzcxz:'7',
                numzrsz:'1',
                numzrxz:'2',
                }, 
                {
                namyisheng:'李医生',
                namkeshi:'外科',
                numzcsz:'5',
                numzcxz:'9',
                numzrsz:'1',
                numzrxz:'3',
                }, 
                {
                namyisheng:'王医生',
                namkeshi:'内科',
                numzcsz:'3',
                numzcxz:'6',
                numzrsz:'2',
                numzrxz:'8',
                }
            ],
            tableData4:
            [
                {
                namxingming:'张三',
                namkeshi:'新生儿科',
                namzhichen:'助理医师',
                namxinzjb:'主任',
                namdangqzt:'离线',
                },
                {
                namxingming:'李四',
                namkeshi:'妇产科',
                namzhichen:'助理医师',
                namxinzjb:'无级别',
                namdangqzt:'在线',
                }
            ],
            tableData8:[
            {
            namysbh:'20190810',
            namxingming:'李四',
            namkeshi:'妇产科',
            namzhichen:'助理医师',
            namxinzjb:'无级别',
            },
            {
            namysbh:'20190722',
            namxingming:'张三',
            namkeshi:'妇产科',
            namzhichen:'助理医师',
            namxinzjb:'无级别',
            }
            ],
       
          count: 1,
            //tab切换方法默认第二个
            activeName: 'first',
            activeName1: 'first',
            dialogFormVisible: false, 
        };
    },
    methods: {
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
        ygglxinj(){
            this.$router.push("/ygglxinj")
        },
      onSubmit() {
        console.log('submit!');
      },
     
      handleNodeClick(data) {
        console.log(data);
      },
      formatter(row, column) {
        return row.address;
      },
      //tab切换方法
      handleClick(tab, event) {
        console.log(tab, event);
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
