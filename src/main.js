import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import store from "./store";
// import axios from 'axios';
import Antd from 'ant-design-vue';
import moment from 'moment';
import 'ant-design-vue/dist/antd.css';
// import commonAxios from './plugins/axios';
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css
import qs from 'qs'
//引入封装好的axios
import axios from './plugins/axios/index.js';


axios.defaults.baseURL = 'http://127.0.0.1:7529/api/'
// 导入打字机
import vuetyped from 'vue3typed'

//Core JS Files
import './assets/js/core/popper.min.js';
import './assets/js/core/bootstrap.min.js';
import './assets/js/plugins/perfect-scrollbar.min.js';
import './assets/js/plugins/parallax.min.js';

//Plugin for TypedJS, full documentation here: https://github.com/inorganik/CountUp.js
import './assets/js/plugins/typedjs.js';
import './assets/js/plugins/countup.min.js';
import './assets/js/plugins/choices.min.js';
import './assets/js/plugins/prism.min.js';
import './assets/js/plugins/highlight.min.js'
import './assets/js/plugins/rellax.min.js';
import './assets/js/plugins/tilt.min.js';
import './assets/js/plugins/choices.min.js';
import './assets/js/plugins/parallax.min.js';
import './assets/js/plugins/smooth-scroll.min.js'
import './assets/js/plugins/nouislider.min.js';
import './assets/js/plugins/glidejs.min.js';
import './assets/js/plugins/anime.min.js';
import './assets/js/plugins/chartjs.min.js';

import './assets/js/soft-design-system-pro.min.js?v=1.1.0';
//icons
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/icons/iconfont.css';
import "./assets/font-awesome/css/font-awesome.min.css";

//css
import './assets/css/soft-design-system.css?v=1.0.9';
import './assets/css/soft-design-system-pro.min.css';
import './assets/img/apple-icon.png';


const app = createApp(App);

app.use(vuetyped);
// app.use(commonAxios);
app.use(vue3videoPlay);
app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$moment = moment
app.config.globalProperties.$router = router;
app.config.globalProperties.$qs = qs;
