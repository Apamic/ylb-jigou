<template>
  <div>
    <commonHe v-if="isShowMenu == 1"></commonHe>
    <div class="container">
      <div class="wrapper table">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="实物商品管理" name="first">
            <physicalCommodityManagement></physicalCommodityManagement>
          </el-tab-pane>
          <el-tab-pane label="商品分组" name="second">
            <PhysicalGrouping></PhysicalGrouping>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>

    import commonHe from '../../components/commonHe'
    import PhysicalGrouping from '@/views/physicalCommodity/PhysicalGrouping.vue'
    import physicalCommodityManagement from '@/views/physicalCommodity/physicalCommodityManagement.vue'


    export default {
        name: "PhysicalCommodity",
        data() {
            return {
                isShowMenu: 1,
                activeName: 'first',
            }
        },

        created() {
            this.isShowMenu = localStorage.getItem("isShowMenu");

            if (this.isShowMenu == undefined || this.isShowMenu != 0) {
                this.isShowMenu = 1;
            }
        },
        methods: {
            handleClick(tab, event) {
                // this.activeName = tab.
                console.log(tab, event)
            }
        },
        components: {
            commonHe,
            PhysicalGrouping,
            physicalCommodityManagement
        }
    }
</script>

<style scoped>
  .container {
    background: whitesmoke;
    position: absolute;
    left: 200px;
    top: 68px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    padding: 15px;
  }

  .wrapper {
    padding: 10px 15px;
    width: 100%;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .table >>> .el-table tr th {
    color: #212121;
    font-weight: 500;
    background: #f3f5f7;
    font-size: 13px;
  }

</style>
