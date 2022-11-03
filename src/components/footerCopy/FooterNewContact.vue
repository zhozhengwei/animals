<template>
    <footer class="footer py-4 bg-gradient-dark">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-3 text-start my-auto">
              <p class="mb-0 text-white text-sm">
                Copyright ©
                {{ new Date().getFullYear() }} 
                野生动物保护公益基金.
              </p>
            </div>
            <div class="col-lg-5 col-md-8 ms-auto text-end">
              <ul class="nav flex-row ms-n3 align-items-center mt-4 mt-sm-0">
                <li class="nav-item ms-auto">
                  <a
                    class="nav-link text-white opacity-8"
                    href="https://www.creative-tim.com"
                    target="_blank"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-white opacity-8"
                    href="https://www.creative-tim.com/presentation"
                    target="_blank"
                  >
                    关于我们
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-white opacity-8"
                    href="https://www.creative-tim.com/blog"
                    target="_blank"
                  >
                    博客
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-white opacity-8"
                    href="https://www.creative-tim.com"
                    target="_blank"
                  >
                    隐私政策
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  </template>
  
  <script>
  export default {
    name:"FooterNewContact",
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