<template>
    <div class="chart-container">
        <Row>
            <Col span="4">
                <div id="first" style="height:300px"></div>
                <div id="second" style="height:300px"></div>
            </Col>
        </Row>
    </div>
</template>
<script>
  import echart from 'echarts'

  export default {
    name: 'chart',
    data () {
      return {}
    },
    mounted () {
      this.initFirst()
      this.initSecond()
    },
    methods: {
      initFirst () {
        let myChart = echart.init(document.getElementById('first'))
        let option = {
          title: {
            text: 'ECharts 入门示例',
            textStyle: {color: 'red'}
          },
          tooltip: {},
          legend: {
            data: ['销量', '悲惨'],
            right: 30
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          color: ['#337ab7', '#777'],
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }, {
            name: '悲惨',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
        myChart.setOption(option)

      },
      initSecond () {
        let myChart = echart.init(document.getElementById('second'))
        let option = {
          title: {
            text: '世界人口总量',
            subtext: '数据来源网络'
          },
          tooltip: {
            trigger: 'axis',
            show: false,
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            position: 'top',
            type: 'value',
            boundaryGap: [0, 0.01],
            axisTick: {
              show: false
            }
          },
          yAxis: {
            gridIndex: 0,
            type: 'category',
            data: ['深圳', '广州', '东莞', '厦门', '杭州', '宁波'],
            axisTick: {
              show: false
            },
          },
          series: [
            {
              name: '2012年',
              type: 'bar',
              data: [1080, 1240, 1210, 880, 1500, 1200]
            }
          ]
        }
        myChart.setOption(option)
      }
    }
  }
</script>
<style lang="less">
    @import "./chart.less";
</style>