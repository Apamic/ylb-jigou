<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div>
                <div class="yysz-ys">
                    <div class="bfb-bjb m-b-20">
                        <div style="display:none;"><router-link to="/xiaoguoceshi">弹框测试效果</router-link></div>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="基本信息2" name="first">
                                <div class="biaodan">
                                    <el-form ref="form" :model="form" label-width="100px">
                                        <el-form-item label="机构简称">
                                            <div class="biaodan-hy">
                                                <div class="biaodan-hynr"><el-input v-model="form.name"></el-input></div>
                                                <div class="shezhi-gdy">
                                                    <el-button type="text" @click="open">设置</el-button>
                                                </div>
                                            </div>   
                                        </el-form-item>

                                        <el-form-item label="机构LOGO">
                                            <div class="biaodan-hy">
                                                <div class="biaodan-hynr"><img src="../assets/images/收入.png" alt=""></div>
                                                <div class="shezhi-gdy">
                                                    <el-button type="text" @click="open">设置</el-button>
                                                </div>
                                            </div>   
                                        </el-form-item>
                                        
                                        <el-form-item label="所属类型">
                                            <div class="biaodan-hy">
                                                <el-select v-model="form.region" placeholder="三甲医院">
                                                <el-option label="一级医院" value="shanghai"></el-option>
                                                <el-option label="二级医院" value="beijing"></el-option>
                                                </el-select>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="机构简介">
                                            <div class="biaodan-hy">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="阅读量显示">
                                            <div class="biaodan-hy">
                                                <el-switch v-model="form.delivery"></el-switch>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="机构特色标签">
                                            <div class="biaodan-hy">
                                                <el-tag :key="tag" v-for="tag in dynamicTags" closable
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
                                                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加新标签</el-button>
                                            </div>
                                        </el-form-item>

                                        <el-form-item label="订单数显示">
                                            <div class="biaodan-hy">
                                                <el-switch v-model="form.delivery1"></el-switch>
                                            </div>
                                        </el-form-item>
                                        <el-form-item label="问诊量显示">
                                            <div class="biaodan-hy">
                                                <el-switch v-model="form.delivery2"></el-switch>
                                            </div>
                                        </el-form-item>

                                        
                                        <el-form-item>
                                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                            <el-button>取消</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="联系我们" name="second">
                                <div class="biaodan">
                                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                                        <el-form-item label="名称">
                                            <el-input v-model="formLabelAlign.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动区域">
                                            <el-input v-model="formLabelAlign.region"></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动形式">
                                            <el-input v-model="formLabelAlign.type"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-tab-pane> 
                        </el-tabs>
                    </div>
                    <div class="bfb-bjb m-b-20">
                    <div class="" style=" width:500px; height400px; background:#f00; float:left;">333

                                  <el-tree
                                    :props="props1"
                                    :load="loadNode2"
                                    lazy
                                    show-checkbox
                                    @check-change="handleCheckChange">
                                  </el-tree>

                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import commonHe from '../components/commonHe'
export default {
    data(){
        return{
            props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
            activeName: 'second',
            form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        dynamicTags: ['中医康复', '口腔保健', '社区卫生服务中心'],
        inputVisible: false,
        inputValue: ''
        }
    },
    methods: {
        handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
        open() {
        this.$prompt('请输入机构名称', '机构名称自定义', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '请输入正确格式'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '机构名称: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
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

      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
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
<style lang="scss" scoped>
 @import '../styles/hxmstyle.css';
 $left-width:300px;
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
.style-box{
    background:rgba(245,245,245,1);
    position: absolute;
    left:200px;
    top:68px;
    overflow-y: auto;
}
.biaodan-hynr input,.biaodan-hynr .el-input__inner{border: none; height: 38px; line-height: 38px;}
.el-input input{border: none; height: 38px; line-height: 38px;}
 </style>