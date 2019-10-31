<template>
  <div>
    <ul class="explain">
      <li>1.列表中的人员处理被设置为实物商品付费商品的客服人员</li>
      <li>2.多个客服人员按照饱和度进行分配，新接入的客户，分配到当前饱和度最低的客服 , 若多个客服饱和度相同随机分配 【接待饱和度 = （已接待人数 / 100）%】</li>
      <li>3.离线的客服不能接受到客服消息，超过1分钟未被接待的客户自动转接到其他客服，如客服都未上线则客服对话转接到第1个人客服人员</li>
    </ul>
    <div style="padding: 15px 0;">
      <el-button type="primary" size="small" @click="dialogVisible = true">添加助理客服</el-button>
      <el-button size="small" @click="onDelete()">删除</el-button>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        ref="multipleTable"
        style="width: 100%"
        size="small"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="50px"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="dept"
          label="科室">
        </el-table-column>
        <el-table-column
          prop="title"
          label="职称">
        </el-table-column>
        <el-table-column
          prop="level"
          label="行政级别">
        </el-table-column>
        <el-table-column
          prop="averageWait"
          label="平均等待(s)">
        </el-table-column>
        <el-table-column
          prop="serviceTime"
          label="服务时长(h)">
        </el-table-column>
        <el-table-column
          prop="status"
          label="当前状态"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="onDelete()">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="display: flex;justify-content: flex-end;padding: 15px 0;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10]"
        :page-size="100"
        layout="total,  prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

    <el-dialog
      title="添加人员"
      :visible.sync="dialogVisible"
      width="1200px"
      size="small"
      >
      <div style="padding: 15px 0;width: 400px;">
        <el-input placeholder="请输入内容" v-model="input" size="small">
          <template slot="prepend">医生</template>
          <el-button slot="append">查询</el-button>
        </el-input>
      </div>

      <div class="table">
        <el-table
          :data="addTableData"
          style="width: 100%"
          size="small"
          >
          <el-table-column
            prop="code"
            label="医生编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="level"
            label="行政级别">
          </el-table-column>
          <el-table-column
            prop="dept"
            label="科室">
          </el-table-column>
          <el-table-column
            prop="title"
            label="职称">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="onAdd()">添加</el-button>
              <el-button type="text" size="small" disabled>已添加</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="display: flex;justify-content: flex-end;padding: 15px 0;">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="addPageNum"
          :page-sizes="[10]"
          :page-size="100"
          layout="total,  prev, pager, next, jumper"
          :total="addTotal">
        </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
    export default {
        name: "physicalCustomerService",
        data() {
            return {
                tableData: [
                    {
                        name: '132',
                        dept: '科室',
                        title: '专家',
                        level: '无',
                        averageWait: 10,
                        serviceTime: 1,
                        status: '离线',
                    }
                ],
                multipleSelection: [],
                pageNum: 1,
                total: 0,

                input: '',
                dialogVisible: false,
                addTableData: [
                    {
                        code: '123456',
                        name: '没计划',
                        level: '无',
                        dept: '新生儿科',
                        title: '院长',
                    }
                ],
                addPageNum: 1,
                addTotal: 0,
            }
        },

        created() {

        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val
                console.log(val)
            },

            handleCurrentChange(val) {

            },

            onDelete() {
                this.$confirm('是否删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已操作删除'
                    })
                })
            },

            onAdd() {

            },
        },
        components: {}
    }
</script>

<style scoped>

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .explain {
    padding: 15px;
    color: #212121;
    font-size: 13px;
    background: rgb(254, 248, 238);
    border: 1px solid rgb(251, 222, 179);
  }

</style>
