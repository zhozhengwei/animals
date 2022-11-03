<template>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="
              col-xl-4 col-lg-5 col-md-7
              d-flex
              flex-column
              mx-lg-0 mx-auto
            "
          >
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <h4 class="font-weight-bolder">登录</h4>
                <p class="mb-0">请输入您的邮箱和密码</p>
              </div>
              <div class="card-body">
                <form role="form">
                  <div class="mb-3">
                    <input
                      type="email"
                      v-model="AuthMemberDto.email"
                      ref="email"
                      :class="classinput"
                      @blur="rule"
                      name="email"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      v-model="AuthMemberDto.password"
                      ref="password"
                      :class="classinputPassword"
                      @blur="rulePassword"
                      name="password"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                  </div>
                  <!--测试密钥 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI -->
                  <div class="mb-3">
                    <VerificationCode></VerificationCode>
                  </div>
                  <div class="text-center">
                    <button
                      type="button"
                      id="btn1"
                      @click="login"
                      class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0"
                      ref="sign"
                      disabled
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center pt-0 px-lg-2 px-1">
                <p class="mb-4 text-sm mx-auto">
                  没有账号?
                  <router-link
                    to="/register"
                    class="text-info text-gradient font-weight-bold"
                    >Sign up</router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              col-6
              d-lg-flex d-none
              h-100
              my-auto
              pe-0
              position-absolute
              top-0
              end-0
              text-center
              justify-content-center
              flex-column
            "
          >
            <div
              class="
                position-relative
                bg-white
                h-100
                m-3
                px-7
                border-radius-lg
                d-flex
                flex-column
                justify-content-center
              "
              style="background-color: white"
            >
              <img
                style="width: 100%"
                src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/wallhaven-5w3rw1.jpg"
                alt="pattern-lines"
                class="position-absolute opacity-4 start-0"
              />
              <h4 class="mt-5 text-dark font-weight-bolder">
                "发现自然界的魅力"
              </h4>
              <p class="text-dark">
                欢迎你的加入！让我们的对自己的世界有所贡献
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import VerificationCode from "../components/VerificationCode.vue";
import { message } from "ant-design-vue";
import API from "../plugins/axios/index.js";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    VerificationCode,
  },
  data() {
    return {
      classinput: "form-control form-control-lg",
      classinputPassword: "form-control form-control-lg",
      // AuthMemberDto:{
      //   email: "",
      // password: ""
      // }
    };
  },
  setup() {
    const AuthMemberDto = reactive({
      email: "",
      password: "",
    });
    const msg = ref("");

    const login = function () {
      API({
        url: "member/login",
        method: "post",
        data: AuthMemberDto,
      }).then((res) => {
        console.log("登录成功响应数据：", res.data.data.user);
        localStorage.setItem("userinfo", JSON.stringify(res.data.data.user));
        const jwt = res.data.data.user.token;
        this.$store.commit("SET_TOKEN", jwt);
        this.$router.push("/");
        message.success({
          content: () => "登录成功",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        // location. reload();
      });
    };
    return {
      msg,
      AuthMemberDto,
      login,
    };
  },
  mounted() {},
  methods: {
    rule() {
      if (
        this.$refs.email.value === "" ||
        this.$refs.email.value === null ||
        this.$refs.email.value === undefined
      ) {
        this.classinput = ref("form-control is-invalid");
        this.msg = ref("邮箱不能为空！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.check();
      } else {
        this.classinput = "form-control is-valid";
        this.check();
      }
    },
    rulePassword() {
      if (
        this.$refs.password.value === "" ||
        this.$refs.password.value === null ||
        this.$refs.password.value === undefined
      ) {
        this.classinputPassword = "form-control is-invalid";
        this.msg = ref("密码不能为空！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.check();
      } else {
        this.classinputPassword = "form-control is-valid";
        this.check();
      }
    },
    check() {
      if (
        this.$refs.email.value != "" &&
        this.$refs.email.value != null &&
        this.$refs.email.value != undefined &&
        this.$refs.password.value != "" &&
        this.$refs.password.value != null &&
        this.$refs.password.value != undefined
      ) {
        console.log(this.$refs.sign.disabled);
        this.$refs.sign.disabled = ref(false);
        document.getElementById("btn1").disabled = false;
        console.log(this.$refs.sign.disabled);
      } else {
        document.getElementById("btn1").disabled = true;
      }
    },
  },
});
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.alert {
  position: fixed;
  width: 50%;
  margin-left: 25%;
  z-index: 2000;
}

.alert .alert-warning {
  display: none;
}
</style>