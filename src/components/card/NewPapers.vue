<template>
   <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-6 justify-content-center d-flex flex-column">
            <div class="card rounded-3">
              <div class="d-block blur-shadow-image">
                <img :src="blogs.cover" style="width:100%;">
              </div>
            </div>
          </div>
          <div class="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
            <h3>
              <a href="javascript:;" class="text-darker">{{blogs.title}}</a>
            </h3>
            <p style="word-wrap:break-word;">
              {{ contentV(blogs.introduction) }}<router-link :to="{path: '/media/list/alone', query:{id}}" class="text-darker icon-move-right text-sm">阅读更多
                <i class="fas fa-arrow-right text-xs ms-1"></i>
              </router-link>
            </p>
            <p class="author">
              by <a href="javascript:;" class="ms-1"><span class="font-weight-bold text-info">{{blogs.username}}</span></a>, {{blogs.createTime}}
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="col-lg-12 mt-5">
        <div class="row flex-row-reverse">
          <div class="col-lg-6 justify-content-center d-flex flex-column">
            <div class="card rounded-3">
              <div class="blur-shadow-image">
                <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/couch.jpg" alt="img-blur-shadow-blog-2" class="img-fluid shadow rounded-3">
              </div>
            </div>
          </div>
          <div class="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
            <h6 class="category text-info mt-3">House</h6>
            <h3>
              <a href="javascript:;" class="text-darker">Warner Music Group buys concert discovery service Songkick</a>
            </h3>
            <p>
              Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major… <a href="javascript:;" class="text-darker icon-move-right text-sm">Read More
                <i class="fas fa-arrow-right text-xs ms-1"></i>
              </a>
            </p>
            <p class="author">
              by <a href="javascript:;" class="ms-1"><span class="font-weight-bold text-info">Millie Borough</span></a>, 10 days ago
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <br/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name:"NewPapers",
  props: {
    blog: Object,
  },
  data(props){
    console.log("父组件发往子组件的消息===>",props.blog)
    let blog = props.blog;
    console.log("检查组件中的信息===>",blog)
    return{
        id: blog.id,
        blogs: blog
    }
  },
  setup(){

  },
  computed: {
    contentV(){
        return(val)=>{
            return val.length > 20 ? (val).toString().substr(0,190)+ '....': val
        }
    }
  }
})
</script>

<style>

</style>