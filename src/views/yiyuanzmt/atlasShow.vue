<template>
    <div>
      <commonHe v-if="isShowMenu == 1"></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="图集" name="second">
                                <div class="biaodanyz">
                                    <el-form  label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="文章标题" >
                                            <el-input v-model="ruleForm.name"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <div class="shangchuantu">
                                                <div class="show-pics" v-for="(item,index) in picsList" :key="index"  style="cursor:pointer;float:left;width:150px;height:150px;border-radius:5px;margin-right:5px;overflow:hidden">
                                                    <div class="delete-pics" @click="deletePic(item)"  style="width:30px;height:30px;">
                                                      
                                                    </div> 
                                                    <img :src="item" style="width:150px;height:150px" alt="">
                                                </div>
                                                <el-dialog :visible.sync="dialogVisible" size="tiny">
                                                  <img width="100%" :src="dialogImageUrlLb" alt="">
                                                </el-dialog>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="所属栏目" prop="resource">
                                            <el-radio-group v-model="radio" v-for="(tp,index) in tps" :key="index">
                                                <el-radio  :label="tp.tpId" @change="getTp">{{tp.tpName}}</el-radio>
                                            </el-radio-group>
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
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="文章封面" prop="resource">
                                                <div class="shangchuantu" >
                                                  <div class="show-pics" style="cursor:pointer;float:left;width:150px;height:150px;border-radius:5px;margin-right:5px;overflow:hidden">
                                                    <div class="delete-pics" @click="deleteCover()"  style="width:30px;height:30px;">
                                                    </div> 
                                                    <img :src="coverUrl" style="width:150px;height:150px" alt="">
                                                  </div>
                                                 
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
    </div>
</template>

<script>
import commonHe from '../../components/commonHe'
import {addUrl} from '../../api/api'
import {tps} from '../../api/api'
import {newsArticelAdd} from '../../api/api'
import {newsDetail} from '../../api/api'
import {quillRedefine} from 'vue-quill-editor-upload'

export default {
    data(){
        return{
          isShowMenu : 1,
            // 图集列表：
            picsList:[],
            // 排序：
            orderNumber:'',
            // 栏目：
            tps:'',
            radio:'',
            tpId:'',
            // 轮播图上传：
            urlOne:[],
            dialogImageUrlLb:'',
            addUrl:addUrl,
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
            activeName: 'second',
            fits: ['这里是昵称'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            input1: '',
        select: '',
        value: '',
        form: { region: '' },
        // 封面：
        cover:[],
        coverUrl:'',

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
      // 删除封面图：
        deleteCover(){
          this.$confirm('确认删除','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'

          }).then(()=>{
            this.coverUrl='';
            this.cover=[];
            
          }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });

        },

        // 删除图片：
        deletePic(item){
          this.$confirm('确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
              var arr=this.picsList
                for(var i = 0; i < arr.length; i++){
                if(arr[i] == item){
                    // alert(i)
                    this.picsList.splice(i,1)
                    this.urlOne.splice(i,1);
                    console.log(this.urlOne)              
                  }
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            }); 






            


        // console.log(arr)
       



        },
        // 封面图上传：
        handlePictureCardSuccessCover(a,b,c) {
        console.log("图片一张上传成功",a)
        this.cover.push(a.data.recId)
        
      },
      handleRemoveCover(file, fileList) {
        // console.log(file, fileList);
        this.cover=[];
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },



        // 栏目：
        getTp(val){
        this.tpId=val;
        // alert(this.tpId)
      },
        // 图片上传：

        handlePictureCardSuccessLb(a,b,c) {
            console.log("轮播图上传成功",a)
            this.urlOne.push(a.data.recId)
            console.log(this.urlOne,"lunbotu")
        },
        handlePictureCardPreviewLb(file) {
          this.dialogImageUrlLb = file.url;
        },
        handleRemoveLb(file, fileList) {
        // console.log("33333",file);
        var arr=this.urlOne
        var item=file.response.data.recId
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == item){
                arr.splice(i,1);
                i--;
            }
        }
        this.urlOne=arr;
        console.log(this.urlOne,"轮播图数组")
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
      submitForm(){
            var submitList={
                "title":this.ruleForm.name,
                "tpId" :this.tpId,
                "tags":this.dynamicTags,
                "newsStyle":1012105,
                "coverResIds":this.cover,
                "contentResIds":this.urlOne
            }
        console.log(submitList)
        newsArticelAdd(submitList).then(data=>{
          console.log(data)
          if(data.rtnCode==1){
              this.$message({
              message: '图集编辑成功',
              type: 'success'
            });
            this.$router.push('/nrgl')
          }else{
              this.$message({
              message: '图集编辑失败',
              type: 'warning'
            });
          }
        })
      }
    },
    components:{
        commonHe
    },
    created(){
        tps().then(data=>{
          console.log(data)
          this.tps=data.data
        })
        var list={
          "newsId": localStorage.getItem("newsId")
        }
        newsDetail(list).then(data=>{
          console.log("图集编辑取到的信息",data)
          this.radio=data.data.tpId
          this.ruleForm.name=data.data.title
          this.textarea=data.data.content
          this.dynamicTags=data.data.tags
          this.rad=data.data.newsStyle
          this.urlOne=data.data.contentResIds
          this.coverUrl=data.data.coverResUrls
      
        this.picsList=data.data.contentResUrls
        console.log(this.urlOne,"图片",this.picsList)
          
    
        })

        this.editorOption = quillRedefine(
          {
            // 图片上传的设置
            uploadConfig: {
              action: addUrl,  // 必填参数 图片上传地址
              res: (respnse) => {
                return respnse.data.url;//return图片url
              },
              name: 'file'  // 图片上传参数名
            }
          }
        )

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
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 120) + "px";

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
.show-pics{
    position: relative;
    .delete-pics{
        position: absolute;
        z-index:5;
        display:none
    }
}

// .show-pics:hover .delete-pics{
//     display: block;
// }
 </style>
 
