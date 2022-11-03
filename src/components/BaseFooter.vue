<template>
  <footer class="footer py-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-4 mx-auto text-center">
          <a
            v-for="{ name, href } in links"
            :key="name"
            :href="href"
            target="_blank"
            class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
            style="color:black;"
          >
            {{name}}
          </a>
        </div>
        <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
          <a
            v-for="{ icon, link } in socials"
            :key="link"
            :href="link"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
            v-html="icon"
          >
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-8 mx-auto text-center mt-1">
          <p class="mb-0 text-secondary">
            Copyright © {{ new Date().getFullYear()}} 野生动物保护公益基金
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent} from 'vue';

export default defineComponent({
  setup(){
  const socials=[
      {
        icon: '<i class="fa fa-weixin text-lg opacity-8"></i>',
        link: "https://www.facebook.com/CreativeTim/",
      },
      {
        icon: '<i class="fa fa-weibo text-lg opacity-8"></i>',
        link: "https://twitter.com/creativetim",
      },
      {
        icon: '<i class="fa fa-telegram text-lg opacity-8"></i>',
        link: "https://mail.163.com",
      },
      {
        icon: '<i class="fa fa-github text-lg opacity-8"></i>',
        link: "https://github.com",
      },
      {
        icon: '<i class="fa fa-google text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
      },
    ];
    const links=  
    [
      { href: "https://www.creative-tim.com/", name: "home" },
      { href: "https://www.creative-tim.com/presentation", name: "关于我们" },
      { href: "https://www.creative-tim.com/presentation", name: "加入我们" },
      { href: "https://www.creative-tim.com/templates/vuejs",name: "活动"},
      { href: "https://www.creative-tim.com/blog", name: "博客" },
      { href: "https://www.creative-tim.com/license", name: "隐私政策" },
    ];

    return {
      socials,
      links
    }
  }
})
</script>

<style>

</style>