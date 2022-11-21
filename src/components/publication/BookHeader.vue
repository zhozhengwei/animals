<template>
  <!-- -------- START HEADER 5 w/ text and illustration ------- -->
<header>
  <div class="page-header min-vh-75">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 my-auto">
          <h1 class="text-gradient text-warning mb-0">经典动物图书</h1>
          <h1 class="mb-4">介绍一些科普的读物</h1>
          <p class="lead">提升对野生动物种类和习性的了解，有着更多你喜欢的野生动物的相关知识</p>
          <div class="buttons">
            <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-search fa-2x"></i></span>
                                    <input type="text" class="form-control" placeholder="Search after" v-model.trim="title">
                                </div>
          </div>
        </div>
        <div class="col-lg-8 ps-5 pe-0">
          <div class="row">
            <div class="col-lg-3 col-6">
              <img class="w-100 border-radius-lg shadow mt-0 mt-lg-7" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desire.jpg" alt="">
            </div>
            <div class="col-lg-3 col-6">
              <img class="w-100 border-radius-lg shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/chair.jpg" alt="">
              <img class="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/facade.jpg" alt="">
            </div>
            <div class="col-lg-3 col-6">
              <img class="w-100 border-radius-lg shadow mt-0 mt-lg-5" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/architecture.jpg" alt="">
              <img class="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg" alt="">
            </div>
            <div class="col-lg-3 col-6">
              <img class="w-100 border-radius-lg shadow mt-3" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg" alt="">
              <img class="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/medusa.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- -------- END HEADER 5 w/ text and illustration ------- -->
</template>

<script>
import API from "../../plugins/axios/index.js";
// 节流函数
const delay = (function() {
 let timer = 0;
 return function(callback, ms) {
 clearTimeout(timer);
 timer = setTimeout(callback, ms);
 };
})();

export default {
  name:"BookHeader",
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
        url:"book/listSearch",
        method: "post",
        data: {
          name:this.title
        },
      }).then((res)=>{
        console.log("响应数据：", res.data.data);
        this.$store.commit("SET_BOOK",res.data.data);
      })
    }
  }
}
</script>

<style>

</style>