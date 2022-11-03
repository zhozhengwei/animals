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
                    <span class="h6">0</span>
                    <span>帖子</span>
                  </div>
                  <div class="col-auto">
                    <span class="h6">0</span>
                    <span>追随者</span>
                  </div>
                  <div class="col-auto">
                    <span class="h6">0</span>
                    <span>关注</span>
                  </div>
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
    <p :style="[pStyle, pStyle2]">用户信息</p>
    <p :style="pStyle">Personal</p>
    <a-row>
      <a-col :span="12">
        <description-item title="用户名" :content="userinfo.username" />
      </a-col>
      <a-col :span="12">
        <description-item title="邮箱" :content="userinfo.email" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="电话" :content="userinfo.phone" />
      </a-col>
      <a-col :span="12">
        <description-item  v-if="userinfo.gender === '1'" title="性别" content="男" />
        <description-item  v-if="userinfo.gender === '0'" title="性别" content="女" />
        <description-item  v-if="userinfo.gender === null" title="性别" content="未知" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item
          title="Message"
          content="Make things as simple as possible but no simpler."
        />
      </a-col>
    </a-row>
    <a-divider />
    <p :style="pStyle">头像修改</p>
    <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="http://127.0.0.1:7529/api/member/update"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="userinfo.avatar" :src="userinfo.avatar" style="width:130px;height:130px;" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
  </a-drawer>
</template>

<script>
// import descriptionItem from '../descriptionItem/index.vue';
import { defineComponent, reactive, ref  } from "vue";
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import API from "../../plugins/axios/index.js";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

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
      }
    }
  },
  setup(props){
    console.log("props",props);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const user = reactive(userinfo);
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
        getBase64(info.file.originFileObj, base64Url => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }

      if (info.file.status === 'error') {
        loading.value = false;
        message.error('上传失败');
      }
    };
    //筛选图片的大小
    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!isJpgOrPng) {
        message.error('只能上传jpg格式文件');
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error('图片不能超过2MB');
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
        }
      }).then((res)=>{
        console.log("=======更新 ==>",res.data.data);
        if (res.data.data.code === 0) {
            message.success({
              content: () => "消息发送成功",
              class: "custom-class",
              style: {
                marginTop: "9vh",
              },
            });
          }
      })
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
      updateUserXinxi
    }
  },
  components: {
    // descriptionItem,
    PlusOutlined,
    LoadingOutlined
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
  },
  updated(){
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
  }
})
</script>

<style>

</style>