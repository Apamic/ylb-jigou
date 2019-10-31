<template>
  <div>
    <commonHe v-if="isShowMenu == 1"></commonHe>
    <div class="container">
      <div class="wrapper">
        <div class="info">
          <div style="display: flex;justify-content: space-between;align-items: center;">
            <span style="color: #212121">最新</span>
            <div>
              <el-button type="text" @click="onEdit">编辑</el-button>
              <el-button type="text" @click="shareShow = true">分享</el-button>
              <el-button type="text" @click="onDelete">删除</el-button>
            </div>
          </div>
          <div>创建时间: 2020202 PhysicalCommodityGrouping</div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 20px;">
          <el-button type="primary" size="small" @click="addShow = true">添加商品</el-button>
          <div style="display: flex;">
            <div style="margin-right: 20px;">
              <span>状态</span>
              <el-select v-model="value" placeholder="请选择" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <el-input placeholder="请输入内容" v-model="input2" size="small" style="width: 250px;">
              <el-button slot="append">搜索</el-button>
            </el-input>
          </div>
        </div>
        <div class="table">
          <el-table
            :data="tableData"
            style="width: 100%"
            size="small"
          >
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              label="商品名称"
            >
              <template slot-scope="scope">
                <div style="display: flex;">
                  <img width="70" height="70" style="margin-right: 10px"/>
                  <ul class="none">
                    <li class="none" style="color: #212121">123</li>
                    <li class="none" style="color: rgb(255,102,0)">¥132</li>
                  </ul>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="商品分类"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="状态"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="150px"
            >
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="onSort">排序</el-button>
                <el-button type="text" size="small" @click="onRemoveGroup">移出分组</el-button>
              </template>
            </el-table-column>
          </el-table>
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

      <el-dialog
        title="排序"
        :visible.sync="sortShow"
        width="500px"
      >
        <div>
          <span>排位: </span>
          <el-input v-model="input3" type="number" min="1" placeholder="请输入内容" size="small"
                    style="width: 300px;margin-left: 5px;"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
        <el-button @click="sortShow = false" size="small">取 消</el-button>
        <el-button type="primary" @click="sortShow = false" size="small">确 定</el-button>
      </span>
      </el-dialog>

      <el-dialog
        title="添加商品"
        :visible.sync="addShow"
        width="900px"
      >
        <el-input placeholder="请输入内容" v-model="input2" size="small" style="margin: 0 0 20px 0;width: 320px;">
          <el-button slot="append">搜索</el-button>
        </el-input>
        <div class="table">
          <el-table
            :data="tableData"
            ref="multipleTable"
            tooltip-effect="dark"
            style="width: 100%"
            size="small"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="50">
            </el-table-column>
            <el-table-column
              label="商品"
            >
              <template slot-scope="scope">
                <div style="display: flex;align-items: center;">
                  <img width="40" height="40"/>
                  <div style="margin-left: 10px;color: #212121;">123486</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="上架时间"
              width="250"
            >
            </el-table-column>
            <!--            <el-table-column-->
            <!--              label="操作"-->
            <!--              width="150px"-->
            <!--            >-->
            <!--              <template slot-scope="scope">-->
            <!--                <el-button type="text" size="small" @click="onSort">排序</el-button>-->
            <!--                <el-button type="text" size="small" @click="onRemoveGroup">移出分组</el-button>-->
            <!--              </template>-->
            <!--            </el-table-column>-->
          </el-table>
          <div style="display: flex;justify-content: flex-end;padding: 20px 0 10px;">
            <el-pagination background layout="total, prev, pager, next"
                           :total="commodityTotal"
                           :page-size="10"
                           :current-page="commodityNum"
                           @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addShow = false" size="small">取 消</el-button>
          <el-button type="primary" @click="addShow = false" size="small">确 定</el-button>
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
  </div>
</template>

<script>

    import commonHe from '../../components/commonHe'

    export default {
        name: "PhysicalCommodityGrouping",
        data() {
            return {
                isShowMenu: 1,

                options: [
                    {
                        label: 'meijihua',
                        value: '1'
                    }
                ],

                tableData: [
                    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
                ],
                total: 0,
                pageNum: 1,

                editShow: false,
                input: '',

                sortShow: false,
                input2: '',
                input3: 1,

                addShow: false,
                commodityNum: 1,
                commodityTotal: 0,

                shareShow: false,
                shareObj: {},

                multipleSelection: [],
            }
        },

        created() {
            this.isShowMenu = localStorage.getItem("isShowMenu");

            if (this.isShowMenu == undefined || this.isShowMenu != 0) {
                this.isShowMenu = 1;
            }
        },
        methods: {

            handleSelectionChange(val) {
                this.multipleSelection = val
                console.log(this.multipleSelection)
            },

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

            onEdit() {
                this.editShow = true
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

            onSort() {
                this.sortShow = true
            },

            onRemoveGroup() {
                this.$confirm('移出分组?', '提示', {
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
                        message: '已取消操作!'
                    });
                });
            }

        },
        components: {
            commonHe
        }
    }
</script>

<style scoped>

  .none {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }

  .container {
    background: whitesmoke;
    position: absolute;
    left: 200px;
    top: 68px;
    bottom: 0;
    right: 0;
    padding: 15px;
    /*overflow-y: auto;*/
  }

  .wrapper {
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .info {
    margin: 20px 0;
    padding: 10px 20px;
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
