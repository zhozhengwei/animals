<template>
  <div class="container">
    <div class="row justify-space-between py-2">
      <div class="card card-plain card-blog mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card-image position-relative border-radius-lg">
              <div class="blur-shadow-image">
                <img
                  class="img border-radius-lg"
                  :src="blogs.cover"
                />
              </div>
              <div
                class="colored-shadow"
                style="
                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/macbook.jpg'),
                "
              ></div>
            </div>
          </div>
          <div class="col-md-7 my-auto ms-md-3 mt-md-auto mt-4">
            <h3 align="left">
                <a href="javascript:;"
                      >{{blogs.title}}</a
                    >
            </h3>
            <p class="text-justify" style="word-wrap:break-word;">
                {{contentV(blogs.introduction)}}<router-link :to="{path:'/blog/sigin',query:{id}}"> 阅读更多 </router-link>
            </p>
            <div class="author">
                    <a href="javascript:;" class="avatar avatar-sm rounded-circle me-2">
                        <img alt="Image placeholder" src="https://joeschmoe.io/api/v1/male/random">
                    </a>
                    <p class="text-gradient text-dark mb-4 text-sm" style="margin-top: 2%">
                       <a href="javascript:;" class="text-primary icon-move-right">{{blogs.username}}</a>  • {{blogs.createTime}}
                    </p>
                    
                    <message-filled style="margin-left: 6%;margin-top: 2.5%;" class="me-1"/>
                    <span style="margin-top: 4px">{{blogs.commentCount}}</span>

                    <eye-filled style="margin-left: 6%;margin-top: 2.5%;" class="me-1"/>
                    <span style="margin-top: 4px">{{blogs.lookCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageFilled,EyeFilled } from '@ant-design/icons-vue';

import { defineComponent } from 'vue';


export default defineComponent({
  props:{
    blog: Object
  },
    components: {
        MessageFilled,
        EyeFilled
    },
    data(props) {
      console.log("父组件发往子组件的消息===>",props.blog);
      let blog = props.blog;

      return{
        id: blog.id,
        blogs: blog
      }
    },
    methods: {
      tosigin() {
         this.$router.push("/blog/sigin");
      }
    },
  computed: {
    contentV(){
        return(val)=>{
            return val.length > 20 ? (val).toString().substr(0,190)+ '....': val
        }
    }
  }
  });
</script>

<style>
</style>