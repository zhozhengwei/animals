<template>
  <div>
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 头部搜索 -->
    <SelfVideoHeader></SelfVideoHeader>
    <!-- 视频库主体结构 -->
    <SelfVideoContent></SelfVideoContent>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import SelfVideoHeader from '@/components/media/videoSelf/SelfVideoHeader.vue';
import SelfVideoContent from '@/components/media/videoSelf/SelfVideoContent.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"VideoSelf",
  data(){
    return{
        toshow:true
    }
  },
  components:{
    NavDefault,
    SelfVideoHeader,
    SelfVideoContent,
    AgainFooter
}
}
</script>

<style>

</style>