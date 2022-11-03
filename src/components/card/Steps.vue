<template>
  <div>
    <a-steps progress-dot :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <!-- {{ steps[current].content }} -->
      <div v-if="current == 1">
        <h4>选择捐款数</h4>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(value)"
          value="10"
          style="width: 80px; height: 41px"
        >
          10￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(value)"
          value="35"
          style="width: 80px; height: 41px"
        >
          35￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(value)"
          value="10"
          style="width: 80px; height: 41px"
        >
          50￥
        </button>
        <br />
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(value)"
          value="100"
          style="width: 80px; height: 41px"
        >
          100￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(value)"
          value="200"
          style="width: 80px; height: 41px"
        >
          200￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(value)"
          value="1"
          style="width: 80px; height: 41px"
        >
          其它
        </button>
        <br />
        <input
          v-if="showInPut"
          type="text"
          class="form-control"
          v-model="formValue.amount"
          placeholder="$:你可以随意输入捐献金额"
        />
      </div>

      <div v-if="current == 2">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            id="example-text-input"
            placeholder="姓名"
            v-model="formValue.name"
            ref="username"
          />
        </div>

        <div class="form-group">
          <input
            class="form-control"
            type="email"
            id="example-email-input"
            placeholder="邮箱"
            v-model="formValue.email"
            ref="mail"
          />
        </div>

        <div class="form-group">
          <!-- <input
                      class="form-control"
                        type="email"
                        id="example-email-input"
                        placeholder="邮箱"
                        v-model="formValue.email"
                        ref="mail"
                      /> -->
          <al-cascader v-model="formValue.address" level="2" data-type="all" />
        </div>

        <div class="form-group">
          <input
            class="form-control"
            type="tel"
            id="example-tel-input"
            placeholder="手机号"
            v-model="formValue.phone"
            ref="phone"
            @blur="rulePhone"
          />
        </div>
      </div>

      <!-- 支付模块 根据前面的值 -->
      <div v-if="current == 3">
        <h4>需要你支付的金额：{{formValue.amount}}</h4>
        <button type="button" class="btn btn-slack btn-icon" @click="weixin">
            <span class="btn-inner--icon"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/wenxin.png" style="width: 10px; height: 10px"/></span>
            <span class="btn-inner--text">微信支付</span>
        </button>

        <button type="button" class="btn btn-vimeo btn-icon" @click="bao">
          <span class="btn-inner--icon"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/pay.png" style="width: 10px; height: 10px"/></span>
          <span class="btn-inner--text">支付宝</span>
        </button>

        <div v-if="showWeixin">
          <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/weixinpay.png" style="width: 80px; height: 41px"/>
        </div>

        <div v-if="showBao">
          <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/baopay.jpg" style="width: 80px; height: 41px"/>
        </div>
        <div>
          <button type="button" class="btn btn-info w-auto me-2" @click="submit">提交</button>
        </div>
      </div>
    </div>
    <div class="steps-action">
      <a-button
        v-if="current < steps.length - 1"
        type="primary"
        @click="next"
        disabled
        >Next</a-button
      >
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev"
        >Previous</a-button
      >
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from "vue";
import { toRaw } from "@vue/reactivity";
import { message } from "ant-design-vue";
import AlCascader from "@/components/from/al-cascader.vue";
import API from "../../plugins/axios/index.js";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Steps",
  data() {
    return {
      // buttonClass: "btn btn-outline-dark"
      formValue: {
        name: "",
        email: "",
        address: "",
        phone: "",
        amount: undefined,
      },
    };
  },
  setup() {
    let { proxy } = getCurrentInstance();
    const current = ref(0);
    let buttonClass = ref("btn btn-outline-dark");
    let showInPut = ref(false);
    let showWeixin = ref(false);
    let showBao = ref(false);
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    console.log("proxy", proxy);
    console.log("proxytype", toRaw(proxy.buttonClass));
    console.log("proxy", proxy[0]);

    const onClass = (val) => {
      buttonClass = ref("btn btn-outline-dark active");
      console.log("传递的参数的值为====>", val);
      if (val === 1) {
        showInPut = ref(true);
      }
      this.formValue.amount = val;
      console.log("需要支付的金额是否刷新=========>",this.formValue.amount)
    };

    const weixin = function() {
      showWeixin = ref(true);
    }


    const bao = function(){
      showBao = ref(true);
    }

    const next = () => {
      current.value++;
    };

    const prev = () => {
      current.value--;
    };

    const submit = function(){
      if (
        this.formValue.name === null &&
        this.formValue.email === null &&
        this.formValue.address === null &&
        this.formValue.amount === undefined &&
        this.formValue.phone === null
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
        url: "",
        method: "post",
        data: {
          name: this.formValue.name,
          email: this.formValue.email,
          phone: this.formValue.phone,
          address: this.formValue.address,
          amount: this.formValue.amount,
          uid: userinfo.uid
        }
      }).then((res)=>{
        console.log("成功请求返回数据===>", res.data.data);
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
      message,
      current,
      buttonClass,
      steps: [
        {
          title: "First",
          content: `
        1
        
        `,
        },
        {
          title: "Second",
          content: "Second-content",
        },
        {
          title: "Last",
          content: "Last-content",
        },
      ],
      next,
      prev,
      onClass,
      showInPut,
      showWeixin,
      showBao,
      weixin,
      bao,
      submit
    };
  },
  components: {
    AlCascader,
  },
});
</script>

<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

[data-theme="dark"] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}
</style>