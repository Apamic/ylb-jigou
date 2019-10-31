<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <div class="tabxuantou">
                            <ul class="tabxuantouul">
                                <li>
                                    <el-button type="text"><router-link to="/staff">员工管理</router-link></el-button>  
                                </li>
                                <li class="active">
                                    <el-button type="text"><router-link to="/staff">小组管理</router-link></el-button>  
                                </li>
                                <li>
                                    <el-button type="text"><router-link to="/staff">员工角色管理</router-link></el-button>  
                                </li>
                                <li>
                                    <el-button type="text"><router-link to="/staff">权限管理</router-link></el-button>  
                                </li>
                                <li>
                                    <el-button type="text"><router-link to="/staff">员工分组</router-link></el-button>  
                                </li>
                            </ul>
                        </div>
                        <div class="bfbjushang20">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item class="xztpsc" label="小组图片">
                                    <el-upload class="shangchuan"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                    <div class="rightmiaoshu">建议尺寸750*560px或4：3，JPG、PNG格式， 图片小于5M。</div>
                                </el-form-item>
                                <el-form-item label="小组名称">
                                    <el-input v-model="form.name"></el-input>
                                    <div class="rightmiaoshu">小组名称不能超过12个字</div>
                                </el-form-item>
                                <el-form-item label="小组介绍">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                    <div class="rightmiaoshu">小组介绍不能超过200字</div>
                                </el-form-item>
                                <el-form-item label="队长">
                                    <el-select v-model="value1" multiple placeholder="请选择">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            <el-form-item label="电话">
                                    <el-input v-model="form.dianhua"></el-input>
                                </el-form-item>
                                
                                <el-form-item label="服务标签">
                                    <el-select v-model="value2" multiple placeholder="请选择">
                                        <el-option
                                        v-for="item in options2"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <div class="rightmiaoshu">最多只能选6个服务标签</div>
                                </el-form-item>
                                
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">确定</el-button>
                                    <el-button>取消</el-button>
                                </el-form-item>
                                </el-form>
                        </div>
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
        //以下是下拉选择标签
             options: [{
          value: '选项1',
          label: '张三'
        }, {
          value: '选项2',
          label: '李四'
        }, {
          value: '选项3',
          label: '王麻子'
        }],
        options2: [{
          value: '选项1',
          label: '服务标签1'
        }, {
          value: '选项2',
          label: '服务标签2'
        }, {
          value: '选项3',
          label: '服务标签3'
        }],
        value1: [],
        value2: [],
//以上是下拉选择标签

        //以下是上传图片需要
        dialogImageUrl: '',
        dialogVisible: false,
        //以上是上传图片需要
        form: {
          name: '',
          dianhua:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

        //以上是右边表头form
       
          count: 1,
            //tab切换方法默认第二个
            dialogFormVisible: false,

          
        };
    },
    methods: {
    //以下是上传图片方法
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //以上是上传图片方法
      onSubmit() {
        console.log('submit!');
      },
     
      handleNodeClick(data) {
        console.log(data);
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
