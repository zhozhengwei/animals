<template>
  <!-- 变化的页头 -->
  <NavDefault :toshow="toshow"></NavDefault>
  <!-- 内容 -->
  <div class="blog-posts">
    <div class="container">
    <div class="row">
      <!-- 图表信息的披露 -->
      <div class="col-lg-7">
        <!-- 第一部分解释图表 -->
        <div class="py-5">
          <FinancialContent></FinancialContent>
        </div>
      <hr class="dark my-md-6 mt-2 mx-7" />

        <!-- 第二部分宣传的机会 -->
        <FinancialInformation></FinancialInformation>
      </div>
      <!-- 右侧的功能栏 -->
      <div class="col-lg-4 ml-auto">
        <div class="pt-1 pb-5 position-sticky top-1 mt-lg-8 mt-5">
          <h4 align="left">捐赠方式</h4>
        <p class="text-justify">
          支持野生动物保护基金会保护动物工作的方式有很多，
          包括遗赠，长期合作计划和车辆、股票、债券和共同基金。在下面了解决更多信息
        </p>

        <button type="button" class="btn btn-success btn-lg me-2" @click="toDonate">捐</button>
        <button type="button" class="btn btn-success btn-lg me-2" @click="toGiving">遗赠</button>
        <button type="button" class="btn btn-success btn-lg me-2" @click="toGiving">加入计划</button>
        <button type="button" class="btn btn-success btn-lg me-2" @click="toGiving">更多的</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  <!-- 页脚 -->
  <AgainFooter></AgainFooter>
</template>

<script>
import FinancialContent from '@/components/financial/FinancialContent.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import FinancialInformation from '@/components/financial/FinancialInformation.vue';
import NavDefault from '../components/nav/NavDefault.vue';
export default {
  name:"FinancialReport",
  data(){
    return{
      toshow: true
    }
  },
  components:{
    FinancialContent,
    AgainFooter,
    FinancialInformation,
    NavDefault
},
methods:{
  toDonate(){
      this.$router.push({
        path: "/activity/donate"
      })
  },
  toGiving(){
      this.$router.push({
        path: "/financial/giving"
      })
  }
}
}
</script>

<style>

</style>