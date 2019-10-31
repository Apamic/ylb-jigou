<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="图文" name="first" @tab-click="nrgl">
                                <div class="hzglys-t nrgl-t">
                                    <el-row class="gdbtn">
                                        <div class="xuanzhong-btn">
                                            <el-button>
                                                <div class="xuanzhong-btn"><router-link to="/chuangtw">创作图文</router-link></div>
                                            </el-button>   
                                        </div>
                                    </el-row>
                                    <div class="zuhe">
                                        <div class="xiank180">
                                            <el-input placeholder="请输入文章标题" v-model="input1" class="input-with-select">
                                                <el-select v-model="select" slot="prepend" placeholder="状态">
                                                <el-option label="全部" value="1"></el-option>
                                                <el-option label="电话" value="2"></el-option>
                                                </el-select>
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div>
                                        <div class="dandusk">
                                            <el-form ref="form" :model="form" label-width="60px">
                                                <el-form-item label="来源">
                                                    <el-select v-model="form.region" placeholder="全部">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                        
                                    </div>  
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <p>医院介绍</p>
                                                    <div class="tdwensj">
                                                        <span>2019-03-01 08:45:01</span>
                                                        <el-tag type="success">已发布</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                        </el-table-column>
                                        <el-table-column label="是否显示" width="80">
                                            <template slot-scope="scope">
                                                <el-switch  v-model="scope.row.status"
                                                    active-color="#409EFF"
                                                    @change="active_text($event, scope.row)">
                                                </el-switch>
                                            </template>
                                        </el-table-column>
                                        
                                        <el-table-column label="操作" width="160">  
                                            <router-link to="/huanzxq">查看</router-link>
                                            <router-link to="/huanzxq">编辑</router-link>
                                            <router-link to="/huanzxq">群发</router-link>
                                        </el-table-column>
                                    </el-table>
                                </div>
                                
                            </el-tab-pane>
                            <el-tab-pane label="图集" name="second">
                                <div class="biaodanyz">
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="文章标题">
                                            <el-input v-model="ruleForm.name"></el-input>
                                            <div class="hxmjcbiao formtable">
                                                <el-table  :data="tableData" style="width: 100%">
                                                    <el-table-column label="图片"  width="180">
                                                        <div class="xianzhiimg">
                                                            <div class="shangchuantu">
                                                                <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                                                                    list-type="picture-card"
                                                                    :limit="0"
                                                                    :on-preview="handlePictureCardPreview"
                                                                    :on-remove="handleRemove">
                                                                    <i class="el-icon-plus"></i>
                                                                    <span class="imgmiaoshu">上传轮播图片</span>
                                                                </el-upload>
                                                                <el-dialog :visible.sync="dialogVisible">
                                                                    <img width="100%" :src="dialogImageUrl" alt="">
                                                                </el-dialog>
                                                            </div>
                                                        </div>
                                                    </el-table-column>
                                                    <el-table-column  label="描述">
                                                        <template slot-scope="scope">
                                                            <el-input type="textarea" v-model="form.desc"></el-input> 
                                                        </template>   
                                                    </el-table-column>
                                                    <el-table-column type="index" label="排序序号"  width="80">
                                                    </el-table-column>
                                                    <el-table-column label="操作"  width="120">  
                                                        <template slot-scope="scope">
                                                            <el-button
                                                            @click.native.prevent="deleteRow(scope.$index, tableData)"
                                                            type="text"
                                                            size="small">
                                                            删除
                                                            </el-button>
                                                        </template>
                                                    </el-table-column>
                                                </el-table>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="所属栏目" prop="resource">
                                            <el-radio-group v-model="ruleForm.resource">
                                                <el-radio label="医院介绍"></el-radio>
                                                <el-radio label="科室介绍"></el-radio>
                                                <el-radio label="专家介绍"></el-radio>
                                                <el-radio label="特色专家"></el-radio>
                                                <el-radio label="专业设备"></el-radio>
                                                <el-radio label="特色治疗方案"></el-radio>
                                                <el-radio label="就诊流程"></el-radio>
                                                <el-radio label="价格公告"></el-radio>
                                                <el-radio label="医院新闻"></el-radio>
                                                <el-radio label="疾病知识"></el-radio>
                                                <el-radio label="特色病例"></el-radio>
                                                <el-radio label="医疗科技"></el-radio>
                                                <el-radio label="医疗中心"></el-radio>
                                                <el-radio label="公司介绍"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="关键词">
                                            <div class="">
                                                <el-tag
                                                    :key="tag"
                                                    v-for="tag in dynamicTags"
                                                    closable
                                                    :disable-transitions="false"
                                                    @close="handleClose(tag)">
                                                    {{tag}}
                                                    </el-tag>
                                                    <el-input
                                                    class="input-new-tag"
                                                    v-if="inputVisible"
                                                    v-model="inputValue"
                                                    ref="saveTagInput"
                                                    size="small"
                                                    @keyup.enter.native="handleInputConfirm"
                                                    @blur="handleInputConfirm"
                                                    >
                                                    </el-input>
                                                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 点击加入关键字</el-button>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="文章封面" prop="resource">
                                            <div class="shangchuantu">
                                                <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                                                    list-type="picture-card"
                                                    :limit="2"
                                                    :on-preview="handlePictureCardPreview"
                                                    :on-remove="handleRemove">
                                                    <i class="el-icon-plus"></i>
                                                    <span class="imgmiaoshu">上传文章封面</span>
                                                </el-upload>
                                                <el-dialog :visible.sync="dialogVisible">
                                                    <img width="100%" :src="dialogImageUrl" alt="">
                                                </el-dialog>
                                            </div>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="视频" name="third">
                                <div class="hzglys-t nrgl-t">
                                    <el-row class="gdbtn">
                                        <div class="xuanzhong-btn">
                                            <el-button>
                                                <div class="xuanzhong-btn"><router-link to="/huanzdr">创作视频</router-link></div>
                                            </el-button>   
                                        </div>
                                    </el-row>
                                    <div class="zuhe">
                                        <div class="xiank180">
                                            <el-input placeholder="请输入文章标题" v-model="input1" class="input-with-select">
                                                <el-select v-model="select" slot="prepend" placeholder="状态">
                                                <el-option label="全部" value="1"></el-option>
                                                <el-option label="电话" value="2"></el-option>
                                                </el-select>
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div>
                                        <div class="dandusk">
                                            <el-form ref="form" :model="form" label-width="80px">
                                                <el-form-item label="来源">
                                                    <el-select v-model="form.region" placeholder="全部">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                        
                                    </div>  
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题" >
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <p>医院介绍</p>
                                                    <div class="tdwensj">
                                                        <span>2019-03-01 08:45:01</span>
                                                        <el-tag type="warning">待审核</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                        </el-table-column>
                                        
                                        <el-table-column label="操作" width="180">  
                                            <router-link to="/huanzxq">查看</router-link>
                                            <router-link to="/huanzxq">编辑</router-link>
                                            <router-link to="/huanzxq">群发</router-link>
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
            input: '',
            //以下是图片上传相关
        dialogImageUrl: '',
        dialogVisible: false,
        //以下是标签输入相关
            dynamicTags: [],
        inputVisible: false,
        inputValue: '',
         //以上是标签输入相关
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
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
        },
            //tab切换方法默认第1个
            activeName: 'second',
            fits: ['这里是昵称'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            input1: '',
        select: '',
        value: '',
        form: { region: '' },
        //表格
        tableData: [{
            name: '王小虎',
            leixing:'机构',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
            desc: '',
          }],
          input: ''
        };
    },
    methods: {
        //以下是删除的方法
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
        //图片上传方法开始
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //图片上传方法结束
     //以下是标签输入
        handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      //以上是标签输入
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
