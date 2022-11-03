<template>
  <div class="about-us">
    <!-- 头部 aboutUsHeader -->
    <AboutUsHeader></AboutUsHeader>
    <!-- 身体的网站介绍 -->
    <IntroduceBox></IntroduceBox>
    <!-- 订阅的组件 -->
    <SubscribeBox></SubscribeBox>
    <!-- 网站的footer -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import AboutUsHeader from '@/components/aboutUs/AboutUsHeader.vue';
import IntroduceBox from '@/components/aboutUs/IntroduceBox.vue';
import SubscribeBox from '@/components/indexHome/SubscribeBox.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"AboutUs",
  data(){
    return{

    }
  },
  components:{
    AboutUsHeader,
    IntroduceBox,
    SubscribeBox,
    AgainFooter
}
}
</script>

<style>

</style>