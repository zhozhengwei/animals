<template>
  
<!-- <IndexHeader></IndexHeader> -->
<!-- <AgainHeader :toshow="toshow"></AgainHeader> -->
<IndexHeader></IndexHeader>
 <a-layout id="components-layout-demo-custom-trigger">
    
    <a-layout-content>
        <HomeIndex></HomeIndex>
        <router-view></router-view>
    </a-layout-content>
    <!-- 其它页脚 -->
  </a-layout>
  
</template>

<script>

import IndexHeader from '@/components/packageHeader/IndexHeader.vue';
import HomeIndex from './HomeIndex.vue';
import AgainHeader from '@/components/header/AgainHeader.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    data() {
        return {
            toshow:true
        }
    },
  components: {
    IndexHeader,
    HomeIndex,
    AgainHeader
}
}
</script>

<style>
#components-layout-demo-custom-trigger {
    height: 100%;
    background-color: white;
}

#a-layout-footer-demo {
    background-color: #c6c6c6;
}


</style>