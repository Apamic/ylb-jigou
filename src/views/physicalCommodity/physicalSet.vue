<template>
  <div style="overflow: paged-y">
    <el-form ref="form" :model="form" label-width="80px" size="small">
      <el-form-item label="客服电话">
        <el-col style="width: 100px">
          <el-input v-model="form.area" placeholder="区号"></el-input>
        </el-col>
        <el-col style="width: 30px">
          &nbsp;&nbsp;&nbsp;-
        </el-col>
        <el-col style="width: 200px">
          <el-input v-model="form.phone" placeholder="电话"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="联系地址">
        <el-col>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-input v-model="form.address" style="width: 700px;">
          <el-button slot="append">搜索地图</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="地图定位">
        <div style="display: flex;">
          <div id="panel">
          </div>
          <div id="contain" style="width: 800px;height: 500px;">
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small">保存</el-button>
      </el-form-item>
    </el-form>
<!--    <div style="padding: 20px 80px;">-->
<!--      <el-button type="primary" size="small">保存</el-button>-->
<!--    </div>-->
  </div>
</template>

<script>
    import initAmap from '../../api/AMap'

    export default {
        name: "physicalSet",
        data() {
            return {
                map: null,
                placeSearch: null,

                form: {},
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }
                ],
            }
        },

        created() {
            this.initMap()
        },
        methods: {
            initMap() {
                initAmap().then(AMap => {
                    this.map = new AMap.Map('contain', {
                        // center: [117.000923, 36.675807],
                        // zoom: 11,
                        resizeEnable: true
                    })

                    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation'], () => {
                        this.map.addControl(new AMap.ToolBar())
                        this.map.addControl(new AMap.Scale())
                        this.map.addControl(new AMap.Geolocation({
                            buttonPosition: 'RB'
                        }))
                    })

                    this.onPlaceSearch()
                })
            },

            onPlaceSearch() {
                AMap.service(["AMap.PlaceSearch"], () => {
                    this.placeSearch = new AMap.PlaceSearch({ //构造地点查询类
                        pageSize: 10, // 单页显示结果条数
                        pageIndex: 1, // 页码
                        // city: "010", // 兴趣点城市
                        citylimit: true,  //是否强制限制在设置的城市内搜索
                        map: this.map, // 展现结果的地图实例
                        panel: "panel", // 结果列表将在此容器中进行展示。
                        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                    });
                    //关键字查询
                    this.placeSearch.search('武汉CFD', (status, result) => {
                        console.log(result)
                        console.log(status)
                    });
                })
            }

        },
        components: {}
    }
</script>

<style scoped>
  #panel {
    /*position: absolute;*/
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    /*top: 10px;*/
    /*left: 10px;*/
    width: 280px;
    height: 500px;
  }
</style>
