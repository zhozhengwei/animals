<template>
  <div class="rental">
    <!-- 导航栏 -->
    <NavBlog :toshow="true"></NavBlog>
    <!-- 头部 -->
    <VideoHeader></VideoHeader>
    <!-- 主体 -->
    <BilibiliMain></BilibiliMain>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavBlog from '@/components/nav/NavBlog.vue';

import BilibiliMain from '@/components/media/videoBilibili/BilibiliMain.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import VideoHeader from '@/components/media/videoBilibili/VideoHeader.vue';
export default {
  name:"VideoBilibili",
  data(){
    return{
        toshow: true
    }
  },
  components:{
    NavBlog,
    BilibiliMain,
    AgainFooter,
    VideoHeader
}
}
</script>

<style>

</style>