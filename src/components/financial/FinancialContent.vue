<template>
   <div class="row" >
          <!-- <div class="col-lg-6">
            <h3 class="mb-5" align="left">财务信息</h3>
          </div> -->
    </div>
    <div class="row">
        <!-- 信息解释 -->
        <div class="col-md-5 ms-auto my-auto">
            <div class="p-3 info-horizontal d-flex">
              <div>
                <h3>测试</h3>
                <p>
                    测试测试测试测试测试测试测试测试测试测试
                    测试测试测试测试测试测试测试测试测试测试
                    测试测试测试测试
                </p>
              </div>
            </div>
          </div>
          <!-- 图表展示 -->
          <div class="col-md-4 me-auto my-auto ms-md-5">
            <div class="cursor-pointer">
              <div class="card card-background tilt" data-tilt="">
                <EchartsBox class="full-background"></EchartsBox>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
import EchartsBox from '../graph/EchartsBox.vue';
export default {
  name:"FinancialContent",
  data(){
    return{

    }
  },
  components:{
    EchartsBox
}
}
</script>

<style>

</style>