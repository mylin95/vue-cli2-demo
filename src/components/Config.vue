<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="echart1" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '配置管理'
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById('echart1'));
      var myChart = this.$echarts.init(document.getElementById('echart1'));

      // 指定图表的配置项和数据
      var option = {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
