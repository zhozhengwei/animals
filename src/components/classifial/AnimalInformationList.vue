<template>
  <section class="pt-7 pb-0">
    <div class="container">
      <div class="row">
        <!-- 一个页面9个吧 -->
        <div class="col-lg-4 col-md-6" v-for="item in biologyList" :key="item">
          <div class="card card-blog card-plain">
            <div class="position-relative">
              <a class="d-block blur-shadow-image">
                <img
                  :src="item.images[0].url"
                  alt="img-blur-shadow"
                  class="img-fluid shadow border-radius-lg"
                  style="width:100%;height:200px;"
                />
              </a>
            </div>
            <div class="card-body px-1 pt-3">
              <router-link :to="{path:'/biology/animals/alone',query:{id:item.id}}">
                <h5>{{item.name}}</h5>
              </router-link>
              <p style="word-wrap:break-word;">{{item.biology}}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-7 ms-auto text-end">
          <ul class="pagination pagination-primary mt-4 ml-2">
          <li class="page-item">
            <a class="page-link" href="javascript:;" aria-label="Previous">
              <span aria-hidden="true">
                <!-- <i class="fa fa-angle-double-left" aria-hidden="true"></i> -->
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
                <!-- <i class="fa fa-angle-double-right" aria-hidden="true"></i> -->
                {{pageInfo.pageNum}}/{{pageInfo.pages}} 页
              </span>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import API from "../../plugins/axios/index.js";
export default {
  name: "AnimalInformationList",
  data() {
    return {
      biologyList: [],
      pageInfo: {}
    };
  },
  computed:{
    steta(){
      return this.$store.state.animals.list;
    },
    stetaAnimal(){
      return this.$store.state.animals;
    }
  },
  watch:{
    steta(newValue){
      this.biologyList = newValue;
    },
    stetaAnimal(newValue){
      this.pageInfo = newValue;
    }
  },
  components: {},
  created(){
    this.initData(1);
  },
  methods: {
    initData: function (pageNum) {
      API({
        url: "biology/listAll/" + pageNum,
        method: "get",
      }).then((res) => {
        console.log("收到的数据活动数据", res.data.data);
        this.biologyList = res.data.data.list;
        this.pageInfo = res.data.data;
      });
    },
  }
};
</script>

<style>
</style>