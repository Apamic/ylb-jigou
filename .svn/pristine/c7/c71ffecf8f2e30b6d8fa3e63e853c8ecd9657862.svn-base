<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div class="yysz-ys hzglys">
                <div class="cigystyle">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="患者库" name="first">
                            <div class="hzglys-t">
                                <el-form class="xuank1" ref="form" :model="form">
                                    <el-form-item label="性别">
                                        <el-select v-model="form.region" placeholder="全部">
                                        <el-option label="男" value="nan"></el-option>
                                        <el-option label="女" value="nv"></el-option>
                                        </el-select>
                                    </el-form-item>   
                                </el-form>
                                <div class="zuhe">
                                    <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
                                        <el-select v-model="select" slot="prepend" placeholder="姓名">
                                        <el-option label="姓名" value="1"></el-option>
                                        <el-option label="电话" value="2"></el-option>
                                        </el-select>
                                        <el-button slot="append">搜索</el-button>
                                    </el-input>
                                </div>  
                            </div>
                            <div class="hxmjcbiao">
                                <el-table  :data="tableData" style="width: 100%">
                                    <el-table-column label="图像/昵称" width="200">
                                        <div class="block" v-for="fit in fits" :key="fit">
                                            <el-image  :src="url" :fit="fit"></el-image>
                                            <span class="demonstration">{{ fit }}</span>
                                        </div>  
                                    </el-table-column>
                                    <el-table-column  prop="name"  label="真实姓名">
                                    </el-table-column>
                                    <el-table-column prop="age" label="年龄"  >
                                    </el-table-column>
                                    <el-table-column  prop="guanzhu"  label="关注医生" width="120">
                                    </el-table-column>
                                    <el-table-column  prop="laiyuan"  label="来源" width="160">
                                    </el-table-column>
                                    <el-table-column  prop="date"  label="用户创建时间"  width="180">
                                    </el-table-column>
                                    <el-table-column label="操作">  <router-link to="/huanzxq">详细</router-link>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import commonHe from '../../components/commonHe'
export default {
 data() {
      return {
        fits: ['这里是昵称'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        activeName: 'first',
        input1: '',
        select: '',
        value: '',
        form: { region: '' },
        //表格
        tableData: [{
            name: '王小虎',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
          }, {
            name: '张三',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
          }, {
            name: '小虎',
            age: '30',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-10-02',
          }],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
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
};
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
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }


 </style> 