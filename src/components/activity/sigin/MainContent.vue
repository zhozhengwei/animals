<template>
  <!-- -------- START Features w/ title and 3 infos -------- -->
<section class="py-6">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mx-auto text-center pb-4">
        <h1 class="text-gradient text-success">{{activity.title}}</h1>
        <h2>{{activity.address}}</h2>
        <p class="lead">开始时间:{{activity.start}}</p>
        <p class="lead">结束时间:{{activity.end}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="p-3 text-center">
          <!-- <div class="icon icon-shape bg-gradient-info shadow mx-auto">
            <i class="ni ni-email-83"></i>
          </div> -->
          <button type="button" class="btn btn-outline-warning" @click="toAttend">参与活动</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mx-md-auto">
      </div>
    </div>
  </div>
  <div class="container">
        <div class="row">
          <div class="col-lg-8 ms-auto me-auto">
            <p class="text-dark">
              {{activity.content}}
            </p>
          </div>
        </div>
    </div>
</section>
<!-- -------- END Features w/ title and 3 infos -------- -->

</template>

<script>
import API from "../../../plugins/axios/index.js";
export default {
  name:"MainContent",
  data(){
    return{
      id: this.$route.query.id,
      activity:{}
    }
  },
  components:{

  },
  methods: {
    toAttend(){
      this.$router.push({
        path:"/activity/specific/sigin/attend",
        query: this.id
      })
    }
  },
  created(){
    API({
      url: "activity/searchId/"+this.id,
      method: "get"
    }).then((res)=>{
      console.log("收到的数据", res.data.data);
      this.activity =  res.data.data;
    })
  }
}
</script>

<style>

</style>