<template>
  <div>
    <!-- 导航栏 -->
    <NavDefault :toshow="toshow"></NavDefault>
    <!-- 主体的外部链接 -->
    <!-- -------- START Features w/ 6 cols w/ company logos & title & text -------- -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2>外部链接</h2>
        <p>可以在国家各个机关网站浏览关于野生动物保护的相关信息，解释相关网站的使用方法（关于野生动物保护方面的）</p>
        <p>还有问题可以给我们发消息，我们的管理员将会在24h和您联系</p>
      </div>
      <div class="col-lg-6 text-end d-flex flex-column justify-content-center">
        <button type="button" class="btn bg-gradient-info mb-0 ms-lg-auto me-lg-0 me-auto mt-lg-0 mt-2">联系我们</button>
      </div>
    </div>
    <!-- 管理员信息更新于请求更新 -->
    <!-- http://www.gov.cn/gzdt/2012-12/14/content_2290434.htm -->
    <div class="row mt-5 mb-4">
      <div class="col-sm-6 col-lg-4 mt-lg-0 mt-4" v-for="item in linkList" :key="item">
        <img class="width-48-px mb-3" src="../../assets/img/logos/small-logos/logo-atlassian.svg">
        <h5>{{item.name}}</h5>
        <p class="text-sm">{{item.introduction}}</p>
        <a :href="item.linkUrl">{{item.name}}</a>
      </div>
    </div>
    <br/>
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
<!-- -------- END Features w/ 6 cols w/ company logos & title & text -------- -->
    <!-- 页脚 -->
    <AgainFooter></AgainFooter>
  </div>
</template>

<script>
import NavDefault from '@/components/nav/NavDefault.vue';
import AgainFooter from '@/components/AgainFooter.vue';
import API from "../../plugins/axios/index.js";

export default {
  name:"ExternalLinks",
  data(){
    return{
        toshow: true,
        linkList: [],
        pageInfo: {}
    }
  },
  components:{
    NavDefault,
    AgainFooter
},
created(){
  this.initData(1);
},
methods: {
  initData: function(pageNum) {
    API({
      url: "interlinkage/listAll/"+pageNum,
      method: "get"
    }).then((res)=>{
      console.log("收到的数据活动数据", res.data.data)
      this.linkList = res.data.data.list;
      this.pageInfo = res.data.data;
    })
  }
  }
}
</script>

<style>

</style>