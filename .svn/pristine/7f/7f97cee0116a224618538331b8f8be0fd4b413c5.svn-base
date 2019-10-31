<template>

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
                      <el-button><router-link to="/drks">导入科室</router-link></el-button>
                      <el-button>科室排序</el-button>
                      <el-button>删除</el-button>
                      
                    </el-row>
                    <div class="hxmbiaoge1" style="display:none;">
                      <el-table :data="tableData"  style="width: 100%">
                      <el-table-column label="科室名称1" width="200px">
                        <el-tree
                          :props="props"
                          :load="loadNode"
                          lazy
                          show-checkbox
                          @check-change="handleCheckChange">
                        </el-tree>
                      </el-table-column>
                      <el-table-column prop="cyshu" label="成员数">
                      </el-table-column>
                      <el-table-column  prop="fzren" label="负责人">
                      </el-table-column>
                      <el-table-column prop="kfren" label="客服人员">
                      </el-table-column>
                      <el-table-column label="是否显示">
                          <template slot-scope="scope">
                              <el-switch  v-model="scope.row.status"  active-color="#409EFF"  @change="active_text($event, scope.row)">
                              </el-switch>
                          </template>
                      </el-table-column>
                      <el-table-column   prop="gxshijian"  label="更新时间" width="150px">
                      </el-table-column>
                      <el-table-column  label="操作" width="220px">
                          <el-button type="text" size="small">编辑</el-button>
                          <el-button type="text" size="small">添加下级</el-button>
                          <el-button type="text" size="small">删除</el-button>
                      </el-table-column>
                      </el-table>
                    </div>

                    <div class="hxmbiaoge2">
                      <el-table :data="tableData1"  style="width: 100%"  row-key="id"  border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                      <el-table-column prop="ksmc"  label="科室名称" width="180">
                          <template  slot-scope="scope">
                              <el-checkbox :checked="scope.row.isKey== 1"/>
                              <span>科室名称</span>
                          </template>
                      </el-table-column>
                      <el-table-column prop="cyshu" label="成员数2">
                      </el-table-column>
                      <el-table-column  prop="fzren" label="负责人">
                      </el-table-column>
                      <el-table-column prop="kfren" label="客服人员">
                      </el-table-column>
                      <el-table-column label="是否显示">
                          <template slot-scope="scope">
                              <el-switch  v-model="scope.row.status"  active-color="#409EFF"  @change="active_text($event, scope.row)">
                              </el-switch>
                          </template>
                      </el-table-column>
                      <el-table-column   prop="gxshijian"  label="更新时间" width="150px">
                      </el-table-column>
                      <el-table-column  label="操作" width="220px">
                          <el-button type="text" size="small">编辑</el-button>
                          <el-button type="text" size="small">添加下级</el-button>
                          <el-button type="text" size="small">删除</el-button>
                      </el-table-column>
                      </el-table>
                    </div>
                </el-tab-pane>

                <el-tab-pane class="tsks-table" label="特色科室" name="second">
                    <el-row class="tou-btn">
                      <div class="xuanzhong-btn">
                      <el-button  type="text" ><div class="xuanzhong-btn"><router-link to="/tsks">新建特色科室</router-link></div></el-button>
                      </div>
                      <!--新建特色科室内容-->
                      <el-button>删除</el-button>
                    </el-row>
                    <el-table  ref="multipleTable" :data="tableData3" tooltip-effect="dark"
                    style="width: 100%"  @selection-change="">
                      <el-table-column type="selection" width="55" >
                      </el-table-column>
                      
                      <el-table-column prop="name"  label="科室名称" width="120">
                      </el-table-column>
                      <el-table-column prop="tel"  label="联系电话"  show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column label="创建时间">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
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
</template>

<script>

export default {
    data(){
        return{
            props: {
            label: 'name',
            cyshu: '8',
            fzren: '王小虎',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
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
            }],
          tableData1: [{
          id: 1,
          ksmc: '名称1',
          cyshu: '166',
          fzren: '王小虎',
          kfren: '王二虎',
          gxshijian: '2019-05-20',
        }, 
        {
          id: 2,
          ksmc: '名称2',
          cyshu: '166',
          fzren: '王小虎',
          kfren: '王二虎',
          gxshijian: '2019-05-20',
          hasChildren: true
        }, 
        {
          id: 3,
          ksmc: '名称3',
          cyshu: '166',
          fzren: '王小虎',
          kfren: '王二虎',
          gxshijian: '2019-05-20',
          hasChildren: true
        }, 
        {
          id: 4,
          ksmc: '名称4',
          cyshu: '166',
          fzren: '王小虎',
          kfren: '王二虎',
          gxshijian: '2019-05-20',
        }],
        tableData3: [{
          name: '彩超科室',
          tel: '13898763880',
            date: '2019-03-01 08:45:01'
        }],
      };
    },
    methods: {
      //表格树加载
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              ksmc: '名称5',
              cyshu: '166',
              fzren: '王小虎',
              kfren: '王二虎',
              gxshijian: '2019-05-20',
            }, {
              id: 32,
              ksmc: '名称6',
              cyshu: '166',
              fzren: '王小虎',
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
      //tab切换方法
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
}
</script>
<style lang="scss">
 @import '../../styles/hxmstyle.css';

 </style>
