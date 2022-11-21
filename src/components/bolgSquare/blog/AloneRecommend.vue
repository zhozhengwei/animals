<template>
  <section class="py-7">
      <div class="container">
        <div class="row">
          <div class="col-9 text-center mx-auto">
            <h3 class="mb-5">博文推荐</h3>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-4" v-for="item in list" :key="item">
            <div class="card">
              <div
                class="card-header p-0 mx-3 mt-3 position-relative z-index-1"
              >
                <a href="javascript:;" class="d-block blur-shadow-image">
                  <img
                    :src="item.cover"
                    class="img-fluid border-radius-md"
                    alt="anastasia"
                  />
                </a>
              </div>
              <div class="card-body">
                <span
                  class="text-gradient text-primary text-uppercase text-xs font-weight-bold"
                  ></span
                >
                <router-link :to="{path:'/blog/sigin',query:{id:item.id}}">
                  <a
                @click="lookCount(item.id)"
                  class="card-title mt-3 h5 d-block text-darker"
                >
                {{item.title}}
                </a>
                </router-link>
                
                <p class="card-description mb-4" style="word-wrap:break-word;">
                  {{contentV(item.introduction)}}
                </p>
                <div class="author align-items-center">
                  <img
                    :src="item.avatar"
                    alt="..."
                    class="avatar shadow"
                  />
                  <div class="name ps-2">
                    <span>{{item.username}}</span>
                    <div class="stats">
                      <small>发布于：{{item.createTime}}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import API from "../../../plugins/axios/index.js"
export default {
  name:"AloneRecommend",
  data(){
    return{
      list:[]
    }
  },
  computed:{
    contentV(){
        return(val)=>{
            return val.length > 20 ? (val).toString().substr(0,190)+ '....': val
        }
    }
  },
  components:{

  },
  created(){
    API({
      url: "article/randomList",
      method: "get"
    }).then((res)=>{
      console.log("收到的数据", res.data.data);
      this.list = res.data.data;
    })
  },
  methods: {
      lookCount(id){
      API({
        url: "article/updateLookCount/"+id,
        method: "get"
      })
    }
  }
}
</script>

<style>

</style>