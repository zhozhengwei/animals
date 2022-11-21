<template>
  <header>
    <div
      class="page-header min-vh-50"
      style="
        background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/7555.jpg');
      "
    >
      <span class="mask bg-gradient-primary"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-white text-center">
            <h2 class="text-white">搜索你感兴趣的视频</h2>
            <p class="lead">
              每一个动物保护的视频都是一个可爱的宣传(纪录片和宣传视频)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="position-relative overflow-hidden"
      style="height: 36px; margin-top: -35px"
    >
      <div
        class="w-full absolute bottom-0 start-0 end-0"
        style="transform: scale(2); transform-origin: top center; color: #fff"
      >
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <div class="container">
      <div
        class="
          row
          bg-white
          shadow-lg
          mt-n6
          border-radius-md
          pb-4
          p-3
          position-relative
          w-75
          mx-auto
        "
      >
        <div class="col-lg-12 mt-lg-n2 mt-2">
          <label>搜索</label>
          <div class="input-group">
          <span class="input-group-text" style="z-index: 0;"><i class="fas fa-search fa-2x" aria-hidden="true"></i></span>
          <input class="form-control" placeholder="Search" type="text" v-model.trim="title" >
        </div>
        </div>
        <!-- <div class="col-lg-4 d-flex align-items-center mt-lg-auto mt-2">
          <button type="button" class="btn bg-gradient-primary w-100 mb-0">
            搜索
          </button>
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
import API from "../../../plugins/axios/index.js";
// 节流函数
const delay = (function() {
 let timer = 0;
 return function(callback, ms) {
 clearTimeout(timer);
 timer = setTimeout(callback, ms);
 };
})();

export default {
  name:"SelfVideoHeader",
  data() {
    return {
      title:''
    };
  },
  watch:{
    title(){
      delay(()=>{
        this.fetchData();
      }, 300);
    },
  },
  components: {},
  methods: {
    async fetchData(val){
      API({
        url:"videoInformation/listTypeOne",
        method: "post",
        data: {
          content:this.title
        },
      }).then((res)=>{
        console.log("响应数据：", res.data.data);
        this.$store.commit("SET_VIDEO",res.data.data);
      })
    }
  }
}
</script>

<style>

</style>