<template>
  <div>
    <!-- 导航栏 已经完成-->
    <NavBlog :toshow="toshow"></NavBlog>
    <!-- 头部 -->
    <ImageHeader></ImageHeader>
    <!-- 主体结构 -->
    <ImageContent></ImageContent>
    <!-- 页脚 已经完成-->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import AgainFooter from '@/components/AgainFooter.vue';
import ImageHeader from '../../components/publication/ImageHeader.vue';
import ImageContent from '../../components/publication/ImageContent.vue';
import NavBlog from '@/components/nav/NavBlog.vue';


export default {
  name:"ImageInformation",
  data(){
    return{
        toshow: true
    }
  },
  components:{
    AgainFooter,
    ImageHeader,
    ImageContent,
    NavBlog
}
}
</script>

<style>

</style>