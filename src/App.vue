<template>
  <AgainHeader :toshow="toshow" v-if="displayNav"></AgainHeader>
  
  <router-view v-if="isRouterAlive"/>
  <!-- <AgainFooter></AgainFooter> -->
</template>

<script>
import {onMounted, ref , watch ,nextTick,provide} from "vue";
import AgainHeader from "./components/header/AgainHeader.vue";



export default {
  name: "App",
  setup() {
    const toshow = ref(true);
    const displayNav = ref(true);

    const isRouterAlive = ref(true);
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);
    return {
      toshow,
      displayNav,
      isRouterAlive
    };
  },
  components: {
    AgainHeader
},
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      console.log("路径的跳转", to.path);
      if (to.path === "/login" || to.path === '/register') {
        this.toshow = false;
        console.log(this.toshow);
      } else {
        this.toshow = true;
        console.log(this.toshow);
      }

      if(to.path === '/financial' ||  to.path === '/apply' || to.path === '/blog/sigin' || to.path === '/activity/apply' || to.path === '/activity/donate' || to.path === '/activity/specific/sigin'|| to.path === '/activity/time' || to.path === '/media/list' || to.path === '/media/list/alone' || to.path === '/media/bilibili' || to.path === "/media/self" || to.path === "/legal" || to.path === "/legal/external" || to.path === "/biology/animals" || to.path === "/biology/action" || to.path === "/humanity/book" || to.path === "/humanity/list" || to.path === "/humanity/image" || to.path === "/blog/Siginblog/edtior"){
        this.displayNav = false;
      }else{
        this.displayNav = true;
      }
      next();
    });
  },
  watch: {

  }
};
</script>

<style scoped>
html,
body,
#app {
  font-family: "Microsoft Yahei", sans-serif;
  height: 100%;
  padding: 0;
  margin: 0;
  color: #494949;
  font-size: 15px;
  text-align: center;
}
</style>
