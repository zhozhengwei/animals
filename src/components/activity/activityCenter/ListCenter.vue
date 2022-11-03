<template>
  <div class="card card-blog card-plain">
    <div class="position-relative">
      <a class="d-block blur-shadow-image">
        <img :src="activitys.cover" style="width:100%;height: 100%;">
      </a>
    </div>
    <div class="card-body px-0 pt-4">
      <p class="text-gradient text-primary text-gradient font-weight-bold text-sm text-uppercase">{{activitys.end}}</p>
      <a href="javascript:;">
        <h4>
         {{activitys.title}}
        </h4>
      </a>
      <p style="word-wrap:break-word;">
        {{contentV(activitys.introduction)}}
      </p>
      <button type="button" value="1" @click="toSigin()" class="btn bg-gradient-info mt-3">前往查看</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"ListCenter",
  props: {
    activity: Object
  },
  data(props){
    let activityCenter = props.activity;
    return{
      id:activityCenter.id,
      activitys: activityCenter
    }
  },
  components:{

  },
  methods: {
    toSigin(){
      this.$router.push({
        path: "/activity/specific/sigin",
        query: {id:this.id}
      })
    }
  },
  computed: {
    contentV(){
        return(val)=>{
            return val.length > 20 ? (val).toString().substr(0,190)+ '....': val
        }
    }
  }
}
</script>

<style>

</style>