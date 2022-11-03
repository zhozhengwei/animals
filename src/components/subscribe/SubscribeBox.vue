<template>
  <section class="py-lg-7">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card overflow-hidden mb-5">
              <div class="row">
                <div class="col-lg-7">
                  <form class="p-3" id="contact-form">
                    <div class="card-header px-4 py-sm-5 py-3">
                      <h2>Say Hi!</h2>
                      <p class="lead">我们想和你谈谈</p>
                    </div>
                    <div class="card-body pt-1">
                      <div class="row">
                        <div class="col-md-12 pe-2 mb-3">
                          <input
                            class="form-control"
                            placeholder="你的名字"
                            type="text"
                            v-model="fromValue.name"
                          />
                        </div>
                        <div class="col-md-12 pe-2 mb-3">
                          <input
                            class="form-control"
                            placeholder="邮箱"
                            type="email"
                            v-model="fromValue.email"
                          />
                        </div>
                        <div class="col-md-12 pe-2 mb-3">
                          <div class="form-group mb-0">
                            <textarea
                              name="message"
                              v-model="fromValue.content"
                              class="form-control"
                              id="message"
                              rows="6"
                              placeholder="说出你想向我们反应的问题..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 text-end ms-auto">
                          <button
                            type="submit"
                            @click="toMessage"
                            class="btn btn-round bg-gradient-info mb-0"
                          >
                            发消息
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  class="col-lg-5 position-relative bg-cover px-0"
                  style="
                    background-image: url('../../assets/img/curved-images/curved5.jpg');
                  "
                >
                  <div
                    class="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none"
                  >
                    <img
                      src="../../assets/img/wave-1.svg"
                      class="h-100 ms-n12"
                      alt="vertical-wave"
                      style="position:relative;left: 250px;"
                    />
                  </div>
                  <div
                    class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center"
                  >
                    <div class="mask bg-gradient-info opacity-9"></div>
                    <div
                      class="p-5 ps-sm-8 position-relative text-start my-auto z-index-2"
                    >
                      <h3 class="text-white">联系信息</h3>
                      <p class="text-white opacity-8 mb-4">
                        填写表格，我们的团队将回复您。
                      </p>
                      <div class="d-flex p-2 text-white">
                        <div>
                          <i class="fas fa-phone text-sm"></i>
                        </div>
                        <div class="ps-3">
                          <span class="text-sm opacity-8"
                            >(+86) 173 7070 9160</span
                          >
                        </div>
                      </div>
                      <div class="d-flex p-2 text-white">
                        <div>
                          <i class="fas fa-envelope text-sm"></i>
                        </div>
                        <div class="ps-3">
                          <span class="text-sm opacity-8"
                            >zzw@17370709160@163.com</span
                          >
                        </div>
                      </div>
                      <div class="d-flex p-2 text-white">
                        <div>
                          <i class="fas fa-map-marker-alt text-sm"></i>
                        </div>
                        <div class="ps-3">
                          <span class="text-sm opacity-8"
                            >赣州</span
                          >
                        </div>
                      </div>
                      <div class="mt-4">
                        <button
                          type="button"
                          class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Log in with Facebook"
                        >
                          <i class="fa fa-weixin"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Log in with Twitter"
                        >
                          <i class="fa fa-weibo"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Log in with Dribbble"
                        >
                          <i class="fa fa-telegram"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-icon-only btn-link text-white btn-lg mb-0"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Log in with Instagram"
                        >
                          <i class="fa fa-github"></i>
                        </button>
                      </div>
                    </div>
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
import { ref } from "vue";
import { message } from "ant-design-vue";
import API from "../../plugins/axios/index.js";
export default {
  name:"SubscribeBox",
  data(){
    return{
      fromValue: {
        name: "",
        email: "",
        content: "",
      },
    }
  },
  setup(){
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    let showUser = ref(1);
    if (userinfo === null) {
      showUser = ref(0);
    }
    const toMessage = function () {
      if (
        this.fromValue.name === null &&
        this.fromValue.email === null &&
        this.fromValue.content === null
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
          status: showUser,
        },
      }).then((res) => {
        console.log("成功请求返回数据===>", res.data.data);
        if (res.data.data.code === 0) {
          message.success({
            content: () => "消息发送成功",
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
        } else {
          message.error({
            content: () => "消息发送失败！",
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
        }
      });
      
    };
    return{
        toMessage
    }
  },
  components:{

  }
}
</script>

<style>

</style>