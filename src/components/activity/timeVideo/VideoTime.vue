<template>
  <section class="py-6">
    <!-- 按照时间的顺序来进行播放视频 -->
    <div class="container">
    <a-timeline>
        <a-timeline-item v-for="item in videoList" :key="item"><h3>活动{{item.title}}:时间结点{{item.end}}</h3>
          <VideoPlayer :video_url="item.url" :poster="item.poster" style="margin-left: 1%;"></VideoPlayer>
        </a-timeline-item>
    </a-timeline>
    </div>
  </section>
</template>

<script>
import VideoPlayer from "../../videoView/VideoPlayer.vue";
import API from "../../../plugins/axios/index.js";
export default {
  name:"VideoTime",
  data(){
    return{
        url:'https://zzwcos-1308302031.cos.ap-shanghai.myqcloud.com/animalgobal.mp4',
        poster:'https://zzwcos-1308302031.cos.ap-shanghai.myqcloud.com/20220908221801553.jpg',
        videoList: []
    }
  },
  components:{
    VideoPlayer
},
created(){
  API({
    url: "activityVideoInformation/list",
    method: "post"
  }).then((res)=>{
    console.log("==视频文件读取===>",res.data.data);
    this.videoList = res.data.data;
  })
}
}
</script>

<style>

</style>