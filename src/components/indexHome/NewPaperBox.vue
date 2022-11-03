<template>
  <section class="pt-lg-7 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-8 order-2 order-md-2 order-lg-1">
            <div
              class="position-relative ms-lg-5 mb-0 mb-md-7 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75"
            >
              <div
                class="bg-gradient-success  w-100 h-100 border-radius-xl position-absolute d-lg-block d-none"
              ></div>
              <img
                :src="host.cover"
                class="w-100 border-radius-xl mt-6 ms-lg-5 position-relative z-index-5"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
            <div class="p-3 pt-0">
              <div
                class="icon icon-shape bg-gradient-success rounded-circle shadow text-left mb-4"
              >
                <i class="ni ni-building" style="margin-left: 15px"></i>
              </div>
              <h3 class="text-justify text-success mb-0">最新新闻</h3>
              <h4 class="mb-4 text-justify">
                <a
                  href="#"
                  target="blank"
                  rel="nofollow"
                  >{{host.title}}</a
                >
              </h4>
              <p class="text-justify" style="word-wrap:break-word;">
                {{ contentV(content) }}
              </p>
              <router-link
                to="/media/list"
                target="blank"
                rel="nofollow"
                class="text-dark icon-move-right"
                >阅读更多
                <i class="fa fa-long-arrow-right text-sm ms-1" aria-hidden="true"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { defineComponent, reactive  } from "vue";
import API from "../../plugins/axios/index.js";

export default defineComponent({
  name:"NewPaperBox",
  data(){
    return{
      article:[],
      host:{},
      content:`9月22日，记者从青海野生动物救护繁育中心了解到，经过半年的治疗和精心饲养管理，
                由该中心救护的老年雌性荒漠猫“黄老太”目前已基本恢复健康，定居西宁野生动物园。
                
                2022年3月8日，青海野生动物救护繁育中心接到湟源县森林公安电话，称在该县一处垃圾场救护了一只老年雌性荒漠猫，
                经检查其感染多种病毒，呼吸道和消化道感染严重，重度脱水营养不良。随后，救护中心专业技术人员对其进行了全面体检并实施救治。
                
                “我们针对其多种病毒感染和极度营养不良，制定了抗病毒及补充营养的治疗方案，经过前后20多天的治疗，
                ‘黄老太’病情基本被控制，进食良好，排便正常。”青海野生动物救护繁育中心副主任齐新章告诉记者。`
    }
  },
  setup(){
    return{
      
    }
  },
  computed: {
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
        url: "article/host",
        method: "get",
        data: {type: 1}
      }).then((res)=>{
        console.log("收到的数据::::",res.data.data);
        this.article = reactive(res.data.data);
        console.log("改变的数据======>",this.article);
        this.host = this.article[this.article.length-1];
        console.log("改变的数据======>",this.host);
        this.content = this.host.introduction;
      })
  }
})
</script>

<style>

</style>