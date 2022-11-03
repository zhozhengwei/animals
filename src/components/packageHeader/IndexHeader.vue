<template>
  <header class="header-2">

             <!-- style="background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/curved.jpg')" -->
  <div class="page-header min-vh-75 relative" style="background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/curved.jpg')">
    <!-- 字体代码 -->
    <div class="container">
      <div class="row">
        <div class="col-lg-7 text-center mx-auto">
          <h1 class="text-white pt-3 mt-n5">人与自然</h1>
          <p class="lead text-white mt-3">从生命一开始，大自然就向我们人类心灵里灌注进去一种不可克服的永恒的爱。—— ——朗吉弩普斯</p>
        </div>
      </div>
    </div>

    <div class="position-absolute w-100 z-index-1 bottom-0" style="float:inline-start;">
        <!-- 核心效果代码 -->
        <!-- 
            SVG动态图标 可缩放矢量图形(SVG)基于可扩展标记语言用于描述二维矢量图形的一种图形格式
            https://www.w3school.com.cn/svg/svg_intro.asp 基础语言应用 HTML和XML
            <g> 元素通常用来对相关图形元素进行分组，以便统一操作，比如旋转，缩放或者添加相关样式等。
            <use> 实现SVG现有图形的重用，可以重用单个SVG图形元素，也可以重用<g><defs>定义的组元素。
            <defs> 内部定义的元素不会直接显示，可以不用事先定义样式，而是在使用<use>实例化的时候再定义。
         -->
         <!-- viewBox定义画布大小 width/height定义实际大小 --> 
         <!-- xmlns用于说明  代码所遵从的标准-->
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="moving-waves">
          <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
          <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
          <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
          <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95" />
        </g>
      </svg>
    </div>
</div>
</header> 
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
    components:{
        
    }
})

</script>

<style scoped>

     /* For demo */
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 100%;
    line-height: 0;
    background: #364d79;
    /* background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/curved.jpg'); */
    overflow: hidden;
  }
  

</style>