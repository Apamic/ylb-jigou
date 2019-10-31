<template>
  <div class="tuiguang">
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        value-format="yyyy-MM-dd"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <div class="sealname">
      <el-input v-model="input" placeholder="请输入推广员手机号"></el-input>
    </div>
    <el-row class="search">
      <el-button type="primary" class="btn" @click="gosearch">搜索</el-button>
    </el-row>
    <div class="nav">
      <div class="time">交易时间</div>
      <div class="order">订单号</div>
      <div class="seals">推广员昵称</div>
      <div class="leixing">推广员类型</div>
      <div class="phone">推广员手机号</div>
      <div class="goodsname">商品名称</div>
      <div class="money">交易金额</div>
      <div class="bili">佣金比例</div>
      <div class="yongjin">佣金</div>
      <div class="state">状态</div>
    </div>
    <div class="nav-tr" v-for="(item,index) in promoterInfoList" :key="index">
      <div class="tr-time">{{item.transactionTime}}</div>
      <div class="tr-order">{{item.orderNo}}</div>
      <div class="tr-seals">{{item.nickName}}</div>
      <div class="tr-leixing">{{item.gener}}</div>
      <div class="tr-phone">{{item.phone}}</div>
      <div class="tr-goodsname">{{item.productName}}</div>
      <div class="tr-money"><span>￥</span>{{item.transactionMoney}}</div>
      <div class="tr-bili">{{item.commissionPercent}}</div>
      <div class="tr-yongjin"><span>￥</span>{{item.moneyCommission}}</div>
      <div class="tr-state">{{item.orderStatus}}</div>
    </div>
    <el-pagination
      style="text-align:right;margin-right:10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 100]"
      :page-size="pageSize"
      background
      layout="prev, pager, next"
      :total="total"
      class="fenye">
    </el-pagination>
  </div>

</template>
<script>
    // 查询api引入：
    import {extendRecord} from '../api/api'

    export default {
        data() {
            return {
                value1: '',
                input: '',
                // 查询结果：
                promoterInfoList: [],
                // 分页：
                total: 5,
                currentPage: 1,// 当前页码
                pageSize: 5,
            }
        },
        methods: {
            gosearch() {
                var searchList = {
                    "pageParam": {
                        "pageSize": 5,
                        "pageNum": 1
                    },
                    "promoterInfo": {
                        "orgId": localStorage.getItem("orgId")
                    },
                    "startTime": this.value1[0],
                    "endTime": this.value1[1],
                    "search": this.input
                }
                extendRecord(searchList).then(data => {
                    this.promoterInfoList = data.data.promoterInfoList
                    // console.log(this.promoterInfoList)
                    // console.log(data)
                })
            },

            // 分页：
            handleSizeChange(val) {
                console.log("长度改变:" + val)
            },
            //   翻页函数：
            handleCurrentChange(val) {
                var searchList = {
                    "pageParam": {
                        "pageSize": 5,
                        "pageNum": val
                    },
                    "promoterInfo": {
                        "orgId": localStorage.getItem("orgId")
                    },
                    "startTime": this.value1[0],
                    "endTime": this.value1[1],
                    "search": this.input
                }
                extendRecord(searchList).then(data => {
                    this.promoterInfoList = data.data.promoterInfoList
                    this.total = data.data.total
                    // console.log(this.promoterInfoList)
                    // console.log(data)
                })
            }
        },
        created() {
            var searchList = {
                "pageParam": {
                    "pageSize": 5,
                    "pageNum": 1
                },
                "promoterInfo": {
                    "orgId": localStorage.getItem("orgId")
                },
                "startTime": '',
                "endTime": '',
                "search": ''
            }
            extendRecord(searchList).then(data => {

                this.promoterInfoList = data.data.promoterInfoList
                this.total = data.data.total
            })
        }
    }
</script>
<style lang="scss" scoped>
  .tuiguang {
    height: 700px;

    .fenye {
      margin-left: 400px;
      margin-top: 20px;
    }
  }

  .sealname {
    // float:left;
    width: 240px;
    margin-top: -40px;
    margin-left: 360px;
  }

  .search {
    position: absolute;
    top: 2px;
    left: 610px;

    .btn {
      width: 80px;
      height: 36px;
      font-size: 16px;
      line-height: 12px;
    }
  }

  .nav {
    display: flex;
    width: 99%;
    height: 40px;
    background-color: #EDEDED;
    font-size: 13px;
    padding-left: 5px;
    line-height: 40px;
    margin-top: 15px;

    div {
      flex: 1;
      margin: 0 !important;
    }

    .time {
      margin-left: 5px;
      margin-right: 50px;
    }

    .order {
      flex: 0 1 170px;
      margin-right: 70px;
    }

    .seals {
      margin-right: 40px;
    }

    .leixing {
      margin-right: 30px;
    }

    .phone {
      margin-right: 34px;
    }

    .goodsname {
      margin-right: 100px;
    }

    .money {
      margin-right: 4%;
    }

    .bili {
      margin-right: 3%;
    }

    .yongjin {
      margin-right: 3%;
    }
  }

  .nav-tr {
    display: flex;
    width: 99%;
    height: 65px;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;

    div {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 13px;
      margin: 0 !important;

      /*margin-top:10px;*/
    }

    .tr-time {
      width: 100px;
      margin-left: 10px;
    }

    .tr-order {
      flex: 0 1 170px;
      /*width: 90px;*/
      word-wrap: break-word;
      margin-right: 21px;
    }

    .tr-seals {
      width: 70px;
      word-wrap: break-word;
      margin-right: 35px;
    }

    .tr-leixing {
      width: 75px;
      margin-right: 2%;
    }

    .tr-phone {
      width: 109px;
      word-wrap: break-word;
    }

    .tr-goodsname {
      width: 135px;
      margin-right: 2%;
    }

    .tr-money {
      width: 85px;
      margin-right: 1%;
    }

    .tr-bili {
      width: 35px;
      margin-right: 4%;

    }

    .tr-yongjin {
      width: 43px;
      margin-right: 2%;
    }
  }
</style>


