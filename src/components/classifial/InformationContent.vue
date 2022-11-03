<template>
  <!-- START Section Content W/ 2 images aside of icon title description -->
<section class="py-7">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
        <div class="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75">
          <div class="bg-gradient-info w-100 h-100 border-radius-xl position-absolute" alt=""></div>
          <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-city.jpg" class="w-100 border-radius-xl mt-6 ms-5 position-absolute" alt="">
        </div>
      </div>
      <div class="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
        <div class="p-3 pt-0">
            <div class="icon icon-shape bg-gradient-info rounded-circle shadow text-center mb-4">
              <i class="ni ni-building"></i>
            </div>
            <h4 class="text-gradient text-info mb-0">{{生物学名字}}</h4>
            <p>{{生物学}}</p>
          </div>
      </div>
    </div>
    <div class="row mt-0 mt-md-5 mt-lg-8">
      <div class="col-lg-5 col-md-12 me-auto">
        <div class="p-3 pt-0">
            <div class="icon icon-shape bg-gradient-warning rounded-circle shadow text-center mb-4">
              <i class="fas fa-trophy"></i>
            </div>
            <h4 class="text-gradient text-warning mb-0">{{国外分布}}</h4>
            <p></p>
          </div>
      </div>
      <div class="col-lg-6 col-md-8">
        <div class="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-75">
          <div class="w-100 h-100 bg-gradient-warning border-radius-xl position-absolute" alt=""></div>
          <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/arena.jpg" class="w-100 border-radius-xl mt-6 ms-n5 position-absolute" alt="">
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END Section Content -->
<section class="py-5">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
        <img class="w-100 border-radius-lg shadow" src="../../assets/img/toa-heftiba.jpg">
      </div>
      <div class="col-lg-4 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
        <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">形态学描述</h2>
        <p class="lead">{{内容}}</p>
        <h3 class="mt-4">国内分布</h3>
        <p class="lead">{{内容}}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name:"InformationContent",
  data(){
    return{

    }
  },
  components:{

  }
}
</script>

<style>

</style>