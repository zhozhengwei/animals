<template>
  <section class="py-md-7 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-10 mx-auto text-center">
          <div class="mb-md-5">
            <h3>申请注册会员</h3>
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
            <div class="card-body" style="margin-right: 20%">
              <div class="row">
                <a-form
                  :model="formState"
                  v-bind="layout"
                  name="nest-messages"
                  :validate-messages="validateMessages"
                  @finish="onFinish"
                  id="contact-form"
                >
                  <a-form-item
                    :name="['user', 'name']"
                    label="姓名"
                    :rules="[{ required: true }]"
                  >
                    <a-input
                      class="form-control"
                      v-model:value="formState.user.name"
                    />
                  </a-form-item>
                  <a-form-item
                    :name="['user', 'email']"
                    label="Email"
                    :rules="[{ type: 'email' }]"
                  >
                    <a-input
                      class="form-control"
                      v-model:value="formState.user.email"
                    />
                  </a-form-item>
                  <!-- 地址保留框 -->

                  <a-form-item :name="['user', 'address']" label="地址">
                    <al-cascader
                      v-model:value="formState.user.address"
                      level="3"
                      data-type="string"
                    />
                  </a-form-item>
                  <a-form-item :name="['user', 'phone']" label="电话">
                    <a-input
                      class="form-control"
                      v-model:value="formState.user.phone"
                    />
                  </a-form-item>
                  <a-form-item
                    :name="['user', 'introduction']"
                    label="自我介绍"
                  >
                    <a-textarea
                      class="form-control"
                      v-model:value="formState.user.introduction"
                      placeholder="自我介绍一下为什么想要加入我们成为会员?"
                    />
                  </a-form-item>
                  <a-form-item
                    :wrapper-col="{ ...layout.wrapperCol, offset: 8 }"
                  >
                    <a-button type="primary"  html-type="submit">提交</a-button>
                  </a-form-item>
                </a-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { message } from "ant-design-vue";
import AlCascader from "@/components/from/al-cascader.vue";
import API from "../../plugins/axios/index.js";

export default defineComponent({
  setup() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
      },
      number: {
        range: "${label} must be between ${min} and ${max}",
      },
    };
    const formState = reactive({
      user: {
        name: "",
        address: "",
        email: "",
        phone: "",
        introduction: "",
      },
    });

    const onFinish = (values) => {
      console.log("Success:", values);
      console.log("Success:", formState.user.address);
      
      if (
        values.name === null &&
        values.address === null &&
        values.email === null &&
        values.phone === null &&
        values.introduction === null
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
          url: "applyMember/save",
          method: "post",
          data: {
            name: formState.user.name,
            email: formState.user.email,
            address: formState.user.address,
            phone: formState.user.phone,
            introduction: formState.user.introduction,
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
          }else {
          message.error({
            content: () => res.data.description,
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
        }
        });
    };

    const apply = function () {
      // if (
      //   this.formState.name === null &&
      //   this.formState.address === null &&
      //   this.formState.email === null &&
      //   this.formState.phone === null &&
      //   this.formState.introduction === null
      // ) {
      //   message.error({
      //     content: () => "所有参数不能为空！",
      //     class: "custom-class",
      //     style: {
      //       marginTop: "9vh",
      //     },
      //   });
       
      // }

      API({
          url: "applyMember/save",
          method: "post",
          data: {
            name: formState.user.name,
            email: formState.user.email,
            address: formState.user.address,
            phone: formState.user.phone,
            introduction: formState.user.introduction,
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
          }
        });
    };
    console.log("Success:", formState.user.address);
    return {
      formState,
      onFinish,
      layout,
      validateMessages,
      apply,
    };
  },
  components: {
    AlCascader,
  },
});
</script>

<style>
</style>