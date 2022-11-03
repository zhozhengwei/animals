<template>
  <!-- -------- START FOOTER 5 w/ DARK BACKGROUND ------- -->
<footer class="footer py-5 bg-gradient-dark position-relative overflow-hidden">
  <img src="../assets/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute start-0 top-0 w-100 opacity-6">
  <div class="container position-relative z-index-1">
    <div class="row">
      <div class="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
        <h6 class="text-white font-weight-bolder text-uppercase mb-lg-4 mb-3">网站</h6>
        <ul class="nav flex-row ms-n3 align-items-center mb-4 mt-sm-0">
          <li class="nav-item">
            <router-link class="nav-link text-white opacity-8" target="_blank" to="/aboutus">关于我们</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white opacity-8" href="https://www.creative-tim.com/presentation" target="_blank">
                加入我们
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white opacity-8" href="https://www.creative-tim.com/blog" target="_blank">
                活动
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white opacity-8" href="https://www.creative-tim.com" target="_blank">
                隐私政策
            </a>
          </li>
        </ul>
        <p class="text-sm text-white opacity-8 mb-0">
          Copyright © {{ new Date().getFullYear() }} 野生动物保护公益基金.
        </p>
      </div>
      <div class="col-lg-6 ms-auto text-lg-end text-center">
        <p class="mb-5 text-lg text-white font-weight-bold">
            自然界是一切感性的力量、事物和存在物的总和。一费尔巴哈
        </p>
        <a href="javascript:;" target="_blank" class="text-white me-xl-4 me-4 opacity-5">
          <span class="fa fa-weixin text-lg opacity-8"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-white me-xl-4 me-4 opacity-5">
          <span class="fa fa-weibo text-lg opacity-8"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-white me-xl-4 me-4 opacity-5">
          <span class="fa fa-telegram text-lg opacity-8"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-white opacity-5">
          <span class="fa fa-github text-lg opacity-8"></span>
        </a>
      </div>
    </div>
  </div>
</footer>
<!-- -------- END FOOTER 5 w/ DARK BACKGROUND ------- -->
</template>

<script>
import { defineComponent} from 'vue';

export default defineComponent({
    
})
</script>

<style>

</style>