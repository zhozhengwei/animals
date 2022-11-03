<template>
  <div>
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 轮播头 -->
    <HeaderCard></HeaderCard>
    <!-- 活动主体 -->
    <MainContent></MainContent>
    <!-- 联系我们 -->
    <SubscribeBox></SubscribeBox>
    <div class="py-lg-5 py-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h4 class="mb-1">谢谢您的支持!</h4>
            <p class="lead mb-0">对动物提供帮助</p>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-4 d-lg-flex align-items-center">
            <a href="javascript:;" class="btn btn-twitter mb-lg-0 mb-2 me-2">
              <i class="fab fa-twitter me-1"></i> 微信
            </a>
            <a href="javascript:;" class="btn btn-facebook mb-lg-0 mb-2 me-2">
              <i class="fab fa-facebook-square me-1"></i> 微博
            </a>
            <a href="javascript:;" class="btn btn-tumblr mb-lg-0 mb-2 me-2">
              <i class="fab fa-tumblr me-1"></i> 飞书
            </a>
            <a href="javascript:;" class="btn btn-dribbble mb-lg-0 mb-2">
              <i class="fab fa-dribbble me-1"></i> bilibili
            </a>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import MainContent from '@/components/activity/sigin/MainContent.vue';
import HeaderCard from '@/components/activity/sigin/HeaderCard.vue';
import NavDefault from '@/components/nav/NavDefault.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import SubscribeBox from '@/components/subscribe/SubscribeBox.vue';
export default {
  name:"ActivitySigin",
  data(){
    return{
        toshow: true
    }
  },
  components:{
    MainContent,
    HeaderCard,
    NavDefault,
    AgainFooter,
    SubscribeBox
}
}
</script>

<style>

</style>