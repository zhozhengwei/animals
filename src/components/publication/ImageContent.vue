<template>
  <section class="py-5 mt-5">
    <div class="container">
      <div class="row">
        <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a
      v-for="item in imageInformation"
      :key="item"
      data-lg-size="1406-1390"
      class="gallery-item"
      :data-src="item.url"
      data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >item.name</a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
    >
      <img
        class="img-responsive"
        src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
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
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import API from "../../plugins/axios/index.js";

export default {
  name:"ImageContent",
  data: () => ({
    plugins: [lgZoom, lgVideo],
    imageInformation:[]
  }),
  components:{
    Lightgallery
  },
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
    initData: function (pageNum) {
      API({
        url: "imageInformation/listQuery?pageNum=" + pageNum,
        method: "post",
        data: { type: 1 },
      }).then((res) => {
        console.log("收到的数据", res.data.data);
        this.imageInformation = res.data.data.list;
        console.log("收到的数据列表===>", this.imageInformation);
        this.pageInfo = res.data.data;
      });
    }
  },
}
</script>

<style>

@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
body {
  margin: 0;
}
.gallery-item {
  margin: 5px;
}

</style>