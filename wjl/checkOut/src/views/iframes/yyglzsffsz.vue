<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym yysz-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="客服设置" name="first">
                                <el-alert type="warning">
                                    <p>1.列表中的人员处理被设置为知识付费商品的客服人员</P>
                                    <p>2.多个客服人员按照饱和度进行分配，新接入的客户，分配到当前饱和度最低的客服 , 若多个客服饱和度相同随机分配 【接待饱和度 = （已接待人数 / 100）%】</P>
                                    <p>3.离线的客服不能接受到客服消息，超过1分钟未被接待的客户自动转接到其他客服，如客服都未上线则客服对话转接到第1个人客服人员</P>
                                </el-alert>
                                <el-row class="tou-btn">
                                    <el-button type="primary" @click="dialogFormVisible = true">
                                        添加助理客服
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
            value1: '',
            currentPage4: 4,
            input3: '',
            dialogTableVisible: false,
            
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