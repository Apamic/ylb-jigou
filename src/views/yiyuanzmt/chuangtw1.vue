<template>
  <div>
    <commonHe v-if="isShowMenu == 1"></commonHe>
    <div class="style-box">
      <div id="box">
        <div class="zhenge">
          <div class="yggl-ym">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="图集" name="second">
                <div class="biaodanyz">
                  <el-form label-width="100px" class="demo-ruleForm">
                    <el-form-item label="文章标题">
                      <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="轮播图列表">
                      <!-- <div class="shangchuantu">
                          <el-upload
                              :action="addUrl"
                              :limit="10"
                              list-type="picture-card"
                              :on-success="handlePictureCardSuccessLb"
                              :on-preview="handlePictureCardPreviewLb"
                              :on-remove="handleRemoveLb">
                              <i class="el-icon-plus"></i>
                              <span class="imgmiaoshu">上传轮播图</span>
                          </el-upload>
                          <el-dialog :visible.sync="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrlLb" alt="">
                          </el-dialog>
                      </div> -->
                      <!-- <div class="atlasList" >
                        <div style="width:150px;height:150px;float:left;overflow:hidden"><img style="width:150px;height:150px" src="" alt=""></div>
                      </div> -->
                      <div style="width:100%;margin-top:10px">
                        <div v-for="(item,index) in atlasList" :key="index" class="defaultImg atlas-box"
                             style="width:150px;height:150px;float:left;margin-right:10px;margin-bottom:10px;position:relative;">
                          <img :src="item" alt="" style="width:150px;height:150px">
                          <i class="el-icon-delete delete-atlas" @click="deleteatlas(item)"
                             style="font-size:30px;line-height:150px;margin-left:60px;color:#fff;position:absolute;top:0;left:0"></i>
                        </div>
                        <el-button @click="atlasOpen" style="float:left;margin-top:60px" type="primary" size="small">
                          上传轮播图
                        </el-button>

                        <el-dialog
                          title="请先裁剪再上传"
                          :visible.sync="atlasUpload"
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
                                    <vueCropper ref="cropper2" :img="example2.img" :outputSize="example2.size"
                                                :outputType="example2.outputType"
                                                :info="example2.info" :canScale="example2.canScale"
                                                :autoCrop="example2.autoCrop"
                                                :autoCropWidth="example2.autoCropWidth"
                                                :autoCropHeight="example2.autoCropHeight" :fixed="example2.fixed"
                                                :fixedNumber="example2.fixedNumber" :enlarge="4"></vueCropper>
                                  </div>
                                  <label class="btn" for="upload2" @click="uploadSure=false;">选择图片</label>
                                  <input type="file" id="upload2" style="position:absolute; clip:rect(0 0 0 0);"
                                         accept="image/png, image/jpeg, image/gif, image/jpg"
                                         @change="uploadImg($event,2)">
                                  <el-button v-show="tailoring" @click="finish22()" class="btn">裁剪</el-button>
                                  <el-button v-show="uploadSure" v-loading.fullscreen.lock="fullscreenLoading"
                                             @click="sureUpload22()" class="btn">确认上传
                                  </el-button>
                                </div>
                              </div>
                            </div>
                          </template>
                        </el-dialog>
                      </div>
                      <!-- <span style="color:gray">注意：请上传10M以内的图片</span> -->


                    </el-form-item>
                    <!-- <el-form-item label="所属栏目">
                        <el-radio-group v-model="radio" v-for="(tp,index) in tps" :key="index">
                            <el-radio  :label="tp.tpId" @change="getTp">{{tp.tpName}}</el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                    <el-form-item label="文章分组">
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
                    <!-- <el-form-item label="文章封面" >
                            <div class="shangchuantu" >
                              <el-upload
                                :limit='1'
                                :action="addUrl"
                                list-type="picture-card"
                                :on-success="handlePictureCardSuccessCover"
                                :on-remove="handleRemoveCover"
                                :on-preview="handlePictureCardPreview"
                                >
                                <i class="el-icon-plus"></i>
                                <span class="imgmiaoshu">上传文章封面</span>
                              </el-upload>
                              <el-dialog :visible.sync="dialogVisible" size="tiny">
                                <img width="100%" :src="dialogImageUrl" alt="">
                              </el-dialog>
                              <span style="color:gray">注意：请上传10M以内的图片</span>
                            </div>
                    </el-form-item> -->

                    <!-- 裁剪： -->
                    <el-form-item label="文章封面">
                      <div style="width:400px;height:150px;margin-top:10px">
                        <div class="defaultImg coverbox" style="width:150px;height:150px;float:left;position:relative">
                          <img :src="coverSrc" alt="" style="width:150px;height:150px">
                          <i v-if="coverSrc" class="el-icon-delete delete-cover" @click="deletecover"
                             style="font-size:30px;line-height:150px;color:#fff;position:absolute;top:0px;left:60px"></i>
                        </div>
                        <el-button @click="threeoneOpen" style="margin-left:10px;margin-top:60px" type="primary"
                                   size="small">上传图片
                        </el-button>

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
                                    <vueCropper ref="cropper2" :img="example2.img" :outputSize="example2.size"
                                                :outputType="example2.outputType"
                                                :info="example2.info" :canScale="example2.canScale"
                                                :autoCrop="example2.autoCrop"
                                                :autoCropWidth="example2.autoCropWidth"
                                                :autoCropHeight="example2.autoCropHeight" :fixed="example2.fixed"
                                                :fixedNumber="example2.fixedNumber" :enlarge="4"></vueCropper>
                                  </div>
                                  <label class="btn" for="upload2"
                                         @click="uploadSure=false;">选择图片</label>
                                  <input type="file" id="upload2" style="position:absolute; clip:rect(0 0 0 0);"
                                         accept="image/png, image/jpeg, image/gif, image/jpg"
                                         @change="uploadImg($event,2)">
                                  <el-button v-show="tailoring" @click="finish2()" class="btn">裁剪</el-button>
                                  <el-button v-show="uploadSure" v-loading.fullscreen.lock="fullscreenLoading"
                                             @click="sureUpload()" class="btn">确认上传
                                  </el-button>
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
                    </el-form-item>
                  </el-form>
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
    import {addUrl} from '../../api/api'
    import {tps} from '../../api/api'
    import {newsArticelAdd} from '../../api/api'
    import {VueCropper} from "vue-cropper";
    // 封面图base64图片上传：
    import {coverUpload} from '../../api/api'
    // 文章分组：
    import {articleClassifies} from '../../api/api'

    import axios from '../../api/axios';

    import {newBase} from '../../api/api'

    export default {
        data() {
            return {
                orgBackUrl: newBase,
                isShowMenu: 1,
                // 文章分组：
                groups: '',
                options: [],
                // 轮播图图片列表：
                atlasList: [],
                // 轮播图点击上传：
                atlasUpload: false,
                // 图片上传加载中：
                fullscreenLoading: false,
                // 裁剪上传后返回值：
                tailoringReturn: {},
                // 裁剪确认上传按钮：
                tailoring: false,
                uploadSure: false,

                coverFile: [],
                // 图片裁剪数据：
                model2: false,
                model: false,
                modelSrc: '',
                crap: false,
                previews: {},
                form: {
                    head: ''
                },
                example2: {
                    //img的路径自行修改
                    // img: '$oss.url + \'/\' + form.head ',
                    img: '',
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
                coverSrc: '',
                threeOne: false,
                // 排序：
                orderNumber: '',
                // 栏目：
                tps: '',
                radio: '',
                tpId: '',
                // 轮播图上传：
                urlOne: [],
                dialogImageUrlLb: '',

                addUrl: addUrl,
                // 封面图上传：
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
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource: [],
                },
                //tab切换方法默认第1个
                activeName: 'second',
                fits: ['这里是昵称'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                input1: '',
                select: '',
                value: '',
                form: {region: ''},
                // 封面：
                cover: [],

                //表格
                tableData: [{
                    name: '王小虎',
                    leixing: '机构',
                    age: '20',
                    guanzhu: '李四等3人',
                    laiyuan: '通过网上注册',
                    date: '2019-05-02',
                    desc: '',
                }],
                input: ''
            };

        },
        methods: {
            // 文章分组：
            selectOptions(a) {
                // this.allSelect=[]
                if (this.groups.length < 6) {
                    this.allSelect = a
                    // return
                } else {
                    this.groups = this.allSelect
                    this.$message({
                        message: '文章分组最多选择5个',
                        type: 'warning'
                    });
                }
                // console.log(this.groups,"groups")
                // console.log(this.allSelect,"select")
            },
            // 封面删除：
            deletecover() {
                this.$confirm('确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.coverSrc = '',
                        this.cover = []
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            // 点击删除轮播图：
            deleteatlas(item) {
                this.$confirm('确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var arr = this.atlasList
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] == item) {
                            // alert(i)
                            this.atlasList.splice(i, 1)
                            this.urlOne.splice(i, 1);
                            console.log(this.urlOne, "删除")
                        }
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            // 点击上传轮播图：
            atlasOpen() {
                this.example2.img = '$oss.url + \'/\' + form.head'
                this.atlasUpload = true;
                this.uploadSure = false;
                this.tailoring = false;
            },
            finish22() {
                this.tailoring = false;
                this.uploadSure = true;
                this.model = false;
                //  var formData=new FormData();
                this.newModelSrc = []
                this.$refs.cropper2.getCropData((data) => {
                    this.modelSrc = data
                    // console.log("裁剪得到的", this.modelSrc)
                    //裁剪后的图片显示
                    this.example2.img = this.modelSrc;
                    this.uploadFile = this.toBlob(data)
                    // console.log("裁剪后",data)
                    let baseString = data.replace(/^data:image\/\w+;base64,/, "");
                    this.newModelSrc.push(baseString)
                    // console.log(this.newModelSrc,"替换后")
                    // console.log("转换后data",this.toBlob(data))

                })
            },
            sureUpload22() {
                this.fullscreenLoading = true;
                this.atlasUpload = false
                var formData = new FormData()
                var nameImg = new Date().getTime() + '.png'
                formData.append('file', this.uploadFile, nameImg)
                // console.log(formData,"file格式。。。")
                axios.post(this.orgBackUrl + "upload/res", formData,).then(res => {
                        res.data
                        this.tailoringReturn = res.data.data
                        if (res.data.rtnCode == 1) {
                            this.atlasList.push(res.data.data.url)
                            this.urlOne.push(res.data.data.recId)
                            console.log(this.urlOne, "上传")
                            // this.threeoneRecId=this.tailoringReturn.recId
                            // this.threeRecId=[this.threeoneRecId,this.threetwoRecId,this.threethreeRecId]
                            // console.log(this.threeRecId,"封面后面图ids")
                            this.fullscreenLoading = false;
                            this.$message({
                                message: '图片上传成功',
                                type: 'success'
                            });
                        } else {
                            this.fullscreenLoading = false;
                            this.$message({

                                message: '图片上传失败，请重新上传',
                                type: 'success'
                            });

                        }
                        console.log(this.tailoringReturn, "图片上传结果")
                    }
                )

            },
            // 裁剪：
            finish2() {
                this.tailoring = false;
                this.uploadSure = true;
                this.model = false;
                //  var formData=new FormData();
                this.newModelSrc = []
                this.$refs.cropper2.getCropData((data) => {
                    this.modelSrc = data
                    // console.log("裁剪得到的", this.modelSrc)
                    //裁剪后的图片显示
                    this.example2.img = this.modelSrc;
                    this.uploadFile = this.toBlob(data)
                    // console.log("裁剪后",data)
                    let baseString = data.replace(/^data:image\/\w+;base64,/, "");
                    this.newModelSrc.push(baseString)
                    // console.log(this.newModelSrc,"替换后")
                    // console.log("转换后data",this.toBlob(data))

                })
            },
            sureUpload() {
                this.cover = []
                this.fullscreenLoading = true;
                this.threeOne = false
                var formData = new FormData()
                var nameImg = new Date().getTime() + '.png'
                formData.append('file', this.uploadFile, nameImg)
                // console.log(formData,"file格式。。。")
                axios.post(this.orgBackUrl + "upload/res", formData,).then(res => {
                        res.data
                        this.tailoringReturn = res.data.data
                        if (res.data.rtnCode == 1) {
                            this.coverSrc = this.tailoringReturn.url
                            this.cover.push(this.tailoringReturn.recId)
                            // this.threeRecId=[this.threeoneRecId,this.threetwoRecId,this.threethreeRecId]
                            // console.log(this.threeRecId,"封面后面图ids")
                            this.fullscreenLoading = false;
                            this.$message({
                                message: '图片上传成功',
                                type: 'success'
                            });

                        } else {
                            this.fullscreenLoading = false;
                            this.$message({

                                message: '图片上传失败，请重新上传',
                                type: 'success'
                            });

                        }
                        console.log(this.tailoringReturn, "图片上传结果")
                    }
                )

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
            threeoneOpen() {
                this.example2.img = '$oss.url + \'/\' + form.head'
                this.uploadSure = false
                this.tailoring = false
                this.threeOne = true
            },
            // 封面图上传：
            handlePictureCardSuccessCover(a, b, c) {
                console.log("图片一张上传成功", a)
                this.cover.push(a.data.recId)

            },
            handleRemoveCover(file, fileList) {
                // console.log(file, fileList);
                this.cover = [];
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },


            // 栏目：
            getTp(val) {
                this.tpId = val;
                // alert(this.tpId)
            },
            // 图片上传：

            handlePictureCardSuccessLb(a, b, c) {
                console.log("轮播图上传成功", a)
                this.urlOne.push(a.data.recId)
                console.log(this.urlOne, "lunbotu")
            },
            handlePictureCardPreviewLb(file) {
                this.dialogImageUrlLb = file.url;
            },
            handleRemoveLb(file, fileList) {
                // console.log("33333",file);
                var arr = this.urlOne
                var item = file.response.data.recId
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == item) {
                        arr.splice(i, 1);
                        i--;
                    }
                }
                this.urlOne = arr;
                console.log(this.urlOne, "轮播图数组")
            },

            //以下是删除的方法
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            //图片上传方法开始
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrlLb = file.url;
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
            submitForm() {
                if (this.ruleForm.name && this.dynamicTags && this.cover && this.urlOne) {
                    var submitList = {
                        "title": this.ruleForm.name,
                        // "tpId" :this.tpId,
                        "tags": this.dynamicTags,
                        "newsStyle": 1012105,
                        "coverResIds": this.cover,
                        "contentResIds": this.urlOne,
                        "newsClassifyIds": this.allSelect
                    }
                    // console.log(submitList)
                    newsArticelAdd(submitList).then(data => {
                        // console.log(data)
                        if (data.rtnCode == 1) {
                            this.$message({
                                message: '图集添加成功',
                                type: 'success'
                            });
                            this.$router.push('/nrgl')
                        } else {
                            this.$message({
                                message: '图集添加失败',
                                type: 'warning'
                            });
                        }
                    })

                } else {
                    this.$message({
                        message: '提交存在空值',
                        type: 'warning'
                    });

                }
            },
            back(){
                window.history.back(-1);
            }
        },
        components: {
            commonHe,
            VueCropper
        },
        created() {
            tps().then(data => {
                console.log(data)
                this.tps = data.data
            })

            var classifyList = {
                "pageNum": 1,
                "pageSize": 500
            }
            articleClassifies(classifyList).then(data => {
                // console.log(data,"文章分组")
                this.options = data.data
            })

            this.isShowMenu = localStorage.getItem("isShowMenu");

            if (this.isShowMenu == undefined || this.isShowMenu != 0) {
                this.isShowMenu = 1;
            }
        },

        mounted() {

            console.log(this.example2.img)
            let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
            document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
            document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
            document.getElementById("box").style.width = (w - 280) + "px";
            document.getElementById("box").style.height = (h - 120) + "px";

            if (this.isShowMenu == 0) {
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

  $left-width: 300px;

  //  封面图点击删除：
  .delete-cover {
    display: none;
  }

  .coverbox:hover .delete-cover {
    display: block;
    cursor: pointer;
  }

  // 轮播图点击删除：
  .delete-atlas {
    display: none;
  }

  .atlas-box:hover .delete-atlas {
    display: block;
    cursor: pointer;
  }


  .style-box {
    background: rgba(245, 245, 245, 1);
    position: absolute;
    left: 200px;
    top: 68px;
    overflow-y: auto;
  }



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
    margin-bottom: 50px;
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









.xjks-k .el-dialog__footer{background:#fff; width:100%; float:left;}
.xjks-k .dialog-footer{ margin:auto; width:260px;   padding-left: 40px;}
 </style>
