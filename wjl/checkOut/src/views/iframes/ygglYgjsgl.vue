<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <div class="tabxuantou">
                            <ul class="tabxuantouul">
                                <li>
                                    <el-button type="text"><router-link to="/staff">员工管理</router-link></el-button>  
                                </li>
                                <li>
                                    <el-button type="text"><router-link to="/staff">小组管理</router-link></el-button>  
                                </li>
                                <li class="active">
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
                            <div class="jingaotishi"><p>请给该员工勾选可使用的应用，如需更多应用请到<a href="">应用广场>></a></p></div>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="角色名称">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="服务应用">
                                    <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="图文问诊" name="type"></el-checkbox>
                                    <el-checkbox label="视频问诊" name="type"></el-checkbox>
                                    <el-checkbox label="电话问诊" name="type"></el-checkbox>
                                    <el-checkbox label="处方开具" name="type"></el-checkbox>
                                    <el-checkbox label="服务包" name="type"></el-checkbox>
                                    <el-checkbox label="诊后报道" name="type"></el-checkbox>
                                    <el-checkbox label="患者预约" name="type"></el-checkbox>
                                    <el-checkbox label="家庭医生" name="type"></el-checkbox>
                                    <el-checkbox label="会员" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="工具应用">
                                    <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="诊室广播" name="type"></el-checkbox>
                                    <el-checkbox label="患教资料" name="type"></el-checkbox>
                                    <el-checkbox label="随访计划" name="type"></el-checkbox>
                                    <el-checkbox label="健康计划" name="type"></el-checkbox>
                                    <el-checkbox label="健康号" name="type"></el-checkbox>
                                    <el-checkbox label="诊室公告" name="type"></el-checkbox>
                                    <el-checkbox label="助理客服" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">确定提交</el-button>
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
            form: {
          name: '',
          region: '',
          type: [],
          desc: ''
          },
        };
    },
    methods: {
     
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
