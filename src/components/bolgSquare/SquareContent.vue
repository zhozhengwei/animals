<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <!-- 第一段的博客表达 -->
          <section class="py-5">
            <ListBlog v-for="item in blogList" :key="item"  :blog="item"></ListBlog>
          </section>
          <!-- 过度的一个盒子 -->
          <!-- TODO 博客展现的形式（第二部分） -->
          
          <!-- todo end -->
          <!-- 分页的列表 -->
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
        <!-- 右侧的活动模块 -->
        <div class="col-lg-4 ml-auto">
          <div class="pt-1 pb-5 position-sticky top-1 mt-lg-8 mt-5">
             <!-- 创作的按钮 -->
             <div v-if="showUser">
              <h4 class="mt-5" align="left">创作</h4>
            <EditBox class="my-3"></EditBox>
            </div>
            <!-- 订阅的输入框 -->
            <h4 align="left" class="my-3">订阅</h4>
            <p class="text-justify">
              获得内容创作者第一时间出炉的内容创作
            </p>
            <div class="my-3">
              <input
                type="text"
                class="form-control mb-sm-0 mb-2"
                placeholder="Email"
              />
            </div>
            <button type="button" class="btn bg-gradient-primary" style="position:relative;right: 0">
                订阅
            </button>
            
            <!-- 活动的板块 -->
            <h4 class="mt-5" align="left">活动</h4>
            <router-link v-for="item in activity" :key="item" :to='{path: "/activity/specific/sigin",query: {id:item.id}}' >
              <div class="card justify-content-center mb-3">
                <div class="card-body p-3">
                  <h6 class="mb-0" align="left">{{item.title}}</h6>
                  <p class="mb-0 text-body" align="left">{{item.start}}</p>
                </div>
                <div class="position-absolute end-0 me-3">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </router-link>  
              

            <!-- 头条新闻 不同的形式的展示形式 -->
            <h4 class="mt-5" align="left">头条新闻</h4>
            <div class="card card-plain card-blog mt-4" v-for="item in host" :key="item">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="card-image position-relative border-radius-lg">
                    <div class="blur-shadow-image">
                      <img
                        class="img border-radius-lg"
                        :src="item.cover"
                        alt="curved11"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 my-sm-auto mt-3">
                  <h5 align="left">
                    <a href="javascript:;" class="text-justify font-weight-normal"
                      >{{item.title}}</a
                    >
                  </h5>
                </div>
              </div>
            </div>
            <!-- todo 底部的标签 -->
            <h4 class="mt-5 mb-4" align="left">标签</h4>
            
            <span class="badge badge-secondary me-3" v-for="item in tagList" :key="item">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {ref} from "vue";
import EditBox from '../card/EditBox.vue';
import ListBlog from '../card/ListBlog.vue';
import API from "../../plugins/axios/index.js";

export default {
  name:"SquareContent",
  data(){
    return{
      //分页数据
      pageInfo: {},
      blogList: [],
      articleList:[],
      host: [],
      tagList:[],
      activity:[]
    }
  },
  setup(){
    let showUser = ref(true);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    if(userinfo === null){
      showUser = ref(false)
    }
    return{
      showUser
    }
  },
  components:{
    EditBox,
    ListBlog
  },
  created(){
    this.initData(1);
    this.newData(1);
    API({
      url: "tag/list",
      method: "get"
    }).then((res)=>{
      console.log("收到的标签数据", res.data.data);
      this.tagList = res.data.data;
    })
    API({
      url: "activity/listPerson",
      method: "get"
    }).then((res)=>{
      console.log("收到的活动数据", res.data.data);
      this.activity = res.data.data;
    })
  },
  methods: {
    initData: function (pageNum) {
      API({
        url: "article/list?pageNum=" + pageNum,
        method: "post",
        data: { type: 2 },
      }).then((res) => {
        console.log("收到的数据博客数据", res.data.data);
        this.blogList = res.data.data.list;
        console.log("收到的数据博客列表===>", this.blogList);
        this.pageInfo = res.data.data;
      });
    },
    newData: function(pageNum){
      API({
        url: "article/list?pageNum=" + pageNum,
        method: "post",
        data: { type: 1 },
      }).then((res) => {
        console.log("收到的数据新闻数据", res.data.data);
        this.articleList = res.data.data.list;
        for(var i = 0; i<3; i++){
          this.host[i] = this.articleList[i];
        }
        console.log("收到的数据新闻列表===>", this.articleList);
        console.log("host===>", this.host);
        this.pageInfo = res.data.data;
      });
    }
  }
}
</script>

<style>

</style>