<template>
    <div>
      <commonHe v-if="isShowMenu == 1"></commonHe>
      <div class="container">
        <div class="wrapper">
          <div style="display: flex;justify-content: space-between;padding: 15px;background: rgb(251,251,251);">
            <div>
                <div style="color: #212121;font-size: 20px;">同城配送功能</div>
                <div style="color: #cccccc;font-size: 14px;">启用后，买家下单可以选择同城配送，由你提供上门配送服务。</div>
            </div>
            <div>
              <el-switch v-model="value1" size="max"></el-switch>
            </div>
          </div>
          <el-form ref="form" :model="form" label-width="80px" size="small">
            <el-form-item label="取货地址">
              <div>xxxxxxxx(123465)<el-button type="text">修改</el-button></div>
            </el-form-item>
          </el-form>
          <div style="position: relative;">
            <div style="position: absolute;top: 0;left: 900px;z-index: 2000;">
              <el-input v-model="radius" type="number" min="1" placeholder="请输入内容" class="radius">
                <template slot="append">公里</template>
              </el-input>
            </div>
            <div id="contain" style="width: 900px;height: 600px;">
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import commonHe from '../../components/commonHe'
    import initAmap from '../../api/AMap'

    export default {
        name: "cityDistribution",
        data() {
            return {
                map: null,
                isShowMenu: 1,
                radius: 1,
                marker: null,
                circle: null,

                value1: true,

                form: {},
            }
        },

        watch: {
            radius() {
                this.map.remove(this.circle)
                this.circle = new AMap.Circle({
                    center: [114.270869,30.605606], // 圆心位置
                    radius: this.radius * 1000,  //半径
                    strokeColor: "rgb(34,147,251)",  //线颜色
                    strokeOpacity: 1,  //线透明度
                    strokeWeight: 3,  //线粗细度
                    fillColor: "rgb(34,147,251)",  //填充颜色
                    fillOpacity: 0.35 //填充透明度
                })
                this.map.add(this.circle)
                this.map.setFitView()
            },

            // map() {
            //     this.initMap()
            // }

        },

        created() {
            this.isShowMenu = localStorage.getItem("isShowMenu");

            if (this.isShowMenu == undefined || this.isShowMenu != 0) {
                this.isShowMenu = 1
            }


            this.initMap()

        },
        destroyed() {
            // this.map = null
        },
        methods: {
            initMap() {
                initAmap().then(AMap => {
                    this.map = new AMap.Map('contain', {
                        // center: [114.270869,30.605606],
                        // zoom: 12,
                        resizeEnable: true
                    })

                    AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.Geolocation'],() => {
                        this.map.addControl(new AMap.ToolBar())
                        this.map.addControl(new AMap.Scale())
                        this.map.addControl(new AMap.Geolocation({
                            buttonPosition: 'RB'
                        }))
                    })

                    this.marker = new AMap.Marker({
                        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                        position: [114.270869,30.605606]
                    })

                    this.circle = new AMap.Circle({
                        center: [114.270869,30.605606], // 圆心位置
                        radius: this.radius * 1000,  //半径
                        strokeColor: "rgb(34,147,251)",  //线颜色
                        strokeOpacity: 1,  //线透明度
                        strokeWeight: 3,  //线粗细度
                        fillColor: "rgb(34,147,251)",  //填充颜色
                        fillOpacity: 0.35 //填充透明度
                    });

                    this.map.add(this.marker)
                    this.map.add(this.circle)
                    this.map.setFitView()

                })
            },
        },
        components: {
            commonHe
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

  .radius {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 200px;
  }
</style>
