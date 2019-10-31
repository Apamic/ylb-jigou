<template>
    <div style="display: flex;">
      <div id="contain" style="width: 600px;height: 600px;">
      </div>
      <ul>
        <li v-for="(item,index) in listData" @click="listClick(item)">
          {{item.address}}
        </li>
      </ul>

      <div id="contain2" style="width: 600px;height: 600px;">
      </div>
      <div id="panel" style="width: 300px;height: 600px;"></div>
    </div>

</template>

<script>
    import initAmap from '../../api/AMap.js'

    function aclick(item) {
        console.log('123')
    }
    function getLngLat() {
        console.log('123')
    }

    export default {
        name: "addressThelibrary",
        data() {
            return {
                map: null,
                map2: null,

                placeSearch: null,
                listData: [],
                infoWindow: null,

                driving: null,
            }
        },

        created() {
          this.initMap()
        },
        methods: {
            initMap() {
                initAmap().then(AMap => {
                    this.map = new AMap.Map('contain', {
                        resizeEnable: true,
                    })

                    this.map2 = new AMap.Map('contain2', {
                        resizeEnable: true,
                    })

                    AMap.plugin(['AMap.Driving'], () => {  //这是插件服务,要先装插件
                        this.driving = new AMap.Driving({
                            // map: this.map2, //挂载数据到地图上
                            // panel: "panel"  //返回的数据放上去
                        });

                        this.driving.search(new AMap.LngLat(116.379028, 39.865042), new AMap.LngLat(116.427281, 39.903719), (status, result) => {
                            // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                            if (status === 'complete') {
                               // console.log('行车路线',result.routes[0])
                                this.drawRoute(result.routes[0])
                            } else {

                            }
                        });
                    })


                    this.placeSearch = new AMap.PlaceSearch({})
                    // var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})

                    this.placeSearch.search('CFD',(status,result) => {
                        console.log(result.poiList.pois)
                        this.listData = result.poiList.pois
                        result.poiList.pois.forEach((item,index) => {
                            let marker = new AMap.Marker({
                                position: item.location,
                                title: item.name
                            })
                            marker.content ='我是第'+index+'个Marker'
                            marker.on('click', this.markerClick);
                            marker.emit('click', {target: marker});
                            this.map.add(marker)
                        })
                    this.map.setFitView()
                    })
                })
            },


            drawRoute(route) {
                var path = this.parseRouteToPath(route)

                // var marker = new AMap.Marker({
                //     position: path[0],
                //     icon: "https://webapi.amap.com/images/car.png",//车的图像
                //     map: this.map2,
                //     offset: new AMap.Pixel(-26, -13),//偏移量
                //     angle:-90,//倾斜度
                //     autoRotation: true,//自动调整反向
                // })
                //
                //
                // var passedPolyline = new AMap.Polyline({  //路线回放
                //     map: this.map2,
                //     // path: lineArr,
                //     strokeColor: "#AF5",  //线颜色
                //     // strokeOpacity: 1,     //线透明度
                //     strokeWeight: 6,      //线宽
                //     // strokeStyle: "solid"  //线样式
                // });
                //
                // marker.on('moving', (e) => {
                //     passedPolyline.setPath(e.passedPath);
                // });
                //
                // this.map2.setFitView()
                //
                // marker.moveAlong(path, 200);


                var startMarker = new AMap.Marker({
                    position: path[0],
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
                    map: this.map2
                })

                var endMarker = new AMap.Marker({
                    position: path[path.length - 1],
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
                    map: this.map2
                })

                var routeLine = new AMap.Polyline({    //路线规划
                    path: path,
                    isOutline: true,
                    showDir:true,
                    outlineColor: '#ffeeee',
                    borderWeight: 2,
                    strokeWeight: 5,
                    strokeColor: '#0091ff',
                    lineJoin: 'round'

                })

                routeLine.setMap(this.map2)


                var marker = new AMap.Marker({
                    position: path[0],
                    icon: "https://webapi.amap.com/images/car.png",//车的图像
                    map: this.map2,
                    offset: new AMap.Pixel(-26, -13),//偏移量
                    angle:-90,//倾斜度
                    autoRotation: true,//自动调整反向
                })


                var passedPolyline = new AMap.Polyline({  //路线回放
                    map: this.map2,
                    // path: lineArr,
                    strokeColor: "#AF5",  //线颜色
                    // strokeOpacity: 1,     //线透明度
                    strokeWeight: 6,      //线宽
                    // strokeStyle: "solid"  //线样式
                });

                marker.on('moving', (e) => {
                    passedPolyline.setPath(e.passedPath);
                });

                this.map2.setFitView()

                marker.moveAlong(path, 200);





                // 调整视野达到最佳显示区域
                this.map2.setFitView([startMarker, endMarker, routeLine])
            },

            parseRouteToPath(route) {
                var path = []

                for (var i = 0, l = route.steps.length; i < l; i++) {
                    var step = route.steps[i]

                    for (var j = 0, n = step.path.length; j < n; j++) {
                        path.push(step.path[j])
                    }
                }

                return path
            },
            markerClick(e) {
                // console.log(e)
                this.infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})
                this.infoWindow.setContent(e.target.content);
                this.infoWindow.open(this.map, e.target.getPosition());
                this.map.panTo(e.target.getPosition())
            },

            listClick(item) {

                // this.infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})
                console.log(item)
                let info = []
                // this.component('my-component', {
                //     template: '<div>A custom component!</div>'
                // })
                info.push(item.address)
                info.push('<a src="132456">设为地址</a>')
                info.push(item.type)
                this.infoWindow.setContent(info.join('<br/>'))
                // this.infoWindow.position([item.location.lat,item.location.lng])
                // console.log(this.infoWindow)
                this.infoWindow.open(this.map,[item.location.lng,item.location.lat]);
                this.map.panTo([item.location.lng,item.location.lat])

            },

        },
        components: {}
    }
</script>

<style scoped>
  .class {
    /*position: absolute;*/
    /*position: relative;*/
    /*position: fixed;*/
  }
</style>
