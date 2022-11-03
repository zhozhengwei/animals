<template>
  <header>
  <div class="page-header min-vh-100" style="background-image: url(../../../assets/img/curved-images/curved14.jpg);">
    <span class="mask bg-gradient-dark opacity-4"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-9 text-center mx-auto">
          <h1 class="text-white mb-4">文章标题</h1>
          <!-- 文章简单介绍 -->
          <p class="lead text-white mb-sm-6 mb-4">简单介绍一下自己文章要写的内容</p>
          <div class="d-flex justify-content-center">
            <!-- 文章信息 -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative" style="height: 36px;overflow: hidden;margin-top: -36px; z-index:2">
    <div class="w-full absolute bottom-0 start-0 end-0" style="transform: scale(2);transform-origin: top center;color: #fbfbfb;">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name:"AloneBlogHeader",
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