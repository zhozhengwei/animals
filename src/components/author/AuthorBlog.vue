<template>
  <section class="py-3">
      <div class="container">
        <div class="row" >
          <div class="col-lg-6">
            <h3 class="mb-5" align="left">查看我最新的博文</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="item in historyList" :key="item">
            <div class="card card-plain card-blog">
              <div
                class="card-image border-radius-lg position-relative cursor-pointer"
              >
                <div class="blur-shadow-image">
                  <img
                    class="img border-radius-lg move-on-hover"
                    :src="item.cover"
                    alt="bags"
                  />
                </div>
              </div>
              <div class="card-body px-0">
                <p class="text-gradient text-dark mb-2 text-sm">
                  
                </p>
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-bold"
                    >{{item.title}}</a
                  >
                </h5>
                <p class="text-justify" style="word-wrap:break-word;">
                    {{ contentV(item.introduction) }}
                </p>
                <router-link :to="{path:'/blog/sigin',query:{id: item.id}}"  class="text-info icon-move-right" style="position:relative;right: 0%"
                  >阅读更多
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

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
    </section>
</template>

<script>
import API from "../../plugins/axios/index.js";

export default {
  name:"AuthorBlog",
  data(){
    return{
        id: this.$route.query.id,
        pageInfo: {},
        historyList:[],
        user:{},
        content: `为您的狗寻找临时住所应该像租用 Airbnb 一样容易。这就是罗孚背后的想法
                    为您的狗寻找临时住所应该像租用 Airbnb 一样容易。这就是罗孚背后的想法`
    }
  },
  setup(){
    
    return{
      
    }
  },
  components:{

  },
  created(){
    let userinfo = JSON.parse(localStorage.getItem("userinfo"));
    this.user = userinfo;
    this.initData(1);
  },
  computed: {
    contentV(){
        return(val)=>{
            return val.length > 20 ? (val).toString().substr(0,150)+ '....': val
        }
    }
  },
  methods:{
    initData: function (pageNum) {
      API({
        url: "article/list?pageNum=" + pageNum,
        method: "post",
        data: { uid: this.id,type: 0 },
      }).then((res) => {
        console.log("收到的数据", res.data.data);
        this.historyList = res.data.data.list;
        console.log("收到的数据博客列表===>", this.blogList);
        this.pageInfo = res.data.data;
      });
    }
  }
}
</script>

<style>

</style>