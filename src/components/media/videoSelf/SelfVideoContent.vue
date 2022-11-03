<template>
  <section class="py-5 mt-5">
    <div class="container">
      <div class="row">
        <lightgallery
          :settings="{ speed: 600, plugins: plugins }"
          :onInit="onInit"
          :onBeforeSlide="onBeforeSlide"
        >
          <a
            v-for="item in videoList"
            :key="item"
            class="gallery-item"
            :data-video='{"source": [{"src":item.url, "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
            data-poster=""
            data-sub-html="<h4>video 你好 - <a href='https://unsplash.com/@katherine_xx11' >周政伟 </a></h4><p> 一个传的视频</p>"
          >
            <img
              width="400"
              class="img-responsive"
              src="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
            />

          </a>

            
        </lightgallery>

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
  </section>
</template>

<script>
// ---- > 接口地址 videoInformation/listQuery
import Lightgallery from "lightgallery/vue";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import API from "../../../plugins/axios/index.js";

export default {
  name: "SelfVideoContent",
  data() {
    return {
      plugins: [lgZoom, lgVideo],
      pageInfo: {},
      videoList:[]
    };
  },
  components: {
    Lightgallery,
  },
  created(){
    this.initData(1);
  },
  methods: {
    onInit: () => {
      console.log("离开");
    },
    onBeforeSlide: () => {
      console.log("打开");
    },
    initData: function (pageNum) {
      API({
        url: "videoInformation/listQuery?pageNum=" + pageNum,
        method: "post",
        data: { type: 1 },
      }).then((res) => {
        console.log("收到的数据视频数据", res.data.data);
        this.videoList = res.data.data.list;
        console.log("收到的数据视频列表===>", this.videoList);
        this.pageInfo = res.data.data;
      });
    }
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css");
body {
  margin: 0;
}
.gallery-item {
  margin: 5px;
}
</style>