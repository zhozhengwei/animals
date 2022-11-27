<template>
  <section class="py-5 mt-2">
  <div class="container py-5">
    <div class="row align-items-center">
      <div class="col-md-6 mb-md-0 mb-4">
        <h3 class="text-gradient text-success mb-0">更多的捐赠方式</h3>
        <p class="lead mb-md-5 mb-4">
            支持野生动物保护基金会保护动物工作的方式有很多，
          包括遗赠，长期合作计划和车辆、股票、债券和共同基金。在下面了解决更多信息
        </p>
        <button type="button" class="btn btn-success me-2" style="width:100px;height:48px;" @click="toDonate">捐</button>
        <button type="button" class="btn btn-success me-2" style="width:100px;height:48px;" @click="toGiving">遗赠</button>
        <br/>
        <button type="button" class="btn btn-success me-2" style="width:100px;height:48px;" @click="toGiving">加入计划</button>
        <button type="button" class="btn btn-success me-2" style="width:100px;height:48px;" @click="toGiving">更多的</button>
      </div>
      <div class="col-md-6">
        <div class="blur-shadow-image text-center">
          <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/443207 (1).gif" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg max-height-600">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name:"DonateOrther",
  data(){
    return{

    }
  },
  components:{

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