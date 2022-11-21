<template>
  <div>
    <h3 class="text-center font-bold pt-4 pb-5 mb-5"><strong>贡献你的一份力量</strong></h3>

<!-- Stepper -->
<div class="steps-form-2">
    <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
        <div class="steps-step-2">
            <a href="#step-1" type="button" class="btn btn-amber btn-circle-2 waves-effect ml-0" data-toggle="tooltip" data-placement="top" title="Basic Information"><i class="fa fa-folder-open-o" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-2" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Personal Data"><i class="fa fa-pencil" aria-hidden="true"></i></a>
        </div>
      
        <div class="steps-step-2">
            <a href="#step-3" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect mr-0" data-toggle="tooltip" data-placement="top" title="Finish"><i class="fa fa-check" aria-hidden="true"></i></a>
        </div>
    </div>
</div>

<!-- First Step -->

    <div class="row setup-content-2" id="step-1">
        <div class="col-md-12">
          <h3 class="font-weight-bold pl-0 my-4"><strong>选择捐款数</strong></h3>
          <div class="form-group md-form">
            <button
          type="button"
          :class="buttonClass"
          @click="onClass(10)"
          value="10"
          style="width: 80px; height: 41px"
        >
          10￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(35)"
          value="35"
          style="width: 80px; height: 41px"
        >
          35￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(50)"
          value="10"
          style="width: 80px; height: 41px"
        >
          50￥
        </button>
        <br />
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(100)"
          value="100"
          style="width: 80px; height: 41px"
        >
          100￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onClass(200)"
          value="200"
          style="width: 80px; height: 41px"
        >
          200￥
        </button>
        <button
          type="button"
          :class="buttonClass"
          @click="onStarte(1)"
          value="1"
          style="width: 80px; height: 41px"
        >
          其它
        </button>
          </div>
            <div class="form-group md-form">
                <label for="yourEmail-2" data-error="wrong" data-success="right">其它</label>
                          <input
                          v-if="formValue.show == 1"
                    id="yourEmail-2"
                    type="text"
                    required="required"
                    class="form-control validate"
                    v-model="formValue.amount"
                    placeholder="你可以随意输入捐献金额"
                  />
            </div>
            <button class="btn btn-mdb-color btn-rounded nextBtn-2 float-right" type="button">下一步</button>
        </div>
    </div>

<!-- Second Step -->
    <div class="row setup-content-2" id="step-2">
        <div class="col-md-12">
            <h3 class="font-weight-bold pl-0 my-4"><strong>个人信息</strong></h3>
            <div class="form-group md-form">
                <label for="yourName-2" data-error="wrong" data-success="right">捐献人姓名</label>
                      <input
                      id="yourName-2"
                  class="form-control validate"
                  type="text"
                  required="required"
                  placeholder="姓名"
                  v-model="formValue.name"
                  ref="username"
                />
            </div>
            <div class="form-group md-form mt-3">
                <label for="secondName-2" data-error="wrong" data-success="right">捐献者邮箱</label>
                        <input
                        id="secondName-2"
                    class="form-control validate"
                    type="email"
                    required="required"
                    placeholder="邮箱"
                    v-model="formValue.email"
                    ref="mail"
                  />
            </div>
            <div class="form-group md-form">
                <label for="surname-2" data-error="wrong" data-success="right">捐献者电话</label>
                <input
                id="surname-2"
                required="required"
            class="form-control validate"
            type="text"
            placeholder="手机号"
            v-model="formValue.phone"
            ref="phone"
            @blur="rulePhone"
          />
            </div>
            <div class="form-group md-form">
                <label for="surname-3" data-error="wrong" data-success="right">组织</label>
                <input
                id="surname-3"
                required="required"
            class="form-control validate"
            type="text"
            placeholder="可以填写来自哪个组织，没有可以填写无"
            v-model="formValue.orginName"
            ref="orginName"
          />
            </div>
            <div class="form-group md-form mt-3">
                <label for="yourAddress-2" data-error="wrong" data-success="right">捐献者地址</label>
                <al-cascader id="yourAddress-2" required="required" class="md-textarea validate form-control" v-model="formValue.address" level="3" data-type="name" />
            </div>
            <button class="btn btn-mdb-color btn-rounded prevBtn-2 float-left" type="button">上一步</button>
            <button class="btn btn-mdb-color btn-rounded nextBtn-2 float-right" type="button">下一步</button>
        </div>
    </div>

    <!-- Third Step -->
    <div class="row setup-content-2" id="step-3">
       <div class="col-md-12">
            <h3 class="font-weight-bold pl-0 my-4"><strong>完成</strong></h3>
            <h2 class="text-center font-weight-bold my-4">支付提交</h2>
            <h4>需要你支付的金额：{{formValue.amount}}</h4>
        <!-- <button type="button" class="btn btn-slack btn-icon me-5" @click="weixin">
            <span class="btn-inner--icon"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/wenxin.png" style="width: 30px; height: 30px"/></span>
            <span class="btn-inner--text">微信支付</span>
        </button> -->
        <button type="button" class="btn btn-vimeo btn-icon" @click="bao">
          <span class="btn-inner--icon"><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1754/pay.png" style="width: 30px; height: 30px"/></span>
          <span class="btn-inner--text">支付宝</span>
        </button>
        <br/>
            <button class="btn btn-mdb-color btn-rounded prevBtn-2 float-left" type="button">上一步</button>
            <button class="btn btn-success btn-rounded float-right" @click="submit">提交</button>
        </div>
    </div>

  </div>




</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { message } from "ant-design-vue";
import AlCascader from "@/components/from/al-cascader.vue";
import API from "../../plugins/axios/index.js";
import $ from "jquery";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Steps",
  data() {
    return {
      // buttonClass: "btn btn-outline-dark"
      // formValue: {
      //   name: "",
      //   email: "",
      //   address: "",
      //   phone: "",
      //   amount: undefined,
      // },
    };
  },
  setup() {
    const current = ref(0);
    const formValue = reactive({name: "",
        email: "",
        address: "",
        phone: "",
        orginName: "",
        amount: undefined,
        show: undefined,
      type: 1})
    let buttonClass = "btn btn-outline-dark me-5";
    let showWeixin = ref(false);
    let showBao = ref(false);
    let zhifu = 0;
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    
    const onClass = (val) => {
      buttonClass ="btn btn-outline-dark active me-5";
      console.log("传递的参数的值为====>", val);
      formValue.amount = val;
      console.log("需要支付的金额是否刷新=========>",formValue.amount)
    };

    const onStarte = (val) => {
      console.log("传递的参数的值为====>", val);
      formValue.show = val;
    }

    const getProjectNum = () => {
      const projectTime = new Date() // 当前中国标准时间
      const Year = projectTime.getFullYear() // 获取当前年份 支持IE和火狐浏览器.
      const Month = projectTime.getMonth() + 1 // 获取中国区月份
      const Day = projectTime.getDate() // 获取几号
      var CurrentDate = Year
      if (Month >= 10) { // 判断月份和几号是否大于10或者小于10
        CurrentDate += Month
      } else {
        CurrentDate += '0' + Month
      }
      if (Day >= 10) {
        CurrentDate += Day
      } else {
        CurrentDate += '0' + Day
      }
      return CurrentDate
    }

    let traceNo = getProjectNum() + Math.floor(Math.random() * 10000);
    console.log("时间戳====>", getProjectNum());
    console.log("订单号====>", traceNo);
    const weixin = function() {
      showWeixin = ref(true);
    }


   
    const submit = function(){
      // if (
      //   formValue.name === null &&
      //   formValue.email === null &&
      //   formValue.address === null &&
      //   formValue.amount === undefined &&
      //   formValue.phone === null
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
        url: "donationRecord/save",
        method: "post",
        data: {
          name: formValue.name,
          email: formValue.email,
          phone: formValue.phone,
          address: formValue.address,
          orginName: formValue.orginName,
          amount: formValue.amount,
          type: 1,
          trade: traceNo,
          uid: userinfo == undefined ? undefined : userinfo.uid
        }
      }).then((res)=>{
        console.log("成功请求返回数据===>", res.data.data);
        if (res.data.code === 0) {
            message.success({
              content: () => "提交成功",
              class: "custom-class",
              style: {
                marginTop: "9vh",
              },
            });

            formValue.name = null;
            formValue.email = null;
            formValue.address = null;
            formValue.phone = null;
            zhifu = 1;
          }else{
            message.error({
            content: () => res.data.message,
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
          }
      })
    }

    const bao = function(){
      if(zhifu == 0){
        message.error({
            content: () => "请先提交数据后支付",
            class: "custom-class",
            style: {
              marginTop: "9vh",
            },
          });
      }
      if(zhifu == 1){
        window.open("http://47.103.34.147:10056/api/alipay/pay?subject=捐助爱心&traceNo="+traceNo+"&totalAmount="+formValue.amount,'_blank')
      }
      
    }


    return {
      message,
      current,
      buttonClass,
      onClass,
      showWeixin,
      showBao,
      weixin,
      bao,
      submit,
      formValue,
      onStarte
    };
  },
  components: {
    AlCascader,
  },
  methods:{
   
  }
});

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Steppers
$(document).ready(function () {
  var navListItems = $('div.setup-panel-2 div a'),
          allWells = $('.setup-content-2'),
          allNextBtn = $('.nextBtn-2'),
          allPrevBtn = $('.prevBtn-2');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-amber').addClass('btn-blue-grey');
          $item.addClass('btn-amber');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allPrevBtn.click(function(){
      var curStep = $(this).closest(".setup-content-2"),
          curStepBtn = curStep.attr("id"),
          prevStepSteps = $('div.setup-panel-2 div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

          prevStepSteps.removeAttr('disabled').trigger('click');
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content-2"),
          curStepBtn = curStep.attr("id"),
          nextStepSteps = $('div.setup-panel-2 div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i< curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepSteps.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel-2 div a.btn-amber').trigger('click');
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
/* +++++++++++原生的步骤条+++++++++++++ */
.steps-form-2 {
    display: table;
    width: 100%;
    position: relative; }
.steps-form-2 .steps-row-2 {
    display: table-row; }
.steps-form-2 .steps-row-2:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 2px;
    background-color: #7283a7; }
.steps-form-2 .steps-row-2 .steps-step-2 {
    display: table-cell;
    text-align: center;
    position: relative; }
.steps-form-2 .steps-row-2 .steps-step-2 p {
    margin-top: 0.5rem; }
.steps-form-2 .steps-row-2 .steps-step-2 button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important; }
.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 {
    width: 70px;
    height: 70px;
    border: 2px solid #59698D;
    background-color: white !important;
    color: #59698D !important;
    border-radius: 50%;
    padding: 22px 18px 15px 18px;
    margin-top: -22px; }
.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2:hover {
    border: 2px solid #4285F4;
    color: #4285F4 !important;
    background-color: white !important; }
.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fa {
    font-size: 1.7rem; }
</style>