<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div id="box">
                <template>
                    <div class="yysz-ys hzglys">
                        <div class="cigystyle">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="患者库" name="first">
                                    <div class="hzglys-t">
                                        <el-form class="xuank1" ref="form" :model="form">
                                            <el-form-item label="性别">
                                                <el-select v-model="form.region" placeholder="全部">
                                                <el-option label="男" value="1"></el-option>
                                                <el-option label="女" value="0"></el-option>
                                                <el-option label="全部" value="-1"></el-option>
                                                </el-select>
                                            </el-form-item>   
                                        </el-form>
                                        <div class="zuhe">
                                            <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
                                                <el-select v-model="select" slot="prepend" placeholder="姓名">
                                                <el-option label="姓名" value="1"></el-option>
                                                <el-option label="电话" value="2"></el-option>
                                                </el-select>
                                                <el-button slot="append" @click="goSearch">搜索</el-button>
                                            </el-input>
                                        </div>  
                                    </div>
                                    <div class="hxmjcbiao">
                                        <el-table  :data="tableData" style="width: 100%">
                                            <el-table-column prop="nickName" label="图像/昵称" width="200">    
                                                <div class="block" slot-scope="scope" style="overflow:hidden;width:150px;height:50px">
                                                    
                                                <!-- <template slot-scope="scope"> -->
                                                    <img  :src="scope.row.photoUrl" alt="" style="width:50px;height:50px;display:block;float:left">
                                                    <!-- <el-image  :src="scope.row.imgPath" ></el-image> -->
                                                    <span class="demonstration" style="display:block;float:left">{{scope.row.nickName}}</span>
                                                <!-- </template> -->
                                                </div>  
                                            </el-table-column>
                                            <el-table-column  prop="userName"  label="真实姓名">
                                            </el-table-column>
                                            <el-table-column prop="age" label="年龄">
                                            </el-table-column>
                                            <el-table-column  prop="fevDrExample"  label="关注医生" width="120">
                                            </el-table-column>
                                            <el-table-column  prop="source"  label="来源" width="160">
                                            </el-table-column>
                                            <el-table-column  prop="timeCreate"  label="用户创建时间"  width="180">
                                            </el-table-column>
                                            <el-table-column prop="userId" label="操作">  
                                                <template slot-scope="scope">
                                                    <el-button type="primary" @click="godetails(scope.row)">详情</el-button>

                                                </template>
                                                
                                                
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                            <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[10, 20, 30, 100]"
                                :page-size="pageSize"
                                background
                                layout="prev, pager, next"
                                :total="total"
                                class="huanzhefenye"
                                style="background-color:#ffffff;padding:20px 25px 20px 0;text-align:right;">
                            </el-pagination> 
                        </div>
                    </div>
                    
                </template>
            </div>
        </div> 
    </div>
</template>

<script>
import commonHe from '../../components/commonHe'
import {patientBank} from '../../api/api'
export default {
 data() {
      return {
        //图像昵称
        fits: ['这里是图像昵称'],
        //图像地址
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        //tab选项默认第一个
        activeName: 'first',
        //患者姓名电话选项
        input1: '',
        select: '',
        value: '',
        form: { region: '全部', desc: '' },
        //表格
        tableData: [],

        // 分页：
        total:5,
        currentPage:1,// 当前页码
        pageSize:5,
      };
    },
    methods: {
      //tab选项的方法
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //提交的
      onSubmit() {
        console.log('submit!');
      },
       goSearch(){
            var gender='';
            if(this.form.region=="1"){
                gender="1";
            }else if(this.form.region=="0"){
                gender="0";
        }
        if(this.select!=2){
            var searchList={
                "gender": gender,
                "pageNum": 1,
                "pageSize": 5,
                "sortby": "",
                "userName": this.input1
            }
            patientBank(searchList).then(data=>{
                this.tableData=data.data;
                this.total=data.total
            })
        }else{
            var searchList={
                "gender": gender,
                "mobile": this.input1,
                "pageNum": 1,
                "pageSize": 5,
                "sortby": "",
            //   "userName": this.input1
            }
            patientBank(searchList).then(data=>{
                // console.log('患者库',data)
                this.tableData=data.data;
                this.total=data.total
                // console.log('电话查询',this.tableData)
            })
        }
                 
        },

        // 分页：

        handleSizeChange(val){
           console.log("长度改变:"+val)
        },

        
        handleCurrentChange(val){
            var gender='';
            if(this.form.region=="1"){
                gender="1";
            }else if(this.form.region=="0"){
                gender="0";
        }
        if(this.select!=2){
            var searchList={
                "gender": gender,
                "pageNum": val,
                "pageSize": 5,
                "sortby": "",
                "userName": this.input1
            }
            patientBank(searchList).then(data=>{
                this.tableData=data.data;
            })
        }else{
            var searchList={
                // "gender": gender,
                "mobile": this.input1,
                "pageNum": val,
                "pageSize": 5,
                // "sortby": "",
            //   "userName": this.input1
            }
            patientBank(searchList).then(data=>{
                // console.log('患者库',data)
                this.tableData=data.data;
                this.total=data.total
                // console.log('电话查询',this.tableData)
            })
        }
    },





        godetails(basic){
            //   alert(a)
            // console.log(a)
            localStorage.setItem("basic",JSON.stringify(basic))
            this.$router.push("/huanzxq")
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
    },
    created(){
        var searchList={
            //   "gender": -1,
            //   "mobile": "",
                "pageNum": 1,
                "pageSize": 5,
                "sortby": "",
            //   "userName": ""
            }
        patientBank(searchList).then(data=>{
            console.log('患者库',data)
            this.tableData=data.data;
            this.total=data.total
            // console.log( '患者库查询信息',this.tableData)
        })

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
