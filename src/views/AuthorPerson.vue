<template>
  <div class="blog-author bg-gray-100">
    <!-- sigin个人 -->
    <AuthorSigin></AuthorSigin>
    <!-- history历史 -->
    <AuthorBlog></AuthorBlog>
    <!-- 联系我们 -->
    <SubscribeBox></SubscribeBox>
    <!-- footer -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import AuthorSigin from '@/components/author/AuthorSigin.vue';
import AuthorBlog from '@/components/author/AuthorBlog.vue';
import SubscribeBox from '@/components/subscribe/SubscribeBox.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"AuthorPerson",
  data(){
    return{

    }
  },
  components:{
    AuthorSigin,
    AuthorBlog,
    SubscribeBox,
    AgainFooter
}
}
</script>

<style>

</style>