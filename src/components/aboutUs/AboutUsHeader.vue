<template>
        <header class="bg-gradient-dark">
      <div
        class="page-header min-vh-75"
        style="background-image: url('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/380976.jpg')"
      >
        <span class="mask bg-gradient-info opacity-8"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center mx-auto my-auto">
              
            <h1 class="text-white">
                <vuetyped id="typed-strings" :strings="typingTexts" :loop="true">
                     
                    <span class="typing"></span>    
                    
                </vuetyped>
            </h1>
                
              
              <!-- <div id="typed-strings">
                <h1>team</h1>
                <h1>design</h1>
                <h1>tool</h1>
              </div> -->
              
              <p class="lead mb-4 text-white opacity-8">
                我们的愿景是通过关爱和保护濒临灭绝的动物来创建可持续发展的社区
              </p>
              <button type="submit" class="btn bg-white text-dark">
               加入我们
              </button>
              <h6 class="text-white mb-2 mt-5">找到我们</h6>
              <div class="d-flex justify-content-center">
                <a href="javascript:;"
                  ><i class="fa fa-weixin text-lg text-white me-4"></i
                ></a>
                <a href="javascript:;"
                  ><i class="fa fa-telegram text-lg text-white me-4"></i
                ></a>
                <a href="javascript:;"
                  ><i class="fa fa-weibo text-lg text-white me-4"></i
                ></a>
                <a href="javascript:;"
                  ><i class="fab fa-google-plus text-lg text-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="position-absolute w-100 z-index-1 bottom-0">
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="moving-waves">
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="-1"
                fill="rgba(255,255,255,0.40"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.35)"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.25)"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="8"
                fill="rgba(255,255,255,0.20)"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="13"
                fill="rgba(255,255,255,0.15)"
              />
              <use
                xlink:href="#gentle-wave"
                x="48"
                y="16"
                fill="rgba(255,255,255,1"
              />
            </g>
          </svg>
        </div>
      </div>
    </header>
</template>

<script>

   

export default {
  name:"AboutUsHeader",
  data(){
    return{
        typingTexts: [
            '保护野生动物，维护生态安全。',
            '不要让一切都成为记忆。',
            '我们是同一个星球上的一家人，我们生命应该是平等的！'
        ]
    }
  },
  components:{

  }
}
</script>

<style>
#typed-strings {
    display:inline;
}
</style>