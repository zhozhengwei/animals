<template>
  <section class="py-sm-7 py-5 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12 mx-auto">
            <div class="row py-lg-7 py-5">
              <div class="col-lg-3 col-md-5 position-relative my-auto">
                <img
                  class="img border-radius-lg max-width-200 w-100 position-relative z-index-2"
                  :src="userinfo.avatar"
                  alt="bruce"
                />
              </div>
              <div
                class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4"
              >
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                >
                  <h4 class="mb-0">{{userinfo.username}}</h4>
                  <div class="d-block">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-info text-nowrap mb-0"
                    >
                      关注
                    </button>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-auto">
                    <span class="h6">{{count}}</span>
                    <span>帖子</span>
                  </div>
                  <!-- <div class="col-auto">
                    <span class="h6">0</span>
                    <span>追随者</span>
                  </div>
                  <div class="col-auto">
                    <span class="h6">0</span>
                    <span>关注</span>
                  </div> -->
                </div>
                <p class="text-justify mb-0">
                    决定：如果你不能决定，答案是否定的。如果两条同样困难的道路，选择短期内更痛苦的一条（避免痛苦会造成平等的错觉）。
                    选择让你更加平静的道路。
                  <br /><a href="javascript:;" @click="showDrawer" class="text-info icon-move-right"
                    >更多关于我
                    <i class="fas fa-arrow-right text-sm ms-1"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  <a-drawer width="640" placement="right" :closable="false" :visible="visible" @close="onClose">
    <p :style="[pStyle, pStyle2]">个人资料</p>
    <p :style="pStyle">基本资料</p>
    <a-row class="mb-3">
      <a-col :span="12">
        <label>用户名</label>
        <a-input v-model:value="formValue.username" allow-clear/>
      </a-col>
    </a-row>
    <a-row class="mb-3">
      <a-col :span="12">
        <label>邮箱</label>
        <a-input v-model:value="formValue.email" allow-clear/>
      </a-col>
    </a-row>
    <a-row class="mb-3">
      <a-col :span="12">
        <label>手机号</label>
        <a-input v-model:value="formValue.mobile" allow-clear/>
      </a-col>
    </a-row>
    <a-row class="mb-3">
      <a-col :span="12">
        <label>性别</label>
        <br/>
        <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      @focus="focus"
      @change="handleChange"
    >
      <a-select-option value="1">男</a-select-option>
      <a-select-option value="0">女</a-select-option>
    </a-select>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-button type="primary" @click="updateUserXinxi">
        提交
      </a-button>
      </a-col>
      <a-col :span="12">
        <a-button style="margin-left:25px" @click="resetFrom">
        取消
      </a-button>
      </a-col>
    </a-row>
    <a-divider />
    <p :style="pStyle">头像修改</p>
    <a-row>
      <a-col :span="12">
        <a-upload
          name="file"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          :customRequest="selfUpload"
          :beforeUpload="beforeUpload"
          accept="image/jpeg,image/jpg,image/png"
        >
          <div class="avatar">
            <img :src="formValue.avatar ? formValue.avatar : require(imageUrl)"/>
            <a-icon class="uploading-icon" :class="avatarLoading&&'show'" type="loading"/>
            <div class="upload-icon">
              <img :src="formValue.avatar"/>
            </div>
          </div>
        </a-upload>
      </a-col>
      <a-col :span="12">
      </a-col>
    </a-row>
  </a-drawer>
</template>

<script>
// import descriptionItem from '../descriptionItem/index.vue';
import { defineComponent, reactive, ref  } from "vue";

import { message } from 'ant-design-vue';
import API from "../../plugins/axios/index.js";


export default defineComponent({
  props: {

  },
  data(){
    return{
      id: this.$route.query.id,
      userinfo: {},
      updateUser: {
        name: '',
        gender: '',
        email: '',
        phone: ''
      },
      count: 0
    }
  },
  setup(props){
    console.log("props",props);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const user = reactive(userinfo);
    const formValue = reactive({
      avatar: "",
      code: "",
      email: "",
      gender: "",
      id: 0,
      mobile: "",
      username: ""
    })

    formValue.id = user.uid;
    formValue.email = user.email;
    formValue.mobile = user.mobile;
    formValue.username = user.username;
    formValue.gender  = user.gender;
    formValue.avatar = user.avatar
    console.log("=======> user ====>", user);

    // ----------抽屉-------------
    const visible = ref(false);
    const pStyle = {
      fontSize: '16px',
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: '16px',
    };
    const pStyle2 = {
      marginBottom: '24px',
    };

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    //-----------end-----------

    //-----------图片上传-----------
    const fileList = ref([]);
    const loading = ref(false);
    const imageUrl = ref('https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/user-centerLogo.png');
    //回调函数
    const handleChange = info => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        // getBase64(info.file.originFileObj, base64Url => {
        //   formValue.avatar = base64Url;
        //   loading.value = false;
        // });
      }
    };
    //筛选图片的大小
    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error({
            content: () => '只能上传jpg格式文件',
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error({
            content: () => '图片不能超过2MB',
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
      }

      return isJpgOrPng && isLt2M;
    };

    //-----------end---------------


    const updateUserXinxi = function(){
      API({
        url: "member/update",
        method: "post",
        headers:{
          'token': localStorage.getItem("token")
        },
        data: {
          id: user.uid,
          code: formValue.code,
          email: formValue.email,
          gender: formValue.gender,
          mobile: formValue.mobile,
          username: formValue.username,
          avatar:formValue.avatar
        }
      }).then((res)=>{
        console.log("=======更新 ==>",res.data.data);
        if (res.data.code === 0) {
            message.success({
              content: () => "更新成功",
              class: "custom-class",
              style: {
                marginTop: "9vh",
              },
            });
            localStorage.removeItem("userinfo");
            localStorage.setItem("userinfo", JSON.stringify(res.data.data));
            formValue.email = res.data.data.email;
            formValue.avatar = res.data.data.avatar;
            formValue.mobile = res.data.data.mobile;
            formValue.gender = res.data.data.gender;
            formValue.username = res.data.data.username;
            location. reload();
            this.$router.go(0);
          }else {
          message.error({
            content: () => res.data.message,
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
        }
      })
    }

    const selfUpload = ({ action, file, onSuccess, onError, onProgress })=>{
      const formData = new FormData();
      formData.append('file', file);

      API({
        url: "imageInformation/upload",
        method: "post",
        headers:{
          'Content-Type': 'multipart/form-data'
        },
        data: formData,
        processData: false,
      }).then((res)=>{
        console.log("=======图片更新 ==>",res);
        if(res.data.code === 0){
            message.success({
          content: () => "头像上传成功",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        formValue.avatar = res.data.data;
        console.log("=======图片更新 ==>",res.data.data);
        }
      })
    }

    const resetFrom = function(){
      formValue.email = user.email;
    formValue.mobile = user.mobile;
    formValue.username = user.username;
    formValue.gender  = user.gender;
    formValue.avatar = user.avatar;
    }
    return {
      user,
      visible,
      pStyle,
      pStyle2,
      showDrawer,
      onClose,
      //其它
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
      //更新信息
      updateUserXinxi,
      formValue,
      value1: ref(formValue.gender),
      resetFrom,
      selfUpload
    }
  },
  components: {
    
  },
  created(){
    API({
      url: "member/info/"+this.id,
      method: "get",
      headers:{
        'token': localStorage.getItem('token')
      }
    }).then((res)=>{
      console.log("=======res.data.data ==>",res.data.data)
      this.userinfo = res.data.data;
    })
    API({
      url: "article/memberHistory/"+this.id,
      method: "get",
    }).then((res)=>{
      console.log("=======res.data.data ==>",res.data.data)
      this.count = res.data.data;
    })
  },
  updated(){
    // API({
    //   url: "member/info/"+this.id,
    //   method: "get",
    //   headers:{
    //     'token': localStorage.getItem('token')
    //   }
    // }).then((res)=>{
    //   console.log("=======res.data.data ==>",res.data.data)
    //   this.userinfo = res.data.data;
    // })
  }
})
</script>

<style>

</style>