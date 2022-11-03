<template>
   <div>
    <NavDefault :toshow="toshow"></NavDefault>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <label><h4>标题:</h4></label>
        <a-input
          class="form-control"
          v-model:value="title"
          placeholder="题目"
          style="width:50%"
        />
      </div>
      <br/>
      <div class="row">
        <label><h4>文章简单介绍:</h4></label>
        <a-textarea
          class="form-control"
          v-model:value="information"
          placeholder="不少于10-20个字"
          :rows="4"
          style="width:50%"
        />
      </div>
      <br/>
      <div class="row"  style="width:50%">
        <label><h4>封面上传:</h4></label>
        <a-upload
          v-model:file-list="fileList"
          action="http://127.0.0.1:7529/api/imageInformation/upload"
          list-type="picture"
          class="upload-list-inline"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            upload
          </a-button>
        </a-upload>
      </div>
      <br/>
      <div class="row">
        <label><h4>板块:</h4></label>
        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px"
          @focus="focus"
        >
          <a-select-option value="1">新闻</a-select-option>
          <a-select-option value="0">博客</a-select-option>
        </a-select>
      </div>
      <br/>
      <div>
        <label><h4>正文:</h4></label>
        <md-editor v-model="text" @onChange="onChange" @onUploadImg="onUploadImg" />
      </div>
      <br/>
      <div class="row">
        <label><h4>标签:</h4></label>
        <a-select
      v-model:value="value3"
      :options="options"
      mode="tags"
      :size="size"
      placeholder="标签"
      style="width: 40%"
    ></a-select>
      </div>
      <br/>
      <div class="row" style="margin-left;:50%">
        <button type="button" class="btn btn-info w-auto me-2" @click="shareText">发布</button>
      </div>
    </div>
  </section>
  <AgainFooter></AgainFooter>
   </div>
   
   
</template>

<script>
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent,ref } from 'vue'
import NavDefault from "@/components/nav/NavDefault.vue";
import AgainFooter from "@/components/AgainFooter.vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import API from "../../plugins/axios/index.js";

export default defineComponent({
  components: {
    NavDefault,
    AgainFooter,
    UploadOutlined,
    MdEditor
  },
  data(){
    return{
      toshow: true,
      title: "",
      information: "",
      text: "# 这是标题",
    }
  },
  setup(){
    // uid: '-1',
   // name: 'xxx.png',
     // status: 'done',
     // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      //thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    const fileList = ref([{
     
    }]);

    const userinfo = JSON.parse(localStorage.getItem("userinfo"));

    const focus = () => {
      console.log('focus');
    };

    // const handleChange = value => {
    //   console.log(`selected ${value}`);
    // };

    
    return{
      focus,
      // handleChange,
      fileList,
      value1: ref("1"),
      value3: ref(['环境保护', '动物科普']),
      options: [],
      userinfo
    }

  }
  ,
  methods: {
    onChange(val) {
      console.log("文本框里面====>onChange==>",val)
    },
    // onUploadImg(files) {
    //   console.log(Array.from(files));
    // },
    shareText(){
      //发送请求
      API({
        url: "article/save",
        method: "post",
        headers: {
          'token': localStorage.getItem("token")
        },
        data:{
          title: this.title,
          introduction: this.information,
          uid: this.userinfo.id,
          cover: this.fileList[0],
          content: this.text,
          type: this.value1,
          tagName: this.options
        }
      })
    },
    async onUploadImg(files, callback) {
      const res = await Promise.all(
        Array.from(files).map((file) => {
          return new Promise((rev, rej) => {
            const form = new FormData();
            form.append('file', file);

            // axios
            //   .post('/api/img/upload', form, {
            //     headers: {
            //       'Content-Type': 'multipart/form-data'
            //     }
            //   })
            //   .then((res) => rev(res))
            //   .catch((error) => rej(error));
            API({
              url: "imageInformation/upload",
              method: "post",
              headers:{
                'Content-Type': 'multipart/form-data'
              }
            }).then((res)=>rev(res))
          });
        })
      );

  callback(res.map((item) => item.data.data));
}
  }
})
 
</script>

<style>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>