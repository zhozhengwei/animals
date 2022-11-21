import { createStore } from "vuex"

const store = createStore({
  state(){ 
    return{
      token: '',
      animals: {},
      videoBilibili: {},
      videoSelf: {},
      imageinfor: {},
      bookinfor:{},
      publicinfor:{}
    }
  },
  getters: {
  },
  mutations: {
    SET_TOKEN: (state, tokenValue) => {
      console.log('store', tokenValue);
      //登录成功后，将获得jwt存储到应用的store和localStorage中。
      state.token = tokenValue;
      localStorage.setItem('token', tokenValue);
    },
    SET_ANI: (state, value)=>{
      console.log('animals==>',value);
      state.animals = value;
    },
    SET_VIDEOBILI: (state, value)=>{
      console.log("stateBilibili===>",value);
      state.videoBilibili = value;
    },
    SET_VIDEO: (state, value)=>{
      console.log("stateVideo===>",value);
      state.videoSelf = value;
    },
    SET_IMAGES: (state,value)=>{
      console.log("imageinfor===>",value);
      state.imageinfor = value;
    },
    SET_BOOK: (state, value)=>{
      console.log("bookinfor===>",value);
      state.bookinfor = value;
    },
    SET_PBLICATION: (state, value)=>{
      console.log("publicinfor===>",value);
      state.publicinfor = value;
    }
},
  modules: {
  }
});

export default store;
