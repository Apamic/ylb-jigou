<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
          <div  id="box">
            <div class="zhenge">
                <el-tabs type="border-card">
                    <!--以下是基本信息------------------------------------------------->
                    <el-tab-pane class="jibenform" label="基本信息">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
                            <el-form-item label="角色">
                                <el-radio-group v-model="form.resource">
                                <el-radio label="主治医师"></el-radio>
                                <el-radio label="护士"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="姓名">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="类型">
                                <el-radio-group v-model="ruleForm.resource1">
                                <el-radio label="医生"></el-radio>
                                <el-radio label="护士"></el-radio>
                                <el-radio label="其他"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-radio-group v-model="form.resource2">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                                <el-radio label="未知"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="手机号" prop="age"
                                :rules="[
                                { required: true, message: '手机号不能为空'},
                                { type: 'number', message: '手机号必须为数字值'}
                                ]" >
                                <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱" prop="email">
                                <el-input v-model="ruleForm.email"></el-input>
                            </el-form-item>
                            <el-form-item label="联系方式" prop="tel">
                                <el-input v-model="ruleForm.tel"></el-input>
                            </el-form-item>
                            <el-form-item label="行政级别" prop="pxzjb">
                                <el-select v-model="ruleForm.pxzjb" placeholder="请选择行政级别">
                                <el-option label="行政级别一" value=""></el-option>
                                <el-option label="行政级别二" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="职称" prop="pzhichen">
                                <el-select v-model="ruleForm.pzhichen" placeholder="请选择职称">
                                <el-option label="主任" value=""></el-option>
                                <el-option label="行政级别二" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所属科室" prop="pkeshi">
                                <el-select v-model="ruleForm.pkeshi" placeholder="请选择行政级别">
                                <el-option label="外科" value=""></el-option>
                                <el-option label="内科" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="行政村">
                                <el-input v-model="ruleForm.pxzc"></el-input>
                            </el-form-item>
                            <el-form-item label="医生头像">
                                <el-upload class="shangchuan"  action="#"  list-type="picture-card"  :auto-upload="false">
                                    <i slot="default" class="el-icon-plus"></i>
                                    <span class="imgmiaoshu">上传医生头像</span>
                                    <div slot="file" slot-scope="{file}">
                                        <img class="el-upload-list__item-thumbnail"  :src="file.url" alt="" >
                                        <span class="el-upload-list__item-actions">
                                            <span  class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)" >
                                                <i class="el-icon-zoom-in"></i>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)" >
                                                <i class="el-icon-download"></i>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"  @click="handleRemove(file)" >
                                                <i class="el-icon-delete"></i>
                                            </span>
                                        </span>
                                    </div>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </el-form-item>
                            <el-form-item label="身份证">
                                <el-upload
                                  class="avatar-uploader shangchuan"
                                  action="https://jsonplaceholder.typicode.com/posts/"
                                  :show-file-list="false"
                                  :on-success="handleAvatarSuccess"
                                  :before-upload="beforeAvatarUpload">
                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                  <span class="imgmiaoshu">上传身份证正面照</span>
                                </el-upload>

                                <el-upload
                                  class="avatar-uploader shangchuan"
                                  action="https://jsonplaceholder.typicode.com/posts/"
                                  :show-file-list="false"
                                  :on-success="handleAvatarSuccess2"
                                  :before-upload="beforeAvatarUpload">
                                  <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                  <span class="imgmiaoshu">上传身份证反面照</span>
                                </el-upload>
                               
                            </el-form-item>
                            <el-form-item label="医师资格证号">
                                <el-input v-model="ruleForm.pxzc"></el-input>
                            </el-form-item>

                            <el-form-item label="执业证有效期">
                                <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="医师执业证">
                                <el-upload
                                  class="avatar-uploader shangchuan"
                                  action="https://jsonplaceholder.typicode.com/posts/"
                                  :show-file-list="false"
                                  :on-success="handleAvatarSuccess3"
                                  :before-upload="beforeAvatarUpload">
                                  <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                  <span class="imgmiaoshu">医师执业证第一页</span>
                                </el-upload>

                                <el-upload
                                  class="avatar-uploader shangchuan"
                                  action="https://jsonplaceholder.typicode.com/posts/"
                                  :show-file-list="false"
                                  :on-success="handleAvatarSuccess4"
                                  :before-upload="beforeAvatarUpload">
                                  <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
                                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                  <span class="imgmiaoshu">医师执业证第二页</span>
                                </el-upload>   
                            </el-form-item>

                            <el-form-item class="scjbkuang" label="擅长疾病">
                              <el-button class="xuanzebtn"  type="text" @click="dialogFormVisible = true"><div class="xuanzhong-btn yuanjiaobtn">请选择</div></el-button>
                              <div class="xjks-k">
                                <el-dialog title="擅长疾病" :visible.sync="dialogFormVisible">
                                  <!--擅长疾病搜索框-->
                                  <div class="sskuang-tou">
                                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                      <el-form-item label="选择科室">
                                        <el-select v-model="formInline.region" placeholder="选择一级科室">
                                          <el-option label="一级科室一" value="yijikeshi1"></el-option>
                                          <el-option label="一级科室二" value="yijikeshi2"></el-option>
                                        </el-select>
                                        <el-select v-model="formInline.region1" placeholder="选择二级科室">
                                          <el-option label="选择二级科室一" value="erjikeshi1"></el-option>
                                          <el-option label="选择二级科室二" value="erjikeshi2"></el-option>
                                        </el-select>
                                      </el-form-item>
                                      <el-form-item class="jibinginput" label="疾病">
                                        <el-input v-model="formInline.user" placeholder="请填写中文"></el-input>
                                      </el-form-item>
                                      <el-form-item>
                                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                                      </el-form-item>
                                    </el-form>
                                  </div>
                                  <el-form :model="form" class="m-t-20">
                                    <el-form-item label="请选择擅长疾病"><span class="shuoming">（最多选6种）</span>
                                      <el-checkbox-group v-model="form.type">
                                        <el-checkbox label="心脑血管" name="type"></el-checkbox>
                                        <el-checkbox label="内科" name="type"></el-checkbox>
                                        <el-checkbox label="骨外科" name="type"></el-checkbox>
                                        <el-checkbox label="普通外科" name="type"></el-checkbox>
                                        <el-checkbox label="急诊" name="type"></el-checkbox>
                                        <el-checkbox label="妇科" name="type"></el-checkbox>
                                        <el-checkbox label="脑外科" name="type"></el-checkbox>
                                        <el-checkbox label="产科" name="type"></el-checkbox>
                                        <el-checkbox label="儿科" name="type"></el-checkbox>
                                        <el-checkbox label="神经科" name="type"></el-checkbox>
                                        <el-checkbox label="泌尿科" name="type"></el-checkbox>
                                        <el-checkbox label="眼科" name="type"></el-checkbox>
                                        <el-checkbox label="耳科" name="type"></el-checkbox>
                                        <el-checkbox label="喉科" name="type"></el-checkbox>
                                      </el-checkbox-group>
                                    </el-form-item>
                                  </el-form>
                                  <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                  </div>
                                </el-dialog>
                              </div>
                            </el-form-item>
                            <el-form-item label="擅长领域">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item label="个人简介">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item label="经验">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">确定保存</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    <!--以上是基本信息------------------------------------------------------------>
                    <el-tab-pane class="chouchenform" label="抽成信息">
                        <el-form ref="form" :model="ccxxform" label-width="160px">
                          <el-form-item label="个人服务包订单抽成">
                            <el-input v-model="form.name"></el-input>
                            <span class="danwei">%</span>
                          </el-form-item>
                          <el-form-item label="问诊订单抽成">
                            <el-input v-model="form.name1"></el-input>
                            <span class="danwei">%</span>
                          </el-form-item>
                          <el-form-item label="预约订单抽成">
                            <el-input v-model="form.name2"></el-input>
                            <span class="danwei">%</span>
                          </el-form-item>
                          <el-form-item label="送花订单抽成">
                            <el-input v-model="form.name3"></el-input>
                            <span class="danwei">%</span>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="onSubmit">确定提交</el-button>
                            <el-button>取消</el-button>
                          </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane class="yyxxform" label="应用信息">
                        <div class="jingaotishi"><p>请给该员工勾选可使用的应用，如需更多应用请到<a href="">应用广场>></a></p></div>
                        <el-form ref="form" :model="form" label-width="80px">
                          
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
    data(){
      return{
        //身份证正面
        imageUrl: '',
        //身份证反面
        imageUrl2: '',
        //执业资格证第一页
        imageUrl3: '',
        //执业资格证第二页
        imageUrl4: '',
        //擅长疾病弹框
        formInline: {
          user: '',
          region: '',
          region1: ''
        },
         //擅长疾病选择开始
        dialogFormVisible: false,
        formLabelWidth: '120px',
        //擅长疾病选择结束
        //医生头像
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        //医生头像结束

        //抽成信息form表单
        ccxxform: {
          name: '',
          name1: '',
          name2: '',
          name3: '',
          },
        //
        form: {
          name: '',
          region: '',
          date1: '',
          date3: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
          },

        //基本信息带验证的表单
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date3: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          email:'',
          tel:'',
          pxzc:'',
        },
        //验证规则开始
        rules: {
          name: [
                  { required: true, message: '请输入活动名称', trigger: 'blur' },
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
          email:[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
          tel:[
                { required: true, message: '电话号码不能为空'},
                { type: 'number', message: '号码必须为数字值'}
              ],
          region:[
                  { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
          date1:[
                  { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
          date3: [
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
        //规则结束
        numberValidateForm: {
          age: ''
        },
      };
    },
    components:{
        commonHe
    },
    methods: {
      //身份证和证书上传方法开始
      //身份证正面上传
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      //身份证反面上传
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
      },
      //执业资格证书第一页上传
      handleAvatarSuccess3(res, file) {
        this.imageUrl3 = URL.createObjectURL(file.raw);
      },
      //执业资格证书第二页上传
       handleAvatarSuccess4(res, file) {
        this.imageUrl4 = URL.createObjectURL(file.raw);
      },
      //图片上传的要求
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      //身份证和证书上传方法结束

      //医生头像方法开始
        handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      //医生头像方法结束

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

      onSubmit() {
        console.log('submit!');
      },

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