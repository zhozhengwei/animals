<template>
  <div class="blog-author bg-gray-100">
    <!-- sigin个人 -->
    <AuthorSigin></AuthorSigin>
    <!-- history历史 -->
    <AuthorBlog></AuthorBlog>
    <!-- 申请志愿者信息 TableVolunteer -->
    <TableVolunteer></TableVolunteer>
    <!-- 捐献记录信息 TableDonate-->
    <TableDonate></TableDonate>
    <!-- 活动报名信息 TableActivity-->
    <TableActivity></TableActivity>
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
import TableVolunteer from '@/components/author/TableVolunteer.vue';
import TableDonate from '@/components/author/TableDonate.vue';
import TableActivity from '@/components/author/TableActivity.vue';
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
    AgainFooter,
    TableVolunteer,
    TableDonate,
    TableActivity
}
}
</script>

<style>

</style>