<template>
  <section>
    
    <div class="container"  style="margin-top: 10%">
      <div class="row">
        <div
          class="
          col-lg-7 mx-auto d-flex justify-content-center flex-column
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
              src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/wallhaven-0pvrgj.jpg"
              alt="pattern-lines"
              class="position-absolute opacity-4 start-0"
            />
            <h4 class="mt-5 text-danger font-weight-bolder">
              "会员的注册"
            </h4>
            <p class="text-danger">需要您在“联系我们”提交一次申请由管理员通过后才能注册</p>
          </div>
        </div>
        <div
          class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"
        >
          <div class="card card-plain py-4">
            <div class="card-header pb-0 text-left">
              <h3 class="text-center">注册会员</h3>
              <form
                role="form"
                id="contact-form"
              >
                
                  
                    
                      <div class="form-group">
                        <input
                          :class="classInput.classusername"
                          type="text"
                          id="example-text-input"
                          placeholder="用户名"
                          v-model="fromValue.username"
                          ref="username"
                          @blur="ruleUsername"
                        />
                      </div>
                    
                  
                  
                    <div class="form-group">
                      <input
                      :class="classInput.classmail"
                        type="email"
                        id="example-email-input"
                        placeholder="邮箱"
                        v-model="fromValue.mail"
                        ref="mail"
                        @blur="ruleMail"
                      />
                    </div>
                  
                  
                    <div class="form-group">
                      <input
                      :class="classInput.classgroup"
                        type="tel"
                        id="example-tel-input"
                        placeholder="手机号"
                        v-model="fromValue.phone"
                        ref="phone"
                        @blur="rulePhone"
                      />
                    </div>
                  
                  
                    <div class="form-group">
                      <input
                      :class="classInput.classpassword"
                        type="password"
                        id="example-password-input"
                        placeholder="输入密码"
                        v-model="fromValue.password"
                        ref="password"
                        @blur="rulePassword"
                      />
                    </div>
                  
                  <div class="form-group">
                    <input
                    :class="classInput.classnewpassword"
                      type="password"
                      id="example-password-input"
                      placeholder="确认密码"
                      v-model="fromValue.newpassword"
                      ref="newpassword"
                      @blur="ruleNewPassword"
                    />
                  </div>

                    <div class="input-group mb-3">
                        <input type="text" style="height:40px" v-model="fromValue.code" :class="classInput.classcheck" ref="check" @blur="ruleCheck" placeholder="邮箱验证码" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                          <button v-if="buttonClass" class="btn btn-outline-secondary" id="send" @click="showCode" type="button">发送</button>
                          <button v-if="buttonClass1" class="btn btn-outline-secondary" id="send" @click="showCode" type="button" disabled>已发送</button>
                        </div>
                    </div>
                  <!-- todo 人机验证 -->
                  <!-- todo end -->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-check form-switch mb-4">
                  <label  class="form-check-label" for="flexSwitchCheckDefault">已经注册 <router-link to="/login" class="text-dark"><u>Sign in</u></router-link></label>
                </div>
                    </div>
                    <div class="col-md-12">
                      <button id="btn1" ref="sign" type="submit" @click="toRegister" class="btn bg-gradient-dark w-100" disabled>
                        注册
                      </button>
                    </div>
                  </div>
                
              </form>
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
import API from "../plugins/axios/index.js";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return{
      buttonClass: true,
      buttonClass1: false,
      classInput: {
        classusername:'form-control',
        classmail:'form-control',
        classpassword:'form-control',
        classnewpassword:'form-control',
        classgroup:'form-control',
        classcheck:'form-control'
      },
      fromValue: {
        username:'',
        password:'',
        newpassword:'',
        mail:'',
        phone:'',
        code: ''
      },
      msg:''
    }
  },
  setup() {
    const showCode =  function() {
      this.buttonClass = false;
      this.buttonClass1 = true;
      API({
        url: "auth/getEmailCode",
        method: "post",
        data: {email: this.fromValue.mail}
      }).then((res) => {
        console.log("响应数据：", res.data);
        message.success({
          content: () => "发送成功，只有5分钟时间",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
      })
    };
    const toRegister = function() {
      API({
        url: "member/register",
        method: "post",
        data: {
          username: this.fromValue.username, 
          password: this.fromValue.password, 
          newPassword: this.fromValue.newpassword,
          phone: this.fromValue.phone,
          code: this.fromValue.code,
          email: this.fromValue.mail
        }
      }).then((res)=>{
        console.log("成功响应数据：", res.data);
        
        message.success({
          content: () => "注册成功",
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.$router.push("/login");
      })
    };
    return {
      showCode,
      toRegister
    };
  },
  methods: {
    //todo 校验的规则的封装（统一方法文件）
    ruleUsername() {
      if (
        this.$refs.username.value === "" ||
        this.$refs.username.value === null ||
        this.$refs.username.value === undefined
      ) {
        this.classInput.classusername = ref("form-control is-invalid");
        this.msg = ref("用户名不能为空！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.check();
      } else {
        this.classInput.classusername = "form-control is-valid";
        this.check();
      }
    },
    ruleMail(){
      if (
        this.$refs.mail.value === "" ||
        this.$refs.mail.value === null ||
        this.$refs.mail.value === undefined
      ) {
        this.classInput.classmail = ref("form-control is-invalid");
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
        this.classInput.classmail = "form-control is-valid";
        this.check();
      }
    },
    rulePhone(){
      if (
        this.$refs.phone.value === "" ||
        this.$refs.phone.value === null ||
        this.$refs.phone.value === undefined
      ) {
        this.classInput.classgroup = ref("form-control is-invalid");
        this.msg = ref("手机号不能为空！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.check();
      } else {
        this.classInput.classgroup = "form-control is-valid";
        this.check();
      }
    },
    ruleCheck(){
      if (
        this.$refs.check.value === "" ||
        this.$refs.check.value === null ||
        this.$refs.check.value === undefined
      ) {
        this.classInput.classcheck = ref("form-control is-invalid");
        this.msg = ref("验证码不能为空！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.check();
      } else {
        this.classInput.classcheck = "form-control is-valid";
        this.check();
      }
    },
    rulePassword() {
      if (
        this.$refs.password.value === "" ||
        this.$refs.password.value === null ||
        this.$refs.password.value === undefined
      ) {
        this.classInput.classpassword = "form-control is-invalid";
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
        this.classInput.classpassword = "form-control is-valid";
        this.check();
      }
    },
    ruleNewPassword(){
      if (
        this.$refs.newpassword.value === "" ||
        this.$refs.newpassword.value === null ||
        this.$refs.newpassword.value === undefined
      ) {
        this.classInput.classnewpassword = "form-control is-invalid";
        this.msg = ref("确认密码不能为空！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        this.check();
      } else {
        if(this.$refs.newpassword.value != this.$refs.password.value){
          this.classInput.classnewpassword = "form-control is-invalid";
          this.msg = ref("确认密码与输入密码不一致！");
        message.error({
          content: () => this.msg,
          class: "custom-class",
          style: {
            marginTop: "9vh",
          },
        });
        }else{
          this.classInput.classnewpassword = "form-control is-valid";
        }
        
        this.check();
       
      }
    },
    check() {
      if (
        this.$data.fromValue.username != "" &&
        this.$data.fromValue.username != null &&
        this.$data.fromValue.username != undefined &&
        this.$data.fromValue.password != "" &&
        this.$data.fromValue.password != null &&
        this.$data.fromValue.password != undefined &&
        this.$data.fromValue.newpassword != "" &&
        this.$data.fromValue.newpassword != null &&
        this.$data.fromValue.newpassword != undefined &&
        this.$data.fromValue.password != "" &&
        this.$data.fromValue.password != null &&
        this.$data.fromValue.password != undefined &&
        this.$data.fromValue.mail != "" &&
        this.$data.fromValue.mail != null &&
        this.$data.fromValue.mail != undefined &&
        this.$data.fromValue.password != "" &&
        this.$data.fromValue.password != null &&
        this.$data.fromValue.password != undefined &&
        this.$data.fromValue.phone != "" &&
        this.$data.fromValue.phone != null &&
        this.$data.fromValue.phone != undefined &&
        this.$data.fromValue.code != "" &&
        this.$data.fromValue.code != null &&
        this.$data.fromValue.code != undefined
      ) {
        console.log(this.$refs.sign.disabled);
        this.$refs.sign.disabled = ref(false);
        document.getElementById("btn1").disabled = false;
        console.log(this.$refs.sign.disabled);
      } else {
        document.getElementById("btn1").disabled = true;
      }
    },

  }
});
</script>

<style>
  .alert{
            position: fixed;
            width: 40%;
            margin-left: 25%;
            z-index: 2000;
            
        }
</style>