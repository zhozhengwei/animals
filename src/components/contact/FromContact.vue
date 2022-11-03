<template>
  <section class="py-md-7 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-10 mx-auto text-center">
          <div class="mb-md-5">
            <h3>联系我们</h3>
            <p>
              如有其他问题, 包括合作机会，请发送电子邮件至
              zzw17370709160@163.com 或使用我们的联系表中的联系方式.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card card-plain">
            
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="text-justify">您的姓名</label>
                      <div class="input-group mb-4">
                        <!-- <span class="input-group-text"
                            ><i class="ni ni-align-start-2"></i
                          ></span> -->
                        <input
                          class="form-control"
                          placeholder="姓名"
                          type="text"
                          v-model="fromValue.name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <div class="form-group">
                      <label>电子邮箱</label>
                      <div class="input-group mb-4">
                        <!-- <span class="input-group-text"
                            ><i class="ni ni-email-83"></i
                          ></span> -->
                        <input
                          class="form-control"
                          placeholder="邮箱"
                          v-model="fromValue.email"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-4 mt-md-0 mt-4">
                  <label>我们能为您提供什么帮助？</label>
                  <textarea
                    name="message"
                    class="form-control"
                    v-model="fromValue.content"
                    id="message"
                    rows="6"
                    placeholder="用至少30个字符描述您的问题"
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <button
                      @click="toMessage"
                      class="btn bg-gradient-info mt-4"
                    >
                      发消息
                    </button>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import { message } from "ant-design-vue";
import API from "../../plugins/axios/index.js";

export default defineComponent({
  name: "FromContact",
  data() {
    return {
      fromValue: {
        name: '',
        email: '',
        content: '',
      },
    };
  },
  setup() {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    let showUser = ref(1);
    if (userinfo === null) {
      showUser = ref(0);
    }
    return {
      showUser
    };
  },
  components: {},
  methods:{
    toMessage : function () {
      console.log("成功请求返回数据===>",this.fromValue );
      console.log("成功请求返回数据===>",this.fromValue.name );
      if (
        this.fromValue.name === undefined || this.fromValue.name === '' &&
        this.fromValue.email === undefined &&
        this.fromValue.content === undefined
      ) {
        message.error({
          content: () => "所有参数不能为空！",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
      }
      API({
        url: "message/save",
        method: "post",
        data: {
          name: this.fromValue.name,
          email: this.fromValue.email,
          content: this.fromValue.content,
          status: this.showUser,
        },
      }).then((res) => {
        console.log("成功请求返回数据===>", res.data.data);
        if (res.data.code === 0) {
          message.success({
            content: () => "消息发送成功",
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
        } else {
          message.error({
            content: () => res.data.description,
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
        }
      });
    }
  }
});
</script>

<style>
</style>