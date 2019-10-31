<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="基本设置" name="first">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                    <el-form-item class="bianjiq" label="订购须知">
                                        <quill-editor></quill-editor>
                                    </el-form-item>
                                    <el-form-item class="bianjiq" label="知情同意书">
                                        <quill-editor></quill-editor>
                                    </el-form-item>
                                    <el-form-item label="服务时间" required>
                                        <el-time-select placeholder="起始时间"   v-model="startTime" :picker-options="{  start: '08:00',  step: '00:15',  end: '22:00' }">
                                        </el-time-select>
                                        <el-time-select  placeholder="结束时间"  v-model="endTime"  :picker-options="{ start: '08:00', step: '00:15',  end: '22:00', minTime: startTime  }">
                                        </el-time-select>
                                        <div class="fwsjms">
                                            <el-checkbox-group v-model="checkboxGroup1">
                                                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                                                <div class="beizhu">(ps:选中表示营业时间，没选中表示休息时间)</div>
                                            </el-checkbox-group>
                                            
                                        </div>
                                    </el-form-item>
                                    <el-form-item label="服务范围" prop="region">
                                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                        <el-option label="武汉" value="shanghai"></el-option>
                                        <el-option label="南充" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="提前预约">
                                        <div class="tqyuyue">
                                            <el-time-select  v-model="value"  :picker-options="{   start: '00:30',  step: '00:30',  end: '11:30' }" placeholder="选择时间">
                                            </el-time-select>
                                            <span>小时</span>
                                            <div class="beizhu">(ps:必须是0.5的整数倍)</div>
                                        </div>
                                    </el-form-item>
                                    
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm')">确定提交</el-button>
                                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                                    </el-form-item>
                                    </el-form>
                            </el-tab-pane>
                            <el-tab-pane label="护士接单人员" name="second">配置管理</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>    
        </div> 
    </div>
</template>

<script>
const cityOptions = ['周一', '周二', '周三', '周四','周五','周六','周日'];
import { quillEditor } from "vue-quill-editor";
import commonHe from '../../components/commonHe'
export default {
    data(){
        return{
             value: '',
            activeName: 'first',
            ruleForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            rules: {
            region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
            },
            startTime: '',
            endTime: '',
            checkboxGroup1: ['周一'],
            cities: cityOptions,
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }, 
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
