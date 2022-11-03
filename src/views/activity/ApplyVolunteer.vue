<template>
  <div class="contact-us-simple">
    <!-- 导航栏 -->
    <!-- <NavDefault></NavDefault> -->
    <NavBlog></NavBlog>
    <!-- 头部 -->
    <HeaderVolunteer></HeaderVolunteer>
    <!-- 信息说明 -->
    <MessageVolunteer></MessageVolunteer>
    <!-- 表单 -->
    <FromVolunteer></FromVolunteer>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import HeaderVolunteer from '@/components/activity/HeaderVolunteer.vue';
import MessageVolunteer from '@/components/activity/MessageVolunteer.vue';
import FromVolunteer from '@/components/activity/FromVolunteer.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import NavBlog from '@/components/nav/NavBlog.vue';
export default {
  name:"ApplyVolunteer",
  data(){
    return{

    }
  },
  components:{
    HeaderVolunteer,
    MessageVolunteer,
    FromVolunteer,
    AgainFooter,
    NavBlog
}
}
</script>

<style>

</style>