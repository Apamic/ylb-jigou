<template>
  <div class="wrapper">
    <div class="title">
      <div>
        <el-button type="primary" size="small">发布商品</el-button>
        <el-button size="small" @click="onPutaway">上架</el-button>
        <el-button size="small" @click="onSoldOut">下架</el-button>
        <el-button size="small" @click="onDelete()">删除</el-button>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;">
        <div style="display: inline-block;margin-right: 20px;">
          <span style="font-size: 14px;">状态</span>
          <el-select size="small" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="display: inline-block">
          <el-input size="small" placeholder="请输入内容" v-model="input2">
            <template slot="append">
              <el-button size="small" @click="onSearch">搜索</el-button>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        size="small"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="40px"
        >
        </el-table-column>
        <el-table-column
          type="index"
          width="40px"
        >
        </el-table-column>
        <el-table-column
          label="商品"
        >
          <template slot-scope="scope">
            <div style="display: flex;">
              <img width="70" height="70" style="margin-right: 10px;"/>
              <ul class="none">
                <li class="none" style="color: #212121">123</li>
                <li class="none" style="color: rgb(255,102,0)">¥132</li>
              </ul>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="访问量"
        >
          <template slot-scope="scope">
            <ul class="none" style="margin: 0;">
              <li class="none" style="color: #212121">访客数:</li>
              <li class="none" style="color: #212121">浏览量:</li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="库存"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="总销量"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="状态"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="创建时间"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
          width="180"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">下架</el-button>
            <el-button type="text" size="small" @click="shareShow = true">分享</el-button>
            <el-button type="text" size="small" @click="onDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex;justify-content: flex-end;padding: 20px 0 10px;">
        <el-pagination background layout="total, prev, pager, next"
                       :total="total"
                       :page-size="10"
                       @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>

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
        name: "physicalCommodityManagement",
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }],
                value: '',

                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-08',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-06',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江'
                    }],
                multipleSelection: [],

                total: 0,
                pageNum: 1,

                input2: '',

                shareShow: false,
                shareObj: {},
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

            onSearch() {

            },

            onPutaway() {
                console.log(this.$refs.multipleTable)
                this.$refs.multipleTable.clearSelection();
            },

            onSoldOut() {
                console.log(this.$refs.multipleTable)
                this.$refs.multipleTable.clearSelection();
            },

            handleSelectionChange(val) {
                this.multipleSelection = val
                console.log(this.multipleSelection)
            },

            handleCurrentChange(val) {
                this.pageNum = val
                console.log(this.pageNum)
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
            }
        },
        components: {}
    }
</script>

<style scoped>

  .none {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .table {
    margin-top: 20px;
  }

  .wrapper {
    padding: 0 15px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }


  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }


</style>
