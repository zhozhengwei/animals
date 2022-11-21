<template>
  <section class="pt-7 pb-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="item in videoList" :key="item">
          <div class="card card-blog card-plain">
            <div class="position-relative">
                <!-- 动态绑定播放地址 -->
                <!-- <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/house.jpg" alt="img-blur-shadow" > -->
                <!-- <iframe
                  src="//player.bilibili.com/player.html?aid=796196793&bvid=BV1rC4y187a9&cid=207222627&page=1&as_wide=1&high_quality=1&danmaku=0"
                  allowfullscreen="allowfullscreen"
                  class="border-radius-lg"
                  width="120%"
                  height="370px"
                  scrolling="no"
                  frameborder="1"
                  style="transform:scale(0.85);position: relative;right:12%"
                ></iframe> -->
                <div v-html="item.url">
                </div>
                <!-- <iframe src="//player.bilibili.com/player.html?aid=796196793&bvid=BV1rC4y187a9&cid=207222627&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> -->
            </div>
            <div class="card-body px-1 pt-3">
              <p class="text-gradient text-dark mb-2 text-sm">
                <a href="#" class="ms-1"></a>  {{item.createdAt}}  <a href="#" class="ms-1"></a>
              </p>
              <p>{{item.introduction}}</p>
            </div>
          </div>
        </div>
        
        <div class="col-sm-7 ms-auto text-end">
          <ul class="pagination pagination-primary mt-4 ml-2">
          <li class="page-item">
            <a class="page-link" href="javascript:;" aria-label="Previous">
              <span aria-hidden="true">
                <!-- <i class="fa fa-angle-double-left" aria-hidden="true"></i> -->
                {{pageInfo.total}} 条
              </span>
            </a>
          </li>
          <li v-for="i in pageInfo.pages" @click.prevent="initData(i)" :key="i" :class="{'page-item  active':pageInfo.pageNum==i}" class="page-item">
            <a class="page-link">{{i}}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:;" aria-label="Next">
              <span aria-hidden="true">
                <!-- <i class="fa fa-angle-double-right" aria-hidden="true"></i> -->
                {{pageInfo.pageNum}}/{{pageInfo.pages}} 页
              </span>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import API from "../../../plugins/axios/index.js";
export default {
  name: "BilibiliMain",
  data() {
    return {
         //记录是否全屏
      fullscreen: false,
      pageInfo: this.$store.state.videoBilibili,
      videoList: this.$store.state.videoBilibili.list
    }
  },
  computed:{
    steta(){
      return this.$store.state.videoBilibili.list
    },
    stetaBili(){
      return this.$store.state.videoBilibili
    }
  },
  components: {},
  created(){
    this.initData(1);
  },
  watch:{
    steta(newValue){
      this.videoList=newValue;
    },
    stetaBili(newValue){
      this.pageInfo = newValue;
    }
  },
  methods: {
    screen(){
       let case1 = document.getElementById('con_lf_top_div')
       if(this.fullscreen){
        if(document.exitFullscreen){
            document.exitFullscreen()
        }else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
        }else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
       }else {
        if(case1.requestFullscreen){
            case1.requestFullscreen()
        }else if (case1.webkitRequestFullScreen) {
          case1.webkitRequestFullScreen()
        } else if (case1.mozRequestFullScreen) {
          case1.mozRequestFullScreen()
        } else if (case1.msRequestFullscreen) {
          // IE11
          case1.msRequestFullscreen()
        }
       }
    },
    initData: function (pageNum) {
      API({
        url: "videoInformation/listQuery?pageNum=" + pageNum,
        method: "post",
        data: { type: 2 },
      }).then((res) => {
        console.log("收到的数据视频数据", res.data.data);
        this.videoList = res.data.data.list;
        console.log("收到的数据视频列表===>", this.videoList);
        this.pageInfo = res.data.data;
      });
    }
  }
};
</script>

<style>
    .aspect-ratio {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 75%;
        }
    
    .aspect-ratio iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>