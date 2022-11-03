<template>
  <!-- 未加入路由中 -->
  <div class="rental">
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 分类信息 -->
    <ClassificationKey></ClassificationKey>
    <!-- 分页动物信息列表 -->
    <AnimalInformationList></AnimalInformationList>
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import AnimalInformationList from '@/components/classifial/AnimalInformationList.vue';
import ClassificationKey from '@/components/classifial/ClassificationKey.vue';
export default {
  name:"ClassificationAnimal",
  data(){
    return{
      toshow:true
    }
  },
  components:{
    NavDefault,
    AgainFooter,
    AnimalInformationList,
    ClassificationKey
}
}
</script>

<style>

</style>