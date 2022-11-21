<template>
    <!-- 图片轮播图header -->
    <br/>
    <div class="row">
  <div class="col-md-12 mx-auto">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner border-radius-sm">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/556063.jpg" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/514047.jpg" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/324834.jpg" alt="Third slide" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:"HeaderCard",
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