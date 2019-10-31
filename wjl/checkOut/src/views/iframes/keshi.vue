<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div id="box">
                <div class="yysz-ys">
                    <div class="cigystyle kspz">
                      <el-tabs v-model="activeName" @tab-click="handleClick">
                          <el-tab-pane label="科室配置" name="first">
                              <el-row class="tou-btn">
                                <el-button  type="primary" @click="addDept">新建科室</el-button>
                                <!--新建科室内容-->
                                <div class="xjks-k">
                                  <el-dialog title="新建科室" :visible.sync="dialogFormVisible">
                                    <el-form :model="form">
                                      <el-form-item label="上级科室" :label-width="formLabelWidth">
                                        <el-select v-model="form.region" placeholder="请选择上级科室">
                                          <el-option label="上级科室一" value="shanghai"></el-option>
                                          <el-option label="上级科室二" value="beijing"></el-option>
                                        </el-select>
                                      </el-form-item>
                                      <el-form-item label="科室编号" :label-width="formLabelWidth">
                                        <el-input v-model="form.name" autocomplete="off"></el-input>
                                      </el-form-item>
                                      <el-form-item label="科室名称" :label-width="formLabelWidth">
                                        <el-input v-model="form.name1" autocomplete="off"></el-input>
                                      </el-form-item>
                                      <el-form-item label="备注" :label-width="formLabelWidth">
                                        <el-input type="textarea" v-model="form.desc"></el-input>
                                      </el-form-item>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                    </div>
                                  </el-dialog>
                                </div>
                                <!--导入科室内容-->
                                <el-button  @click="dialogFormVisible1 = true">导入科室</el-button>
                                <!--导入科室弹出框-->
                                <div class="xjks-k xjdrks">
                                  <el-dialog title="导入科室" :visible.sync="dialogFormVisible1">
                                    <el-form :model="form">
                                      <template>
                                          <div class="drkskuang">
                                            <div class="jingaotishi"><p>请从下列的科室选择要导入的科室</p></div>
                                            <el-tree
                                            :data="data"
                                            show-checkbox
                                            node-key="id"
                                            :default-expanded-keys="[2, 3]"
                                            :default-checked-keys="[5]">
                                          </el-tree>
                                        </div>
                                      </template>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                      <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                                      <el-button type="primary" @click="dialogFormVisible1 = false">确定导入</el-button>
                                    </div>
                                  </el-dialog>
                                </div>
                                <el-button>科室排序</el-button>
                                <el-button>删除</el-button>
                                <div class="keshissk">
                                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                      <el-button slot="append">搜索</el-button>
                                    </el-input>
                                </div> 
                              </el-row>

                              <!-- 科室表格： -->
                              <!-- <div class="hxmbiaoge2">
                                <el-table :data="tableData1"  style="width: 100%"  row-key="id"  border
    lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                                <el-table-column prop="tableData1.deptName"  label="科室名称" width="160" type="expand">
                                    <template slot-scope="props" >
                                        <span >{{props.lvList.deptName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column width="80" prop="userCount" label="成员数">
                                </el-table-column>
                                <el-table-column width="90" prop="head" label="负责人">
                                </el-table-column>
                                <el-table-column width="90" prop="supportStaff" label="客服人员">
                                </el-table-column>
                                <el-table-column label="是否显示" prop="status" width="80px">
                                    <template>
                                        <el-switch  v-model="status"  active-color="#409EFF" active-value="1" inactive-value="0">
                                        </el-switch>
                                    </template>
                                </el-table-column>
                                <el-table-column   prop="timeUpdate"  label="更新时间" >
                                </el-table-column>
                                <el-table-column  label="操作" width="260px">
                                    <el-button type="text" size="small">分享</el-button>
                                    <el-button type="text" size="small"><router-link to="/keshiRygl">人员管理</router-link></el-button>  
                                    <el-button  type="text" @click="dialogFormVisible2 = true" size="small">编辑</el-button>
                                    <el-button type="text" @click="dialogFormVisible3 = true" size="small">添加下级</el-button>
                                    <el-button type="text" size="small">删除</el-button>
                                </el-table-column>
                               </el-table>
                              </div> -->
                          </el-tab-pane>

                          <!--编辑-添加下级弹窗   开始······················································-->
                          <div class="xjks-k">
                            <el-dialog title="编辑" :visible.sync="dialogFormVisible2">
                              <el-form :model="form">
                                <el-form-item label="上级科室" :label-width="formLabelWidth">
                                  <el-select v-model="form.region" placeholder="请选择上级科室">
                                    <el-option label="上级科室一" value="shanghai"></el-option>
                                    <el-option label="上级科室二" value="beijing"></el-option>
                                  </el-select>
                                </el-form-item>
                                <el-form-item label="科室编号" :label-width="formLabelWidth">
                                  <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="科室名称" :label-width="formLabelWidth">
                                  <el-input v-model="form.name1" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="备注" :label-width="formLabelWidth">
                                  <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                              </el-form>
                              <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
                              </div>
                            </el-dialog>
                          </div>
                          <!--编辑弹窗   结束······················································-->

                          <!--添加下级弹窗   开始······················································-->
                          <div class="xjks-k">
                            <el-dialog title="添加下级" :visible.sync="dialogFormVisible3">
                              <el-form :model="form">
                                <el-form-item label="上级科室" :label-width="formLabelWidth">
                                  <el-select v-model="form.region" placeholder="请选择上级科室">
                                    <el-option label="上级科室一" value="shanghai"></el-option>
                                    <el-option label="上级科室二" value="beijing"></el-option>
                                  </el-select>
                                </el-form-item>
                                <el-form-item label="科室编号" :label-width="formLabelWidth">
                                  <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="科室名称" :label-width="formLabelWidth">
                                  <el-input v-model="form.name1" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="备注" :label-width="formLabelWidth">
                                  <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                              </el-form>
                              <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
                              </div>
                            </el-dialog>
                          </div>
                          <!--添加下级弹窗   结束······················································-->

                          <el-tab-pane class="tsks-table" label="特色科室" name="second">
                            
                              <el-row class="tou-btn">
                                <el-button  type="primary"><router-link to="/tsks">新建特色科室</router-link></el-button>
                                <!--特色科室内容-->
                                <el-button >删除</el-button>
                                <el-input placeholder="请输入内容" v-model="search" style="width:400px; margin-left:295px;"></el-input>
                                <el-button @click="tsSearch" type="primary" style="float:right">搜索</el-button>
                              </el-row>
                             
                              <el-table  ref="multipleTable" :data="tableData3" tooltip-effect="dark"
                              style="width: 100%"  @selection-change="handleSelectionChange">
                                <el-table-column type="selection" width="55">
                                </el-table-column>
                                
                                <el-table-column prop="deptName"  label="科室名称" width="120">
                                </el-table-column>
                                <el-table-column prop="phone"  label="联系电话"  show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column label="创建时间">
                                  <template slot-scope="scope">{{ scope.row.timeCreate }}</template>
                                </el-table-column>
                                <el-table-column  label="操作" >
                                    <el-button type="text" size="small">编辑</el-button>
                                    <el-button type="text" size="small">添加下级</el-button>
                                    <el-button type="text" size="small">删除</el-button>
                                </el-table-column>
                              </el-table>
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
import {orgDept} from '../../api/api'
import {addDept} from '../../api/api'
// 特色科室：
import {tsDept} from '../../api/api'


export default {
    data(){
        return{

          multipleSelection: [],

          //按钮状态
          button1:'primary',
          button2:'',
          button3:'',
          button4:'',

          // 是否显示开关：
          status:'',
          search:'',

          //这是科室配置 头部右边的搜索框的值
          input3: '',

          //以下是 导入科室 弹出框里面的 树结构
          //data树开始
          data: [{
            id: 1,
            label: '妇科',
            children: 
            [
              {
                id: 3,
                label: '妇科科室',
                children: 
                [
                  {
                  id: 4,
                  label: '妇科内分泌'
                  }, 
                  {
                    id: 5,
                    label: '妇科常规',
                    disabled: true
                  }
                ]
              }, 
              {
              id: 2,
              label: '产科科室',
              disabled: true,
              children: 
                [
                  {
                  id: 6,
                  label: '产科一'
                  }, 
                  {
                    id: 7,
                    label: '产科二',
                    disabled: true
                  }
                ]
              }
            ]
          }],
          //data树结束
          defaultProps: {
            children: 'children',
            label: 'label'
          },
          //以上是 导入科室 弹出框里面的 树结构
            props: {
            label: 'name',
            cyshu: '8',
            fzren: '王小虎',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            children: 'zones'
          },
          count: 1,
            //tab切换默认第一个
            activeName: 'first',

            //新建科室弹出框可见与否
            dialogFormVisible: false,

            //导入科室弹出框可见与否
            dialogFormVisible1: false,
            //编辑弹出框可见与否
            dialogFormVisible2: false,
            //添加弹出框可见与否
            dialogFormVisible3: false,

            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            // 表单左边标题宽度
            formLabelWidth: '100px',

          tableData: [
              {
              cyshu: '166',
              fzren: '王小虎',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
              }, 
              {
                cyshu: '168',
                fzren: '张小虎',
                kfren: '王二虎',
                gxshijian: '2019-08-20',
              }
            ],
          tableData1: [
            {
              id: 1,
              ksmc: '名称1',
              cyshu: '160',
              fzren: '王小虎',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            }, 
            {
              id: 2,
              ksmc: '名称2',
              cyshu: '161',
              fzren: '王小虎6',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
              hasChildren: true
            }, 
            {
              id: 3,
              ksmc: '名称3',
              cyshu: '162',
              fzren: '王小虎0',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            }, 
            {
              id: 4,
              ksmc: '名称4',
              cyshu: '163',
              fzren: '王小虎1',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            }], 
        tableData3: 
          [{
            name: '彩超科室',
            tel: '13898763880',
            date: '2019-03-01 08:45:01'
          }],
      };
    },
    methods: {
      //按钮选择状态显示颜色
      seeHour() {
          this.showDay=false;
          this.showHour=true;
          this.showMonth=false;
          this.buttonhour='primary';
          this.buttonday='';
          this.buttonmonth='';
      },
      seeDay() {
             this.showDay=true;
             this.showHour=false;
             this.showMonth=false;
             this.buttonday='primary';
             this.buttonhour='';
             this.buttonmonth='';
      },
      seeMonth() {
         this.showDay=false;
         this.showHour=false;
         this.showMonth=true;
         this.buttonmonth='primary';
         this.buttonday='';
         this.buttonhour='';
      },
      addDept(){
        this.dialogFormVisible=true;


      },
      // 特色科室搜索：
      tsSearch(){
        var tsList={
          "deptName": this.search,
          "pageNum": 1,
          "pageSize": 10
        }
        tsDept(tsList).then(data=>{
          // console.log("搜索特色科室",data)
          this.tableData3=data.data
        })
        
      },


      //表格树加载
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 30,
              ksmc: '名称5',
              cyshu: '161001',
              fzren: '王小虎2',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            }, {
              id: 31,
              ksmc: '名称6',
              cyshu: '161002',
              fzren: '王小虎3',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            }
          ])
        }, 1000)
      },
      //以上是表2树加载
      onSubmit() {
        console.log('submit!');
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: '医院名称' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === '医院名称') {
          hasChild = true;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
             
              name: '科室' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
      //科室配置和特色科室的tab切换方法
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    components:{
        commonHe,
    },
    created(){
        this.userId=localStorage.getItem("userId")
        // alert(this.userId)
        var searchList={
          "deptName": "",
          "pageNum": 1,
          "pageSize": 10
        }
        orgDept(searchList).then(data=>{
          console.log("科室配置",data)
          this.tableData1=data.data;
        })


        var tsList={
          "deptName": "",
          "pageNum": 1,
          "pageSize": 10
        }
        tsDept(tsList).then(data=>{
          // console.log("特色科室",data)
          this.tableData3=data.data
        })



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
