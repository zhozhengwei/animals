<template>
 
  <div class="about-us">
    <!-- 导航栏 nav-->
    <NavDefault :toshow="toshow"></NavDefault>
    <br/>
    <!-- 头部 -->
    <ApplyHeader></ApplyHeader>
    <!-- 文字解释 -->
    <ApplyText></ApplyText>
    <!-- 提交的表单 -->
    <ApplyFrom></ApplyFrom>
    <!-- 尾部 footer-->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import ApplyHeader from '@/components/apply/ApplyHeader.vue';
import ApplyText from '@/components/apply/ApplyText.vue';
import ApplyFrom from '@/components/apply/ApplyFrom.vue';
import AgainFooter from '@/components/AgainFooter.vue';
export default {
  name:"ApplyMember",
  data(){
    return{
        toshow: true
    }
  },
  components:{
    NavDefault,
    ApplyHeader,
    ApplyText,
    ApplyFrom,
    AgainFooter
}
}
</script>

<style>

</style>