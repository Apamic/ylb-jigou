<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="诊后报道" name="first">
                                <div class="zhbdform">
                                    <el-form ref="form" :model="form">
                                        <el-form-item label="状态">
                                            <el-radio-group v-model="form.resource">
                                            <el-radio label="全部"></el-radio>
                                            <el-radio label="待确定"></el-radio>
                                            <el-radio label="拒绝"></el-radio>
                                            <el-radio label="同意"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="职称">
                                            <el-radio-group v-model="form.resource1">
                                            <el-radio label="全部"></el-radio>
                                            <el-radio label="住院医师"></el-radio>
                                            <el-radio label="主治医师"></el-radio>
                                            <el-radio label="主任医师"></el-radio>
                                            <el-radio label="副主任医师"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item class="formys" label="医生">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                        <el-form-item class="formys" label="科室">
                                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                            </el-select>
                                            <el-button type="primary" round>查询</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="yyglsz-table">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="序号"  type="index" width="50"> </el-table-column>
                                        <el-table-column prop="hzmc" label="患者名称">
                                        </el-table-column>
                                        <el-table-column prop="lxfs" label="联系方式"  width="120">
                                        </el-table-column>
                                        <el-table-column prop="date" label="报道时间"  width="120">
                                        </el-table-column>
                                        <el-table-column prop="yisheng" label="医生">
                                        </el-table-column>
                                        <el-table-column prop="zhuangtai" label="状态">
                                        </el-table-column>
                                        <el-table-column label="操作"  width="100">
                                            <template slot-scope="scope">
                                                <el-button type="text" size="small">编辑</el-button>
                                                <el-button type="text" size="small">删除</el-button>
                                            </template>
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
export default {
    data(){
        return{
            activeName: 'first',
            form: {
            name: '',
            region: '',
            resource: '',
            resource1: '',
            },
            tableData: [{
            hzmc:'罗文平',
            lxfs:'13678941220',
            date:'2019-06-20',
            yisheng:'夏金晶  ',
            zhuangtai: '正常',
            }, 
            {
            hzmc:'张院长',
            lxfs:'15809883922',
            date:'2019-07-06',
            yisheng:'张晓伟  ',
            zhuangtai: '正常',
            }],
        };
    },
    methods: {
        handleClick(tab, event) {
        console.log(tab, event);
        },
        onSubmit() {
        console.log('submit!');
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
