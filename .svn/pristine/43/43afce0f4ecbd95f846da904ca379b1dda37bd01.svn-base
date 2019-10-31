<template>
  <div>
    <commonHe></commonHe>
    <div class="style-box">
      <div class="wrapper">
        <el-tabs v-model="activeName">
          <el-tab-pane label="预警记录" name="first">
            <ul class="list">
              <li>
                <p>预警总数</p>
                <h3>{{list.warningTotal}}</h3>
              </li>
              <li>
                <p>未处理预警</p>
                <h3 style="color: #409EFF;">{{list.noWarningAmount}}</h3>
              </li>
            </ul>
            <div class="table">
              <div class="title">
                <span>预警明细</span>
                <el-radio-group v-model="radio1" size="small" @change="radioChange">
                  <el-radio-button label="0">全部</el-radio-button>
                  <el-radio-button label="1">未处理</el-radio-button>
                  <el-radio-button label="2">已处理</el-radio-button>
                </el-radio-group>
              </div>
              <el-table
                :data="data"
                style="width: 100%"
                size="small"
              >
                <el-table-column
                  label="序号"
                  type="index"
                  width="100px"
                >
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  label="预警时间"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  label="预警级别"
                >
                  <template slot-scope="scope">
                    <span style="color: red;" v-if="scope.row.level == '重要预警'">重要预警</span>
                    <span style="color: #e6a23c;" v-if="scope.row.level == '中级预警'">中级预警</span>
                    <span v-if="scope.row.level == '一般预警'">一般预警</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="userName"
                  label="姓名"
                >
                </el-table-column>
                <el-table-column
                  prop="content"
                  label="预警内容">
                </el-table-column>
                <el-table-column
                  prop="processingUserName"
                  label="预警处理人">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="处理状态">
                  <template slot-scope="scope">
                    <span style="color: red;" v-if="scope.row.status == '1'">未处理</span>
                    <span style="color: #409eff;" v-if="scope.row.status == '2'">以处理</span>
                    <span style="color: #67c23a" v-if="scope.row.status == '3'">以处理</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="140px"
                >
                  <template slot-scope="scope">
                    <el-button v-if="scope.row.status == '2'" type="text" size="small"
                               @click="getWarningDetails(scope.row.warningDetailsId)">查看处理详情
                    </el-button>
                    <el-button v-else type="text" size="small" @click="setWarningDetails(scope.row.warningDetailsId)">标记为已处理</el-button>

                  </template>
                </el-table-column>
              </el-table>
              <div class="page">
                <el-pagination
                  @current-change="hutCurrentChange"
                  @size-change="hutSizeChange"
                  :page-sizes="[5, 10, 15, 20]"
                  :current-page="hutNum"
                  :page-size="hutPageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="hutTotal">
                </el-pagination>
              </div>
            </div>

            <el-dialog
              title="服务处理"
              :visible.sync="dialogVisible"
              width="40%"
            >
              <el-form :model="form">
                <el-form-item label="备注信息" :label-width="formLabelWidth">
                  <el-input v-model="form.handleResult" autocomplete="off" type="textarea"
                            :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="图片" :label-width="formLabelWidth" v-if="!disabled">
                  <el-upload
                    ref="upload"
                    :action="updateUrl"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList"
                    :limit="3">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="uploadVisible" append-to-body>
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>
                <el-form-item label="图片" :label-width="formLabelWidth" v-else>
                  <img v-for="item in form.imageList" :src="item" width="100%"/>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" v-if="!disabled" @click="onInfoHandle()" size="small">确 定</el-button>
<!--                <el-button type="primary" v-else @click="disabled = !disabled" size="small">编辑</el-button>-->
              </div>
            </el-dialog>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
    import commonHe from '../../components/commonHe'
    import {warningStatistics, warningList, warningDetails, infoHandle,updateUrl} from '@/api/api.js'

    export default {
        name: "healthHut",
        data() {
            return {
                activeName: 'first',

                data: [],

                dialogVisible: false,
                uploadVisible: false,

                form: {
                    handleResult: '',
                    imageIdList: [],
                },

                list: {},

                formLabelWidth: '80px',
                disabled: true,

                radio1: '0',
                hutNum: 1,
                hutPageSize: 10,
                hutTotal: 0,

                dialogImageUrl: '',
                warningDetailsId: '',
                updateUrl: '',
                fileList: [],
            }
        },

        created() {
            this.getWarningStatistics()
            this.getWarningList()
            this.updateUrl = updateUrl
        },
        methods: {
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                // const isLt2M = file.size / 1024 / 1024 < 5;

                if (!isJPG && !isPNG) {
                    this.$message.error('上传图片只能是 JPG,PNG 格式!');
                    return isJPG && isPNG
                }

                // if (!isLt2M) {
                //     this.$message.error('上传头像图片大小不能超过 5MB!');
                //     return isLt2M
                // }
            },

            handleAvatarSuccess(res,file) {
                this.form.imageIdList.push(res.data.fileId)
                console.log(this.fileList)
                console.log(this.form.imageList)
            },

            handleRemove(file, fileList) {
                console.log(file, fileList);
                console.log(this.fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.uploadVisible = true;
            },

            setWarningDetails(id) {
                this.dialogVisible = true
                this.form = {
                    handleResult: '',
                    imageIdList: []
                }
                this.disabled = false
                this.warningDetailsId = id

                if (this.$refs.upload) {
                    this.$refs.upload.clearFiles()
                }
            },

            getWarningStatistics() {
                warningStatistics({
                    timeType: 0,
                    govId: localStorage.getItem('orgId')
                }).then(res => {
                    this.list = res.data.statisticsInfo
                    console.log(this.list)
                })
            },

            getWarningList() {
                warningList({
                    status: this.radio1,
                    // govId: localStorage.getItem('orgId'),
                    govId: localStorage.getItem('govId'),
                    pageParam: {
                        pageSize: this.hutPageSize,
                        pageNum: this.hutNum
                    },
                    timeType: 0,
                }).then(res => {
                    this.data = res.data.warningDetailsList
                    this.hutTotal = res.data.total
                    // console.log(res.data)
                })
            },

            getWarningDetails(id) {
                this.dialogVisible = true
                this.disabled = true
                warningDetails({
                    warningDetails: {
                        warningDetailsId: id
                    }
                }).then(res => {
                    this.form = res.data.warningDetails
                    console.log(this.form)
                })
            },

            onInfoHandle() {
                infoHandle({
                    warningDetailsId: this.warningDetailsId,
                    ...this.form
                }).then(res => {
                    this.dialogVisible = false
                    this.getWarningList()
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });
                })
            },

            hutCurrentChange(val) {
                this.hutNum = val
                this.getWarningList()
            },

            hutSizeChange(val) {
                this.hutPageSize = val
                this.getWarningList()
            },

            radioChange(val) {
                this.radio1 = val
                this.getWarningList()
            }
        },
        components: {
            commonHe
        }
    }
</script>

<style scoped>
  .style-box {
    background: rgba(245, 245, 245, 1);
    padding: 15px;
    position: absolute;
    left: 200px;
    top: 68px;
    right: 0;
    bottom: 0;

  }

  .wrapper {
    padding: 10px;
    height: 100%;
    background: #ffffff;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .list {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    margin: 15px;
    /*background: #f9f9f9;*/
    border-radius: 4px;
    box-shadow: 0 2px 12px #dedede;
  }

  .list > li {
    flex: 1;
    position: relative;
    list-style: none;
  }

  .list > li:before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 1px;
    height: 100%;
    background: #dedede;
  }

  .list > li:last-child:before {
    content: none;
  }

  .list > li > h3 {
    margin: 5px 0;
    text-align: center;
  }

  .list > li > p {
    font-size: 14px;
    color: #999;
    text-align: center;
  }

  .table {
    padding: 10px;
    margin: 15px;
    /*border: 1px solid #EBEEF5;*/
    box-shadow: 0 2px 12px #dedede;
    border-radius: 4px;
  }

  .table >>> .el-table tr th {
    background: #f5f5f5 !important;
  }

  .title {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  .title > span {
    color: #212121;
    font-size: 16px;
  }

  .page {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
</style>
