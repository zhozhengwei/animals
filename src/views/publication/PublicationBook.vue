<template>
  <div>
    <!-- 导航栏 已经完成-->
    <NavDefault></NavDefault>
    <!-- 头部 -->
    <BookHeader></BookHeader>
    <!-- 主体结构 -->
    <BookContent></BookContent>
    <!-- 页脚 已经完成-->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import BookHeader from '@/components/publication/BookHeader.vue';
import BookContent from '@/components/publication/BookContent.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"PublicationBook",
  data(){
    return{

    }
  },
  components:{
    NavDefault,
    BookHeader,
    BookContent,
    AgainFooter
}
}
</script>

<style>

</style>