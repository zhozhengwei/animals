<template>
  <header>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
            <!-- 第一个移动的盒子 -->
          <div class="carousel-item active">
            <div
              class="page-header min-vh-75 m-3 border-radius-xl"
              style="
                background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/352939.jpg');
              "
            >
              <span class="mask bg-gradient-dark"></span>
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 my-auto">
                    <h4 class="text-white mb-0 fadeIn1 fadeInBottom" align="left">
                      动态数据
                    </h4>
                    <h1 class="text-white fadeIn2 fadeInBottom" align="left">
                        新闻热点
                    </h1>
                    <p class="lead text-white opacity-8 fadeIn3 fadeInBottom" align="left">
                        财富创造是一个进化的近期正总和
                        游戏地位是一个古老的零和游戏。那些袭击者
                        创造财富往往只是为了追求地位。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <!-- 第二个移动的盒子 -->
          <div class="carousel-item">
            <div
              class="page-header min-vh-75 m-3 border-radius-xl"
              style="
                background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/329386.jpg');
              "
            >
              <span class="mask bg-gradient-dark"></span>
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 my-auto">
                    <h4 class="text-white mb-0 fadeIn1 fadeInBottom" align="left">
                      动态数据
                    </h4>
                    <h1 class="text-white fadeIn2 fadeInBottom" align="left">
                      新闻热点
                    </h1>
                    <p class="lead text-white opacity-8 fadeIn3 fadeInBottom" align="left">
                        财富创造是一个进化的近期正总和
                        游戏地位是一个古老的零和游戏。那些袭击者
                        创造财富往往只是为了追求地位。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 整个移动的控制图标 -->
        <div class="min-vh-75 position-absolute w-100 top-0">
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon position-absolute bottom-50"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon position-absolute bottom-50"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name:"ContentHeader",
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