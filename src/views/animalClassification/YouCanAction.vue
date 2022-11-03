<template>
  <!-- 未加入路由中 -->
  <div class="help-center">
    <!--导航栏 已经完成 -->
    <NavBlog :toshow="toshow"></NavBlog>
    <!-- 头部-->
    <ActionHeader></ActionHeader>
    <!-- 主体内容 -->
    <ActionContent></ActionContent>
    <!-- 联系我们 -->
    <SubscribeBox></SubscribeBox>
    <!-- 页脚 已经完成-->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import ActionHeader from '@/components/classifial/ActionHeader.vue';
import ActionContent from '@/components/classifial/ActionContent.vue';
import SubscribeBox from '@/components/subscribe/SubscribeBox.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import NavBlog from '@/components/nav/NavBlog.vue';
export default {
  name:"YouCanAction",
  data(){
    return{
        toshow:true
    }
  },
  components:{
    ActionHeader,
    ActionContent,
    SubscribeBox,
    AgainFooter,
    NavBlog
}
}
</script>

<style>

</style>