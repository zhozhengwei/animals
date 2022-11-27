<template>
  <div id="main" style="width: 350px; height: 300px"></div>
</template>

<script setup>
import API from "../../plugins/axios/index.js";
//引入echarts
import * as echarts from "echarts";
//注意这里引入了onMounted这个钩子
import { onMounted } from "vue";





// const echartInit = () => {
//   //获取DOM元素并初始化
//   var myChart = echarts.init(document.getElementById("main"));

//   // 指定图表的配置项和数据
//   var option = {
//     //这里的yAxis就是竖轴，xAxis就是横轴
//     // yAxis and xAxis 交换可以改变横向或竖向
//     //     yAxis:{
//     //   data:['jack','blob','lucy']
//     // },
//     // xAxis:{
//     // },
//     title: {
//       text: "账务",
//       left: "center",
//       top: "center",
//     },
//     // 数据的来源
//     series: [
//       {
//         name: "source",
//         // bar就是柱状图
//         type: "pie",
//         // 数据
//         data: dataCount,
//         radius: ["40%", "70%"],
//       },
//     ],
//   };
//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);
// };

// 这里需要注意，不能在setup内执行getElementById操作，因为setup是在文档加载完毕之前执行，那么
// 取到的一定是null导致init失败，所以需要在onMounted中执行
onMounted(() => {
  API({
  url: "donationRecord/count",
  method: "post"
}).then((res)=>{
  console.log("响应数据：", res.data.data);

  var myChart = echarts.init(document.getElementById("main"));

  var option = {
    //这里的yAxis就是竖轴，xAxis就是横轴
    // yAxis and xAxis 交换可以改变横向或竖向
    //     yAxis:{
    //   data:['jack','blob','lucy']
    // },
    // xAxis:{
    // },
    title: {
      text: "账务",
      left: "center",
      top: "center",
    },
    // 数据的来源
    series: [
      {
        name: "source",
        // bar就是柱状图
        type: "pie",
        // 数据
        data: res.data.data,
        radius: ["40%", "70%"],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
});
</script>

<style>
</style>