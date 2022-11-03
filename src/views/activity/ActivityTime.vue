<template>
  <div>
    <!-- 导航栏 -->
    <NavDefault></NavDefault>
    <!-- 主体的时间轴 -->
    <VideoTime></VideoTime>
    <!-- 页尾 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import VideoTime from '@/components/activity/timeVideo/VideoTime.vue';
import AgainFooter from '@/components/AgainFooter.vue';

export default {
  name:"ActivityTime",
  data(){
    return{

    }
  },
  components:{
    NavDefault,
    VideoTime,
    AgainFooter
}
}
</script>

<style>

</style>