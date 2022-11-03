<template>
  <!-- -------- START HEADER 4 w/ search book a ticket form ------- -->
<header>
  <div class="page-header min-vh-75" style="background-image: url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/airport.jpg)">
    <span class="mask bg-gradient-dark"></span>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-white text-center">
          <h2 class="text-white">动物图鉴</h2>
          <p class="lead">有关于野生动物的艺术创作</p>
        </div>
      </div>
    </div>
  </div>
  <div class="position-relative overflow-hidden" style="height:36px;margin-top:-35px;">
    <div class="w-full absolute bottom-0 start-0 end-0" style="transform: scale(2);transform-origin: top center;color: #fff;">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>

  <div class="container">
    <div class="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label class="">图片形象</label>
        <select class="form-control" name="choices-leave" id="choices-leave" placeholder="Departure">
          <option value="Choice 1" selected="">虎</option>
          <option value="Choice 2">狮子</option>
          <option value="Choice 3">狼</option>
          <option value="Choice 4">马</option>
        </select>
      </div>
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label class="">图片风格</label>
        <select class="form-control" name="choices-to" id="choices-to" placeholder="Destination">
          <option value="Choice 1" selected="">艺术</option>
          <option value="Choice 2">自然</option>
          <option value="Choice 3">动画</option>
          <option value="Choice 4">科幻</option>
        </select>
      </div>
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label class="">搜索</label>

        <div class="input-group">
          <span class="input-group-text" style="z-index: 0;"><i class="fas fa-search fa-2x"></i></span>
          <input class="form-control datepicker" placeholder="Please select date" type="text" >
        </div>

      </div>
      <div class="col-lg-3 d-flex align-items-center my-auto">
        <button type="button" class="btn bg-gradient-dark w-100 btn-lg mb-0 m4 mt-3">搜索</button>
      </div>
    </div>
  </div>
</header>
<!-- -------- END HEADER 4 w/ search book a ticket form ------- -->
</template>

<script>
export default {
  name:"ImageHeader",
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