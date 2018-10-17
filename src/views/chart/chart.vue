<template>
<div class="chart-container">
     <Row>
        <Col span="4">
            <div id="one" style="height:300px"></div>
        </Col>    
    </Row>
</div>
</template>
<script>
import echart from 'echarts'
export default {
    name:'chart',
    data() {
        return{}
    },
    mounted(){
        let myChart=echart.init(document.getElementById('one'))
        let option = {
            title: {
                text: 'ECharts 入门示例',
                textStyle:{color:'red'}
            },
            tooltip: {},
            legend: {
                data:['销量','悲惨'],
                right:30
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },{
                name: '悲惨',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        myChart.setOption(option)
    }
}
</script>
<style lang="less">
    @import "./chart.less";
</style>