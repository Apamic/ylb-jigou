<template>
    <div>
      <commonHe v-if="isShowMenu == 1"></commonHe>
      <div class="container">
        <div class="wrapper table">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本设置" name="first">
              <physicalSet v-if="activeName == 'first'"></physicalSet>
            </el-tab-pane>
            <el-tab-pane label="配送设置" name="second">
              <physicalDistributionSet></physicalDistributionSet>
            </el-tab-pane>
            <el-tab-pane label="默认物流公司" name="third">
              <logisticsCompany></logisticsCompany>
            </el-tab-pane>
            <el-tab-pane label="地址库" name="fourth">
              <addressThelibrary v-if="activeName == 'fourth'"></addressThelibrary>
            </el-tab-pane>
            <el-tab-pane label="客服设置" name="fifth">
              <physicalCustomerService></physicalCustomerService>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
</template>

<script>
    import commonHe from '../../components/commonHe'
    import initAmap from '../../api/AMap'
    import physicalSet from '@/views/physicalCommodity/physicalSet'
    import physicalDistributionSet from '@/views/physicalCommodity/physicalDistributionSet'
    import physicalCustomerService from '@/views/physicalCommodity/physicalCustomerService'
    import logisticsCompany from '@/views/physicalCommodity/logisticsCompany'
    import addressThelibrary from '@/views/physicalCommodity/addressThelibrary'


    export default {
        name: "physicalCommodityApplication",
        data() {
            return {
                activeName: 'first',
                isShowMenu: 1,
                map: null,
            }
        },

        created() {
            this.isShowMenu = localStorage.getItem("isShowMenu");

            if (this.isShowMenu == undefined || this.isShowMenu != 0) {
                this.isShowMenu = 1
            }
            //
            // this.initMap()
        },
        methods: {
            handleClick(tab, event) {
                this.activeName = tab.name
                // console.log(tab.name, event);
            },

            // initMap() {
            //     initAmap().then(AMap => {
            //         this.map = new AMap.Map('contain',{
            //             // center: [117.000923, 36.675807],
            //             zoom: 11
            //         })
            //     })
            // }
        },
        components: {
            commonHe,
            physicalSet,
            physicalDistributionSet,
            physicalCustomerService,
            logisticsCompany,
            addressThelibrary
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
