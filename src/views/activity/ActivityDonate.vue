<template>
  <div>
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- donate -->
    <DonateSteps></DonateSteps>
    <!-- 更多 -->
    <DonateOrther></DonateOrther>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import DonateSteps from '@/components/activity/donate/DonateSteps.vue';
import DonateOrther from '@/components/activity/donate/DonateOrther.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"ActivityDonate",
  data(){
    return{
        toshow: true
    }
  },
  components:{
    NavDefault,
    DonateSteps,
    DonateOrther,
    AgainFooter
}
}
</script>

<style>

</style>