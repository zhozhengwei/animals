import { createStore } from "vuex"

const store = createStore({
  state:{ 
    token: '',
    animals: {}
  },
  getters: {
  },
  mutations: {
    SET_TOKEN: (state, tokenValue) => {
      console.log('store', tokenValue)
      //登录成功后，将获得jwt存储到应用的store和localStorage中。
      state.token = tokenValue
      localStorage.setItem('token', tokenValue)
  },
  SET_ANI: (state, value)=>{
    console.log('animals==>',value)
    state.animals = value
  }
},
  modules: {
  }
});

export default store;
