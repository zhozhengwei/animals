<template>
  <div class="presentation-page">
    <div class="container mt-7">
      <div class="row">
        <div class="col-lg-12">
          <!-- 放置 videoBox ClassificationBox -->
          <VideoBox></VideoBox>
          <ClassificationBox></ClassificationBox>
        </div>
      </div>
  </div>
  <!-- 放置NewPaperBox -->
  <NewPaperBox></NewPaperBox>
  <!-- 一个定阅的组件 -->
  <SubscribeBox></SubscribeBox>
  </div>
  

  <AgainFooter></AgainFooter>
</template>

<script>
import VideoBox from '@/components/indexHome/VideoBox.vue';
import ClassificationBox from '@/components/indexHome/ClassificationBox.vue';
import NewPaperBox from '@/components/indexHome/NewPaperBox.vue';
import SubscribeBox from '@/components/indexHome/SubscribeBox.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"HomeIndex",
  data(){
    return{

    }
  },
  components:{
    VideoBox,
    ClassificationBox,
    NewPaperBox,
    SubscribeBox,
    AgainFooter
}
}
</script>

<style>

</style>