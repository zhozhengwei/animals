<template>
  <section class="py-5 mt-5">
      <div class="container">
        <div class="row">
            <div class="col-lg-6 mx-auto text-center pb-4">
                <h1 class="text-gradient text-success">参加活动</h1>
                <br/>
            <a href="javascript:;" class="btn btn-twitter mb-lg-0 mb-2 me-2">
              <i class="fab fa-weixin me-1"></i> 微信
            </a>
            <a href="javascript:;" class="btn btn-facebook mb-lg-0 mb-2 me-2">
              <i class="fab fa-telegram me-1"></i> 邮箱
            </a>
            <a href="javascript:;" class="btn btn-tumblr mb-lg-0 mb-2 me-2">
              <i class="fab fa-weibo me-1"></i> 微博
            </a>
            <a href="javascript:;" class="btn btn-dribbble mb-lg-0 mb-2">
              <i class="fab fa-dribbble me-1"></i> bilibili
            </a>
            <a-divider />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 ms-auto me-auto">
                <div class="d-flex justify-content-start mb-2">
                    <div class="p-2 me-6"><strong>{{activity.title}}</strong></div>
                    <div class="p-2">{{activity.address}}</div>
                </div>
                <div class="d-flex justify-content-start mb-3">
                    <strong class="p-2 me-6">说明</strong>
                    <div class="p-2">
                      {{activity.introduction}}
                    </div>
                </div>
                <div class="d-flex justify-content-start mb-2">
                    <div class="p-2 me-6"><strong>时间</strong></div>
                    <div class="p-2">{{activity.start}}~{{activity.end}}</div>
                </div>
                <a-divider />
            </div>
        </div>
        <!-- form表单 -->
        <div class="col-lg-8 mx-auto">
            <div class="card card-plain">
            <div class="card-body"  style="margin-right: 20%">
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
                <a-input class="form-control" v-model:value="formState.user.name" />
              </a-form-item>
              <a-form-item
                :name="['user', 'email']"
                label="Email"
                :rules="[{ type: 'email' }]"
              >
                <a-input class="form-control" v-model:value="formState.user.email" />
              </a-form-item>
              <a-form-item
                :name="['user', 'email']"
                label="确认Email"
                :rules="[{ type: 'email' }]"
              >
                <a-input class="form-control" v-model:value="formState.user.newEmail" />
              </a-form-item>
              <!-- 地址保留框 -->
              <a-form-item :name="['user', 'phone']" label="电话">
                <a-input class="form-control" v-model:value="formState.user.phone" />
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
  </section>

  <FooterDefault></FooterDefault>
</template>

<script>
import API from "../../plugins/axios/index.js";
import { defineComponent, reactive } from 'vue';
import { message } from "ant-design-vue";
import FooterDefault from '@/components/footerCopy/FooterDefault.vue';
export default defineComponent({
  data(){
    return{
      id: this.$route.query.id,
      activity:{}
    }
  },
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
                email: "",
                newEmail: "",
                phone: ""
            },
        });
        const onFinish = values => {
            console.log("Success:", values);
        };

        const attend = function(){
          if (
        formState.user.name === null &&
        formState.user.newEmail === null &&
        formState.user.email === null &&
        formState.user.phone === null 
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
        url:"participateInActivity/save",
        method: "post",
        data: {
          acid: this.id,
          name: formState.user.name,
          email: formState.user.email,
          newEmail: formState.user.newEmail,
          phone: formState.user.phone,
          uid: userinfo.uid
        }
      }).then((res)=>{
        console.log("成功请求返回数据===>", res.data.data);
        if (res.data.data.code === 0) {
            message.success({
              content: () => "提交申请成功",
              class: "custom-class",
              style: {
                marginTop: "9vh",
              },
            });
          }else{
            message.error({
          content: () => "请求错误！",
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
            attend,
            layout,
            validateMessages,
        };
    },
    components: { FooterDefault },
    created(){
      API({
      url: "activity/searchId/"+this.id,
      method: "get"
    }).then((res)=>{
      console.log("收到的数据", res.data.data);
      this.activity =  res.data.data;
    })
    }
});
</script>

<style>

</style>