<template>
  <div>
    <commonHe v-if="isShowMenu == 1"></commonHe>
    <div class="style-box">
      <div id="box">
        <div class="zhenge">
          <div class="yggl-ym nrsh">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="待审核" name="first">
                <div class="hzglys-t nrgl-t">
                  <div class="zuhe">
                    <div class="dandusk">
                      <el-form ref="form" :model="form" label-width="60px">
                        <template>
                          <span style="color:gray">来源：</span>
                          <el-select v-model="selectOption" placeholder="全部">
                            <el-option
                              v-for="item in options"
                              :key="item.sourceTypeName"
                              :label="item.sourceTypeName"
                              :value="item.sourceType">
                            </el-option>
                          </el-select>
                        </template>
                      </el-form>
                    </div>
                    <div class="xiank180">
                      <el-input placeholder="请输入文章标题" v-model="searchTitle" class="input-with-select">
                        <el-button slot="append" @click="goSearch()">搜索</el-button>
                      </el-input>
                    </div>
                  </div>
                </div>
                <div class="hxmjcbiao">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="文章标题">
                      <div class="tdtuwen" slot-scope="scope">
                        <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"/></div>
                        <div class="tdtuwen-wen">
                          <h2>{{scope.row.title}}</h2>
                          <p>{{scope.row.tpName}}</p>
                          <div class="tdwensj">
                            <span>{{scope.row.timeCreate}}</span>
                            <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                          </div>
                        </div>
                      </div>
                    </el-table-column>
                    <el-table-column prop="styleName" label="类型" width="150">
                    </el-table-column>
                    <el-table-column prop="sourceTypeName" label="来源" width="150">
                    </el-table-column>

                    <el-table-column label="操作" width="260">
                      <div slot-scope="scope">
                        <span class="look_btn" @click="show(scope.row.newsId,scope.row.style)">查看</span>
                        <span class="pass_btn" @click="pass(scope.row.newsId)">通过</span>
                        <span class="refuse_btn" @click="refuse(scope.row.newsId)">拒绝</span>
                      </div>
                    </el-table-column>
                  </el-table>
                </div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 100]"
                  :page-size="pageSize"
                  background
                  layout="prev, pager, next"
                  :total="total"
                  class="tuwenFenye"
                  style="padding-top:50px;overflow:hidden;text-align:right;">
                </el-pagination>
              </el-tab-pane>
              <el-tab-pane label="已通过" name="second">
                <div class="hzglys-t nrgl-t">
                  <div class="zuhe">
                    <div class="dandusk">
                      <el-form ref="form" :model="form" label-width="60px">
                        <template>
                          <span style="color:gray">来源：</span>
                          <el-select v-model="selectOption" placeholder="全部">
                            <el-option
                              v-for="item in options"
                              :key="item.sourceTypeName"
                              :label="item.sourceTypeName"
                              :value="item.sourceType">
                            </el-option>
                          </el-select>
                        </template>
                      </el-form>
                    </div>
                    <div class="xiank180">
                      <el-input placeholder="请输入文章标题" v-model="searchTitle" class="input-with-select">
                        <el-button slot="append" @click="goSearch()">搜索</el-button>
                      </el-input>
                    </div>
                  </div>
                </div>
                <div class="hxmjcbiao">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="文章标题">
                      <div class="tdtuwen" slot-scope="scope">
                        <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"/></div>
                        <div class="tdtuwen-wen">
                          <h2>{{scope.row.title}}</h2>
                          <p>{{scope.row.tpName}}</p>
                          <div class="tdwensj">
                            <span>{{scope.row.timeCreate}}</span>
                            <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                          </div>
                        </div>
                      </div>
                    </el-table-column>
                    <el-table-column prop="styleName" label="类型" width="150">
                    </el-table-column>

                    <el-table-column prop="sourceTypeName" label="来源" width="150">
                    </el-table-column>

                    <el-table-column label="操作" width="260">
                      <div slot-scope="scope">
                        <span class="look_btn" @click="show(scope.row.newsId,scope.row.style)">查看</span>
                      </div>
                    </el-table-column>
                  </el-table>
                </div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 100]"
                  :page-size="pageSize"
                  background
                  layout="prev, pager, next"
                  :total="total"
                  class="tuwenFenye"
                  style="padding-top:50px;overflow:hidden;text-align:right;">
                </el-pagination>
              </el-tab-pane>
              <el-tab-pane label="未通过" name="third">
                <div class="hzglys-t nrgl-t">
                  <div class="zuhe">
                    <div class="dandusk">
                      <el-form ref="form" :model="form" label-width="60px">
                        <template>
                          <span style="color:gray">来源：</span>
                          <el-select v-model="selectOption" placeholder="全部">
                            <el-option
                              v-for="item in options"
                              :key="item.sourceTypeName"
                              :label="item.sourceTypeName"
                              :value="item.sourceType">
                            </el-option>
                          </el-select>
                        </template>
                      </el-form>
                    </div>
                    <div class="xiank180">
                      <el-input placeholder="请输入文章标题" v-model="searchTitle" class="input-with-select">
                        <el-button slot="append" @click="goSearch()">搜索</el-button>
                      </el-input>
                    </div>
                  </div>
                </div>
                <div class="hxmjcbiao">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="文章标题">
                      <div class="tdtuwen" slot-scope="scope">
                        <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"/></div>
                        <div class="tdtuwen-wen">
                          <h2>{{scope.row.title}}</h2>
                          <p>{{scope.row.tpName}}</p>
                          <div class="tdwensj">
                            <span>{{scope.row.timeCreate}}</span>
                            <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                          </div>
                        </div>
                      </div>
                    </el-table-column>
                    <el-table-column prop="styleName" label="类型" width="150">
                    </el-table-column>

                    <el-table-column prop="sourceTypeName" label="来源" width="150">
                    </el-table-column>

                    <el-table-column label="操作" width="260">
                      <div slot-scope="scope">
                        <span class="look_btn" @click="show(scope.row.newsId,scope.row.style)">查看</span>
                      </div>
                    </el-table-column>
                  </el-table>
                </div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 100]"
                  :page-size="pageSize"
                  background
                  layout="prev, pager, next"
                  :total="total"
                  class="tuwenFenye"
                  style="padding-top:50px;overflow:hidden;text-align:right;">
                </el-pagination>
              </el-tab-pane>
              <el-tab-pane label="全部" name="fourth">
                <div class="hzglys-t nrgl-t">
                  <div class="zuhe">
                    <div class="dandusk">
                      <el-form ref="form" :model="form" label-width="60px">
                        <template>
                          <span style="color:gray">来源：</span>
                          <el-select v-model="selectOption" placeholder="全部">
                            <el-option
                              v-for="item in options"
                              :key="item.sourceTypeName"
                              :label="item.sourceTypeName"
                              :value="item.sourceType">
                            </el-option>
                          </el-select>
                        </template>
                      </el-form>
                    </div>
                    <div class="xiank180">
                      <el-input placeholder="请输入文章标题" v-model="searchTitle" class="input-with-select">
                        <el-button slot="append" @click="goSearch()">搜索</el-button>
                      </el-input>
                    </div>
                  </div>
                </div>
                <div class="hxmjcbiao">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="文章标题">
                      <div class="tdtuwen" slot-scope="scope">
                        <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"/></div>
                        <div class="tdtuwen-wen">
                          <h2>{{scope.row.title}}</h2>
                          <p>{{scope.row.tpName}}</p>
                          <div class="tdwensj">
                            <span>{{scope.row.timeCreate}}</span>
                            <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                            <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                          </div>
                        </div>
                      </div>
                    </el-table-column>

                    <el-table-column prop="styleName" label="类型" width="150">
                    </el-table-column>
                    <el-table-column prop="sourceTypeName" label="来源" width="150">
                    </el-table-column>

                    <el-table-column label="操作" width="260">
                      <div slot-scope="scope">
                        <span class="look_btn" @click="show(scope.row.newsId,scope.row.style)">查看</span>
                      </div>
                    </el-table-column>
                  </el-table>
                </div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 100]"
                  :page-size="pageSize"
                  background
                  layout="prev, pager, next"
                  :total="total"
                  class="tuwenFenye"
                  style="padding-top:50px;overflow:hidden;text-align:right;">
                </el-pagination>
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

  // 状态下拉：
  import {status} from '../../api/api'
  // 图文查询接口导入：
  import {mediaTuwen} from '../../api/api'
  // 内容审核状态修改：
  import {contentStatus} from '../../api/api'

  export default {
    data() {
      return {
        options: [],
        status: [],
        selectOption: '',
        selectStatus: 1,
        searchTitle: '',
        // 分页：
        total: 5,
        currentPage: 1,// 当前页码
        pageSize: 5,
        //tab切换方法默认第1个
        activeName: 'first',
        fits: ['这里是昵称'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        input1: '',
        select: '',
        value: '',
        form: {region: ''},
        //表格
        tableData: [],
        tableData7:
          [
            {
              name: '儿科专家',
              num1: '8',
              date: '2018-12-23 12:23:12',
            },
            {
              name: '名医医生',
              num1: '6',
              date: '2018-12-23 12:23:12',
            }
          ],
        formInline: {
          user: '',
          region: ''
        },
        isShowMenu : 1
      };
    },
    methods: {
      handleClick(tab, event) {
        this.currentPage = 1;
        let name = tab.name;
        this.searchTitle = '';
        this.selectOption = null;

        if (name == 'first') {
          this.selectStatus = 1;
        } else if (name == 'second') {
          this.selectStatus = 2;
        } else if (name == 'third') {
          this.selectStatus = 3;
        } else if (name == 'fourth') {
          this.selectStatus = null;
        }

        this.getAllResource();
        this.getApprovalList();
      },
      onSubmit() {
        console.log('submit!');
      },
      getAllResource() {
        status().then(data => {
          this.options = data.data.sourceList
          this.status = data.data.statusList
        })
      },
      // 分页：
      handleSizeChange(val) {
        console.log("长度改变:" + val)
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.getApprovalList()
      },
      getApprovalList() {
        var searchList = {
          "newsStyle": null,
          "pageNum": this.currentPage,
          "pageSize": this.pageSize,
          "sourceType": this.selectOption,
          "status": this.selectStatus,
          "title": this.searchTitle
        }
        mediaTuwen(searchList).then(data => {
          console.log(data)
          this.tableData = data.data;
          this.total = data.total
        })
      },
      goSearch() {
        this.getApprovalList()
      },
      pass(id) {
        this.$confirm('是否通过?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let contentParams = {
            "newsId": id,
            "status": 2
          }
          contentStatus(contentParams).then(data => {
            this.$message({
              type: 'info',
              message: '已通过'
            });
            this.getApprovalList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消通过'
          });
        });
      },
      refuse(id) {
        this.$confirm('是否拒绝?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let contentParams = {
            "newsId": id,
            "status": 3
          }
          contentStatus(contentParams).then(data => {
            this.$message({
              type: 'info',
              message: '已拒绝'
            });
            this.getApprovalList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消拒绝'
          });
        });
      },
      show(newsId,style){
        localStorage.setItem("newsId",newsId);

        this.$router.push({
          path:'/mediaShow',
          query:{}
        })

        // if(style == 1){
        //   this.$router.push({
        //     path:'/mediaShow',
        //     query:{}
        //   })
        // }else if(style == 5){
        //
        // }else if(style == 6){
        //
        // }
      }
    },
    components: {
      commonHe
    },
    created() {
      this.userId = localStorage.getItem("userId")
      // alert(this.userId)

      this.getAllResource()
      this.getApprovalList()

      this.isShowMenu = localStorage.getItem("isShowMenu");

      if(this.isShowMenu == undefined || this.isShowMenu != 0){
        this.isShowMenu = 1;
      }
    },
    mounted() {
      let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
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
      }
    }

  }
</script>
<style lang="scss">
  @import '../../styles/hxmstyle.css';

  $left-width: 300px;
  .style-box {
    background: rgba(245, 245, 245, 1);
    position: absolute;
    left: 200px;
    top: 68px;
    overflow-y: auto;
  }

  .xjks-k .el-dialog__footer {
    background: #fff;
    width: 100%;
    float: left;
  }

  .xjks-k .dialog-footer {
    margin: auto;
    width: 260px;
    padding-left: 40px;
  }

  .look_btn, .pass_btn, .refuse_btn {
    cursor: pointer;
    color: #0076FF;
    margin-right: 10px;
  }
</style>
