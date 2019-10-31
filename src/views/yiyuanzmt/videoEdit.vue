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
                                    <el-form-item label="文章标题" prop="name">
                                        <el-input v-model="ruleForm.name"></el-input>
                                    </el-form-item>
<!--                                    <el-form-item label="视频简介" prop="desc">-->
<!--                                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
<!--                                    </el-form-item>-->
                                    <el-form-item label="视频上传" prop="Video">
                                      <input type="file" style="display:none" id="addfile-btn" @change="fileChange($event)">
                                      <el-button @click="addVideo"  type="primary" size="small">选择文件</el-button>
                                      <!-- <button id="uploadBtn2" style="color:#fff" @click="addVideo()">选择文件</button> -->
                                      <span id="watingTxt" v-if="changeCode">上传转码中，请稍后...</span>
                                      <div id="wrap" style="width: 300px;" class="hidden">
                                          <video id='my-video' :src="videoUrl" style="object-fit:fill" controls preload='auto' poster='' >
                                          </video>
                                      </div>
                                      <!--
                                      <el-upload class="avatar-uploader"
                                          style="position:relative"
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
                                        <span style="color:gray;margin-left:20px">注意：请上传2G以内的视频文件</span>
                                        <div  v-loading="loading" class="loading-box" style="width:300px;height:200px;position:absolute;top:0;
                                        left:0;" v-if="isShowVideoMask == 1"></div>

                                      </el-upload>
                                      -->
                                    </el-form-item>
                                    <!-- <el-form-item label="所属栏目" prop="resource">
                                        <el-radio-group v-model="radio" v-for="(tp,index) in tps" :key="index">
                                            <el-radio  :label="tp.tpId" @change="getTp">{{tp.tpName}}</el-radio>
                                        </el-radio-group>
                                    </el-form-item> -->
                                    <el-form-item label="文章分组" :rules="[
                                      { required: true, message: '请选择文章分组', trigger: ['change','blur' ]}]" >
                                        <!-- <el-radio-group v-model="radio" v-for="(tp,index) in tps" :key="index">
                                            <el-radio  :label="tp.tpId" @change="getTp">{{tp.tpName}}</el-radio>
                                        </el-radio-group> -->
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
                                    <!-- <el-form-item label="文章封面" prop="resource">
                                      <div class="shangchuantu">
                                        <el-upload
                                          :limit='1'
                                          :action="addUrl"
                                          list-type="picture-card"
                                          :on-success="handlePictureCardSuccessOne"
                                          :on-remove="handleRemoveOne"
                                          :on-preview="handlePictureCardPreview"
                                          >
                                          <i class="el-icon-plus"></i>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible" size="tiny">
                                          <img width="100%" :src="dialogImageUrl" alt="">
                                        </el-dialog>
                                      </div>
                                    </el-form-item> -->
                                    <el-form-item label="文章封面">
                                          <div  style="width:400px;height:150px;margin-top:10px">
                                          <div class="defaultImg coverbox" style="width:150px;height:150px;float:left;position:relative">
                                            <img :src="coverSrc" alt="" style="width:150px;height:150px">
                                            <!-- <i class="el-icon-delete delete-cover" @click="deletecover" style="font-size:30px;line-height:150px;color:#fff;position:absolute;top:0px;left:60px"></i> -->
                                          </div>
                                          <el-button @click="threeoneOpen" style="margin-left:10px;margin-top:60px" type="primary" size="small">上传图片</el-button>

                                          <el-dialog
                                            title="请先裁剪再上传"
                                            :visible.sync="threeOne"
                                            width="30%"
                                            :close-on-click-modal="false"
                                            >
                                            <template>
                                              <div class="wrapper">
                                                <div class="model" v-show="model" @click="model = false">
                                                  <div class="model-show">
                                                    <img :src="modelSrc" alt="">
                                                  </div>
                                                </div>
                                                <div class="content">
                                                  <div class="show-info">
                                                    <p style="font-size:16px">注意： 宽高固定比例 4 : 3</p>
                                                    <div class="test">
                                                      <vueCropper ref="cropper2" :img="example2.img " :outputSize="example2.size" :outputType="example2.outputType"
                                                        :info="example2.info" :canScale="example2.canScale" :autoCrop="example2.autoCrop"
                                                        :autoCropWidth="example2.autoCropWidth" :autoCropHeight="example2.autoCropHeight" :fixed="example2.fixed"
                                                        :fixedNumber="example2.fixedNumber" :enlarge="4"></vueCropper>
                                                    </div>
                                                    <label class="btn" for="upload2" @click="uploadSure=false" >选择图片</label>
                                                    <input type="file" id="upload2" style="position:absolute; clip:rect(0 0 0 0);"
                                                      accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event,2)">
                                                    <el-button v-show="tailoring" @click="finish2()" class="btn">裁剪</el-button>
                                                    <el-button v-show="uploadSure"  v-loading.fullscreen.lock="fullscreenLoading"  @click="sureUpload()" class="btn">确认上传</el-button>
                                                  </div>
                                                </div>
                                              </div>
                                            </template>
                                          </el-dialog>
                                        </div>
                                        <span style="color:gray">注意：请上传10M以内的图片</span>
                                        </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm()">立即创建</el-button>
                                        <el-button @click="back()">取消</el-button>
                                        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
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
import {addUrl} from '../../api/api'
import {newsArticelAdd} from '../../api/api'
import {tps} from '../../api/api'
import {jvAliGetPlayInfo,jvAliGetVideoInfo,jvAliCreateUploadVideo,jvAliRefreshUploadVideo} from '../../api/api'
// 文章分组：
import {articleClassifies} from '../../api/api'
import {VueCropper} from "vue-cropper";
import axios from '../../api/axios';
import {newBase} from '../../api/api'

export default {
    data(){
        return{
          aliVideoId:null,
          changeCode:false,
          aliyunUpload:null,
          videoUrl:"",
          orgBackUrl:newBase,
          isShowMenu : 1,
          // 裁剪封面图：
           fullscreenLoading:false,
          // 裁剪上传后返回值：
          tailoringReturn:{},
          // 裁剪确认上传按钮：
          tailoring:false,
          uploadSure:false,

          coverFile:[],
          // 图片裁剪数据：
            model2:false,
          model: false,
        modelSrc: '',
        crap: false,
        previews: {},
        form: {
          head: ''
        },
        example2: {
          //img的路径自行修改
          img: '$oss.url + \'/\' + form.head',
          // img: '',
          info: true,
          size: 0.5,
          outputType: 'jpeg',
          canScale: true,
          autoCrop: true,
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 300,
          autoCropHeight: 250,
          fixed: true,
          // 真实的输出宽高
          infoTrue: true,
          fixedNumber: [4, 3]
        },
        downImg: '#',
            // 裁剪封面图片展示：
            coverSrc:'',
            threeOne:false,


           // 文章分组：
          options:[],
          groups:'',

          allSelect:[],
          // 封面：
          urlOne:[],
          // 栏目：
          tps:[],
          radio:'1',
            addUrl:addUrl,
          // 视频上传：
            loading:false,
            videoFlag: false,
            contentResIds:[],
            // 封面图：
            coverResIds:[],
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
          input: '',
          isShowVideoMask:0
        };
    },
    methods: {
        // 裁剪：
      finish2() {
          this.tailoring=false;
          this.uploadSure=true;
          this.model = false;
        //  var formData=new FormData();
          this.newModelSrc=[]
          this.$refs.cropper2.getCropData((data) => {
          this.modelSrc = data
          // console.log("裁剪得到的", this.modelSrc)
          //裁剪后的图片显示
          this.example2.img = this.modelSrc;
          this.uploadFile=this.toBlob(data)
          // console.log("裁剪后",data)
          let baseString=data.replace(/^data:image\/\w+;base64,/, "");
          this.newModelSrc.push(baseString)
          // console.log(this.newModelSrc,"替换后")
          // console.log("转换后data",this.toBlob(data))
        })
      },
      sureUpload(){
        this.cover=[]
        this.fullscreenLoading = true;
        this.threeOne=false
        var formData=new FormData()
          var nameImg=new Date().getTime()+'.png'
          formData.append('file',this.uploadFile,nameImg)
          // console.log(formData,"file格式。。。")
          axios.post(this.orgBackUrl + "upload/res",formData,).then(res => {res.data
          this.tailoringReturn=res.data.data
          if(res.data.rtnCode==1){
            this.coverSrc=this.tailoringReturn.url
            this.cover.push(this.tailoringReturn.recId)
            // this.threeRecId=[this.threeoneRecId,this.threetwoRecId,this.threethreeRecId]
            // console.log(this.threeRecId,"封面后面图ids")
              this.fullscreenLoading = false;
              this.$message({
              message: '图片上传成功',
              type: 'success'
            });

          }else{
            this.fullscreenLoading = false;
              this.$message({

              message: '图片上传失败，请重新上传',
              type: 'success'
            });

          }
          console.log(this.tailoringReturn,"图片上传结果")
          }
        )

      },

      initAliUpload(aliUploadCallBack,progressValUpdateCallback) {
        if(!this.aliyunUpload){
          let that = this;
          this.aliyunUpload = new AliyunUpload.Vod({
              //阿里账号ID，必须有值 ，值的来源https://help.aliyun.com/knowledge_detail/37196.html
              userId: "1444758618739246",
              // 添加文件成功
              addFileSuccess: function (uploadInfo) {
                  console.log('addFileSuccess')
                },
              // 开始上传
              onUploadstarted: function (uploadInfo) {
                  that.changeCode = true;
                  console.log("onUploadStarted:" + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object);
                  let uploadAuth , uploadAddress,videoId;
                  //上传方式1, 需要根据uploadInfo.videoId是否有值，调用点播的不同接口获取uploadauth和uploadAddress，如果videoId有值，调用刷新视频上传凭证接口，否则调用创建视频上传凭证接口
                  if (uploadInfo.videoId) {
                      // 如果 uploadInfo.videoId 存在, 调用 刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)
                      const request = {
                        "videoId":uploadInfo.videoId,
                      };
                      jvAliRefreshUploadVideo(request).then(data=>{
                        uploadAuth = data.data.uploadAuth;
                        uploadAddress = data.data.uploadAddress;
                        videoId = data.data.videoId;

                        //从点播服务获取的uploadAuth、uploadAddress和videoId,设置到SDK里
                        that.aliyunUpload.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress, videoId);
                      })
                  }
                  else {
                      // 如果 uploadInfo.videoId 不存在,调用 获取视频上传地址和凭证接口(https://help.aliyun.com/document_detail/55407.html)
                      const request = {
                        "fileName":uploadInfo.file.name,
                        "title":uploadInfo.file.name,
                      };
                      jvAliCreateUploadVideo(request).then(data=>{
                          uploadAuth = data.data.uploadAuth;
                          uploadAddress = data.data.uploadAddress;
                          videoId = data.data.videoId;

                          //从点播服务获取的uploadAuth、uploadAddress和videoId,设置到SDK里
                          that.aliyunUpload.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress, videoId);
                      }) 
                  }
              },
            // 文件上传成功
            onUploadSucceed: function (uploadInfo) {
                  aliUploadCallBack(uploadInfo);
                  
                  console.log("onUploadSucceed: " + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object);
              },
              // 文件上传失败
              onUploadFailed: function (uploadInfo, code, message) {
                  console.log("onUploadFailed: file:" + uploadInfo.file.name + ",code:" + code + ", message:" + message);
              },
              // 文件上传进度，单位：字节
              onUploadProgress : function (uploadInfo, totalSize, loadedPercent) {
                  console.log("onUploadProgress:file:" + uploadInfo.file.name + ", fileSize:" + totalSize + ", percent:" + Math.ceil(loadedPercent * 100) + "%");
                  progressValUpdateCallback(Math.ceil(loadedPercent * 100) + "%")
              },
              //全部文件上传结束
              onUploadEnd: function (uploadInfo) {
                  console.log("onUploadEnd: uploaded all the files");
              }
          });
        }
    },
      fileChange(e){
        var file = e.target.files[0];
        //$(".progressBox").removeClass('hidden');
        if (!file) {
          this.$message({
            message: '请先选择需要上传的文件!',
            type: 'warning'
          });
          return
        }
        let that = this;
        var aliUploadCallBack = function(uploadInfo){
            //设置vid
            that.aliVideoId = uploadInfo.videoId;
            that.startPlay(uploadInfo.videoId);
            //////
        }
        var progressValUpdateCallback=function(val){
            // $("#progressVal").css('width',val);
            // val=='100%'?($("#watingTxt").show(),setTimeout(()=>$("#progressVal").html('文件上传成功请等待转码'),1000)):"";
            
        }
        var userData = '{"Vod":{}}';
        this.initAliUpload(aliUploadCallBack,progressValUpdateCallback);
        this.aliyunUpload.addFile(file, null, null, null, userData);
        this.aliyunUpload.startUpload();
      },

      startPlay(vid){
        var request = {
            "videoId":vid,
        };
        jvAliGetVideoInfo(request).then(data=>{
          if(data.data.video.status == 'Normal'){
              jvAliGetPlayInfo(request).then(data2=>{
                this.videoUrl = data2.data.playInfoList[0].playURL;
                this.changeCode = false;
              }) 
          }else{
              setTimeout(() => {
                  this.startPlay(vid); 
              }, 2*1000);
          }
        }) 
    },
      addVideo(){
        document.getElementById("addfile-btn").click();
      },
      uploadImg(e, num) {
        //上传图片
        this.example2.img = ''
        var file = e.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        // console.log(file,"file")
        var reader = new FileReader()
        // console.log(reader)
        reader.onload = (e) => {
            this.tailoring = true
          let data
          data = e.target.result
          if (typeof e.target.result === 'object') {
            // 把Array Buffer转化为blob 如果是base64不需要
            data = window.URL.createObjectURL(new Blob([e.target.result]))
            // console.log("结果5555",data)
          } else {
            data = e.target.result
          }
          if (num === 1) {
            this.option.img = data
          } else if (num === 2) {
            this.example2.img = data
          }
        }
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blobcs
        reader.readAsArrayBuffer(file)

      },
      // base64转blob
      toBlob(ndata) {
        //ndata为base64格式地址
        // console.log(ndata)
        let arr = ndata.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
          type: mime
        })
      },

      // 图片裁剪：
      threeoneOpen(){
        this.threeOne=true
      },


      // 封面删除：
      deletecover(){
        this.$confirm('确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
              this.coverSrc='',
              this.cover=[]
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

      },


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
        console.log(this.allSelect)
      },


// 视频上传：
      beforeUploadVideo(file) {
                var fileSize = file.size / 1024 / 1024 < 2048;
                if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
                    layer.msg("请上传正确的视频格式");
                    return false;
                }
                if (!fileSize) {
                    layer.msg("视频大小不能超过2GB");
                    return false;
                }
                this.isShowUploadVideo = false;
                this.loading=true;
                this.isShowVideoMask = 1;

            },
            //进度条
            uploadVideoProcess(event, file, fileList) {
                this.videoFlag = true;
                this.videoUploadPercent = file.percentage.toFixed(0) * 1;
            },
            //上传成功回调
            handleVideoSuccess(res, file) {
                this.isShowUploadVideo = true;
                this.videoFlag = false;
                this.videoUploadPercent = 0;
                console.log(res,"视频上传",file)
                this.contentResIds.push(res.data.recId)
                //后台上传地址
                if (res.rtnCode == 1) {
                    this.videoForm.showVideoPath = res.data.url;
                    this.loading=false;
                } else {
                    // layer.msg(res.Message);
                    this.$message({
                    message: res.rtnMsg,
                    type: 'warning'
                  });
                }

                this.isShowVideoMask = 0;
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
      },
      // 栏目：
      getTp(val){
        this.tpId=val;
      },
      submitForm(){
        if(this.dynamicTags&&this.ruleForm.name&&this.cover){
          var videoAddList={
            "newsStyle": 1012106,
            "tags": this.dynamicTags,
            "title": this.ruleForm.name,
            // "videoDesp":this.ruleForm.desc,
            // "tpId": this.tpId,
            "aliVideoId":this.aliVideoId,
            // "coverResIds":this.coverResIds,
            "coverResIds":this.cover,
            "newsClassifyIds":this.groups
          }
          console.log("视频创建98098-08080",videoAddList)
          newsArticelAdd(videoAddList).then(data=>{
            console.log("视频上传",data)
            if(data.rtnCode==1){
              this.$message({
                message: '新建视频成功',
                type: 'success'
              });
              this.$router.push('/nrgl')
            }
          })

        }else{
          this.$message({
            message: '提交存在空值',
            type: 'warning'
          })
        }




      },
      // 封面上传：
      handlePictureCardSuccessOne(a,b,c) {
        // console.log("图片一张上传成功",a)
        this.urlOne.push(a.data.recId)
        // console.log("封面id",this.urlOne)
      },
      handleRemoveOne(file, fileList) {
        // console.log(file, fileList);
        this.urlOne=[];
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      back(){
        window.history.back(-1);
      }
    },
    created(){
      tps().then(data=>{
        // console.log(data)
        this.tps=data.data
      })

      // console.log("11111")

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

        //以下是删除的方法


    components:{
        commonHe,
        VueCropper
    },

    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";

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



  .content {
    margin: auto;
    max-width: 585px;
    /*margin-bottom: 100px;*/
  }

  .test-button {
    display: flex;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c0ccda;
    color: #1f2d3d;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 20px 10px 0px 0px;
    padding: 9px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
    transition: all .2s ease;
    text-decoration: none;
    user-select: none;
  }

  .des {
    line-height: 30px;
  }

  code.language-html {
    padding: 10px 20px;
    margin: 10px 0px;
    display: block;
    background-color: #333;
    color: #fff;
    overflow-x: auto;
    font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono;
    border-radius: 5px;
    white-space: pre;
  }

  .show-info {
    /*margin-bottom: 50px;*/
  }

  .show-info h2 {
    line-height: 50px;
  }

  /*.title, .title:hover, .title-focus, .title:visited {
        color: black;
    }*/

  .title {
    display: block;
    text-decoration: none;
    text-align: center;
    line-height: 1.5;
    margin: 20px 0px;
    background-image: -webkit-linear-gradient(left, #3498db, #f47920 10%, #d71345 20%, #f7acbc 30%, #ffd400 40%, #3498db 50%, #f47920 60%, #d71345 70%, #f7acbc 80%, #ffd400 90%, #3498db);
    color: transparent;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    animation: slide 5s infinite linear;
    font-size: 40px;
  }

  .test {
    height: 285px;
  }

  .model {
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .model-show {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .model img {
    display: block;
    margin: auto;
    max-width: 80%;
    user-select: none;
    background-position: 0px 0px, 10px 10px;
    background-size: 20px 20px;
    background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
  }

  .c-item {
    display: block;
    padding: 10px 0;
    user-select: none;
  }

  @keyframes slide {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  @media screen and (max-width: 1000px) {
    .content {
      max-width: 90%;
      margin: auto;
    }

    .test {
      height: 400px;
    }
  }



.defaultImg{
  background-image: url("../../assets/images/nopic.png");
}




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

