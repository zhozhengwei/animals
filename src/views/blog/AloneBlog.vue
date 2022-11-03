<template>
  <div class="terms">
    <!-- 导航  -->
    <!-- <NavBlog></NavBlog> -->
    <NavDefault></NavDefault>
    <!-- <AloneBlogHeader></AloneBlogHeader> -->

    <AloneBlogContent></AloneBlogContent>
    <!-- 文章推荐 -->
    <AloneRecommend></AloneRecommend>
   
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import AloneBlogContent from '@/components/bolgSquare/blog/AloneBlogContent.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import NavDefault from '@/components/nav/NavDefault.vue';
import AloneRecommend from '@/components/bolgSquare/blog/AloneRecommend.vue';

export default {
  name:"AloneBlog",
  data(){
    return{
      
    }
  },
  components:{
    AloneBlogContent,
    AgainFooter,
    NavDefault,
    AloneRecommend
},
created(){

}
}
</script>

<style>

</style>