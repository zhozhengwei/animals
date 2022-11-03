<template>
  <div class="blog-posts">
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 头部新闻时间 -->
    <ContentHeader></ContentHeader>
    <!-- 中间部分 -->
    <ContentCenter></ContentCenter>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import ContentHeader from '@/components/media/ContentHeader.vue';
import NavDefault from '@/components/nav/NavDefault.vue';
import ContentCenter from '@/components/media/ContentCenter.vue';
import AgainFooter from '@/components/AgainFooter.vue';



export default {
  name:"DocumentCenter",
  data(){
    return{
        toshow: true,
        articleList:[]
    }
  },
  components:{
    ContentHeader,
    NavDefault,
    ContentCenter,
    AgainFooter
}
}
</script>

<style>

</style>