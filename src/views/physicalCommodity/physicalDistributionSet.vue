<template>
    <div class="table">
      <el-table
        :data="tableData"
        size="small"
        style="width: 100%">
        <el-table-column
          prop="way"
          label="配送方式"
          width="200px"
          >
        </el-table-column>
        <el-table-column
          prop="explain"
          label="说明"
         >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="150px"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="150px"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="$router.push(scope.row.url)">设置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "physicalDistributionSet",
        data() {
            return {
                tableData: [
                    {
                        way: '快递发货',
                        explain: '启用上门自提功能后，买家可以就近选择你预设的自提点，下单后你需要尽快将商品配送至指定自提点。',
                        status: '开启中',
                        url: '',
                    },
                    {
                        way: '同城配送',
                        explain: '启用后，买家下单可以选择同城配送，由你提供上门配送服务。',
                        status: '开启中',
                        url: '/cityDistribution',
                    }
                ]
            }
        },

        created() {

        },
        methods: {},
        components: {}
    }
</script>

<style scoped>

</style>
