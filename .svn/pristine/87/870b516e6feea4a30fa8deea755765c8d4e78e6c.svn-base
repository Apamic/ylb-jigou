<template>
  <div class="continer">
    <div class="left">
      <div class="phone">
        <div class="top">首页</div>
        <div class="bottom">
          <div v-for="(item,index) in navLsit">
            <span class="img"><img :src="item.unChooseIconUrl" alt=""></span>
            <p>{{item.navName}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box" v-for="(item,index) in navLsit" @click="tabIndex = index">
        <div class="delete" @click="close(item,index)">×</div>
        <div class="first">
          <div class="mc">名称</div>
          <el-input class="inp" size="small" v-model="item.navName" placeholder="请输入内容" :disabled="index == 0 || index == (navLsit.length - 1)? true:false"></el-input>
        </div>
        <div class="second">
          <div class="tb">图标</div>
          <div class="icon">
            <el-upload
              class="avatar-uploader"
              :action="baseUrl +'upload/res'"
              :show-file-list="false"
              :data="{index: index}"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="item.chooseIconUrl" :src="item.chooseIconUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <!--                        <img src="../../../assets/images/0.jpg" alt="">-->
            <!--                        <span>修改</span>-->
          </div>
          <div class="icon selected">
            <el-upload
              class="avatar-uploader"
              :action="baseUrl +'upload/res'"
              :show-file-list="false"
              :data="{index: index}"
              :on-success="handleAvatarSuccessUn"
              :before-upload="beforeAvatarUpload">
              <img v-if="item.unChooseIconUrl" :src="item.unChooseIconUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <!--                        <img src="../../../assets/images/0.jpg" alt="">-->
            <!--                        <span>修改</span>-->
          </div>
        </div>
        <div class="status">
          <div class="wxz">选中</div>
          <div class="xz">未选中</div>
        </div>
        <div class="third">
          <div v-if="item.navType == 'MY' || item.navType == 'GROUP'" class="tz">默认链接</div>
          <div v-if="item.navType == 'HOMEPAGE'" class="tz">微页面链接</div>
          <div v-if="item.navType == 'LINK'" class="tz">自定义链接</div>
          <el-select v-if="item.navType == 'HOMEPAGE'" class="sel" size="small" v-model="item.pageId" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.pageId"
              :label="item.pageName"
              :value="item.pageId">
            </el-option>
          </el-select>
          <el-input v-if="item.navType == 'MY'"  style="width: 150px" size="small" v-model="my"  placeholder="请输入内容" disabled></el-input>
          <el-input v-if="item.navType == 'GROUP'"  style="width: 150px" size="small" v-model="group" placeholder="请输入内容" disabled></el-input>
          <el-input v-if="item.navType == 'LINK'"  style="width: 150px" size="small" v-model="item.linkUrl" placeholder="请输入内容" disabled></el-input>
          <el-dropdown @command="handleCommand($event,index)" trigger="click" placement="bottom-start" style="margin-left: 10px" v-if="index != 0 && index != (navLsit.length - 1)">
            <span class="el-dropdown-link">
              修改<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="item.navType" v-for="(item,index) in selectType" :key="index">{{item.typeName}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="plus" @click="plus">+添加导航</div>
      <div class="notice">导航数最多添加5个</div>
      <div class="end">
        <el-button type="primary" @click="update">确定提交</el-button>
      </div>
    </div>

    <el-dialog title="输入链接" :visible.sync="dialogTableVisible" width="500px">
      <el-input v-model="navLsit[index].linkUrl" size="small"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false" size="small">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

    import baseUrl from '@/api/base.js'

    export default {
        data() {
            return {

                imageUrl: '',

                tabIndex: '',

                navItem: {
                    name: '',
                    img1: '',
                    img2: '',
                    url: '',
                },

                navLsit: [],

                baseUrl: baseUrl,

                my: '我的',
                group: '小组',

                options: [],
                selectType: [],
                // command: '',
                index: 0,

                dialogTableVisible: false,
            }
        },

        created() {
            this.init()
            this.getSelectList()
            // this.getNavList()
            // this.getMicroPages()
        },

        methods: {

            handleCommand($event,index) {
                if ($event == 'LINK') {
                    this.dialogTableVisible = true
                }

                this.index = index
                this.navLsit[this.index].navType = $event
            },

            getSelectList() {
                this.$axios({
                    url: 'micro/link/type',
                    method: 'post',
                    data: {}
                }).then(res => {
                    this.selectType = res.data.data

                })
            },

            init() {
                this.$axios({
                    url: 'micro/init',
                    method: 'post',
                    data: {},
                }).then(res => {
                    this.getNavList()
                    this.getMicroPages()
                })
            },

            update() {
                this.$confirm('是否确认提交?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.navLsit.forEach((item, index) => {
                        item.sort = index + 1
                    })

                    this.$axios({
                        url: 'micro/nav/update',
                        method: 'post',
                        data: this.navLsit
                    }).then(res => {
                        this.getNavList()
                        this.$message({
                            type: 'success',
                            message: '提交成功!'
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消提交'
                    });
                });
            },

            getNavList() {
                this.$axios({
                    url: 'micro/navigations',
                    method: 'post',
                    data: {}
                }).then(res => {
                    // console.log(res)
                    this.navLsit = res.data.data
                })
            },

            getMicroPages() {
                this.$axios({
                    url: 'micro/pages',
                    method: 'post',
                    data: {}
                }).then(res => {
                    console.log(res)
                    this.options = res.data.data
                })
            },

            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isPng = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG && !isPng) {
                    this.$message.error('上传头像图片只能是 JPG 或 png 格式!');
                    return false
                }

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                    return false
                }
            },

            handleAvatarSuccess(res, file) {
                this.navLsit[this.tabIndex].chooseIconUrl = URL.createObjectURL(file.raw);
                this.navLsit[this.tabIndex].chooseIconId = res.data.recId
                console.log(res.data.recId)
            },

            handleAvatarSuccessUn(res, file) {
                this.navLsit[this.tabIndex].unChooseIconUrl = URL.createObjectURL(file.raw);
                this.navLsit[this.tabIndex].unChooseIconId = res.data.recId
            },

            close(item, index) {
                this.$confirm('是否确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    if (item.navId == null) {
                        this.navLsit.splice(index, 1)
                        return
                    }

                    this.$axios({
                        url: 'micro/nav/delete',
                        method: 'post',
                        data: {
                            navId: item.navId
                        }
                    }).then(res => {
                        this.getNavList()
                        this.$message({
                            type: 'success',
                            message: '提删除成功!'
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

                // this.navLsit.splice(index,1)

            },


            plus() {
                if (this.navLsit.length > 4) {
                    return this.$message({
                        type: 'info',
                        message: '最多添加5个!'
                    })
                } else {
                    let obj = {}
                    for (var i in this.navLsit[this.navLsit.length - 1]) {
                        obj[i] = this.navLsit[this.navLsit.length - 1][i]
                    }
                    obj.navId = null
                    obj.timeCreate = null
                    obj.pageId = ''
                    // console.log(obj)
                    // obj.navType = ''

                    this.navLsit.splice(this.navLsit.length - 1, 0, obj)
                    // console.log(this.navLsit)
                    // this.navLsit[this.navLsit.length - 1].navId = null
                }

            }
        }
    }
</script>

<style scoped>
  .continer .right .right-box:first-child:hover .delete {
    display: none;
  }

  .continer .right .right-box:nth-last-child(4):hover .delete {
    display: none;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>


<style lang="scss">
  .continer {
    .left {
      float: left;

      .phone {
        width: 300px;
        height: 500px;
        border: solid 1px #ededed;
        background: #F5F5F5;

        .top {
          width: 100%;
          height: 50px;
          // background-color: pink;
          background-image: url(../../../assets/images/bar.png);
          background-repeat: no-repeat;
          background-size: 300px 50px;
          text-align: center;
          line-height: 67px;
          font-size: 13px;
        }

        .bottom {
          width: 100%;
          height: 49px;
          background-color: #fff;
          margin-top: 400px;
          border-top: 1px solid #ededed;
          display: flex;
          justify-content: space-around;

          div {
            width: 50px;
            height: 50px;
            // background-color: pink;
            text-align: center;
            //background-image: url();
            position: relative;
            // line-height: 20px;
            overflow: hidden;

            .img {
              display: block;
              width: 24px;
              height: 24px;
              // background-color: red;
              margin-left: 13px;
              margin-top: 8px;

              img {
                width: 24px;
                height: 24px;
              }
            }

            p {
              margin-top: 2px;
              font-size: 10px;
            }
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      float: left;
      padding: 10px 0;
      width: 420px;
      height: 500px;
      border: 1px solid #ededed;
      margin-left: 30px;
      overflow-y: auto;
      background: #F5F5F5;
      box-sizing: border-box;

      .right-box {
        flex: 0 0 250px;
        margin-bottom: 10px;
        width: 370px;
        height: 250px;
        /*margin:15px auto;*/
        /*border:1px solid #ededed;*/
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0 2px 12px #f3f5f7;
        overflow: hidden;
        position: relative;

        .delete {
          width: 28px;
          height: 28px;
          line-height: 25px;
          cursor: pointer;
          text-align: center;
          border-radius: 50%;
          position: absolute;
          top: 5px;
          right: 5px;
          z-index: 5;
          color: #fff;
          font-size: 25px;
          background-color: rgb(172, 169, 169);
          /*display: none;*/
          transform: translate(40px, 0);
          transition: .3s;
        }

        .first {
          margin-left: 20px;
          width: 360px;
          overflow: hidden;

          .mc {
            width: 80px;
            float: left;
            color: #222222;
            font-size: 15px;
            margin-top: 20px;
            // background-color: pink;
          }

          .inp {
            width: 150px;
            float: left;
            margin-top: 15px;
          }
        }

        .second {
          margin-left: 20px;
          width: 360px;
          overflow: hidden;

          .tb {
            width: 80px;
            float: left;
            color: #222222;
            font-size: 15px;
            margin-top: 20px;
          }

          .icon {
            /*width: 55px;*/
            /*height: 60px;*/
            float: left;
            margin-top: 23px;
            /*border:1px solid #deeded;*/
            cursor: pointer;

            img {
              margin-top: 2px;
              width: 55px;
              height: 55px;
            }

            span {
              width: 55px;
              height: 18px;
              display: block;
              text-align: center;
              line-height: 18px;
              color: #fff;
              font-size: 10px;
              background-color: #7c7b7b;
              border-right: 1px solid #7c7b7b;
            }
          }

          .selected {
            margin-left: 20px;
          }
        }

        .status {
          width: 360px;
          overflow: hidden;
          margin-top: 5px;

          .wxz {
            float: left;
            width: 55px;
            text-align: center;
            margin-left: 100px;
            color: #222222;
            font-size: 12px;
          }

          .xz {
            float: left;
            width: 55px;
            text-align: center;
            color: #222222;
            font-size: 12px;
            margin-left: 22px;
          }
        }

        .third {
          display: flex;
          align-items: center;
          padding: 30px 0;
          width: 360px;
          overflow: hidden;
          margin-left: 20px;

          .tz {
            width: 80px;
            color: #222222;
            font-size: 15px;
          }

          .sel {
            width: 150px;
          }

        }
      }

      .right-box:hover {
        .delete {
          /*display: block;*/
          transform: translate(0, 0);
        }
      }

      .plus {
        width: 370px;
        height: 45px;
        background-color: #fff;
        line-height: 45px;
        text-align: center;
        color: #409EFF;
        border-radius: 6px;
        cursor: pointer;
        transition: .5s;

        &:hover {
          background: #409EFF;
          color: #fff;
        }
      }

      .notice {
        padding: 10px 15px;
        align-self: flex-start;
        color: #666666;
        font-size: 14px;
      }
    }
  }

  .avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader-icon:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    font-size: 28px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    color: #8c939d;
    border-radius: 6px;
    transition: .3s;
  }

  .end {
    padding: 10px;
  }
</style>
