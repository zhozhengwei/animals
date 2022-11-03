<template>
  <section class="py-md-7 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-10 mx-auto text-center">
          <div class="mb-md-5">
            <h3>申请成为志愿者</h3>
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
                <div class="row" >
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
                <a-input class="form-control" v-model:value="formState.user.name" />
              </a-form-item>
              <a-form-item
                :name="['user', 'email']"
                label="Email"
                :rules="[{ type: 'email' }]"
              >
                <a-input class="form-control" v-model:value="formState.user.email" />
              </a-form-item>
              <!-- 地址保留框 -->
              <!-- 将地址的输入改成联阶成省市区（具体到县） -->
              <a-form-item
                :name="['user', 'address']"
                label="地址"
                :rules="[{ required: true }]"
              >
              <al-cascader
              v-model:value="formState.user.address"
                      level="2"
                      data-type="all"
                    />
              </a-form-item>
              <a-form-item
                :name="['user', 'introduction']"
                label="自我介绍"
              >
                <a-textarea class="form-control" v-model:value="formState.user.introduction" placeholder="自我介绍一下为什么想要加入我们成为志愿者?"/>
              </a-form-item>
              <a-form-item
                :name="['user', 'introduction']"
                label="自身条件"
              >
                <a-textarea class="form-control" v-model:value="formState.user.skillIntroduction" placeholder="有什么技能和条件？为什么会对成为志愿者产生兴趣？"/>
              </a-form-item>
              <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                <a-button type="primary" html-type="submit">提交</a-button>
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
import { defineComponent, reactive } from 'vue';
import { message } from "ant-design-vue";
import AlCascader from "@/components/from/al-cascader.vue";
import API from "../../plugins/axios/index.js";

export default defineComponent({
  setup() {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    const formState = reactive({
      user: {
        name: '',
        address: '',
        email: '',
        introduction: '',
        skillIntroduction: ''
      },
    });

    const onFinish = values => {
      console.log('Success:', values);
      if (
        formState.user.name === null &&
        formState.user.address === null &&
        formState.user.email === null &&
        formState.user.introduction === null &&
        formState.user.skillIntroduction === null
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
        url:"applyVolunteer/save",
        method: "post",
        data: {
          name: formState.user.name,
          email: formState.user.email,
          address: formState.user.address,
          introduction: formState.user.skillIntroduction,
          uid: userinfo.uid
        }
      }).then((res)=>{
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
      })
    };
    //点击事件保险起见测试的时候可以对比
    const volunteerApply = function() {
      if (
        formState.name === null &&
        formState.address === null &&
        formState.email === null &&
        formState.phone === null &&
        formState.introduction === null &&
        formState.skillIntroduction === null
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
        url:"applyVolunteer/save",
        method: "post",
        data: {
          name: formState.name,
          email: formState.email,
          address: formState.address,
          introduction: formState.skillIntroduction,
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
      formState,
      onFinish,
      layout,
      validateMessages,
      volunteerApply
    };
  },
  components:{
    AlCascader
  }

});
</script>

<style>

</style>