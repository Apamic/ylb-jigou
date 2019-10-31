<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div>
                <div class="yysz-ys">
                    <div class="cigystyle kspz">
                      <el-tabs v-model="activeName" @tab-click="handleClick">
                          <el-tab-pane label="科室配置" name="first">
                              <el-row class="tou-btn">
                                <el-button  type="text" @click="dialogFormVisible = true"><div class="xuanzhong-btn">新建科室</div></el-button>
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
                                <el-button>导入科室</el-button>
                                <el-button>科室排序</el-button>
                                <el-popover
                                  placement="top"
                                  width="160"
                                  v-model="visible">
                                  <p>这是一段内容这是一段内容确定删除吗？</p>
                                  <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                    <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                                  </div>
                                  <el-button slot="reference"><div class="shanchuhui">删除</div></el-button>
                                </el-popover>
                              </el-row>
                              <div class="hxmbiaoge1">
                               <el-table :data="tableData"  style="width: 100%">
                                <el-table-column prop="xuhao" label="序号" width="60">
                                </el-table-column>
                                <el-table-column label="科室名称" width="150">
                                  <el-tree
                                    :props="props"
                                    :load="loadNode"
                                    lazy
                                    show-checkbox
                                    @check-change="handleCheckChange">
                                  </el-tree>
                              </el-table-column>
                              <el-table-column prop="name" label="成员数" width="80">
                              </el-table-column>
                              <el-table-column  prop="province" label="负责人">
                              </el-table-column>
                              <el-table-column
                                prop="city"
                                label="客服"
                                width="100">
                              </el-table-column>
                              <el-table-column  label="是否显示" width="80">
                                <el-switch v-model="form.delivery"></el-switch>
                              </el-table-column>
                              <el-table-column   prop="zip"  label="更新时间">
                              </el-table-column>
                              <el-table-column   label="操作" >
                                <template slot-scope="scope">
                                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                  <el-button type="text" size="small">编辑</el-button>
                                </template>
                              </el-table-column>
                            </el-table>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane label="特色科室" name="second">配置管理2</el-tab-pane>
                      </el-tabs>
                    </div>
                </div>
            </div>    
        </div> 
    </div>
</template>

<script>
import commonHe from '../components/commonHe'
export default {
    data(){
        return{
            props: {
            label: 'name',
            children: 'zones'
          },
          count: 1,
            //tab切换方法默认第二个
            activeName: 'first',
            dialogFormVisible: false,
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
             
            formLabelWidth: '100px',
            tableData: [{
              xuhao:'1',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              delivery: false,
              zip: 200333
            }, 
            {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1516 弄',
              zip: 200333
            }]
        };
    },
    methods: {
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
 @import '../styles/hxmstyle.css';
 $left-width:300px;
.style-box{
    background:rgba(245,245,245,1);
    position: absolute;
    left:200px;
    top:68px;
    overflow-y: auto;
}

 </style>
