<template>
   <section class="py-5 bg-gray-100">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="item in publicationList" :key="item">
        <div class="card card-profile">
          <a href="javascript:;">
            <div class="p-3">
              <img class="w-100 border-radius-md" :src="item.cover">
            </div>
          </a>
          <div class="card-body blur justify-content-center text-center mt-n5 mx-4 mb-4 border-radius-md">
            <h4 class="mb-0"><a :href="item.url">{{item.name}}</a></h4>
            <div class="row justify-content-center text-center">
                <p>{{item.introduction}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <ul class="pagination pagination-info">
      <li class="page-item">
        <a class="page-link" href="javascript:;" aria-label="Previous">
          <span aria-hidden="true">
            <!-- <i class="fa fa-angle-left" aria-hidden="true"></i> -->
            {{pageInfo.total}} 条
          </span>
        </a>
      </li>
      <li v-for="i in pageInfo.pages" @click.prevent="initData(i)" :key="i" :class="{'page-item  active':pageInfo.pageNum==i}" class="page-item">
            <a class="page-link">{{i}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:;" aria-label="Next">
          <span aria-hidden="true">
            <!-- <i class="fa fa-angle-right" aria-hidden="true"></i> -->
            {{pageInfo.pageNum}}/{{pageInfo.pages}} 页
          </span>
        </a>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import API from "../../plugins/axios/index.js";
export default {
  name:"PublicationContent",
  data(){
    return{
      pageInfo: {},
      publicationList:[]
    }
  },
  components:{

  },
  created(){
    this.initData(1);
  },
  computed:{
    steta(){
      return this.$store.state.publicinfor.list 
    },
    stetaPblic(){
      return this.$store.state.publicinfor
    }
  },
  watch:{
    steta(newValue){
      this.publicationList = newValue;
    },
    stetaPblic(newValue){
      this.pageInfo = newValue;
    }
  },
  methods:{
    initData: function(pageNum) {
    API({
      url: "publication/listAll/"+pageNum,
      method: "get"
    }).then((res)=>{
      console.log("收到的数据活动数据", res.data.data)
      this.publicationList = res.data.data.list;
      this.pageInfo = res.data.data;
    })
  }
}
}
</script>

<style>

</style>