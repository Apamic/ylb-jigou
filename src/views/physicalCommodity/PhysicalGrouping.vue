<template>
  <div class="">
    <p>
      商品分组功能可帮助您更高效地分类管理商品，让用户更加便捷找到所需服务商品。
    </p>
    <div style="display: flex;justify-content: space-between;margin-top: 20px;">
      <el-button type="primary" size="small" @click="$router.push('/PhysicalCommodityGrouping')">添加分组</el-button>
      <el-input size="small" placeholder="请输入内容" v-model="input2" style="width: 250px;">
        <template slot="append">
          <el-button size="small">搜索</el-button>
        </template>
      </el-input>
    </div>
    <div style="padding: 10px 0;">
      <div style="margin-top: 10px;" class="table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          size="small"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="index"
            width="55px"
          >
          </el-table-column>
          <el-table-column
            label="分组名称"
            prop="name"
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="num"
            label="商品数"
          >
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            width="200px"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="$router.push('/PhysicalCommodityGrouping')">内容管理</el-button>
              <el-button type="text" size="small" @click="onEdit()">编辑</el-button>
              <el-button type="text" size="small" @click="shareShow = true">分享</el-button>
              <el-button type="text" size="small" @click="onDelete()">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="display: flex;justify-content: flex-end;padding: 20px 0 10px;">
        <el-pagination background layout="total, prev, pager, next"
                       :total="total"
                       :page-size="10"
                       :current-page="pageNum"
                       @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>

    <el-dialog
      title="编辑"
      :visible.sync="editShow"
      width="500px"
    >
      <div>
        <span>分组名称: </span>
        <el-input v-model="input" placeholder="请输入内容" size="small" style="width: 300px;margin-left: 5px;"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editShow = false" size="small">取 消</el-button>
        <el-button type="primary" @click="editShow = false" size="small">确 定</el-button>
      </span>
    </el-dialog>

    <div class="share">
      <el-dialog :visible.sync="shareShow" width="400px">
        <div style="display: flex;justify-content: center;align-items: center;">
          <div style="width: 320px;display: flex;flex-direction: column;justify-content: center;align-items: center;">
            <img :src="shareObj.shareCode" width="300" height="300"/>
<!--            <el-button type="text"><a :href="baseUrl+'/micro/page/share/code/download?pageId='+pageId">下载二微码</a></el-button>-->
            <el-input placeholder="请输入内容" v-model="shareObj.shareUrl" disabled>
              <el-button slot="append" @click="copy()">复制</el-button>
            </el-input>
          </div>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
    export default {
        name: "PhysicalGrouping",
        data() {
            return {
                total: 0,
                pageNum: 1,
                tableData: [
                    {
                        name: 'meijihua',
                        num: 1,
                        date: 1314,
                    },
                    {}, {}, {}, {}, {}, {}, {}, {}, {}
                ],

                editShow: false,

                input: '',
                input2: '',

                multipleSelection: [],

                shareShow: false,

                shareObj: {}
            }
        },

        created() {

        },
        methods: {

            copy() {
                const input = document.createElement('input')
                document.body.appendChild(input)
                input.setAttribute('value',this.shareObj.shareUrl)
                input.select()
                if (document.execCommand('copy')) {
                    document.execCommand('copy')
                    this.$message({
                        type: 'success',
                        message: '复制成功!'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '浏览器不支持!'
                    })
                }
                document.body.removeChild(input)
                console.log(this.shareObj.shareUrl)
            },


            handleCurrentChange(val) {
                this.pageNum = val
            },


            handleSelectionChange(val) {
                this.multipleSelection = val
                console.log(this.multipleSelection)
            },

            onDelete() {
                this.$confirm('删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            onEdit() {
                this.editShow = true
            }
        },
        components: {}
    }
</script>

<style scoped>

  p {
    margin: 0;
  }

  .wrapper {
  }

  div p {
    padding: 15px;
    background: #f3f5f7;
    color: #666;
    font-size: 15px;
  }

  .table >>> .el-table tr th {
    color: #212121;
    font-weight: 500;
    background: #f3f5f7;
    font-size: 13px;
  }
</style>
