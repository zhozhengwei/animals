<template>
  <div class="blog-posts">
    <!-- 头部 -->
    <SquareHeader></SquareHeader>
    <!-- 中间 -->
    <SquareContent></SquareContent>
    <!-- 尾部 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import SquareHeader from '@/components/bolgSquare/SquareHeader.vue';
import SquareContent from '@/components/bolgSquare/SquareContent.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"SquareBlog",
  data(){
    return{

    }
  },
  components:{
    SquareHeader,
    SquareContent,
    AgainFooter
}
}
</script>

<style>

</style>