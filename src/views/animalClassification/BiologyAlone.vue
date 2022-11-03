<template>
  <div class="rental">
    <!-- 头部 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 信息展现组件 -->
    <information-content></information-content>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import InformationContent from '@/components/classifial/InformationContent.vue';
export default {
  name:"BiologyAlone",
  data(){
    return{
        toshow:true
    }
  },
  components:{
    NavDefault,
    AgainFooter,
    InformationContent
  }
}
</script>

<style>

</style>