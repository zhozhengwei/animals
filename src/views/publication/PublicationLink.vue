<template>
  <div>
   <!-- 导航栏 已经完成-->
   <NavDefault :toshow="toshow"></NavDefault>
    <!-- 头部 -->
    <PublicationHeader></PublicationHeader>
    <!-- 主体结构 -->
    <PublicationContent></PublicationContent>
    <!-- 页脚 已经完成-->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import PublicationHeader from '@/components/publication/PublicationHeader.vue';
import PublicationContent from '@/components/publication/PublicationContent.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"PublicationLink",
  data(){
    return{
        toshow: true
    }
  },
  components:{
    NavDefault,
    PublicationHeader,
    PublicationContent,
    AgainFooter
}
}
</script>

<style>

</style>