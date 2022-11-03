<template>
 <!-- ---- START FOOTER 2 dark w/ bg image 5 cols & subscribe area & social---- -->
<footer class="footer py-7 position-relative bg-gradient-dark overflow-hidden">
  <div class="position-absolute w-100 z-inde-1 top-0 mt-n3">
    <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>wave-down</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#FFFFFF" fill-rule="nonzero">
                <g id="wave-down">
                    <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
                </g>
            </g>
        </g>
    </svg>
  </div>
  <div class="container position-relative mt-8">
    <div class="row">
      <div class="col-lg-3 mb-5 mb-lg-0">
        <h6 class="text-uppercase mb-2">保护</h6>
        <p class="mb-4 pb-2">
           追求绿色时尚，拥抱绿色生活
        </p>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-facebook"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-twitter"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-instagram"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-pinterest"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-github"></span>
        </a>
      </div>
      <div class="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
        <h6 class="text-sm">funt</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              关于我们
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              联系我们
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              博客
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm">应用</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              登录
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              注册
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              加入我们
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              活动
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm">联系</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              成为会员
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              About Us
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Team
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Privacy
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm">Resources</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Blog
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Service
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Product
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1">
    <div class="row">
      <div class="col-8 mx-lg-auto text-lg-center">
        <p class="text-sm text-secondary">
          Copyright © {{ new Date().getFullYear() }} 野生动物保护公益基金.
        </p>
      </div>
    </div>
  </div>
</footer>
<!-- ---- END FOOTER 2 dark w/ bg image 5 cols & subscribe area & social---- -->
</template>

<script>
export default {
  name:"FooterDefault",
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