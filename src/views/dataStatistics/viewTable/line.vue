<template>
    <div :id="id" :style="{width: width,height: height}">
    </div>
</template>

<script>

    import echarts from 'echarts'

    export default {
        name: "line",

        props: {
            className: {
                type: String,
                default: 'chart'
            },
            id: {
                type: String,
                default: 'chart'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '400px'
            },
            lineData: {
                type: Array
            },

            nameIndex: {
                type: Number,
                default: 1,
            }
        },

        data() {
          return {
              chart: null,

              date: [],
              amount: [],
              money: [],

              list: ['在线问诊量','特色服务包','医疗服务包','健康产品','上门服务'],
          }
        },
        watch: {
            lineData() {
                this.$nextTick(() => {
                    if (this.lineData) {
                        this.initChart()
                    }
                })
            }
        },

        created() {
            this.$nextTick(() => {
                this.initChart()
                // console.log(this.date)
                // console.log('特色服务包',this.nameIndex)
            })
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            initChart() {
                this.chart = echarts.init(document.getElementById(this.id))
                this.lineData.forEach(item => {
                    this.date.push(item.date)
                    this.money.push(item.money)
                    this.amount.push(item.amount)
                })
                this.chart.setOption({


                    color: ['#2fc25b', '#108ee9'],
                    title: {
                        text: this.list[this.nameIndex],
                        top: '10',
                        textStyle: {
                            fontWeight: 'normal'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        // position: function (pt) {
                        //     return [pt[0], '20%'];
                        // }
                    },
                    legend: {
                        data: ['数量', '金额']
                    },
                    grid: { //控制绘制的图表和容器之间的距离
                        left: '3%',
                        right: '4%',
                        bottom: '40px',
                        containLabel: true
                    },
                    toolbox: {
                        // feature: {
                        //     dataZoom: {
                        //         yAxisIndex: 'none'
                        //     },
                        //     restore: {},
                        //     saveAsImage: {}
                        // }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        // data: ['周一','周二','周三','周四','周五','周六','周日'],
                        data: this.date,
                        // nameGap: '20px',
                        // nameLocation: 'start',
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [
                        // {
                        //     type: 'slider',
                        //     show: true,
                        //     realtime: true,
                        //     start: 65,
                        //     end: 85
                        // },
                        {
                            type: 'inside',
                            start: 0,
                            end: 30,
                            // show: true,
                            // realtime: true,
                        },
                        {
                            start: 0,
                            end: 30,
                            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                            handleSize: '80%',
                            handleStyle: {
                                color: '#fff',
                                shadowBlur: 3,
                                shadowColor: 'rgba(0, 0, 0, 0.6)',
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            }
                        }
                    ],
                    series: [
                        {
                            name: '数量',
                            type: 'line',
                            // stack: '总量',
                            // data:[120, 132, 101, 134, 90, 230, 210]
                            data: this.amount
                        },
                        {
                            name: '金额',
                            type: 'line',
                            // stack: '总量',
                            // data:[220, 182, 191, 234, 290, 330, 310]
                            data: this.money,
                        },

                    ]
                })
            }

        },
        components: {}
    }
</script>

<style scoped>

</style>
