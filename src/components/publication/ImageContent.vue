<template>
  <section class="py-5 mt-5">
    <div class="container">
      <div class="row">
        

  <div class="col-lg-4 mb-lg-0 mb-4"
  v-for="item in imageInformation"
      :key="item">

    
    <div class="card">
    <lightgallery
    :settings="{ speed: 300, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
    class="full-background"
  >
    <a
      
      data-lg-size="1406-1390"
      class="gallery-item"
      :data-src="item.url"
      :data-sub-html="contentText(item.name,item.introduction)"
    >
      <img
        class="img-responsive"
        style="width: 100%;"
        :src="item.url"
      />
    </a>

  </lightgallery>
    <div class="card-body pt-3">
  
    </div>
    </div>
    

  </div>

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
    imageInformation:[],
    pageInfo:{}
  }),
  components:{
    Lightgallery
  },
  created(){
    this.initData(1);
  }, 
  computed:{
    steta(){
      return this.$store.state.imageinfor.list
    },
    stetaImage(){
      return this.$store.state.imageinfor
    }
  },
  watch:{
    steta(newValue){
      this.imageInformation = newValue;
    },
    stetaImage(newValue){
      this.pageInfo = newValue;
    }
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
        data: { type: 1,
        classType: '1' },
      }).then((res) => {
        console.log("收到的数据", res.data.data);
        this.imageInformation = res.data.data.list;
        console.log("收到的数据列表===>", this.imageInformation);
        this.pageInfo = res.data.data;
      });
    },
    contentText(val,infor){
      return "<h4>图片 by - <a href='#' >"+val+"</a></h4> <p> Location - <a href='#'>"+infor+"</a></p>"
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