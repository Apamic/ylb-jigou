<template>
    <div>
      <commonHe v-if="isShowMenu == 1"></commonHe>
        <div class="style-box">
            <div class="zhenge">
                <div class="yggl-ym">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="视频" name="third">
                            <div class="biaodanyz">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="文章标题" prop="name" >
                                        <el-input v-model="ruleForm.name" readonly="readonly" ></el-input>
                                    </el-form-item>
                                    <el-form-item label="视频简介" prop="desc">
                                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                    </el-form-item>
                                    <el-form-item label="视频上传" prop="Video">
                                      <el-upload class="avatar-uploader"
                                          :action="addUrl"
                                          v-bind:on-progress="uploadVideoProcess"
                                          v-bind:on-success="handleVideoSuccess"
                                          v-bind:before-upload="beforeUploadVideo"
                                          v-bind:show-file-list="false">
                                        <video style="width:300px;height:200px" 
                                            v-bind:src="videoForm.showVideoPath"
                                            class="avatar video-avatar"
                                            controls="controls">
                                            您的浏览器不支持视频播放
                                        </video>
                                        <!-- <i v-else-if="videoForm.showVideoPath =='' && !videoFlag"
                                           class="el-icon-plus avatar-uploader-icon"></i>
                                        <el-progress v-if="videoFlag == true"
                                            type="circle"
                                            v-bind:percentage="videoUploadPercent"
                                            style="margin-top:7px;"></el-progress> -->
                                    </el-upload>



                                    </el-form-item>


                                    <el-form-item label="所属栏目" prop="resource">
                                        <el-radio-group v-model="radio" v-for="(tp,index) in tps" :key="index">
                                            <el-radio  :label="tp.tpId" >{{tp.tpName}}</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="文章分组" >
                                            <el-select v-model="groups" multiple @change="selectOptions" placeholder="请选择">
                                              <el-option
                                                v-for="item in options"
                                                :key="item.classifyId"
                                                :label="item.classifyName"
                                                :value="item.classifyId">
                                              </el-option>
                                            </el-select>
                                            <span style="color:gray;margin-left:10px">最多选择5个</span>
                                        </el-form-item>
                                    <el-form-item label="关键词">
                                        <div class="">
                                            <el-tag
                                                :key="tag"
                                                v-for="tag in dynamicTags"
                                                closable
                                                :disable-transitions="false"
                                                >
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
                                                <!-- <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 点击加入关键字</el-button> -->
                                        </div>
                                    </el-form-item>
                                    
                                    <el-form-item label="视频封面">
                                      <div style="width:300px;height:200px">
                                        <img style="width:300px;height:200px" :src="coverSrc" alt="">
                                      </div>
                                        
                                    </el-form-item>
                                </el-form>
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
import {newsDetail} from '../../api/api'
import {addUrl} from '../../api/api'
import {tps} from '../../api/api'
// 文章分组：
import {articleClassifies} from '../../api/api'

export default {
    data(){
        return{
          isShowMenu : 1,
          // 文章分组：
          groups:'',
          // 封面图：
          coverSrc:'',
          // 栏目：
          radio:'',
          tps:'',
            addUrl:addUrl,
          // 视频上传：
            videoFlag: false,
            //是否显示进度条
            videoUploadPercent: "",
            //进度条的进度，
            isShowUploadVideo: false,
            //显示上传按钮
            videoForm: {
                showVideoPath: ''
            },
      

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
            name: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
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
         
          ],
        },
            //tab切换方法默认第1个
            activeName: 'third',
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
      // 文章分组：
      selectOptions(a){
        // this.allSelect=[]
        if(this.groups.length<6){
          this.allSelect=a
          // return
        }else{ 
          this.groups=this.allSelect
          this.$message({
            message: '文章分组最多选择5个',
            type: 'warning'
          });
        }
        // console.log(this.groups,"groups")
        // console.log(this.allSelect,"select")
      },


      // 图片上传：

      beforeUploadVideo(file) {
                var fileSize = file.size / 1024 / 1024 < 50;
                if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
                    layer.msg("请上传正确的视频格式");
                    return false;
                }
                if (!fileSize) {
                    layer.msg("视频大小不能超过50MB");
                    return false;
                }
                this.isShowUploadVideo = false;
            },
            //进度条
            uploadVideoProcess(event, file, fileList) {
                this.videoFlag = true;
                this.videoUploadPercent = file.percentage.toFixed(0) * 1;
            },
            //上传成功回调
            handleVideoSuccess(res, file) {
              alert("1111")
                this.isShowUploadVideo = true;
                this.videoFlag = false;
                this.videoUploadPercent = 0;
                 console.log("视频上传成功",res)
                
                //前台上传地址
                //if (file.status == 'success' ) {
                //    this.videoForm.showVideoPath = file.url;
                //} else {
                //     layer.msg("上传失败，请重新上传");
                //}

                //后台上传地址
                if (res.rtnCode == 1) {
                    this.videoForm.showVideoPath = res.data.url;
                   
                } else {
                    // layer.msg(res.Message);
                    this.$message({
                    message: res.rtnMsg,
                    type: 'warning'
                  });
                }
            },
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

    created(){
      // var videoNewsId=localStorage.getItem("videoNewsId")
      // console.log("查看视频",videoNewsId)
        tps().then(data=>{
          // console.log(data)
          this.tps=data.data
        })
        var list={
          "newsId": localStorage.getItem("videoNewsId")
        }
        newsDetail(list).then(data=>{
          // console.log("查看视频取到的信息",data)
          this.dynamicTags=data.data.tags
          this.ruleForm.name=data.data.title
          this.ruleForm.desc=data.data.videoDesp
          this.videoForm.showVideoPath=data.data.contentResUrls[0];
          this.radio=data.data.tpId
          this.coverSrc=data.data.coverResUrls
          // console.log("封面图",this.dialogImageUrl)
        })

        var classifyList={
          "pageNum": 1,
          "pageSize": 500
        }
        articleClassifies(classifyList).then(data=>{
          // console.log(data,"文章分组")
          this.options=data.data
        })

      this.isShowMenu = localStorage.getItem("isShowMenu");

      if(this.isShowMenu == undefined || this.isShowMenu != 0){
        this.isShowMenu = 1;
      }
    },

    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
        // document.getElementById("box").style.width = (w - 280) + "px";
        // document.getElementById("box").style.height = (h - 120) + "px";

      if(this.isShowMenu == 0){
        document.getElementsByClassName("style-box")[0].style.left = 0;
        document.getElementsByClassName("style-box")[0].style.top = 0;
        document.getElementsByClassName("style-box")[0].style.height = "auto";
        document.getElementsByClassName("style-box")[0].style.width = "100%";
        document.getElementById("boxs").style.width = "100%";
        document.getElementById("boxs").style.height = "auto"
      }
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
