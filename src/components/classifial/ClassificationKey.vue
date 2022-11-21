<template>
  <header>
    <div
      class="page-header min-vh-50"
      style="
        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/airport.jpg')
      "
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-white text-center">
            <h2 class="text-white">野生动物科普</h2>
            <p class="lead">
              我们需要保护的野生动物究竟是什么？了解一下吧！
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="position-relative overflow-hidden"
      style="height: 36px; margin-top: -33px"
    >
      <div
        class="w-full absolute bottom-0 start-0 end-0"
        style="transform: scale(2); transform-origin: top center; color: #fff"
      >
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <div class="container">
      <div
        class="
          row
          bg-white
          shadow-lg
          mt-n6
          border-radius-md
          pb-4
          p-3
          mx-sm-0 mx-1
          position-relative
        "
      >
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">界</label>
          <select
            class="form-control"
            name="choices-button"
            id="choices-button"
            @change="setAid()"
            v-model="aid"
          >
            <option v-for="(item, index) in animalia" :key="index" :value="item.id">
              {{item.name}}
            </option>
          </select>
        </div>
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">门</label>
          <select
            class="form-control"
            name="choices-remove-button"
            id="choices-remove-button"
            @change="setCid()"
            v-model="cid"
          >
            <option v-for="(item, index) in chordata" :key="index" :value="item.id">
              {{item.name}}
            </option>
          </select>
        </div>
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">纲</label>
          <select
            class="form-control"
            name="choices-remove-button"
            id="choices-remove-button"
            @change="setMid()"
            v-model="mid"
          >
            <option v-for="(item, index) in mammalia" :key="index" :value="item.id">
              {{item.name}}
            </option>
          </select>
        </div>
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">目</label>
          <select
            class="form-control"
            name="choices-remove-button"
            id="choices-remove-button"
            @change="setArid()"
            v-model="arid"
          >
          <option v-for="(item, index) in artiodactyla" :key="index" :value="item.id">
            {{item.name}}
          </option>
          </select>
        </div>
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">科</label>
          <select
            class="form-control"
            name="choices-remove-button"
            id="choices-remove-button"
            @change="setBid()"
            v-model="bid"
          >
            <option v-for="(item, index) in bovidae" :key="index" :value="item.id">
              {{item.name}}
            </option>
          </select>
        </div>
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">属</label>
          <select
            class="form-control"
            name="choices-remove-button"
            id="choices-remove-button"
            v-model="bsid"
          >
            <option v-for="(item , index) in bos" :key="index" :value="item.id">
              {{item.name}}
            </option>
          </select>
        </div>
        <div class="col-lg-3 mt-lg-n2 mt-2">
          <label class="">&nbsp;</label>
          <button type="button" @click="searchAniaml(1)" class="btn bg-gradient-dark w-100 mb-0">
            确定
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import API from "../../plugins/axios/index.js";
export default {
  name: "ClassificationKey",
  data() {
    return {
      ant: false,
      animalia:[],
      aid: undefined,
      chordata: [],
      cid: undefined,
      mammalia: [],
      mid: undefined,
      artiodactyla:[],
      arid: undefined,
      bovidae: [],
      bid: undefined,
      bos: [],
      bsid: undefined
    };
  },
  components: {},
  methods: {
    showWite() {
      if (this.ant) {
        this.$refs.kick.background = "";
        this.$refs.kick.color = "";
        this.ant = false;
      } else {
        this.$refs.kick.background = "white";
        this.$refs.kick.color = "black";
        this.ant = true;
      }
    },
    setAid(){
      API({
        url: "chordata/listAll/"+this.aid,
        method: "get"
      }).then((res)=>{
        console.log("收到的门的数据", res.data.data);
        this.chordata = res.data.data;
      })
      this.searchAniaml(1)
    },
    setCid(){
      API({
        url: "mammalia/listAll/"+this.cid,
        method: "get"
      }).then((res)=>{
        console.log("收到的纲的数据", res.data.data);
        this.mammalia = res.data.data;
      })
      this.searchAniaml(1)
    },
    setMid(){
      API({
        url: "artiodactyla/listAll/"+this.mid,
        method: "get"
      }).then((res)=>{
        console.log("收到的目的数据", res.data.data);
        this.artiodactyla = res.data.data;
      })
      this.searchAniaml(1)
    },
    setArid(){
      API({
        url: "bovidae/listAll/"+this.arid,
        method: "get"
      }).then((res)=>{
        console.log("收到的科的数据", res.data.data);
        this.bovidae = res.data.data;
      })
      this.searchAniaml(1)
    },
    setBid(){
      API({
        url: "bos/listAll/"+this.bid,
        method: "get"
      }).then((res)=>{
        console.log("收到的属的数据", res.data.data);
        this.bos = res.data.data;
      })
      this.searchAniaml(1)
    },
    searchAniaml(pageNum){
      API({
        url: "biology/listQuery?pageNum="+pageNum,
        method: "post",
        data:{
          animaliaId: this.aid,
          chordataId: this.cid,
          mammaliaId: this.mid,
          artiodactylaId: this.arid,
          bovidaeId: this.bid,
          bosId: this.bsid
        }
      }).then((res)=>{
        console.log("收到的动物分页的数据", res.data.data);
        this.$store.commit("SET_ANI", res.data.data);
      })
    }
  },
  created(){
    API({
      url: "animalia/listAll",
      method: "get"
    }).then((res)=>{
      console.log("收到的界的数据", res.data.data);
      this.animalia = res.data.data;
    })
  }
};
</script>

<style>
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid white;
  padding: 4px;
  flex: none;
}
</style>