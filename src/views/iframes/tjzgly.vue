<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="员工管理" name="first">
                            <div class="yggl-all">
                                <el-container style="height: 470px;">
                                    <el-aside class="yggl-zuo" width="200px">
                                        <el-tree :data="data2"  show-checkbox node-key="id"
                                        :default-expanded-keys="[2, 3]"
                                        :default-checked-keys="[5]">
                                        </el-tree>
                                    </el-aside>

                                    <el-main class="yggl-you">
                                        
                                            <el-row class="tou-btn">
                                                <el-button  type="text" @click="dialogFormVisible = true"><div class="xuanzhong-btn" @click="ygglxinj">新建人员</div></el-button>
                                                <!--新建科室内容-->
                                                <el-button>导出</el-button>
                                            </el-row>
                                            <div class="zuixiaokuan">
                                            <el-form :inline="true" :model="formInline"  class="demo-form-inline zuixiaokform">
                                                <el-form-item label="职称">
                                                    <el-select v-model="formInline.region" placeholder="全部">
                                                    <el-option label="职称一" value="shanghai"></el-option>
                                                    <el-option label="职称二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="行政级别">
                                                    <el-select v-model="formInline.region" placeholder="全部">
                                                    <el-option label="行政级别一" value="shanghai"></el-option>
                                                    <el-option label="行政级别二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item>
                                                    <div class="sousuo">
                                                    <el-input v-model="formInline.user" placeholder="请输入医生姓名"></el-input>
                                                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                                                    </div>
                                                </el-form-item>
                                            </el-form>
                                            <div class="hxmbiaoge2">
                                                <el-table  
                                                ref="multipleTable" :data="tableData2" 
                                                tooltip-effect="dark"
                                                style="width: 100%"  
                                                @selection-change="handleSelectionChange">
                                                    <el-table-column prop="paixu"  label="排序"  width="80px">
                                                        <template slot-scope="scope">
                                                            <el-checkbox :checked="scope.row.isKey== 1"/>6
                                                        </template>
                                                    </el-table-column>
                                                    <el-table-column prop="name"  label="姓名" width="160px">
                                                    </el-table-column>
                                                    <el-table-column prop="ygjs"  label="员工角色" >
                                                    </el-table-column>
                                                    <el-table-column prop="zhanghao"  label="账号" width="120px">
                                                    </el-table-column>
                                                    <el-table-column prop="xingbie"  label="性别" >
                                                    </el-table-column>
                                                    <el-table-column prop="xzjb"  label="行政级别">
                                                    </el-table-column>
                                                    <el-table-column prop="keshi"  label="科室" >
                                                    </el-table-column>
                                                    <el-table-column prop="zhichen"  label="职称" >
                                                    </el-table-column>
                                                    <el-table-column prop="zhuangtai"  label="状态" >
                                                    </el-table-column>
                                                    <el-table-column label="是否显示">
                                                        <template slot-scope="scope">
                                                            <el-switch  v-model="scope.row.status"
                                                                active-color="#409EFF"
                                                            
                                                                @change="active_text($event, scope.row)">
                                                            </el-switch>
                                                        </template>
                                                    </el-table-column>
                                                    <el-table-column label="加入时间"  width="160px">
                                                    <template slot-scope="scope">{{ scope.row.date }}</template>
                                                    </el-table-column>
                                                    <el-table-column  label="操作"  width="200px">
                                                        <el-button type="text" size="small">编辑</el-button>
                                                        <el-button type="text" size="small">删除</el-button>
                                                    </el-table-column>
                                                </el-table>
                                            </div>
                                        </div>
                                        <div class="fanye">
                                            <el-pagination  background layout="prev, pager, next"  :total="1000">
                                            </el-pagination>
                                        </div>

                                    </el-main>
                                </el-container>
                            </div>
                            </el-tab-pane>

                            <el-tab-pane class="tsks-table" label="小组管理" name="second">
                                <el-row class="tou-btn">
                                    <div class="xuanzhong-btn">
                                        <el-button  type="text" ><div class="xuanzhong-btn"><router-link to="/cjxz">创建小组</router-link></div></el-button>
                                    </div>
                                    
                                    <div class="sousuo1">
                                        <el-input v-model="formInline.user" placeholder="请输入医生姓名"></el-input>
                                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                                    </div>  
                                </el-row>
                                
                                <div class="hxmbiaoge2">
                                    <el-table ref="multipleTable" :data="tableData3"  tooltip-effect="dark"
                                    style="width: 100%" >
                                        <el-table-column prop="name"  label="科室名称" width="120">
                                        </el-table-column>
                                        <el-table-column prop="name1"  label="队长" >
                                        </el-table-column>
                                        <el-table-column prop="name2"  label="擅长" width="120">
                                        </el-table-column>
                                        <el-table-column prop="num1"  label="成员数量">
                                        </el-table-column>
                                        <el-table-column prop="num1"  label="动态数">
                                        </el-table-column>
                                        <el-table-column label="创建时间" width="160">
                                            <template slot-scope="scope">{{ scope.row.date }}</template>
                                        </el-table-column>
                                        <el-table-column  label="操作" width="200"> 
                                            <el-button type="text" size="small">编辑</el-button>
                                            <el-button type="text" size="small">添加下级</el-button>
                                            <el-button type="text" size="small">删除</el-button>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="员工角色管理" name="third">
                                <el-row class="tou-btn">
                                    <div class="xuanzhong-btn">
                                        <el-button  type="text" ><div class="xuanzhong-btn"><router-link to="/tsks">添加角色</router-link></div></el-button>
                                    </div>
                                    <el-popover  placement="top"  width="160" v-model="visible">
                                    <p>这是一段内容这是一段内容确定删除吗？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                                    </div>
                                    <el-button slot="reference"><div class="shanchuhui">删除</div></el-button>
                                    </el-popover>
                                    <div class="sousuo1">
                                        <el-input v-model="formInline.user" placeholder="请输入医生姓名"></el-input>
                                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                                    </div>  
                                </el-row>
                                <div class="hxmbiaoge2">
                                    <el-table ref="multipleTable" :data="tableData4"  tooltip-effect="dark"
                                    style="width: 100%" >
                                        <el-table-column prop="name" type="selection"  width="20">
                                            <template slot-scope="scope">
                                                <el-checkbox :checked="scope.row.isKey== 1"/>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="name"  label="角色名称" >
                                        </el-table-column>
                                        <el-table-column prop="name1"  label="状态" >
                                        </el-table-column>
                                        <el-table-column  label="操作" width="200"> 
                                            <el-button type="text" size="small">编辑</el-button>
                                            <el-button type="text" size="small">添加下级</el-button>
                                            <el-button type="text" size="small">删除</el-button>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="权限管理" name="fourth">
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item label="角色名称">
                                        <el-input v-model="form.name" placeholder="请输入角色名称"></el-input>
                                    </el-form-item>
                                    <el-form-item class="qxxuank" label="权限设置">
                                        <template>
                                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">医院管理</el-checkbox>
                                            <div style="margin: 15px 0;"></div>
                                            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                                            </el-checkbox-group>
                                        </template>
                                        <div class="m-t-20">
                                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">健康商城</el-checkbox>
                                            <div style="margin: 15px 0;"></div>
                                            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                                            </el-checkbox-group>
                                        </div>
                                    </el-form-item>
                                </el-form>
                                
                            </el-tab-pane>
                            <el-tab-pane label="员工分组" name="Fifth">
                                <div class="tishikuang">员工分组功能可帮助您更高效地分类管理人员，让用户更加便捷找到所需医生。</div>
                                <el-row class="tou-btn">
                                            <div class="xuanzhong-btn">
                                                <el-button  type="text" ><div class="xuanzhong-btn"><router-link to="/tjzgly">添加分组</router-link></div></el-button>
                                            </div>
                                        
                                            <div class="sousuo1">
                                                <el-input v-model="formInline.user" placeholder="请输入医生姓名"></el-input>
                                                <el-button type="primary" @click="onSubmit">搜索</el-button>
                                            </div>  
                                        </el-row>
                                        <div class="hxmbiaoge2">
                                            <el-table ref="multipleTable" :data="tableData7"  tooltip-effect="dark"
                                            style="width: 100%" >
                                                <el-table-column prop="name"  label="分组名称" width="120">
                                                </el-table-column>
                                                <el-table-column prop="num1"  label="人员数" >
                                                </el-table-column>
                                                <el-table-column  label="操作" width="220">
                                                    <el-button type="text" size="small">人员管理</el-button> 
                                                    <el-button type="text" size="small">编辑</el-button>
                                                    <el-button type="text" size="small">分享</el-button>
                                                    <el-button type="text" size="small">删除</el-button>
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
const cityOptions = ['界面风格', '医院设置', '科室配置', '人员管理', '工作台', '合作机构'];
export default {
    data(){
        return{
             //以下是权限设置模块添加子账户里面多选
          checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: false,
        //以上是权限设置模块添加子账户里面多选
        form: {
          delivery: false,
          type: [],
         
        },
        tableData2: [{
        paixu:'2',
         name:'丽丽',
         ygjs:'医生',
         zhanghao:'8965239',
         xingbie:'女',
         xzjb:'医生',
         keshi:'新生儿科',
         zhichen:'主任医师',
         zhuangtai:'正常',
         date: '2019-03-01 08:45:01'
        }],
        tableData3: [
        {
         name:'马霄专家团队',
         name1:'马霄',
         name2:'种植牙、牙缺损',
         num1:'6',
         num2:'28',
         date: '2019-03-01 08:45:01'
        },
        {
         name:'黄专家团队',
         name1:'黄冠',
         name2:'种植牙、牙缺损',
         num1:'6',
         num2:'28',
         date: '2019-08-01 08:45:01'
        }
        ],
        tableData4:[
        {
         name:'医生',
         name1:'正常',
        },
        {
         name:'护士',
         name1:'不正常',
        }
        ],
        tableData6:
        [
        {
         jiaose:'管理员',   
         name:'管理员',
         name1:'正常',
        },
        {
         jiaose:'运营人员',
         name:'运营人员',
         name1:'正常',
        }
        ],
        tableData7:
        [
        {
         name:'儿科专家',
         num1:'8',
        },
        {
         name:'名医医生',
         num1:'6',
        }
        ],
        //以下是右边表头form
        formInline: {
          user: '',
          region: ''
        },
        //以上是右边表头form
        //以下是树结构的
        data2: [{
          id: 1,
          label: '爱颐医院测试',
          children: [
              {
            id: 3,
            label: '骨科',
            children: [{
              id: 4,
              label: '骨外科'
            }]
          },
          {
            id: 8,
            label: '儿科',
            children: [{
              id: 9,
              label: '儿科内科'
            }, {
              id: 10,
              label: '儿科外科',
              disabled: true
            }]
          }, 
          {
            id: 2,
            label: '妇产科',
            disabled: true,
            children: [{
              id: 6,
              label: '妇科'
            }, {
              id: 7,
              label: '产科',
              disabled: true
            }]
          }]
        }],
        //以上是树结构的
       
          count: 1,
            //tab切换方法默认第二个
            activeName: 'fourth',
            dialogFormVisible: false,

          
        };
    },
    methods: {
    //以下是权限设置模块添加子账户里面多选
        handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      //以上是权限设置模块添加子账户里面多选
        ygglxinj(){
            this.$router.push("/ygglxinj")
        },
      onSubmit() {
        console.log('submit!');
      },
     
      handleNodeClick(data) {
        console.log(data);
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
