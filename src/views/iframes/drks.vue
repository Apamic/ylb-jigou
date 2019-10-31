<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div id="box">
                <div class="yysz-ys">
                    <div class="cigystyle kspz">
                      <el-tabs v-model="activeName" @tab-click="handleClick">
                          <el-tab-pane label="科室配置" name="first">
                                <div class="drkskuang">
                                    <div class="jingaotishi"><p>请从下列的科室选择要导入的科室</p></div>
                                    <el-tree
                                    :data="data"
                                    show-checkbox
                                    node-key="id"
                                    :default-expanded-keys="[2, 3]"
                                    :default-checked-keys="[5]"
                                    :props="defaultProps">
                                    </el-tree>
                                    <div class="hxmdibtn">
                                        <el-button type="primary" size="mini" @click="visible = false">确定导入</el-button>
                                    </div>
                                </div>
                          </el-tab-pane>

                          <el-tab-pane class="tsks-table" label="特色科室" name="second">
                              <el-row class="tou-btn">
                                <div class="xuanzhong-btn">
                                <el-button  type="text" ><div class="xuanzhong-btn"><router-link to="/tsks">新建特色科室</router-link></div></el-button>
                                </div>
                                <!--新建特色科室内容-->
                                <el-button type="text">删除</el-button>
                                
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
        </div> 
    </div>
</template>

<script>
import commonHe from '../../components/commonHe'
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
           
          tableData3: [{
          name: '彩超科室',
          tel: '13898763880',
           date: '2019-03-01 08:45:01'
            }],

        //以下是导入树形结构相关
          data: [
            {
            id: 1,
            label: '妇科',
            children: [
                {
                id: 4,
                label: '妇科内分泌',
                children: [{
                    id: 10,
                    label: '三级 1-1-1'
                    }, 
                    {
                    id: 11,
                    label: '三级 1-1-2'
                   }]
                },
                {
                id: 5,
                label: '妇产科2',
                 children: [{
                        id: 12,
                        label: '妇产科'
                        }, 
                        {
                        id: 13,
                        label: '妇产科2'
                    }]
                }
              ]
            }, 
            {
            id: 2,
            label: '儿科',
            children: [
                {
                    id: 6,
                    label: '二级 2-1',
                    children: [{
                    id: 14,
                    label: '三级 1-1-1'
                    }, 
                    {
                    id: 15,
                    label: '三级 1-1-2'
                   }],
                }, 
                {
                    id: 7,
                    label: '二级 2-2',
                    children: [{
                    id: 16,
                    label: '三级 1-1-1'
                    }, 
                    {
                    id: 17,
                    label: '三级 1-1-2'
                   }],
                }
              ]
            }, 
            {
            id: 3,
            label: '骨科',
            children: [
                {
                id: 8,
                label: '二级 3-1'
                }, 
                {
                    id: 9,
                    label: '二级 3-2'
                }
              ]
            }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
        //以上是导入树形结构相关

        };
    },
    methods: {
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
