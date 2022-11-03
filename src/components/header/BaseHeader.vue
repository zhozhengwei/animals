<template>
  <a-row style="height: 100%;background-color: #B3C8AC;">
    <!-- TODO logo -->
    <a-col :xs="2" :sm="4" :md="4" :lg="8" :xl="10">
      <router-link to="/"
        ><img :src="url" style="width: 150px; height: 100%"
      /></router-link>
    </a-col>
    <!-- TODO END -->
    <!-- TODO 菜单-->
    <a-col :xs="20" :sm="16" :md="16" :lg="8" :xl="10">
      <a-menu
        mode="horizontal"
        style="
          width: 534px;
          margin-top: 7%;
          background-color: #D3B880;
          color: black;
        "
      >
        <a-menu-item key="home" id="a-sub-menu-top">
          <router-link to="/home">Home</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>媒体</template>
            <a-menu-item key="setting:1">Option 1</a-menu-item>
            <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>参与其中</template>
            <a-menu-item key="setting:5">Option 1</a-menu-item>
            <a-menu-item key="setting:6">Option 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>保护项目</template>
            <a-menu-item key="setting:9">Option 1</a-menu-item>
            <a-menu-item key="setting:10">Option 2</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>动物百科</template>
            <a-menu-item key="setting:13">Option 1</a-menu-item>
            <a-menu-item key="setting:14">Option 2</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub5" id="a-sub-menu-last">
          <template #title>关于我们</template>
            <a-menu-item key="setting:17">Option 1</a-menu-item>
            <a-menu-item key="setting:18">Option 2</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-col>
    <!-- TODO END -->
    <!-- TODO 登录按钮 -->
    <a-col :xs="2" :sm="4" :md="4" :lg="8" :xl="4">
      <div v-if="props.toshow" style="margin-top: 15%;">
        <a-space>
          <a-button type="primary" @click="toLogin">Sign in</a-button>
          <a-button >Sign up</a-button>
        </a-space>
        
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent} from 'vue';

// export default {
//   // eslint-disable-next-line vue/multi-word-component-names
//   name: "BaseHeader",
//   data() {
//     return {
//       url: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/logo.png",
//     };
//   },
//   components: {},
// };


export default defineComponent({
    components: {
    },
    props: {
      toshow: Boolean
    },
    setup(props) {
      console.log(props.toshow);
      return{
        url: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/logo.png",
        props
      };
    },
    methods: {
      //登录跳转
      toLogin(){
        this.$router.push({path: "/login"})
      }
    }
});



</script>

<style>
/* .ant-menu-item a:hover{
  color: #EAB738;
} */
/* .ant-menu-item:hover {
  color: #386690 !important;
} */

.ant-menu {
  border-radius: 10px 10px 10px 10px !important;
  box-shadow: 2px 2px 9px #999999 !important;
}

.ant-menu-item {
  color: black !important;
}

.ant-menu-submenu > .ant-menu {
  background-color: #D3B880 !important;
}

.ant-menu-item-active {
  background-color: #fff !important;
  color: #666666 !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.ant-menu-item-selected {
  background-color: rgb(4, 77, 92) !important;
  color: white !important;
}

.ant-menu-submenu-active {
  background-color: #fff !important;
  color: #666666 !important;
}

.ant-menu-submenu-selected {
  background-color: rgb(4, 77, 92) !important;
  color: white !important;
}

#a-sub-menu-last {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#a-sub-menu-top {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.collection-create-form_last-form-item {
  margin-bottom: 0;
}

</style>